const I18N = {
  zh: {
    heroTitle: "连接全球智慧\n驱动数字未来",
    heroSub: "助力企业与个人实现数字化升级",
    searchPlaceholder: "说说你现在最想解决的问题...",
    card1: "网站建设", card2: "智控未来", card3: "量化感知", card4: "数字学院",
    contactTitle: "准备开始？",
    contactSub: "告诉我们你的目标，我们为你匹配执行路径"
  },
  en: {
    heroTitle: "Connect Global Intelligence\nDrive Digital Future",
    heroSub: "Help businesses and individuals achieve digital upgrade",
    searchPlaceholder: "What do you want to solve?",
    card1: "Web Build", card2: "Smart Control", card3: "Quant Sense", card4: "Digital Academy",
    contactTitle: "Ready to start?",
    contactSub: "Tell us your goal"
  },
  km: {
    heroTitle: "ភ្ជាប់បញ្ញាសកល\nជំរុញអនាគតឌីជីថល",
    heroSub: "ជួយធ្វើឌីជីថល",
    searchPlaceholder: "តើអ្នកចង់ដោះស្រាយអ្វី?",
    card1: "គេហទំព័រ", card2: "គ្រប់គ្រងឆ្លាត", card3: "វិភាគ", card4: "សាលា",
    contactTitle: "ត្រៀម?",
    contactSub: "ប្រាប់គោលដៅ"
  }
};

// 5 轮问答（只选项，不付款）
const STEPS = [
  {
    title: "你现在最想先解决的是？",
    options: [
      { id: "web", label: "有个网站能展示和获客" },
      { id: "ai", label: "用 AI 提升效率和内容" },
      { id: "auto", label: "减少重复劳动，做自动化" },
      { id: "learn", label: "先系统学习怎么做" },
      { id: "unsure", label: "还不太确定" }
    ]
  },
  {
    title: "你更偏向哪种结果？",
    options: [
      { id: "fast", label: "尽快能用起来" },
      { id: "stable", label: "先做稳，后面再扩展" },
      { id: "cheap", label: "先低成本试一下" },
      { id: "full", label: "想要比较完整的方案" },
      { id: "diy", label: "我自己能操作最好" }
    ]
  },
  {
    title: "你主要用在什么场景？",
    options: [
      { id: "business", label: "自己的生意/店铺" },
      { id: "content", label: "内容创作和发布" },
      { id: "service", label: "客户咨询和售后" },
      { id: "team", label: "团队协作和流程" },
      { id: "personal", label: "个人学习提升" }
    ]
  },
  {
    title: "你现在的基础更接近？",
    options: [
      { id: "zero", label: "几乎从零开始" },
      { id: "some", label: "有一点经验" },
      { id: "ready", label: "已经有产品/网站雏形" },
      { id: "busy", label: "会一点，但没时间细做" },
      { id: "outsource", label: "更想直接用现成方案" }
    ]
  },
  {
    title: "最后确认，你更希望先拿到？",
    options: [
      { id: "tool", label: "能马上用的工具/模板" },
      { id: "course", label: "能跟着做的教程/课程" },
      { id: "service", label: "有人帮忙落地的服务" },
      { id: "bundle", label: "资料 + 模板组合" },
      { id: "start_ai", label: "先从 AI 入门开始" }
    ]
  }
];

const PLANS = {
  web: {
    title: "为您匹配到适合您的方案",
    summary: "更适合先把展示和获客入口搭起来。",
    items: [
      { name: "企业展示官网模板", price: "99U", link: "order.html" },
      { name: "高转化落地页模板", price: "49U", link: "order.html" },
      { name: "查看网站建设资源库", price: "", link: "web.html" }
    ]
  },
  ai: {
    title: "为您匹配到适合您的方案",
    summary: "更适合先用 AI 提升内容和效率。",
    items: [
      { name: "三分钟玩转AI", price: "9.9U", link: "order.html" },
      { name: "AI提示词精选库", price: "29U", link: "order.html" },
      { name: "查看智控未来资源库", price: "", link: "ai.html" }
    ]
  },
  auto: {
    title: "为您匹配到适合您的方案",
    summary: "更适合先减少重复操作，把流程跑顺。",
    items: [
      { name: "订单自动化基础方案", price: "149U", link: "order.html" },
      { name: "运营数据看板模板", price: "39U", link: "order.html" },
      { name: "查看量化感知资源库", price: "", link: "automation.html" }
    ]
  },
  learn: {
    title: "为您匹配到适合您的方案",
    summary: "更适合先把方法和路径学清楚。",
    items: [
      { name: "跨境数字业务入门", price: "129U", link: "order.html" },
      { name: "手机端运营实操课", price: "59U", link: "order.html" },
      { name: "查看数字学院资源库", price: "", link: "digital.html" }
    ]
  },
  default: {
    title: "为您匹配到适合您的方案",
    summary: "根据你的选择，建议先从低成本可执行的方向开始。",
    items: [
      { name: "三分钟玩转AI", price: "9.9U", link: "order.html" },
      { name: "高转化落地页模板", price: "49U", link: "order.html" },
      { name: "查看全部资源入口", price: "", link: "ai.html" }
    ]
  }
};

let currentLang = "zh";
let step = 0;
let answers = [];
let lastQuery = "";

function setLang(lang) {
  currentLang = lang;
  const d = I18N[lang] || I18N.zh;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (!d[k]) return;
    if (k === "heroTitle") el.innerHTML = d[k].replace("\n", "<br>");
    else el.textContent = d[k];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const k = el.dataset.i18nPlaceholder;
    if (d[k]) el.placeholder = d[k];
  });
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = ({ zh: "中文 ▾", en: "English ▾", km: "ខ្មែរ ▾" })[lang] || "中文 ▾";
  localStorage.setItem("gyxLang", lang);
}

function paint(html) {
  const hero = document.getElementById("heroResult");
  if (hero) hero.innerHTML = html;
}

function renderStep() {
  if (step >= STEPS.length) {
    renderPlan();
    return;
  }
  const cur = STEPS[step];
  let html = `<div class="qa-card">
    <h3>${cur.title}</h3>`;
  cur.options.forEach(op => {
    html += `<button type="button" class="qa-btn" onclick="choose('${op.id}')">${op.label}</button>`;
  });
  html += `<div class="qa-actions">`;
  if (step > 0) html += `<button type="button" class="qa-mini" onclick="backStep()">← 上一步</button>`;
  html += `<button type="button" class="qa-mini" onclick="restart()">重新开始</button>`;
  html += `</div></div>`;
  paint(html);
}

function decidePlan() {
  // 优先看第1题大方向
  const first = answers[0];
  if (first === "web") return "web";
  if (first === "ai" || first === "start_ai") return "ai";
  if (first === "auto") return "auto";
  if (first === "learn") return "learn";

  // 看最后一题
  const last = answers[answers.length - 1];
  if (last === "start_ai" || last === "tool") return "ai";
  if (last === "course") return "learn";
  if (last === "service" || last === "bundle") return "web";

  // 看关键词输入
  const q = (lastQuery || "").toLowerCase();
  if (/(网站|官网|商城|落地)/.test(q)) return "web";
  if (/(ai|提示|视频|写作|客服)/.test(q)) return "ai";
  if (/(自动|订单|通知|数据)/.test(q)) return "auto";
  if (/(课程|教程|学习|资料)/.test(q)) return "learn";

  return "default";
}

function renderPlan() {
  const key = decidePlan();
  const plan = PLANS[key] || PLANS.default;
  let html = `<div class="qa-card">
    <h3>${plan.title}</h3>
    <p style="color:var(--muted);font-size:14px;margin:0 0 12px">${plan.summary}</p>`;
  plan.items.forEach(it => {
    html += `<div class="plan-item">
      <b style="font-size:14px">${it.name}</b>
      <div style="display:flex;gap:8px;align-items:center">
        ${it.price ? `<span style="color:var(--blue);font-weight:700;font-size:13px">${it.price}</span>` : ""}
        <a href="${it.link}">${it.price ? "去付款" : "查看"}</a>
      </div>
    </div>`;
  });
  html += `<div class="qa-actions" style="margin-top:14px">
    <button type="button" class="qa-mini" onclick="restart()">重新匹配</button>
  </div></div>`;
  paint(html);
}

function choose(id) {
  answers[step] = id;
  step += 1;
  if (step >= STEPS.length) renderPlan();
  else renderStep();
}

function backStep() {
  if (step <= 0) return;
  step -= 1;
  answers = answers.slice(0, step);
  renderStep();
}

function restart() {
  step = 0;
  answers = [];
  renderStep();
}

function showPlan(q) {
  lastQuery = q || "";
  step = 0;
  answers = [];
  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q: lastQuery, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}
  renderStep();
}

document.addEventListener("DOMContentLoaded", () => {
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  if (langBtn && langMenu) {
    langBtn.onclick = () => langMenu.classList.toggle("open");
    document.addEventListener("click", e => { if (!e.target.closest(".lang-select")) langMenu.classList.remove("open"); });
    langMenu.querySelectorAll("button").forEach(b => b.onclick = () => { setLang(b.dataset.lang); langMenu.classList.remove("open"); });
  }
  setLang(localStorage.getItem("gyxLang") || "zh");

  const form = document.getElementById("mainSearch");
  if (form) {
    form.onsubmit = e => {
      e.preventDefault();
      showPlan(document.getElementById("mainSearchInput").value);
    };
  }

  // 打开页面也可直接开始问答
  // renderStep();
});