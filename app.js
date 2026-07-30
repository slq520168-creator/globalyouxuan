const I18N = {
  zh: {
    heroTitle: "连接全球智慧\n驱动数字未来",
    heroSub: "助力企业与个人实现数字化升级",
    searchPlaceholder: "AI 智能搜索，探索解决方案...",
    card1: "网站建设", card2: "智控未来", card3: "量化感知", card4: "数字学院",
    matchTitle: "输入目标，生成方案",
    matchPlaceholder: "例如：我要做跨境电商",
    searchBtn: "生成方案",
    resultEmpty: "输入目标后这里会显示匹配方案",
    contactTitle: "准备开始？",
    contactSub: "告诉我们你的目标，我们为你匹配执行路径"
  },
  en: {
    heroTitle: "Connect Global Intelligence\nDrive Digital Future",
    heroSub: "Help businesses and individuals achieve digital upgrade",
    searchPlaceholder: "AI smart search...",
    card1: "Web Build", card2: "Smart Control", card3: "Quant Sense", card4: "Digital Academy",
    matchTitle: "Enter a goal, generate a plan",
    matchPlaceholder: "e.g. cross-border ecommerce",
    searchBtn: "Generate",
    resultEmpty: "Results appear here",
    contactTitle: "Ready to start?",
    contactSub: "Tell us your goal"
  },
  km: {
    heroTitle: "ភ្ជាប់បញ្ញាសកល\nជំរុញអនាគតឌីជីថល",
    heroSub: "ជួយធ្វើឌីជីថល",
    searchPlaceholder: "ស្វែងរក AI...",
    card1: "គេហទំព័រ", card2: "គ្រប់គ្រងឆ្លាត", card3: "វិភាគ", card4: "សាលា",
    matchTitle: "បញ្ចូលគោលដៅ",
    matchPlaceholder: "ឧទាហរណ៍",
    searchBtn: "បង្កើត",
    resultEmpty: "លទ្ធផល",
    contactTitle: "ត្រៀម?",
    contactSub: "ប្រាប់គោលដៅ"
  }
};

const TREE = {
  start: {
    title: "你更想先解决哪一类问题？",
    options: [
      { id: "web", label: "网站建设", desc: "官网 / 商城 / 落地页" },
      { id: "ai", label: "智控未来", desc: "AI工具 / 提示词 / 客服" },
      { id: "auto", label: "量化感知", desc: "自动化 / 订单 / 通知" },
      { id: "digital", label: "数字学院", desc: "课程 / 资料 / 教程" },
      { id: "other", label: "还不确定", desc: "先看看常见方向" }
    ]
  },
  web: {
    title: "网站建设里，你更需要哪个？",
    options: [
      { id: "web_site", label: "企业官网", desc: "品牌展示与咨询转化" },
      { id: "web_shop", label: "商城/跨境", desc: "商品展示与下单" },
      { id: "web_land", label: "落地页", desc: "投放转化单页" }
    ]
  },
  ai: {
    title: "AI方向里，你更想先做哪个？",
    options: [
      { id: "ai_start", label: "快速入门", desc: "三分钟上手常用提示词" },
      { id: "ai_prompt", label: "提示词库", desc: "写作/电商/客服模板" },
      { id: "ai_cs", label: "AI客服", desc: "自动回复与话术" }
    ]
  },
  auto: {
    title: "自动化里，你更关注什么？",
    options: [
      { id: "auto_order", label: "订单自动化", desc: "下单通知与流程" },
      { id: "auto_data", label: "运营数据", desc: "统计与复盘模板" }
    ]
  },
  digital: {
    title: "学习资料里，你更想要？",
    options: [
      { id: "dig_course", label: "入门课程", desc: "数字业务从0到1" },
      { id: "dig_mobile", label: "手机运营", desc: "只用手机做运营" }
    ]
  },
  other: {
    title: "先从这些常见需求里选一个：",
    options: [
      { id: "web", label: "先做网站", desc: "有展示和获客入口" },
      { id: "ai", label: "先用AI提效", desc: "写作/客服/内容" },
      { id: "auto", label: "先做自动化", desc: "减少重复操作" }
    ]
  }
};

const PLANS = {
  web_site: {
    title: "企业官网方案",
    summary: "适合品牌展示、业务介绍和咨询转化。",
    items: [
      { name: "企业展示官网模板", price: "99U", link: "order.html" },
      { name: "查看网站建设资源库", price: "", link: "web.html" }
    ]
  },
  web_shop: {
    title: "商城/跨境方案",
    summary: "适合商品展示、咨询和下单链路。",
    items: [
      { name: "跨境商城基础版", price: "149U", link: "order.html" },
      { name: "查看网站建设资源库", price: "", link: "web.html" }
    ]
  },
  web_land: {
    title: "落地页方案",
    summary: "适合投放测试和单页转化。",
    items: [
      { name: "高转化落地页模板", price: "49U", link: "order.html" },
      { name: "查看网站建设资源库", price: "", link: "web.html" }
    ]
  },
  ai_start: {
    title: "AI快速入门方案",
    summary: "适合想立刻会用 AI 写内容和做基础提效的人。",
    items: [
      { name: "三分钟玩转AI", price: "9.9U", link: "order.html" },
      { name: "查看智控未来资源库", price: "", link: "ai.html" }
    ]
  },
  ai_prompt: {
    title: "提示词方案",
    summary: "适合需要更多可直接套用的场景模板。",
    items: [
      { name: "AI提示词精选库", price: "29U", link: "order.html" },
      { name: "三分钟玩转AI", price: "9.9U", link: "order.html" }
    ]
  },
  ai_cs: {
    title: "AI客服方案",
    summary: "适合店铺/社群想先把常见回复自动化。",
    items: [
      { name: "AI客服自动回复方案", price: "49U", link: "order.html" },
      { name: "查看智控未来资源库", price: "", link: "ai.html" }
    ]
  },
  auto_order: {
    title: "订单自动化方案",
    summary: "适合想减少手动通知和订单整理的人。",
    items: [
      { name: "订单自动化基础方案", price: "149U", link: "order.html" },
      { name: "查看量化感知资源库", price: "", link: "automation.html" }
    ]
  },
  auto_data: {
    title: "运营数据方案",
    summary: "适合想先把数据统计和复盘跑起来。",
    items: [
      { name: "运营数据看板模板", price: "39U", link: "order.html" },
      { name: "查看量化感知资源库", price: "", link: "automation.html" }
    ]
  },
  dig_course: {
    title: "数字业务入门方案",
    summary: "适合想系统了解数字产品和自动交付。",
    items: [
      { name: "跨境数字业务入门", price: "129U", link: "order.html" },
      { name: "查看数字学院资源库", price: "", link: "digital.html" }
    ]
  },
  dig_mobile: {
    title: "手机运营方案",
    summary: "适合主要用手机完成内容与基础运营的人。",
    items: [
      { name: "手机端运营实操课", price: "59U", link: "order.html" },
      { name: "查看数字学院资源库", price: "", link: "digital.html" }
    ]
  }
};

let currentLang = "zh";
let step = 0;
let path = [];
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

function guessStart(q) {
  q = (q || "").toLowerCase();
  if (!q) return "start";
  if (/(网站|官网|商城|落地|建站|web|shop)/.test(q)) return "web";
  if (/(ai|提示|客服|写作|智能|chatgpt|视频)/.test(q)) return "ai";
  if (/(自动|订单|通知|数据|运营|量化)/.test(q)) return "auto";
  if (/(课程|教程|资料|学院|学习)/.test(q)) return "digital";
  return "start";
}

function paint(html) {
  const panel = document.getElementById("resultPanel");
  const hero = document.getElementById("heroResult");
  if (panel) panel.innerHTML = html;
  if (hero) hero.innerHTML = html;
}

function renderOptions(nodeId) {
  const node = TREE[nodeId];
  if (!node) return renderPlan(nodeId);

  let html = `<div class="result-card" style="background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;box-shadow:var(--shadow);text-align:left">
    <div style="font-size:12px;color:var(--muted);margin-bottom:8px">第 ${Math.min(step + 1, 3)} 次选择（最多3次）</div>
    <h3 style="margin:0 0 8px;font-size:18px;color:var(--text)">${node.title}</h3>
    <p style="color:var(--muted);font-size:13px;margin:0 0 14px">先选方向，确认后再给出方案</p>`;

  node.options.forEach(op => {
    html += `<button type="button" onclick="choose('${op.id}')" style="width:100%;text-align:left;margin:0 0 10px;padding:14px;border:1px solid var(--line);border-radius:12px;background:var(--bg);color:var(--text);cursor:pointer">
      <b style="font-size:15px">${op.label}</b>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">${op.desc}</div>
    </button>`;
  });

  if (step > 0) {
    html += `<button type="button" onclick="backStep()" style="margin-top:4px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:transparent;color:var(--muted);font-size:13px;cursor:pointer">← 返回上一步</button>`;
  }
  html += `</div>`;
  paint(html);
}

function renderPlan(planId) {
  const plan = PLANS[planId] || {
    title: "综合数字化方案",
    summary: "建议先从网站展示或 AI 提效其中一个方向开始。",
    items: [
      { name: "三分钟玩转AI", price: "9.9U", link: "order.html" },
      { name: "查看全部资源", price: "", link: "ai.html" }
    ]
  };

  let html = `<div class="result-card" style="background:var(--card);border:1px solid var(--line);border-radius:16px;padding:16px;box-shadow:var(--shadow);text-align:left">
    <div style="font-size:12px;color:var(--cyan);margin-bottom:8px">匹配完成</div>
    <h3 style="margin:0 0 8px;font-size:18px;color:var(--text)">${plan.title}</h3>
    <p style="color:var(--muted);font-size:14px;margin:0 0 14px">${plan.summary}</p>`;

  plan.items.forEach(it => {
    html += `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;padding:12px 0;border-bottom:1px solid var(--line)">
      <div style="text-align:left"><b style="font-size:14px;color:var(--text)">${it.name}</b></div>
      <div style="display:flex;gap:8px;align-items:center">
        ${it.price ? `<span style="color:var(--blue);font-weight:700;font-size:13px">${it.price}</span>` : ""}
        <a href="${it.link}" style="padding:8px 12px;border-radius:10px;background:linear-gradient(135deg,var(--blue),var(--purple));color:#fff;font-size:12px;font-weight:700;text-decoration:none">${it.price ? "去付款" : "查看"}</a>
      </div>
    </div>`;
  });

  html += `<button type="button" onclick="restart()" style="margin-top:14px;padding:10px 12px;border:1px solid var(--line);border-radius:10px;background:transparent;color:var(--muted);font-size:13px;cursor:pointer">重新匹配</button>`;
  html += `</div>`;
  paint(html);
}

function choose(id) {
  path.push(id);
  step += 1;

  if (PLANS[id] || step >= 3) {
    if (!PLANS[id]) {
      const fallback = [...path].reverse().find(x => PLANS[x]) || "ai_start";
      renderPlan(fallback);
      return;
    }
    renderPlan(id);
    return;
  }

  if (TREE[id]) renderOptions(id);
  else renderPlan(id);
}

function backStep() {
  if (step <= 0) return;
  path.pop();
  step -= 1;
  const cur = path[path.length - 1] || guessStart(lastQuery);
  if (TREE[cur]) renderOptions(cur);
  else renderOptions("start");
}

function restart() {
  step = 0;
  path = [];
  showPlan(lastQuery || "");
}

function showPlan(q) {
  lastQuery = q || "";
  step = 0;
  path = [];
  try {
    const demands = JSON.parse(localStorage.getItem("gyx_demands") || "[]");
    demands.unshift({ q: lastQuery, date: new Date().toLocaleString() });
    localStorage.setItem("gyx_demands", JSON.stringify(demands.slice(0, 50)));
  } catch (e) {}

  const startId = guessStart(lastQuery);
  if (startId !== "start" && TREE[startId]) {
    path = [startId];
    step = 1;
    renderOptions(startId);
  } else {
    renderOptions("start");
  }
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

  document.querySelectorAll("[data-q]").forEach(b => {
    b.onclick = () => showPlan(b.dataset.q);
  });

  [["mainSearch", "mainSearchInput"], ["matchSearch", "matchInput"]].forEach(([f, i]) => {
    const form = document.getElementById(f);
    if (!form) return;
    form.onsubmit = e => {
      e.preventDefault();
      showPlan(document.getElementById(i).value);
    };
  });
});