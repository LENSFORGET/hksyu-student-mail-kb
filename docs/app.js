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
    resetAria: "重置筛选",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "界面语言",
    languageHint: "切换界面、筛选和标签语言；通知标题与摘要保留原文。",
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
    resetAria: "重置篩選",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "介面語言",
    languageHint: "切換介面、篩選和標籤語言；通知標題與摘要保留原文。",
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
    resetAria: "Reset filters",
    browserSubtitle: "Outlook-like public browser",
    languageLabel: "Interface language",
    languageHint: "Switches UI, filters, and tags. Notice titles and summaries stay in their original language.",
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

const TAXONOMY = {
  category: {
    "課程與教學": { "zh-Hans": "课程与教学", "zh-Hant": "課程與教學", en: "Courses & Teaching" },
    "行政與教務通知": { "zh-Hans": "行政与教务通知", "zh-Hant": "行政與教務通知", en: "Admin & Academic Notices" },
    "考試與評估": { "zh-Hans": "考试与评估", "zh-Hant": "考試與評估", en: "Exams & Assessment" },
    "學術活動": { "zh-Hans": "学术活动", "zh-Hant": "學術活動", en: "Academic Events" },
    "學生事務與校園生活": { "zh-Hans": "学生事务与校园生活", "zh-Hant": "學生事務與校園生活", en: "Student Affairs & Campus Life" },
    "實習與就業": { "zh-Hans": "实习与就业", "zh-Hant": "實習與就業", en: "Internships & Careers" }
  },
  action: {
    "注意截止日期/盡快提交": { "zh-Hans": "注意截止日期/尽快提交", "zh-Hant": "注意截止日期/盡快提交", en: "Watch deadline / submit soon" },
    "需要報名/註冊/申請": { "zh-Hans": "需要报名/注册/申请", "zh-Hant": "需要報名/註冊/申請", en: "Register / sign up / apply" },
    "關注資訊更新": { "zh-Hans": "关注信息更新", "zh-Hant": "關注資訊更新", en: "Review information update" },
    "需要出席/參加活動": { "zh-Hans": "需要出席/参加活动", "zh-Hant": "需要出席/參加活動", en: "Attend event" },
    "需要上傳/提交作業": { "zh-Hans": "需要上传/提交作业", "zh-Hant": "需要上傳/提交作業", en: "Upload / submit coursework" },
    "需要留意系統/服務變更": { "zh-Hans": "需要留意系统/服务变更", "zh-Hant": "需要留意系統/服務變更", en: "Check system / service change" }
  },
  department: {
    "HKSYU / 其他公开学校事项": { "zh-Hans": "HKSYU / 其他公开学校事项", "zh-Hant": "HKSYU / 其他公開學校事項", en: "HKSYU / Other Public School Items" },
    "CSC / Moodle / WEBSIMS": { "zh-Hans": "CSC / Moodle / WEBSIMS", "zh-Hant": "CSC / Moodle / WEBSIMS", en: "CSC / Moodle / WEBSIMS" },
    "OSA / 学生事务": { "zh-Hans": "OSA / 学生事务", "zh-Hant": "OSA / 學生事務", en: "OSA / Student Affairs" },
    "OSA Career Services / 职业发展": { "zh-Hans": "OSA Career Services / 职业发展", "zh-Hant": "OSA Career Services / 職業發展", en: "OSA Career Services" },
    "Registry / 教务": { "zh-Hans": "Registry / 教务", "zh-Hant": "Registry / 教務", en: "Registry" },
    "Global Engagement / 交流": { "zh-Hans": "Global Engagement / 交流", "zh-Hant": "Global Engagement / 交流", en: "Global Engagement / Exchange" },
    "Library / 图书馆": { "zh-Hans": "Library / 图书馆", "zh-Hant": "Library / 圖書館", en: "Library" },
    "Department of Applied Data Science / ADS": { "zh-Hans": "Department of Applied Data Science / ADS", "zh-Hant": "Department of Applied Data Science / ADS", en: "Department of Applied Data Science / ADS" },
    "Teaching and Learning / 教学发展": { "zh-Hans": "Teaching and Learning / 教学发展", "zh-Hant": "Teaching and Learning / 教學發展", en: "Teaching and Learning" },
    "Student Finance / 奖助学金": { "zh-Hans": "Student Finance / 奖助学金", "zh-Hant": "Student Finance / 獎助學金", en: "Student Finance" }
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

function toSimplifiedText(value) {
  return String(value ?? "")
    .replaceAll("學", "学")
    .replaceAll("術", "术")
    .replaceAll("與", "与")
    .replaceAll("務", "务")
    .replaceAll("課", "课")
    .replaceAll("程", "程")
    .replaceAll("教學", "教学")
    .replaceAll("試", "试")
    .replaceAll("評", "评")
    .replaceAll("估", "估")
    .replaceAll("實", "实")
    .replaceAll("習", "习")
    .replaceAll("業", "业")
    .replaceAll("園", "园")
    .replaceAll("註冊", "注册")
    .replaceAll("申請", "申请")
    .replaceAll("關注", "关注")
    .replaceAll("資訊", "信息")
    .replaceAll("參加", "参加")
    .replaceAll("上傳", "上传")
    .replaceAll("繳", "缴")
    .replaceAll("盡快", "尽快")
    .replaceAll("系統", "系统")
    .replaceAll("變更", "变更")
    .replaceAll("常見", "常见")
    .replaceAll("號", "号")
    .replaceAll("當年通知為準", "当年通知为准");
}

function toTraditionalText(value) {
  return String(value ?? "")
    .replaceAll("公开", "公開")
    .replaceAll("学校", "學校")
    .replaceAll("事项", "事項")
    .replaceAll("学生", "學生")
    .replaceAll("事务", "事務")
    .replaceAll("职业", "職業")
    .replaceAll("发展", "發展")
    .replaceAll("教务", "教務")
    .replaceAll("图书馆", "圖書館")
    .replaceAll("教学", "教學")
    .replaceAll("奖助学金", "獎助學金")
    .replaceAll("当年通知为准", "當年通知為準")
    .replaceAll("常见", "常見")
    .replaceAll("注册", "註冊")
    .replaceAll("申请", "申請")
    .replaceAll("信息", "資訊")
    .replaceAll("上传", "上傳")
    .replaceAll("系统", "系統")
    .replaceAll("变更", "變更")
    .replaceAll("参加", "參加")
    .replaceAll("尽快", "盡快");
}

function localizeField(kind, value) {
  const raw = String(value ?? "");
  const mapped = TAXONOMY[kind]?.[raw]?.[state.lang];
  if (mapped) return mapped;
  if (state.lang === "zh-Hans") return toSimplifiedText(raw);
  if (state.lang === "zh-Hant") return toTraditionalText(raw);
  return raw;
}

function localizeTiming(value) {
  const raw = String(value ?? "");
  if (state.lang === "en") {
    if (raw === "日期以当年通知为准" || raw === "日期以當年通知為準") return "Check the notice for the exact year";
    const phase = raw.match(/偏(月初|月中|月底)（常[見见]日：([^）]+)）/);
    if (phase) {
      const label = { "月初": "Early month", "月中": "Mid-month", "月底": "Late month" }[phase[1]] || "Typical timing";
      return `${label} (common day: ${phase[2].replaceAll("，", ", ")})`;
    }
    return raw
      .replace(/(\d{1,2})\s*月\s*(\d{1,2})\s*[日号號]/g, (_, m, d) => `${EN_MONTHS[Number(m) - 1] || m} ${Number(d)}`)
      .replaceAll("；", "; ")
      .replaceAll("日期以当年通知为准", "check exact-year notice")
      .replaceAll("日期以當年通知為準", "check exact-year notice");
  }
  return state.lang === "zh-Hans" ? toSimplifiedText(raw) : toTraditionalText(raw);
}

function localizedOptionValues(values, kind) {
  return unique(values).map((value) => ({ value, label: localizeField(kind, value) }))
    .sort((a, b) => a.label.localeCompare(b.label, state.lang === "en" ? "en" : "zh-Hans"));
}

function localizedSearchBlob(event) {
  return [
    event.title,
    event.department,
    event.category,
    event.action_type,
    event.summary_human,
    localizeField("department", event.department),
    localizeField("category", event.category),
    localizeField("action", event.action_type),
    localizeTiming(event.common_timing),
    topicLabel(topicFor(event))
  ].join(" ").toLowerCase();
}

function githubMarkdownUrl(markdownPath) {
  const normalized = String(markdownPath || "").replace(/^\/+/, "");
  return `https://github.com/LENSFORGET/hksyu-student-mail-kb/blob/main/${encodeURI(normalized)}`;
}

function displaySummary(event) {
  if (state.lang === "en") {
    const months = (event.months || []).map(monthLabelFor).join(", ") || "Typical";
    return `${months} item in ${localizeField("category", event.category)}. Usually associated with ${localizeField("department", event.department)}. Suggested action: ${localizeField("action", event.action_type)}. Timing: ${localizeTiming(event.common_timing)}.`;
  }
  const base = state.lang === "zh-Hans" ? toSimplifiedText(event.summary_human) : toTraditionalText(event.summary_human);
  return base
    .replaceAll(String(event.category || ""), localizeField("category", event.category))
    .replaceAll(String(event.department || ""), localizeField("department", event.department))
    .replaceAll(String(event.action_type || ""), localizeField("action", event.action_type));
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
  document.querySelectorAll("[data-i18n-title]").forEach((node) => {
    node.setAttribute("title", t(node.dataset.i18nTitle));
  });
  $("languageSelect").value = state.lang;
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
  setOptions("categoryFilter", optionList(localizedOptionValues(state.events.map((e) => e.category), "category"), t("allCategories")));
  setOptions("departmentFilter", optionList(localizedOptionValues(state.events.map((e) => e.department), "department"), t("allDepartments")));
  const topics = ["all"].concat(unique(state.events.map(topicFor)));
  $("topicList").innerHTML = topics.map((topic) => `<button class="folderButton ${topic === state.topic ? "isActive" : ""}" data-topic="${esc(topic)}">${esc(topicLabel(topic))}</button>`).join("");
}

function updateTopicButtons() {
  document.querySelectorAll(".folderButton").forEach((node) => node.classList.toggle("isActive", node.dataset.topic === state.topic));
}

function resetFilters() {
  $("searchInput").value = "";
  ["yearFilter", "monthFilter", "categoryFilter", "departmentFilter"].forEach((id) => {
    if (Array.from($(id).options).some((option) => option.value === "all")) $(id).value = "all";
  });
  state.topic = "all";
  state.forecastMode = false;
  state.selectedId = null;
  $("forecastBtn").classList.remove("isActive");
  updateTopicButtons();
  updateUrl();
  render();
}

function bindControls() {
  if (controlsBound) return;
  controlsBound = true;
  $("resetBtn").addEventListener("click", resetFilters);
  $("topicList").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-topic]");
    if (!button) return;
    state.topic = button.dataset.topic;
    updateTopicButtons();
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
  $("languageSelect").addEventListener("change", (event) => {
    const nextLang = normalizeLang(event.target.value);
    if (nextLang === state.lang) return;
    state.lang = nextLang;
    localStorage.setItem("hksyu-kb-lang", state.lang);
    applyLanguage();
    buildFilters();
    updateUrl();
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
    if (month !== "all" && !(event.months || []).map((m) => String(m)).includes(month)) return false;
    if (category !== "all" && event.category !== category) return false;
    if (department !== "all" && event.department !== department) return false;
    if (state.topic !== "all" && topicFor(event) !== state.topic) return false;
    if (q) {
      const blob = localizedSearchBlob(event);
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
      <p>${esc(localizeField("department", event.department))} · ${esc(localizeTiming(event.common_timing))}</p>
      <div class="pillRow"><span class="pill">${esc(localizeField("category", event.category))}</span><span class="pill">${esc(localizeField("action", event.action_type))}</span></div>
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
    <p class="summary">${esc(displaySummary(event))}</p>
    <dl class="detailGrid">
      <dt>${esc(t("months"))}</dt><dd>${(event.months || []).map(monthLabelFor).join(", ")}</dd>
      <dt>${esc(t("yearRange"))}</dt><dd>${esc(event.year_range)}</dd>
      <dt>${esc(t("category"))}</dt><dd>${esc(localizeField("category", event.category))}</dd>
      <dt>${esc(t("department"))}</dt><dd>${esc(localizeField("department", event.department))}</dd>
      <dt>${esc(t("actionType"))}</dt><dd>${esc(localizeField("action", event.action_type))}</dd>
      <dt>${esc(t("commonTiming"))}</dt><dd>${esc(localizeTiming(event.common_timing))}</dd>
      <dt>${esc(t("sourceCount"))}</dt><dd>${esc(event.source_count)}</dd>
      <dt>${esc(t("confidence"))}</dt><dd>${esc(event.confidence)}</dd>
      <dt>${esc(t("markdown"))}</dt><dd><a class="markdownLink" href="${esc(githubMarkdownUrl(event.markdown_path))}" target="_blank" rel="noreferrer">${esc(event.markdown_path)}</a></dd>
      <dt>${esc(t("publicSources"))}</dt><dd>${links}</dd>
    </dl>
    <p class="meta">${esc(t("cardMeta"))}</p>
  `;
}

loadEvents().catch((err) => {
  $("resultMeta").textContent = t("loadError");
  $("cards").innerHTML = `<p class="meta">${esc(err.message)}</p>`;
});
