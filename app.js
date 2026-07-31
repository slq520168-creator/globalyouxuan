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

// 动态赚钱项目搜索库
const SEARCH_DB = [
  {
    keywords: ["夜市", "做图", "绘画", "打印", "摆摊", "广场", "AI绘画"],
    title: "推荐：夜市AI绘画打印赚钱",
    items: [
      { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" },
      { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" },
      { name: "AI宠物拟人写真", price: "9.9U", desc: "单张15-40元，主人愿意为可爱买单", link: "order.html?name=AI宠物拟人写真&price=9.9U" }
    ]
  },
  {
    keywords: ["头像", "情侣", "定制", "AI头像"],
    title: "推荐：AI头像/情侣画接单",
    items: [
      { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" },
      { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" },
      { name: "AI宠物拟人写真", price: "9.9U", desc: "单张15-40元，主人愿意为可爱买单", link: "order.html?name=AI宠物拟人写真&price=9.9U" }
    ]
  },
  {
    keywords: ["文案", "朋友圈", "脚本", "代写", "短视频文案"],
    title: "推荐：朋友圈/短视频文案代写",
    items: [
      { name: "朋友圈/短视频文案代写", price: "9.9U", desc: "单条15-50元，宝妈上班族都适合", link: "order.html?name=朋友圈/短视频文案代写&price=9.9U" },
      { name: "本地商家海报/封面", price: "29U", desc: "服务本地店，单张30-80元", link: "order.html?name=本地商家海报/封面&price=29U" },
      { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" }
    ]
  },
  {
    keywords: ["老照片", "修复", "上色", "黑白照片"],
    title: "推荐：老照片修复上色",
    items: [
      { name: "老照片修复上色", price: "19.9U", desc: "单张20-100元，中老年人需求大", link: "order.html?name=老照片修复上色&price=19.9U" },
      { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" },
      { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" }
    ]
  },
  {
    keywords: ["海报", "商家", "封面", "美甲", "餐饮", "本地"],
    title: "推荐：本地商家海报/封面",
    items: [
      { name: "本地商家海报/封面", price: "29U", desc: "服务本地店，单张30-80元", link: "order.html?name=本地商家海报/封面&price=29U" },
      { name: "朋友圈/短视频文案代写", price: "9.9U", desc: "单条15-50元，宝妈上班族都适合", link: "order.html?name=朋友圈/短视频文案代写&price=9.9U" },
      { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" }
    ]
  },
  {
    keywords: ["宠物", "拟人", "写真", "猫", "狗"],
    title: "推荐：AI宠物拟人写真",
    items: [
      { name: "AI宠物拟人写真", price: "9.9U", desc: "单张15-40元，主人愿意为可爱买单", link: "order.html?name=AI宠物拟人写真&price=9.9U" },
      { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" },
      { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" }
    ]
  }
];

// 匹配不到时固定推3套
const FALLBACK = {
  title: "为你推荐这3个容易上手的赚钱项目",
  items: [
    { name: "AI头像/情侣画接单", price: "9.9U", desc: "在家接单，单张9.9-30元", link: "order.html?name=AI头像/情侣画接单&price=9.9U" },
    { name: "朋友圈/短视频文案代写", price: "9.9U", desc: "单条15-50元，宝妈上班族都适合", link: "order.html?name=朋友圈/短视频文案代写&price=9.9U" },
    { name: "夜市AI绘画打印赚钱", price: "19.9U", desc: "一单15-30元，手机+打印机就能做", link: "order.html?name=夜市AI绘画打印赚钱&price=19.9U" }
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
  
  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q: text, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}

  if (!text) {
    paint(`<div class="qa-card"><p style="color:var(--muted)">请输入你想解决的问题</p></div>`);
    return;
  }

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
        <a href="${it.link}">选择</a>
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