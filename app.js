
const T={
zh:{lang:"中文",hero1:"全球智慧连接",hero2:"驱动数字未来",heroDesc:"帮助个人和企业，更快找到真正适合自己的数字解决方案。",search:"输入您的需求，系统为您智能匹配解决方案",web:"网站建设",ai:"人工智能",auto:"自动化运营",digital:"数字化方案",services:"六大数字能力",servicesDesc:"从开发到运营，从数据到安全，用统一体系连接每一个数字环节。",products:"精选数字解决方案",productsDesc:"先提供可直接下单的基础方案，后台可随时修改产品、价格和内容。",flow:"从需求到交付",flowDesc:"搜索、匹配、下单、交付，四步完成。",contact:"从一个问题开始",contactDesc:"告诉我们您现在需要解决的问题。",contactBtn:"联系平台",order:"立即下单",favorite:"收藏",saved:"已收藏",price:"USDT",searchTitle:"智能搜索结果",noResult:"暂时没有完全匹配的产品，您的需求已经记录。",name:"姓名",email:"邮箱或Telegram",need:"具体需求",submit:"提交订单",orderTitle:"订单信息",success:"订单已保存。后台接入后将发送Telegram和邮件通知。",catWeb:"网站建设",catAi:"人工智能",catAuto:"自动化运营",catDigital:"数字化方案"},
en:{lang:"English",hero1:"Global Intelligence",hero2:"Driving Digital Futures",heroDesc:"Helping individuals and businesses find the right digital solutions faster.",search:"Describe your needs for intelligent matching",web:"Website Development",ai:"Artificial Intelligence",auto:"Automation Operations",digital:"Digital Solutions",services:"Six Digital Capabilities",servicesDesc:"One unified system connecting development, operations, data and security.",products:"Selected Digital Solutions",productsDesc:"Ready-to-order starter solutions. Products, prices and content remain editable from the admin page.",flow:"From Need to Delivery",flowDesc:"Search, match, order and delivery in four steps.",contact:"Start With One Problem",contactDesc:"Tell us what you need to solve.",contactBtn:"Contact Platform",order:"Order Now",favorite:"Save",saved:"Saved",price:"USDT",searchTitle:"Smart Search Results",noResult:"No exact product match yet. Your demand has been recorded.",name:"Name",email:"Email or Telegram",need:"Your requirement",submit:"Submit Order",orderTitle:"Order Information",success:"Order saved. Telegram and email delivery can be connected later.",catWeb:"Website",catAi:"AI",catAuto:"Automation",catDigital:"Digital"},
km:{lang:"ខ្មែរ",hero1:"ភ្ជាប់បញ្ញាសកល",hero2:"ជំរុញអនាគតឌីជីថល",heroDesc:"ជួយបុគ្គល និងអាជីវកម្មស្វែងរកដំណោះស្រាយឌីជីថលសមស្របបានលឿន។",search:"បញ្ចូលតម្រូវការរបស់អ្នក",web:"ការអភិវឌ្ឍគេហទំព័រ",ai:"បញ្ញាសិប្បនិម្មិត",auto:"ប្រតិបត្តិការស្វ័យប្រវត្តិ",digital:"ដំណោះស្រាយឌីជីថល",services:"សមត្ថភាពឌីជីថល ៦",servicesDesc:"ប្រព័ន្ធតែមួយភ្ជាប់ការអភិវឌ្ឍ ប្រតិបត្តិការ ទិន្នន័យ និងសុវត្ថិភាព។",products:"ដំណោះស្រាយឌីជីថលជ្រើសរើស",productsDesc:"ដំណោះស្រាយអាចបញ្ជាទិញបាន ហើយអាចកែប្រែតាមផ្នែកគ្រប់គ្រង។",flow:"ពីតម្រូវការដល់ការបញ្ជូន",flowDesc:"ស្វែងរក ផ្គូផ្គង បញ្ជាទិញ និងបញ្ជូន។",contact:"ចាប់ផ្តើមពីបញ្ហាមួយ",contactDesc:"ប្រាប់យើងពីបញ្ហាដែលអ្នកចង់ដោះស្រាយ។",contactBtn:"ទាក់ទងវេទិកា",order:"បញ្ជាទិញឥឡូវ",favorite:"រក្សាទុក",saved:"បានរក្សាទុក",price:"USDT",searchTitle:"លទ្ធផលស្វែងរកឆ្លាតវៃ",noResult:"មិនទាន់មានផលិតផលផ្គូផ្គងពេញលេញ។ តម្រូវការរបស់អ្នកត្រូវបានកត់ត្រា។",name:"ឈ្មោះ",email:"អ៊ីមែល ឬ Telegram",need:"តម្រូវការជាក់លាក់",submit:"ដាក់ស្នើការបញ្ជាទិញ",orderTitle:"ព័ត៌មានការបញ្ជាទិញ",success:"ការបញ្ជាទិញត្រូវបានរក្សាទុក។",catWeb:"គេហទំព័រ",catAi:"AI",catAuto:"ស្វ័យប្រវត្តិ",catDigital:"ឌីជីថល"}
};
let lang=localStorage.getItem("gyx_lang")||"zh";
let products=JSON.parse(localStorage.getItem("gyx_products")||document.getElementById("seedProducts").textContent);
let favs=JSON.parse(localStorage.getItem("gyx_favs")||"[]");
function tr(k){return T[lang][k]||k}
function setLang(l){lang=l;localStorage.setItem("gyx_lang",l);document.documentElement.lang=l==="zh"?"zh-CN":l;renderText();renderProducts(products);document.getElementById("langMenu").classList.remove("show")}
function renderText(){document.getElementById("langBtn").textContent=tr("lang")+" ▾";document.querySelectorAll("[data-t]").forEach(e=>e.textContent=tr(e.dataset.t));document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=tr(e.dataset.ph))}
function catName(c){return tr(c==="web"?"catWeb":c==="ai"?"catAi":c==="auto"?"catAuto":"catDigital")}
function renderProducts(list){
 const box=document.getElementById("productGrid");
 box.innerHTML=list.map(p=>`<article class="product"><div class="cat">${catName(p.category)}</div><h3>${p.title[lang]||p.title.zh}</h3><p>${p.desc[lang]||p.desc.zh}</p><div class="price">${p.price} ${tr("price")}</div><div class="actions"><button class="fav" onclick="toggleFav('${p.id}',this)">${favs.includes(p.id)?tr("saved"):tr("favorite")}</button><button class="buy" onclick="openOrder('${p.id}')">${tr("order")}</button></div></article>`).join("")
}
function toggleFav(id,btn){favs=favs.includes(id)?favs.filter(x=>x!==id):[...favs,id];localStorage.setItem("gyx_favs",JSON.stringify(favs));btn.textContent=favs.includes(id)?tr("saved"):tr("favorite")}
function searchNow(q){
 q=(q||document.getElementById("searchInput").value).trim().toLowerCase();
 const map={网站:"web",网页:"web",website:"web",ai:"ai",人工智能:"ai",自动:"auto",automation:"auto",数字:"digital",digital:"digital"};
 let cat=Object.keys(map).find(k=>q.includes(k))?map[Object.keys(map).find(k=>q.includes(k))]:null;
 const result=cat?products.filter(p=>p.category===cat):products.filter(p=>(p.title.zh+p.title.en+p.desc.zh+p.desc.en).toLowerCase().includes(q));
 document.getElementById("products").scrollIntoView({behavior:"smooth"});
 document.getElementById("searchResultTitle").textContent=tr("searchTitle");
 if(result.length){renderProducts(result)}else{
   const demands=JSON.parse(localStorage.getItem("gyx_demands")||"[]");demands.push({q,date:new Date().toISOString(),lang});localStorage.setItem("gyx_demands",JSON.stringify(demands));
   document.getElementById("productGrid").innerHTML=`<div class="product" style="grid-column:1/-1"><h3>${tr("noResult")}</h3><p>${q}</p></div>`
 }
}
function openOrder(id){const p=products.find(x=>x.id===id);document.getElementById("orderProduct").value=p.title[lang]||p.title.zh;document.getElementById("orderModal").classList.add("show")}
function closeModal(){document.getElementById("orderModal").classList.remove("show")}
function submitOrder(e){e.preventDefault();const f=new FormData(e.target);const orders=JSON.parse(localStorage.getItem("gyx_orders")||"[]");orders.push(Object.fromEntries(f.entries()));localStorage.setItem("gyx_orders",JSON.stringify(orders));alert(tr("success"));closeModal();e.target.reset()}
document.getElementById("langBtn").onclick=()=>document.getElementById("langMenu").classList.toggle("show");
document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>setLang(b.dataset.lang));
document.getElementById("searchBtn").onclick=()=>searchNow();document.getElementById("searchInput").onkeydown=e=>{if(e.key==="Enter")searchNow()};
document.querySelectorAll("[data-cat]").forEach(c=>c.onclick=()=>{const p=products.filter(x=>x.category===c.dataset.cat);document.getElementById("products").scrollIntoView({behavior:"smooth"});renderProducts(p)});
document.getElementById("contactBtn").onclick=()=>document.getElementById("orderModal").classList.add("show");
renderText();renderProducts(products);
