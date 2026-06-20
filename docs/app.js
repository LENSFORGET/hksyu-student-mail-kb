const state = { events: [], selectedId: null, topic: "all", forecastMode: false };
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));

async function loadEvents() {
  const res = await fetch("./data/events.public.jsonl");
  const text = await res.text();
  state.events = text.trim().split(/\n+/).filter(Boolean).map((line) => JSON.parse(line));
  state.forecastMode = new URLSearchParams(window.location.search).get("view") === "forecast" || window.location.hash === "#forecast";
  buildFilters();
  render();
}

function unique(values) {
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b), "zh-Hans"));
}

function optionList(values, allLabel) {
  return [`<option value="all">${allLabel}</option>`].concat(values.map((v) => `<option value="${esc(v)}">${esc(v)}</option>`)).join("");
}

function addOneMonth(date) {
  const next = new Date(date);
  const originalDay = next.getDate();
  next.setMonth(next.getMonth() + 1);
  if (next.getDate() < originalDay) next.setDate(0);
  return next;
}

function formatDate(date) {
  return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(2, "0")}月${String(date.getDate()).padStart(2, "0")}日`;
}

function forecastWindow() {
  const start = new Date();
  start.setHours(0, 0, 0, 0);
  const end = addOneMonth(start);
  return { start, end };
}

function extractLikelyDays(event) {
  const timing = String(event.common_timing || "");
  const days = new Set();
  const commonMatch = timing.match(/常[見见]日[：:]\s*([0-9,，、\s]+)/);
  if (commonMatch) {
    for (const raw of commonMatch[1].match(/\d{1,2}/g) || []) {
      const day = Number(raw);
      if (day >= 1 && day <= 31) days.add(day);
    }
  }
  const westernDate = timing.match(/\b(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Sept|Oct|Nov|Dec)\b/i);
  if (westernDate) {
    const day = Number(westernDate[1]);
    if (day >= 1 && day <= 31) days.add(day);
  }
  const zhDate = timing.match(/(?:\d{1,2}月)?\s*(\d{1,2})[日号號]/);
  if (zhDate) {
    const day = Number(zhDate[1]);
    if (day >= 1 && day <= 31) days.add(day);
  }
  return Array.from(days).sort((a, b) => a - b);
}

function eventMatchesForecast(event) {
  const { start, end } = forecastWindow();
  const startMonth = start.getMonth() + 1;
  const endMonth = end.getMonth() + 1;
  const startDay = start.getDate();
  const endDay = end.getDate();
  const days = extractLikelyDays(event);
  for (const month of event.months || []) {
    if (month !== startMonth && month !== endMonth) continue;
    if (!days.length) return true;
    if (startMonth === endMonth && days.some((day) => day >= startDay && day <= endDay)) return true;
    if (startMonth !== endMonth && month === startMonth && days.some((day) => day >= startDay)) return true;
    if (startMonth !== endMonth && month === endMonth && days.some((day) => day <= endDay)) return true;
  }
  return false;
}

function topicFor(event) {
  const blob = `${event.title} ${event.department} ${event.category}`.toLowerCase();
  if (blob.includes("registry") || blob.includes("教务") || blob.includes("註冊")) return "Registry";
  if (blob.includes("career") || blob.includes("实习") || blob.includes("實習")) return "Career";
  if (blob.includes("moodle") || blob.includes("websims") || blob.includes("csc")) return "Moodle/WEBSIMS";
  if (blob.includes("osa") || blob.includes("学生事务") || blob.includes("學生事務")) return "OSA";
  if (blob.includes("宿舍") || blob.includes("hall")) return "Housing";
  return "General";
}

function buildFilters() {
  $("yearFilter").innerHTML = optionList(unique(state.events.flatMap((e) => {
    const range = String(e.year_range || "");
    const match = range.match(/^(\d{4})-(\d{4})$/);
    if (!match) return [];
    const start = Number(match[1]);
    const end = Number(match[2]);
    const years = [];
    for (let y = start; y <= end; y += 1) years.push(String(y));
    return years;
  })), "全部年份");
  $("monthFilter").innerHTML = optionList(unique(state.events.flatMap((e) => e.months.map((m) => `${String(m).padStart(2, "0")}月`))), "全部月份");
  $("categoryFilter").innerHTML = optionList(unique(state.events.map((e) => e.category)), "全部类别");
  $("departmentFilter").innerHTML = optionList(unique(state.events.map((e) => e.department)), "全部部门");
  const topics = ["all"].concat(unique(state.events.map(topicFor)));
  $("topicList").innerHTML = topics.map((t) => `<button class="folderButton ${t === "all" ? "isActive" : ""}" data-topic="${esc(t)}">${t === "all" ? "全部主题" : esc(t)}</button>`).join("");
  $("topicList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-topic]");
    if (!button) return;
    state.topic = button.dataset.topic;
    document.querySelectorAll(".folderButton").forEach((node) => node.classList.toggle("isActive", node === button));
    render();
  });
  ["searchInput", "yearFilter", "monthFilter", "categoryFilter", "departmentFilter"].forEach((id) => $(id).addEventListener("input", render));
  $("forecastBtn").addEventListener("click", () => {
    state.forecastMode = !state.forecastMode;
    state.selectedId = null;
    if (state.forecastMode) history.replaceState(null, "", "?view=forecast");
    else history.replaceState(null, "", window.location.pathname);
    $("forecastBtn").classList.toggle("isActive", state.forecastMode);
    render();
  });
  $("forecastBtn").classList.toggle("isActive", state.forecastMode);
}

function filteredEvents() {
  const q = $("searchInput").value.trim().toLowerCase();
  const year = $("yearFilter").value;
  const month = $("monthFilter").value;
  const category = $("categoryFilter").value;
  const department = $("departmentFilter").value;
  return state.events.filter((event) => {
    if (state.forecastMode && !eventMatchesForecast(event)) return false;
    if (year !== "all") {
      const range = String(event.year_range || "");
      const match = range.match(/^(\d{4})-(\d{4})$/);
      if (!match) return false;
      const start = Number(match[1]);
      const end = Number(match[2]);
      const selectedYear = Number(year);
      if (selectedYear < start || selectedYear > end) return false;
    }
    if (month !== "all" && !event.months.map((m) => `${String(m).padStart(2, "0")}月`).includes(month)) return false;
    if (category !== "all" && event.category !== category) return false;
    if (department !== "all" && event.department !== department) return false;
    if (state.topic !== "all" && topicFor(event) !== state.topic) return false;
    if (q) {
      const blob = `${event.title} ${event.department} ${event.category} ${event.action_type} ${event.summary_human}`.toLowerCase();
      if (!blob.includes(q)) return false;
    }
    return true;
  });
}

function render() {
  const events = filteredEvents();
  if (state.forecastMode) {
    const { start, end } = forecastWindow();
    $("resultMeta").textContent = `${events.length} cards · ${formatDate(start)} 至 ${formatDate(end)} 可能相关`;
    $("forecastHint").textContent = `正在显示 ${formatDate(start)} 至 ${formatDate(end)} 之间可能收到或需要留意的事项。`;
  } else {
    $("resultMeta").textContent = `${events.length} cards · low-risk public summaries`;
    $("forecastHint").textContent = "按今天日期推算接下来一个月可能遇到的 HKSYU 事项。";
  }
  if (!state.selectedId && events[0]) state.selectedId = events[0].event_id;
  $("cards").innerHTML = events.slice(0, 300).map((event) => `
    <button class="card ${event.event_id === state.selectedId ? "isSelected" : ""}" data-id="${esc(event.event_id)}">
      <h3>${esc(event.title)}</h3>
      <p>${esc(event.department)} · ${esc(event.common_timing)}</p>
      <div class="pillRow"><span class="pill">${esc(event.category)}</span><span class="pill">${esc(event.action_type)}</span></div>
    </button>
  `).join("");
  $("cards").onclick = (event) => {
    const card = event.target.closest(".card[data-id]");
    if (!card) return;
    state.selectedId = card.dataset.id;
    render();
  };
  renderReading(events.find((event) => event.event_id === state.selectedId) || events[0]);
}

function renderReading(event) {
  if (!event) {
    $("readingPane").innerHTML = `<div class="emptyState"><h2>没有匹配结果</h2><p>调整左侧筛选条件。</p></div>`;
    return;
  }
  const links = event.public_links.length
    ? `<div class="links">${event.public_links.map((u) => `<a href="${esc(u)}" target="_blank" rel="noreferrer">${esc(u)}</a>`).join("")}</div>`
    : "无公开学校链接";
  $("readingPane").innerHTML = `
    <h2>${esc(event.title)}</h2>
    <p class="summary">${esc(event.summary_human)}</p>
    <dl class="detailGrid">
      <dt>月份</dt><dd>${event.months.map((m) => `${String(m).padStart(2, "0")}月`).join(", ")}</dd>
      <dt>年份范围</dt><dd>${esc(event.year_range)}</dd>
      <dt>类别</dt><dd>${esc(event.category)}</dd>
      <dt>部门</dt><dd>${esc(event.department)}</dd>
      <dt>行动类型</dt><dd>${esc(event.action_type)}</dd>
      <dt>常见时间</dt><dd>${esc(event.common_timing)}</dd>
      <dt>来源数量</dt><dd>${esc(event.source_count)}</dd>
      <dt>置信度</dt><dd>${esc(event.confidence)}</dd>
      <dt>Markdown</dt><dd><a class="markdownLink" href="../${esc(event.markdown_path)}">${esc(event.markdown_path)}</a></dd>
      <dt>公开来源</dt><dd>${links}</dd>
    </dl>
    <p class="meta">本卡片为公开低风险摘要。请以 HKSYU 当年官方通知为准。</p>
  `;
}

loadEvents().catch((err) => {
  $("resultMeta").textContent = "Failed to load event data";
  $("cards").innerHTML = `<p class="meta">${esc(err.message)}</p>`;
});
