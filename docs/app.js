const LANGS = ["zh-Hans", "zh-Hant", "en"];
const EN_MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const I18N = {
  "zh-Hans": {
    pageTitle: "HKSYU 邮件知识库",
    navAria: "导航",
    languageAria: "语言",
    topicAria: "主题",
    listAria: "事件卡列表",
    readingAria: "阅读窗格",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "语言",
    searchLabel: "搜索",
    searchPlaceholder: "Registry, Moodle, Career...",
    yearLabel: "年份",
    monthLabel: "月份",
    categoryLabel: "类别",
    departmentLabel: "部门",
    forecastButton: "未来一个月",
    forecastHintDefault: "按今天日期推算接下来一个月可能遇到的 HKSYU 事项。",
    forecastHintActive: "正在显示 {start} 至 {end} 之间可能收到或需要留意的事项。",
    cardsTitle: "事件卡",
    loadingText: "Loading...",
    emptyTitle: "选择一张事件卡",
    emptyText: "左侧筛选，中间选择，右侧阅读。公开版只展示匿名化后的知识摘要。",
    allYears: "全部年份",
    allMonths: "全部月份",
    allCategories: "全部类别",
    allDepartments: "全部部门",
    allTopics: "全部主题",
    resultMetaNormal: "{count} 张卡片 · 低风险公开摘要",
    resultMetaForecast: "{count} 张卡片 · {start} 至 {end} 可能相关",
    noResultsTitle: "没有匹配结果",
    noResultsText: "调整左侧筛选条件。",
    months: "月份",
    yearRange: "年份范围",
    category: "类别",
    department: "部门",
    actionType: "行动类型",
    commonTiming: "常见时间",
    sourceCount: "来源数量",
    confidence: "置信度",
    markdown: "Markdown",
    publicSources: "公开来源",
    noPublicLinks: "无公开学校链接",
    cardMeta: "本卡片为公开低风险摘要。请以 HKSYU 当年官方通知为准。",
    loadError: "Failed to load event data",
    topicGeneral: "一般事项",
    topicCareer: "Career Services",
    topicHousing: "住宿",
    topicOsa: "OSA",
    topicRegistry: "Registry",
    topicSystems: "Moodle/WEBSIMS"
  },
  "zh-Hant": {
    pageTitle: "HKSYU 郵件知識庫",
    navAria: "導覽",
    languageAria: "語言",
    topicAria: "主題",
    listAria: "事件卡列表",
    readingAria: "閱讀窗格",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "語言",
    searchLabel: "搜尋",
    searchPlaceholder: "Registry, Moodle, Career...",
    yearLabel: "年份",
    monthLabel: "月份",
    categoryLabel: "類別",
    departmentLabel: "部門",
    forecastButton: "未來一個月",
    forecastHintDefault: "按今天日期推算接下來一個月可能遇到的 HKSYU 事項。",
    forecastHintActive: "正在顯示 {start} 至 {end} 之間可能收到或需要留意的事項。",
    cardsTitle: "事件卡",
    loadingText: "Loading...",
    emptyTitle: "選擇一張事件卡",
    emptyText: "左側篩選，中間選擇，右側閱讀。公開版只展示匿名化後的知識摘要。",
    allYears: "全部年份",
    allMonths: "全部月份",
    allCategories: "全部類別",
    allDepartments: "全部部門",
    allTopics: "全部主題",
    resultMetaNormal: "{count} 張卡片 · 低風險公開摘要",
    resultMetaForecast: "{count} 張卡片 · {start} 至 {end} 可能相關",
    noResultsTitle: "沒有匹配結果",
    noResultsText: "調整左側篩選條件。",
    months: "月份",
    yearRange: "年份範圍",
    category: "類別",
    department: "部門",
    actionType: "行動類型",
    commonTiming: "常見時間",
    sourceCount: "來源數量",
    confidence: "置信度",
    markdown: "Markdown",
    publicSources: "公開來源",
    noPublicLinks: "無公開學校連結",
    cardMeta: "本卡片為公開低風險摘要。請以 HKSYU 當年官方通知為準。",
    loadError: "Failed to load event data",
    topicGeneral: "一般事項",
    topicCareer: "Career Services",
    topicHousing: "住宿",
    topicOsa: "OSA",
    topicRegistry: "Registry",
    topicSystems: "Moodle/WEBSIMS"
  },
  en: {
    pageTitle: "HKSYU Mail Knowledge Base",
    navAria: "Navigation",
    languageAria: "Language",
    topicAria: "Topics",
    listAria: "Event card list",
    readingAria: "Reading pane",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "Language",
    searchLabel: "Search",
    searchPlaceholder: "Registry, Moodle, Career...",
    yearLabel: "Year",
    monthLabel: "Month",
    categoryLabel: "Category",
    departmentLabel: "Department",
    forecastButton: "Next month",
    forecastHintDefault: "Estimate HKSYU notices and tasks likely to matter in the next month.",
    forecastHintActive: "Showing items likely to matter from {start} to {end}.",
    cardsTitle: "Event cards",
    loadingText: "Loading...",
    emptyTitle: "Select an event card",
    emptyText: "Filter on the left, choose a card in the middle, and read the anonymized knowledge summary on the right.",
    allYears: "All years",
    allMonths: "All months",
    allCategories: "All categories",
    allDepartments: "All departments",
    allTopics: "All topics",
    resultMetaNormal: "{count} cards · low-risk public summaries",
    resultMetaForecast: "{count} cards · likely relevant from {start} to {end}",
    noResultsTitle: "No matching results",
    noResultsText: "Adjust the filters on the left.",
    months: "Months",
    yearRange: "Year range",
    category: "Category",
    department: "Department",
    actionType: "Action type",
    commonTiming: "Common timing",
    sourceCount: "Source count",
    confidence: "Confidence",
    markdown: "Markdown",
    publicSources: "Public sources",
    noPublicLinks: "No public school links",
    cardMeta: "This is a public low-risk summary. Always defer to the official HKSYU notice for the relevant year.",
    loadError: "Failed to load event data",
    topicGeneral: "General",
    topicCareer: "Career Services",
    topicHousing: "Housing",
    topicOsa: "OSA",
    topicRegistry: "Registry",
    topicSystems: "Moodle/WEBSIMS"
  }
};

function normalizeLang(raw) {
  const value = String(raw || "").toLowerCase();
  if (value === "en" || value.startsWith("en-")) return "en";
  if (value === "zh-hant" || value.includes("zh-hk") || value.includes("zh-tw") || value.includes("hant")) return "zh-Hant";
  if (value === "zh-hans" || value.startsWith("zh")) return "zh-Hans";
  return "zh-Hans";
}

function initialLang() {
  const params = new URLSearchParams(window.location.search);
  const stored = localStorage.getItem("hksyu-kb-lang");
  const browserLang = typeof navigator === "undefined" ? "" : navigator.language;
  return normalizeLang(params.get("lang") || stored || browserLang);
}

const state = { events: [], selectedId: null, topic: "all", forecastMode: false, lang: initialLang() };
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[c]));
let controlsBound = false;

function t(key, values = {}) {
  let text = I18N[state.lang]?.[key] ?? I18N["zh-Hans"][key] ?? key;
  for (const [name, value] of Object.entries(values)) text = text.replaceAll(`{${name}}`, value);
  return text;
}

function topicLabel(topic) {
  const labels = {
    General: "topicGeneral",
    Career: "topicCareer",
    Housing: "topicHousing",
    OSA: "topicOsa",
    Registry: "topicRegistry",
    "Moodle/WEBSIMS": "topicSystems"
  };
  return topic === "all" ? t("allTopics") : t(labels[topic] || "", {}) || topic;
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.title = t("pageTitle");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((node) => {
    node.setAttribute("aria-label", t(node.dataset.i18nAria));
  });
  document.querySelectorAll(".langButton").forEach((button) => {
    const active = button.dataset.lang === state.lang;
    button.classList.toggle("isActive", active);
    button.setAttribute("aria-pressed", String(active));
  });
  $("resultMeta").textContent = t("loadingText");
}

async function loadEvents() {
  applyLanguage();
  const res = await fetch("./data/events.public.jsonl");
  const text = await res.text();
  state.events = text.trim().split(/\n+/).filter(Boolean).map((line) => JSON.parse(line));
  state.forecastMode = new URLSearchParams(window.location.search).get("view") === "forecast" || window.location.hash === "#forecast";
  buildFilters();
  bindControls();
  render();
}

function unique(values) {
  const locale = state.lang === "en" ? "en" : "zh-Hans";
  return Array.from(new Set(values.filter(Boolean))).sort((a, b) => String(a).localeCompare(String(b), locale));
}

function optionList(values, allLabel) {
  const rows = values.map((item) => (typeof item === "object" ? item : { value: item, label: item }));
  return [`<option value="all">${esc(allLabel)}</option>`].concat(rows.map((v) => `<option value="${esc(v.value)}">${esc(v.label)}</option>`)).join("");
}

function setOptions(id, html) {
  const el = $(id);
  const selected = el.value;
  el.innerHTML = html;
  if (Array.from(el.options).some((option) => option.value === selected)) el.value = selected;
}

function monthLabelFor(month) {
  const index = Number(month) - 1;
  if (state.lang === "en" && EN_MONTHS[index]) return EN_MONTHS[index];
  return `${String(month).padStart(2, "0")}月`;
}

function addOneMonth(date) {
  const next = new Date(date);
  const originalDay = next.getDate();
  next.setMonth(next.getMonth() + 1);
  if (next.getDate() < originalDay) next.setDate(0);
  return next;
}

function formatDate(date) {
  if (state.lang === "en") return `${String(date.getDate()).padStart(2, "0")} ${EN_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
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

function updateUrl() {
  const params = new URLSearchParams(window.location.search);
  if (state.forecastMode) params.set("view", "forecast");
  else params.delete("view");
  if (state.lang === "zh-Hans") params.delete("lang");
  else params.set("lang", state.lang);
  const query = params.toString();
  const hash = state.forecastMode ? "#forecast" : "";
  history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${hash}`);
}

function buildFilters() {
  setOptions("yearFilter", optionList(unique(state.events.flatMap((e) => {
    const range = String(e.year_range || "");
    const match = range.match(/^(\d{4})-(\d{4})$/);
    if (!match) return [];
    const start = Number(match[1]);
    const end = Number(match[2]);
    const years = [];
    for (let y = start; y <= end; y += 1) years.push(String(y));
    return years;
  })), t("allYears")));
  const months = Array.from(new Set(state.events.flatMap((e) => e.months || []))).sort((a, b) => Number(a) - Number(b)).map((m) => ({ value: String(m), label: monthLabelFor(m) }));
  setOptions("monthFilter", optionList(months, t("allMonths")));
  setOptions("categoryFilter", optionList(unique(state.events.map((e) => e.category)), t("allCategories")));
  setOptions("departmentFilter", optionList(unique(state.events.map((e) => e.department)), t("allDepartments")));
  const topics = ["all"].concat(unique(state.events.map(topicFor)));
  $("topicList").innerHTML = topics.map((topic) => `<button class="folderButton ${topic === state.topic ? "isActive" : ""}" data-topic="${esc(topic)}">${esc(topicLabel(topic))}</button>`).join("");
}

function bindControls() {
  if (controlsBound) return;
  controlsBound = true;
  $("topicList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-topic]");
    if (!button) return;
    state.topic = button.dataset.topic;
    document.querySelectorAll(".folderButton").forEach((node) => node.classList.toggle("isActive", node.dataset.topic === state.topic));
    render();
  });
  ["searchInput", "yearFilter", "monthFilter", "categoryFilter", "departmentFilter"].forEach((id) => $(id).addEventListener("input", render));
  $("forecastBtn").addEventListener("click", () => {
    state.forecastMode = !state.forecastMode;
    state.selectedId = null;
    updateUrl();
    $("forecastBtn").classList.toggle("isActive", state.forecastMode);
    render();
  });
  document.querySelectorAll(".langButton").forEach((button) => {
    button.addEventListener("click", () => {
      const nextLang = normalizeLang(button.dataset.lang);
      if (nextLang === state.lang) return;
      state.lang = nextLang;
      localStorage.setItem("hksyu-kb-lang", state.lang);
      applyLanguage();
      buildFilters();
      updateUrl();
      render();
    });
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
    if (month !== "all" && !(event.months || []).map((m) => String(m)).includes(month)) return false;
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
  if (!events.some((event) => event.event_id === state.selectedId)) state.selectedId = events[0]?.event_id || null;
  if (state.forecastMode) {
    const { start, end } = forecastWindow();
    $("resultMeta").textContent = t("resultMetaForecast", { count: events.length, start: formatDate(start), end: formatDate(end) });
    $("forecastHint").textContent = t("forecastHintActive", { start: formatDate(start), end: formatDate(end) });
  } else {
    $("resultMeta").textContent = t("resultMetaNormal", { count: events.length });
    $("forecastHint").textContent = t("forecastHintDefault");
  }
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
    $("readingPane").innerHTML = `<div class="emptyState"><h2>${esc(t("noResultsTitle"))}</h2><p>${esc(t("noResultsText"))}</p></div>`;
    return;
  }
  const publicLinks = event.public_links || [];
  const links = publicLinks.length
    ? `<div class="links">${publicLinks.map((u) => `<a href="${esc(u)}" target="_blank" rel="noreferrer">${esc(u)}</a>`).join("")}</div>`
    : esc(t("noPublicLinks"));
  $("readingPane").innerHTML = `
    <h2>${esc(event.title)}</h2>
    <p class="summary">${esc(event.summary_human)}</p>
    <dl class="detailGrid">
      <dt>${esc(t("months"))}</dt><dd>${(event.months || []).map(monthLabelFor).join(", ")}</dd>
      <dt>${esc(t("yearRange"))}</dt><dd>${esc(event.year_range)}</dd>
      <dt>${esc(t("category"))}</dt><dd>${esc(event.category)}</dd>
      <dt>${esc(t("department"))}</dt><dd>${esc(event.department)}</dd>
      <dt>${esc(t("actionType"))}</dt><dd>${esc(event.action_type)}</dd>
      <dt>${esc(t("commonTiming"))}</dt><dd>${esc(event.common_timing)}</dd>
      <dt>${esc(t("sourceCount"))}</dt><dd>${esc(event.source_count)}</dd>
      <dt>${esc(t("confidence"))}</dt><dd>${esc(event.confidence)}</dd>
      <dt>${esc(t("markdown"))}</dt><dd><a class="markdownLink" href="../${esc(event.markdown_path)}">${esc(event.markdown_path)}</a></dd>
      <dt>${esc(t("publicSources"))}</dt><dd>${links}</dd>
    </dl>
    <p class="meta">${esc(t("cardMeta"))}</p>
  `;
}

loadEvents().catch((err) => {
  $("resultMeta").textContent = t("loadError");
  $("cards").innerHTML = `<p class="meta">${esc(err.message)}</p>`;
});
