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

// 四大类 + 关键词
const CATEGORIES = [
  {
    id: "web",
    title: "网站建设",
    desc: "企业官网、商城、落地页、多语言网站",
    link: "web.html",
    keys: ["网站", "官网", "商城", "电商", "跨境", "落地页", "页面", "建站", "模板", "html", "web", "shop"]
  },
  {
    id: "ai",
    title: "智控未来",
    desc: "AI工具、提示词、客服、内容生成",
    link: "ai.html",
    keys: ["ai", "人工智能", "提示词", "客服", "写作", "图片", "智能", "对话", "chatgpt", "玩转"]
  },
  {
    id: "auto",
    title: "量化感知",
    desc: "订单自动化、通知、运营数据",
    link: "automation.html",
    keys: ["自动", "订单", "通知", "运营", "数据", "量化", "流程", "telegram", "监控"]
  },
  {
    id: "digital",
    title: "数字学院",
    desc: "课程、教程、资料包、数字产品",
    link: "digital.html",
    keys: ["课程", "教程", "资料", "学院", "学习", "培训", "电子书", "课"]
  }
];

// 可购买产品
const SALE_PRODUCTS = [
  {
    title: "三分钟玩转AI",
    desc: "5个高频提示词 + 使用方法，复制即用",
    price: "9.9U",
    link: "order.html",
    keys: ["ai", "提示词", "玩转", "写作", "入门", "三分钟"]
  },
  {
    title: "企业展示官网模板",
    desc: "适合品牌展示与业务转化",
    price: "99U",
    link: "order.html",
    keys: ["官网", "企业", "展示", "模板", "网站"]
  },
  {
    title: "高转化落地页模板",
    desc: "单页销售落地页，适合投放测试",
    price: "49U",
    link: "order.html",
    keys: ["落地页", "转化", "投放", "单页"]
  }
];

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
  const btn = document.getElementById("langBtn");
  if (btn) btn.textContent = names[lang] || "中文 ▾";
  localStorage.setItem("gyxLang", lang);
}

function scoreText(q, keys) {
  let score = 0;
  keys.forEach(k => {
    if (q.includes(k.toLowerCase())) score += 3;
  });
  return score;
}

function matchAll(q) {
  q = (q || "").toLowerCase().trim();
  if (!q) return { cats: [], items: [], fallback: true };

  const cats = CATEGORIES.map(c => ({
    ...c,
    score: scoreText(q, c.keys)
  })).filter(c => c.score > 0).sort((a, b) => b.score - a.score);

  const items = SALE_PRODUCTS.map(p => ({
    ...p,
    score: scoreText(q, p.keys)
  })).filter(p => p.score > 0).sort((a, b) => b.score - a.score);

  // products.json 补充
  if (products.length) {
    products.forEach(p => {
      const title = ((p.title?.zh || "") + (p.title?.en || "")).toLowerCase();
      const desc = ((p.desc?.zh || "") + (p.desc?.en || "")).toLowerCase();
      let score = 0;
      if (title.includes(q) || q.includes((p.title?.zh || "").toLowerCase())) score += 5;
      if (desc.includes(q)) score += 2;
      if (score > 0) {
        items.push({
          title: p.title?.zh || p.title?.en || "匹配产品",
          desc: p.desc?.zh || p.desc?.en || "",
          price: (p.price || "") + "U",
          link: "order.html",
          score
        });
      }
    });
    items.sort((a, b) => b.score - a.score);
  }

  return {
    cats: cats.slice(0, 3),
    items: items.slice(0, 4),
    fallback: cats.length === 0 && items.length === 0
  };
}

function showPlan(q) {
  q = (q || "").trim();
  const panel = document.getElementById("resultPanel");
  if (!panel) return;

  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}

  const { cats, items, fallback } = matchAll(q);
  let html = `<div class="result-card">`;

  if (!fallback) {
    html += `<h3>为你匹配到以下方案</h3>`;
    if (items.length) {
      html += `<p style="margin:8px 0 6px;color:var(--muted);font-size:13px">可直接购买</p>`;
      items.forEach(p => {
        html += `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px solid var(--line)">
          <div style="text-align:left">
            <b style="font-size:14px">${p.title}</b>
            <div style="font-size:12px;color:var(--muted)">${p.desc || ""}</div>
          </div>
          <a href="${p.link}" style="white-space:nowrap;padding:8px 12px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--purple));color:#fff;font-size:12px;font-weight:700">${p.price || "购买"}</a>
        </div>`;
      });
    }
    if (cats.length) {
      html += `<p style="margin:14px 0 6px;color:var(--muted);font-size:13px">相关资源库</p>`;
      html += `<div class="result-tags">`;
      cats.forEach(c => {
        html += `<a href="${c.link}" style="padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);font-size:13px">${c.title}</a>`;
      });
      html += `</div>`;
    }
  } else {
    html += `<h3>暂时没有精确匹配</h3>`;
    html += `<p>你可以先从下面方向继续选择：</p>`;
    html += `<div class="result-tags" style="margin-top:12px">`;
    CATEGORIES.forEach(c => {
      html += `<a href="${c.link}" style="padding:8px 12px;border:1px solid var(--line);border-radius:10px;background:var(--bg);font-size:13px">${c.title}</a>`;
    });
    html += `</div>`;
    html += `<div style="margin-top:14px"><a href="order.html" style="color:var(--blue);font-size:13px">或直接查看热门产品「三分钟玩转AI」→</a></div>`;
  }

  html += `</div>`;
  panel.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadProducts();

  const langBtn = document.getElementById("langBtn");
  const langMenu = document.getElementById("langMenu");
  if (langBtn && langMenu) {
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
  }
  setLang(localStorage.getItem("gyxLang") || "zh");

  document.querySelectorAll("[data-q]").forEach(b => {
    b.onclick = () => {
      showPlan(b.dataset.q);
      const match = document.getElementById("match");
      if (match) match.scrollIntoView({ behavior: "smooth" });
    };
  });

  [["mainSearch", "mainSearchInput"], ["matchSearch", "matchInput"]].forEach(([f, i]) => {
    const form = document.getElementById(f);
    if (form) {
      form.onsubmit = e => {
        e.preventDefault();
        showPlan(document.getElementById(i).value);
        const match = document.getElementById("match");
        if (match) match.scrollIntoView({ behavior: "smooth" });
      };
    }
  });
});