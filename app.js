const I18N = {
  zh: {
    heroTitle: "连接全球智慧\n驱动数字未来",
    heroSub: "助力企业与个人实现数字化升级",
    searchPlaceholder: "AI 智能搜索，探索解决方案...",
    card1: "网站建设",
    card2: "智控未来",
    card3: "量化感知",
    card4: "数字学院",
    matchTitle: "输入目标，生成方案",
    matchPlaceholder: "例如：我要做跨境电商",
    searchBtn: "生成方案",
    resultEmpty: "输入目标后这里会显示匹配方案",
    contactTitle: "准备开始？",
    contactSub: "告诉我们你的目标，我们为你匹配执行路径",
    productPrice: "USDT"
  },
  en: {
    heroTitle: "Connect Global Intelligence\nDrive Digital Future",
    heroSub: "Help businesses and individuals achieve digital upgrade",
    searchPlaceholder: "AI smart search, explore solutions...",
    card1: "Web Build",
    card2: "Smart Control",
    card3: "Quant Sense",
    card4: "Digital Academy",
    matchTitle: "Enter a goal, generate a plan",
    matchPlaceholder: "e.g. I want cross-border ecommerce",
    searchBtn: "Generate",
    resultEmpty: "Matched solutions will appear here",
    contactTitle: "Ready to start?",
    contactSub: "Tell us your goal, we will match the right path",
    productPrice: "USDT"
  },
  km: {
    heroTitle: "ភ្ជាប់បញ្ញាសកល\nជំរុញអនាគតឌីជីថល",
    heroSub: "ជួយអាជីវកម្ម និងបុគ្គលឱ្យធ្វើឌីជីថល",
    searchPlaceholder: "ស្វែងរក AI ស្វែងរកដំណោះស្រាយ...",
    card1: "គេហទំព័រ",
    card2: "គ្រប់គ្រងឆ្លាត",
    card3: "វិភាគទិន្នន័យ",
    card4: "សាលាឌីជីថល",
    matchTitle: "បញ្ចូលគោលដៅ បង្កើតផែនការ",
    matchPlaceholder: "ឧទាហរណ៍៖ អ៊ីកូម៉ឺសឆ្លងដែន",
    searchBtn: "បង្កើត",
    resultEmpty: "ដំណោះស្រាយនឹងបង្ហាញនៅទីនេះ",
    contactTitle: "ត្រៀមចាប់ផ្តើម?",
    contactSub: "ប្រាប់គោលដៅ យើងនឹងផ្គូផ្គងផ្លូវសមស្រប",
    productPrice: "USDT"
  }
};

const categoryMap = {
  web: ["网站", "官网", "企业", "商城", "电商", "跨境", "展示", "落地页", "web"],
  ai: ["ai", "客服", "写作", "图片", "内容", "智能", "对话", "智控"],
  auto: ["自动", "订单", "telegram", "whatsapp", "消息", "流程", "运营", "量化"],
  digital: ["数字", "课程", "产品", "saas", "交付", "虚拟", "学院"]
};

let products = [];
let currentLang = "zh";

async function loadProducts() {
  try {
    const res = await fetch("products.json?t=" + Date.now());
    if (res.ok) products = await res.json();
  } catch (e) {
    products = [];
  }
}

function setLang(lang) {
  currentLang = lang;
  const d = I18N[lang] || I18N.zh;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (d[k]) {
      if (k === "heroTitle") el.innerHTML = d[k].replace("\n", "<br>");
      else el.textContent = d[k];
    }
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const k = el.dataset.i18nPlaceholder;
    if (d[k]) el.placeholder = d[k];
  });

  const names = { zh: "中文 ▾", en: "English ▾", km: "ខ្មែរ ▾" };
  document.getElementById("langBtn").textContent = names[lang] || "中文 ▾";
  localStorage.setItem("gyxLang", lang);
}

function matchProducts(q) {
  q = (q || "").toLowerCase().trim();
  if (!q || !products.length) return [];

  const scored = products.map(p => {
    let score = 0;
    const keys = categoryMap[p.category] || [];
    keys.forEach(k => { if (q.includes(k.toLowerCase())) score += 3; });
    const title = ((p.title?.zh || "") + (p.title?.en || "")).toLowerCase();
    const desc = ((p.desc?.zh || "") + (p.desc?.en || "")).toLowerCase();
    if (title.includes(q) || q.includes((p.title?.zh || "").toLowerCase())) score += 5;
    if (desc.includes(q)) score += 2;
    return { p, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);

  return scored.map(x => x.p).slice(0, 4);
}

function showPlan(q) {
  q = (q || "").trim();
  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}

  const matched = matchProducts(q);
  const d = I18N[currentLang] || I18N.zh;
  let html = `<div class="result-card">`;

  if (matched.length) {
    html += `<h3>${matched[0].title?.[currentLang] || matched[0].title?.zh || "匹配方案"}</h3>`;
    html += `<p>${matched[0].desc?.[currentLang] || matched[0].desc?.zh || ""}</p>`;
    html += `<div class="result-tags">`;
    matched.forEach(p => {
      html += `<span>${p.title?.[currentLang] || p.title?.zh} · ${p.price} ${d.productPrice}</span>`;
    });
    html += `</div>`;
  } else {
    html += `<h3>综合数字化解决方案</h3>`;
    html += `<p>建议先做需求诊断，再组合网站、AI 与自动化能力。</p>`;
    html += `<div class="result-tags"><span>需求诊断</span><span>网站建设</span><span>智控未来</span><span>量化感知</span></div>`;
  }
  html += `</div>`;
  document.getElementById("resultPanel").innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadProducts();

  // 语言切换
  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  langBtn.onclick = () => langMenu.classList.toggle("open");
  document.addEventListener("click", e => {
    if (!e.target.closest(".lang-select")) langMenu.classList.remove("open");
  });
  langMenu.querySelectorAll("button").forEach(b => {
    b.onclick = () => {
      setLang(b.dataset.lang);
      langMenu.classList.remove("open");
    };
  });

  setLang(localStorage.getItem("gyxLang") || "zh");

  // 搜索
  document.querySelectorAll("[data-q]").forEach(b => {
    b.onclick = () => showPlan(b.dataset.q);
  });
  [["mainSearch", "mainSearchInput"], ["matchSearch", "matchInput"]].forEach(([f, i]) => {
    const form = document.getElementById(f);
    if (form) {
      form.onsubmit = e => {
        e.preventDefault();
        showPlan(document.getElementById(i).value);
        document.getElementById("match").scrollIntoView({ behavior: "smooth" });
      };
    }
  });
});