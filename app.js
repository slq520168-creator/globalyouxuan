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

// 独立搜索内容库（不依赖四个固定入口）
const SEARCH_DB = [
  {
    keywords: ["网站", "官网", "主页", "展示", "相册", "落地页", "商城", "页面"],
    title: "你可能需要网站相关方案",
    items: [
      { name: "个人相册版", price: "99U", desc: "私人数字空间，适合家庭/作品记录", link: "web.html" },
      { name: "商户展示版", price: "399U", desc: "小生意线上展示，客户点开就能看懂", link: "web.html" },
      { name: "品牌官网版", price: "999U", desc: "有品牌感的正式官网", link: "web.html" }
    ]
  },
  {
    keywords: ["自动", "提醒", "通知", "流程", "审批", "同步", "订单", "库存", "表单"],
    title: "你可能需要自动化相关方案",
    items: [
      { name: "体验版", price: "9.9U", desc: "日程提醒、到点通知，从零开始", link: "automation.html" },
      { name: "小微自动化版", price: "99U", desc: "表单自动回复、库存提醒、订单通知", link: "automation.html" },
      { name: "团队协同版", price: "999U", desc: "跨部门审批、数据自动汇总", link: "automation.html" }
    ]
  },
  {
    keywords: ["ai", "写作", "文案", "图片", "视频", "剪辑", "周报", "PPT", "翻译", "润色", "内容"],
    title: "你可能需要AI提效相关方案",
    items: [
      { name: "体验版", price: "9.9U", desc: "写周报、整理纪要、做PPT大纲", link: "ai.html" },
      { name: "内容营销版", price: "99U", desc: "批量生成文案、配图、短视频辅助", link: "ai.html" },
      { name: "企业办公版", price: "999U", desc: "会议纪要、知识库、商业文档辅助", link: "ai.html" }
    ]
  },
  {
    keywords: ["学习", "课程", "教程", "培训", "学院", "怎么学", "入门", "变现", "接单"],
    title: "你可能需要学习相关方案",
    items: [
      { name: "体验包", price: "9.9U", desc: "11个板块免费工具+操作步骤", link: "digital.html" },
      { name: "学习包", price: "99U", desc: "系统课程+实战作业+答疑", link: "digital.html" },
      { name: "高手包", price: "999U", desc: "深度教学+接单变现路径", link: "digital.html" }
    ]
  },
  {
    keywords: ["便宜", "低成本", "试一下", "体验", "入门", "新手", "不会"],
    title: "推荐从低成本体验开始",
    items: [
      { name: "自动化体验版", price: "9.9U", desc: "从零体验日程提醒与通知", link: "automation.html" },
      { name: "AI体验版", price: "9.9U", desc: "写周报、做PPT、翻译润色", link: "ai.html" },
      { name: "学院体验包", price: "9.9U", desc: "快速上手AI工具", link: "digital.html" }
    ]
  },
  {
    keywords: ["企业", "公司", "团队", "集团", "定制", "私有化", "高端", "完整"],
    title: "推荐企业级完整方案",
    items: [
      { name: "企业系统版（网站）", price: "3999U", desc: "多账号+API+千万级承载", link: "web.html" },
      { name: "企业定制版（自动化）", price: "3999U", desc: "私有化部署+ERP/CRM打通", link: "automation.html" },
      { name: "企业定制版（AI）", price: "3999U", desc: "专属模型+系统深度集成", link: "ai.html" }
    ]
  }
];

// 兜底内容（随便输什么都有答案）
const FALLBACK = {
  title: "根据你的描述，推荐先从这些开始",
  items: [
    { name: "AI体验版", price: "9.9U", desc: "最快上手，写周报/做PPT/润色", link: "ai.html" },
    { name: "个人相册版", price: "99U", desc: "先有一个属于自己的数字空间", link: "web.html" },
    { name: "自动化体验版", price: "9.9U", desc: "日程提醒、到点通知", link: "automation.html" },
    { name: "学院体验包", price: "9.9U", desc: "快速了解AI工具怎么用", link: "digital.html" }
  ]
};

let currentLang = "zh";

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

function search(q) {
  const text = (q || "").toLowerCase().trim();
  
  // 记录搜索
  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q: text, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}

  if (!text) {
    paint(`<div class="qa-card"><p style="color:var(--muted)">请输入你想解决的问题</p></div>`);
    return;
  }

  // 匹配搜索库
  let matched = null;
  for (const item of SEARCH_DB) {
    if (item.keywords.some(k => text.includes(k.toLowerCase()))) {
      matched = item;
      break;
    }
  }

  const result = matched || FALLBACK;

  let html = `<div class="qa-card">
    <h3>${result.title}</h3>
    <p style="color:var(--muted);font-size:13px;margin:0 0 14px">根据「${text}」为你匹配</p>`;

  result.items.forEach(it => {
    html += `<div class="plan-item">
      <div>
        <b style="font-size:14px">${it.name}</b>
        <div style="font-size:12px;color:var(--muted);margin-top:2px">${it.desc || ""}</div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;white-space:nowrap">
        <span style="color:var(--blue);font-weight:700;font-size:13px">${it.price}</span>
        <a href="${it.link}">查看</a>
      </div>
    </div>`;
  });

  html += `<div class="qa-actions" style="margin-top:14px">
    <button type="button" class="qa-mini" onclick="document.getElementById('heroResult').innerHTML=''">关闭</button>
  </div></div>`;

  paint(html);
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
      search(document.getElementById("mainSearchInput").value);
    };
  }
});