const statusLabels={confirmed:'Confirmed',planned:'Planned',need:'Need to book',optional:'Optional'};
const pages=[['index.html','首頁'],['itinerary.html','17 天總覽'],['nyc.html','New York'],['new-england.html','Boston＋Beverly'],['philadelphia.html','Philadelphia'],['dc.html','Washington, DC'],['logistics.html','票券與待辦']];

const trip={
 start:'2026-09-19T00:00:00+08:00',end:'2026-10-05T23:59:59+08:00',
 itinerary:[
  {date:'9/19',day:'SAT',city:'New York',page:'nyc.html#nyc-0919',title:'Taipei → New York',summary:'CI12 抵達 JFK；第一晚只完成入境、進城與睡覺。',route:'TPE T2 17:40 → JFK T4 20:40 → 朋友家',status:'confirmed',images:['nyc-sunset.jpg','nyc-grand-central.jpg','nyc-washington-square.jpg']},
  {date:'9/20',day:'SUN',city:'New York',page:'nyc.html#nyc-0920',title:'West Side 慢速開場',summary:'High Line、Hudson 河岸與 Village；調時差也要有紐約感。',route:'Chelsea → High Line → Little Island → West Village',status:'planned',images:['nyc-high-line.jpg','nyc-washington-square.jpg','nyc-sunset.jpg']},
  {date:'9/21',day:'MON',city:'New York',page:'nyc.html#nyc-0921',title:'Lower East Side 食物日',summary:'Katz’s 放回街區脈絡裡，沿著 LES 慢慢走進 East Village。',route:'Essex Market → Katz’s → Orchard St → East Village',status:'planned',images:['katz-pastrami.jpg','nyc-washington-square.jpg','nyc-jackson-heights.jpg']},
  {date:'9/22',day:'TUE',city:'New York',page:'nyc.html#nyc-0922',title:'Brooklyn 的日常與日落',summary:'Williamsburg、Greenpoint 與水岸，不重跑第一次的 DUMBO 清單。',route:'Bedford Ave → Domino Park → Greenpoint → Transmitter Park',status:'planned',images:['nyc-williamsburg.jpg','nyc-sunset.jpg','nyc-high-line.jpg']},
  {date:'9/23',day:'WED',city:'New York',page:'nyc.html#nyc-0923',title:'Queens 食物＋劇場夜',summary:'Jackson Heights 少量多吃；晚上留給這趟最值得的一場表演。',route:'Jackson Heights → 休息 → Midtown theatre',status:'planned',images:['nyc-jackson-heights.jpg','nyc-grand-central.jpg','nyc-sunset.jpg']},
  {date:'9/24',day:'THU',city:'New York',page:'nyc.html#nyc-0924',title:'Midtown＋Keens',summary:'白天把活動收斂在 Midtown，18:00 七人晚餐是固定錨點。',route:'NYPL → Grand Central → Keens 18:00 → 飯後散步',status:'confirmed',images:['nyc-grand-central.jpg','nyc-washington-square.jpg','katz-pastrami.jpg']},
  {date:'9/25',day:'FRI',city:'Transit',page:'nyc.html#nyc-0925',title:'New York → Boston',summary:'白天只做一件小事；19:12 的 Train 176 不能失手。',route:'Manhattan → Moynihan 18:40 → Boston 23:50',status:'confirmed',images:['nyc-grand-central.jpg','nyc-high-line.jpg','boston-old-state-house.jpg']},
  {date:'9/26',day:'SAT',city:'Boston',page:'new-england.html#ne-0926',title:'唯一完整 Boston 日',summary:'從 Beacon Hill 接上 Freedom Trail，再把黃昏留給 North End 與港邊。',route:'Common → Beacon Hill → Freedom Trail → North End → Harborwalk',status:'planned',images:['boston-beacon-hill.jpg','boston-old-state-house.jpg','boston-north-end.jpg']},
  {date:'9/27',day:'SUN',city:'Beverly',page:'new-england.html#ne-0927',title:'Tupper Manor Wedding',summary:'今天不是景點日；海岸、朋友與婚禮才是整趟唯一不可複製的內容。',route:'住宿 → Beverly → Tupper Manor → 已訂住宿',status:'confirmed',images:['beverly-tupper-manor.jpg','beverly-coast.jpg','beverly-west-beach.jpg']},
  {date:'9/28',day:'MON',city:'Road trip',page:'new-england.html#ne-0928',title:'North Shore → Philadelphia',summary:'搭同學便車南下，婚禮隔天不再回 Boston 換乘火車。',route:'早餐／會合 → 公路南下 → 同學家',status:'confirmed',images:['beverly-coast.jpg','beverly-endicott-pond.jpg','philly-independence-hall.jpg']},
  {date:'9/29',day:'TUE',city:'Philadelphia',page:'philadelphia.html#phl-0929',title:'建國史主線',summary:'Independence Hall 是骨架，Reading Terminal 是午休，Old City 是餘韻。',route:'Independence Hall → Liberty Bell → Reading Terminal → Old City',status:'planned',images:['philly-independence-hall.jpg','philly-liberty-bell.jpg','reading-terminal.jpg']},
  {date:'9/30',day:'WED',city:'Transit',page:'philadelphia.html#phl-0930',title:'Philadelphia → Washington',summary:'早上搭 Amtrak；抵達後只走不需門票的 Georgetown。',route:'30th Street → Union Station → 住宿 → Georgetown',status:'need',images:['reading-terminal.jpg','dc-georgetown.jpg','dc-capitol.jpg']},
  {date:'10/1',day:'THU',city:'Washington, DC',page:'dc.html#dc-1001',title:'Capitol Hill 制度核心',summary:'Capitol 與 Library of Congress 排成同一組，減少安檢與跨區折返。',route:'Capitol → Supreme Court exterior → Library of Congress',status:'need',images:['dc-capitol.jpg','dc-library-congress.jpg','dc-lincoln-memorial.jpg']},
  {date:'10/2',day:'FRI',city:'Washington, DC',page:'dc.html#dc-1002',title:'Smithsonian＋紀念碑夜走',summary:'白天只選一間大館，留體力給日落後真正有記憶點的 Mall。',route:'Air & Space／NMAAHC 二選一 → WWII → Lincoln',status:'need',images:['dc-lincoln-memorial.jpg','dc-capitol.jpg','dc-library-congress.jpg']},
  {date:'10/3',day:'SAT',city:'Washington, DC',page:'dc.html#dc-1003',title:'自由選擇＋前往 IAD',summary:'第二間館或 Arlington 擇一；晚餐後立刻切換成離境模式。',route:'彈性半日 → 早晚餐 → 取行李 → IAD',status:'planned',images:['dc-georgetown.jpg','ethiopian-platter.jpg','dc-lincoln-memorial.jpg']},
  {date:'10/4',day:'SUN',city:'Flight',page:'dc.html#dc-1003',title:'Washington → Taipei',summary:'01:15 從 IAD 起飛；這張回程票已開立。',route:'IAD 01:15 → 跨越國際換日線',status:'confirmed',images:['dc-lincoln-memorial.jpg','dc-capitol.jpg','nyc-sunset.jpg']},
  {date:'10/5',day:'MON',city:'Taipei',page:'itinerary.html#day-17',title:'抵達 Taipei',summary:'05:10 抵達 TPE Terminal 2，上午不排不可移動的承諾。',route:'TPE T2 → 入境／領行李 → 回家',status:'confirmed',images:['nyc-sunset.jpg','boston-beacon-hill.jpg','philly-independence-hall.jpg']}
 ],
 bookings:[
  {type:'FLIGHT · TICKETED',date:'9/19',title:'CI12 · Taipei → New York',facts:['17:40 · TPE Terminal 2','20:40 · JFK Terminal 4','Economy','託運 2 × 23 kg；手提 1 × 7 kg']},
  {type:'DINNER · RESERVED',date:'9/24',title:'Keens Steakhouse',facts:['18:00 · 7 位','72 W 36th St','遲到保留 15 分鐘','至少提前 24 小時取消']},
  {type:'TRAIN · TICKETED',date:'9/25',title:'Northeast Regional 176',facts:['19:12 · Moynihan Train Hall','23:50 · Boston South Station','Coach Seat','18:40 前抵達車站']},
  {type:'LODGING · RESERVED',date:'9/25 → 9/26',title:'HI Boston Hostel',facts:['19 Stuart Street','9/26 11:00 前退房','00:00–01:00 抵達已通知','訂位碼未公開']},
  {type:'LODGING · RESERVED',date:'9/26 → 9/27',title:'9/26 住宿',facts:['已預訂','不再是缺口','名稱與地址不公開','隔天交通依位置安排']},
  {type:'WEDDING + LODGING',date:'9/27',title:'Tupper Manor Wedding',facts:['295 Hale St, Beverly','下午至約 22:00','當晚住宿已預訂','不在婚禮後跨城']},
  {type:'RIDE + HOSTING',date:'9/28 → 9/30',title:'Philadelphia with classmate',facts:['同學便車南下','Philadelphia 住同學家','不需 Boston → Philly 火車','出發前確認會合與行李']},
  {type:'RETURN · TICKETED',date:'10/4 → 10/5',title:'Washington → Taipei',facts:['10/4 01:15 · IAD','10/5 05:10 · TPE T2','機票已開票','10/3 晚上前往機場']}
 ],
 transport:[
  ['01','9/19 · FLIGHT','TPE → JFK','CI12 · 17:40 → 20:40','confirmed'],['02','9/25 · TRAIN','New York → Boston','Train 176 · 19:12 → 23:50','confirmed'],
  ['03','9/27 · LOCAL','Boston／North Shore → Beverly','依住宿位置與週日班次決定','planned'],['04','9/28 · CAR','Beverly → Philadelphia','同學便車 · 已安排','confirmed'],
  ['05','9/30 · TRAIN','Philadelphia → Washington, DC','早上出發 · 尚未訂票','need'],['06','10/3 · METRO / CAR','DC → IAD','Silver Line 或 rideshare','planned'],
  ['07','10/4 · FLIGHT','IAD → TPE','01:15 → 10/5 05:10 · 已開票','confirmed']
 ],
 actions:{
  high:[['train-0930','預訂 9/30 Philadelphia → DC Amtrak'],['lodging-dc','預訂 Washington, DC 住宿'],['independence-entry','確認／預約 Independence Hall timed entry'],['capitol-tour','預約 U.S. Capitol tour'],['loc-entry','預約 Library of Congress timed entry'],['smithsonian-entry','預約 Air & Space 或 NMAAHC timed entry']],
  medium:[['nyc-show','決定 9/23 Broadway／Off-Broadway'],['nyc-comedy','決定是否安排 Comedy Cellar 早場'],['barnes','決定 Barnes Foundation 是否預約'],['dc-ethiopian','選定 DC Ethiopian restaurant'],['iad-transfer','確認 10/3 前往 IAD 的方式與出發時間']],
  packing:[['passport','護照、ESTA、保險資料'],['tickets','離線保存機票、Amtrak 與住宿截圖'],['wedding','婚禮服裝與正式鞋分袋'],['layers','薄外套與洋蔥式穿搭'],['rain','小雨傘／防水外套'],['power','行動電源、充電線、轉接頭'],['network','eSIM／網路方案'],['sleep','耳塞與眼罩']]
 }
};

const $=(selector,root=document)=>root.querySelector(selector);
const $$=(selector,root=document)=>[...root.querySelectorAll(selector)];
const storage={get(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}},set(key,value){try{localStorage.setItem(key,JSON.stringify(value))}catch{}},remove(key){try{localStorage.removeItem(key)}catch{}}};
const badge=(status,label=statusLabels[status])=>`<span class="status-badge status-${status}">${label}</span>`;

function renderNav(){
 const nav=$('#siteNav');if(!nav)return;
 const active=location.pathname.split('/').pop()||'index.html';
 nav.innerHTML=pages.map(([href,label])=>`<a href="${href}"${href===active?' aria-current="page"':''}>${label}</a>`).join('');
}

function renderItinerary(){
 const grid=$('#itineraryGrid');if(!grid)return;
 const filter=$('#cityFilters');
 const cities=['全部','New York','Boston','Beverly','Philadelphia','Washington, DC','移動／飛行'];
 if(filter)filter.innerHTML=cities.map((city,index)=>`<button class="filter-btn${index===0?' active':''}" type="button" data-filter="${city}" aria-pressed="${index===0}">${city}</button>`).join('');
 grid.innerHTML=trip.itinerary.map((item,index)=>`
  <article class="journey-card" id="day-${index+1}" data-city="${item.city}">
   <a class="journey-gallery" href="${item.page}" aria-label="打開 ${item.title} 詳細行程">
    ${item.images.map((image,photoIndex)=>`<img src="images/${image}" alt="" width="720" height="480" loading="${index<2&&photoIndex===0?'eager':'lazy'}" decoding="async" />`).join('')}
   </a>
   <div class="journey-copy">
    <div class="journey-meta"><span>${String(index+1).padStart(2,'0')}</span><div><small>${item.date} · ${item.day}</small><strong>${item.city}</strong></div>${badge(item.status)}</div>
    <h2>${item.title}</h2><p>${item.summary}</p>
    <div class="mini-route"><span>ROUTE</span>${item.route}</div>
    <a class="text-link" href="${item.page}">打開詳細行程 <span>→</span></a>
   </div>
  </article>`).join('');
 if(!filter)return;
 $$('.filter-btn',filter).forEach(button=>button.addEventListener('click',()=>{
  $$('.filter-btn',filter).forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-pressed',item===button?'true':'false')});
  const value=button.dataset.filter;
  $$('.journey-card',grid).forEach(card=>{const transit=['Transit','Road trip','Flight','Taipei'].includes(card.dataset.city);card.hidden=value!=='全部'&&!(value==='移動／飛行'?transit:card.dataset.city===value)});
 }));
}

function renderBookings(){
 const grid=$('#bookingGrid');if(!grid)return;
 grid.innerHTML=trip.bookings.map(item=>`<article class="booking-card"><div class="booking-head"><div><span class="micro-label">${item.type}</span><h3>${item.title}</h3></div><div class="booking-date"><strong>${item.date}</strong>${badge('confirmed')}</div></div><ul>${item.facts.map(fact=>`<li>${fact}</li>`).join('')}</ul></article>`).join('');
}

function renderTransport(){
 const list=$('#transportList');if(!list)return;
 list.innerHTML=trip.transport.map(item=>`<article class="transport-row"><span class="transport-index">${item[0]}</span><div><small>${item[1]}</small><h3>${item[2]}</h3></div><div class="transport-state">${badge(item[4])}<span>${item[3]}</span></div></article>`).join('');
}

function renderChecklist(type,target){
 const root=$(target);if(!root)return;
 const saved=storage.get(`ec2026-${type}`,{});
 root.innerHTML=trip.actions[type].map(([id,text])=>`<label class="check-item${saved[id]?' done':''}"><input type="checkbox" data-checklist="${type}" data-item-id="${id}" ${saved[id]?'checked':''}/><span>${text}</span></label>`).join('');
}

function initChecklists(){
 const configs={high:'#highPriorityChecklist',medium:'#mediumPriorityChecklist',packing:'#packingChecklist'};
 Object.entries(configs).forEach(([type,target])=>renderChecklist(type,target));
 document.addEventListener('change',event=>{if(!event.target.matches('[data-checklist]'))return;const type=event.target.dataset.checklist;const saved=storage.get(`ec2026-${type}`,{});saved[event.target.dataset.itemId]=event.target.checked;storage.set(`ec2026-${type}`,saved);event.target.closest('.check-item').classList.toggle('done',event.target.checked)});
 $$('[data-reset]').forEach(button=>button.addEventListener('click',()=>{const type=button.dataset.reset;storage.remove(`ec2026-${type}`);renderChecklist(type,configs[type])}));
}

function initNotes(){
 const notes=$('#tripNotes');if(!notes)return;
 try{notes.value=localStorage.getItem('ec2026-notes')||''}catch{}
 let timer;notes.addEventListener('input',()=>{const state=$('#saveState');if(state)state.textContent='儲存中…';clearTimeout(timer);timer=setTimeout(()=>{try{localStorage.setItem('ec2026-notes',notes.value);if(state)state.textContent='已儲存'}catch{if(state)state.textContent='無法儲存'}},300)});
}

function initTheme(){
 let saved;try{saved=localStorage.getItem('ec2026-theme')}catch{saved=null}
 document.documentElement.dataset.theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
 const button=$('#themeToggle');if(!button)return;
 button.addEventListener('click',()=>{const next=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=next;const meta=$('meta[name="theme-color"]');if(meta)meta.content=next==='dark'?'#0b151d':'#132a3a';try{localStorage.setItem('ec2026-theme',next)}catch{}});
}

function initCountdown(){
 const target=$('#countdownText');if(!target)return;
 const now=new Date(),start=new Date(trip.start),end=new Date(trip.end),days=Math.ceil((start-now)/86400000);
 target.textContent=days>0?`距離出發還有 ${days} 天`:now<=end?'旅程進行中':'旅程已結束';
}

function toast(message){const target=$('#toast');if(!target)return;target.textContent=message;target.classList.add('show');setTimeout(()=>target.classList.remove('show'),1800)}
function initActions(){
 const print=$('#printBtn');if(print)print.addEventListener('click',()=>window.print());
 const copy=$('#copySummaryBtn');if(copy)copy.addEventListener('click',async()=>{const summary='East Coast 2026\n9/19 CI12 TPE → JFK（已開票）\n9/24 18:00 Keens · 7 位\n9/25 Train 176 19:12 → Boston 23:50\n9/26、9/27 住宿已訂\n9/28 同學便車回 Philadelphia；住同學家\n9/30 前往 DC（火車與住宿待訂）\n10/4 01:15 IAD → TPE（已開票）';try{await navigator.clipboard.writeText(summary);toast('行程摘要已複製')}catch{toast('瀏覽器未允許剪貼簿權限')}});
}

renderNav();renderItinerary();renderBookings();renderTransport();initChecklists();initNotes();initTheme();initCountdown();initActions();
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))navigator.serviceWorker.register('./sw.js').catch(()=>{});
