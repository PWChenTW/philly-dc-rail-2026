const statusLabels = { confirmed: '已鎖定', planned: '已排好', watch: '待追蹤', optional: '可選' };
const pages = [
  ['index.html', '首頁'], ['itinerary.html', '逐日路線'], ['nyc.html', 'New York'],
  ['food.html', '吃什麼'], ['new-england.html', 'New England'],
  ['philadelphia.html', 'Philadelphia'], ['dc.html', 'Washington, DC'], ['logistics.html', 'Control Room']
];

const trip = {
  start: '2026-09-19T17:40:00+08:00',
  end: '2026-10-05T05:10:00+08:00',
  itinerary: [
    { date:'9/19', day:'SAT', city:'New York', page:'nyc.html#nyc-0919', title:'Taipei → New York', summary:'CI12 抵達 JFK；第一晚只做入境、跨河、睡覺三件事。', route:'TPE 17:40 → JFK 20:40 → Weehawken', status:'confirmed', images:['nyc-new-amsterdam.jpg','nyc-sunset.jpg','nyc-grand-central.jpg','nyc-washington-square.jpg'] },
    { date:'9/20', day:'SUN', city:'New York', page:'nyc.html#nyc-0920', title:'Broadway 開場日', summary:'Joe’s 早午餐、13:00《Aladdin》，散場把黃昏交給 High Line。', route:'Joe’s → Aladdin 13:00 → High Line → Village', status:'confirmed', images:['nyc-pizza.jpg','nyc-new-amsterdam.jpg','nyc-high-line.jpg','nyc-washington-square.jpg'] },
    { date:'9/21', day:'MON', city:'New York', page:'nyc.html#nyc-0921', title:'Lower East Side 食物日', summary:'Katz’s 不是晚餐；晚間 20:00 Soothr 才是固定錨點。', route:'Bagel → Katz’s → East Village → Soothr 20:00', status:'confirmed', images:['katz-pastrami.jpg','nyc-washington-square.jpg','nyc-jackson-heights.jpg','nyc-pizza.jpg'] },
    { date:'9/22', day:'TUE', city:'New York', page:'nyc.html#nyc-0922', title:'Brooklyn 到傾城', summary:'白天沿 Williamsburg 水岸走，L’Industrie 當午餐；晚餐去傾城 walk-in。', route:'Williamsburg → L’Industrie → Greenpoint → Café China', status:'planned', images:['nyc-williamsburg.jpg','nyc-sunset.jpg','nyc-pizza.jpg','nyc-high-line.jpg'] },
    { date:'9/23', day:'WED', city:'New York', page:'nyc.html#nyc-0923', title:'兩個舞台，一席晚餐', summary:'Cho Dang Gol 午餐；19:00《Maybe Happy Ending》後直奔 21:15 Moono。', route:'Cho Dang Gol → Belasco 19:00 → Moono 21:15', status:'confirmed', images:['nyc-grand-central.jpg','nyc-new-amsterdam.jpg','nyc-sunset.jpg','nyc-jackson-heights.jpg'] },
    { date:'9/24', day:'THU', city:'New York', page:'nyc.html#nyc-0924', title:'Midtown 壓軸', summary:'Ellen’s 早午餐、城市室內景觀，18:00 與七位朋友在 Keens 收尾。', route:'Ellen’s → NYPL → Grand Central → Keens 18:00', status:'confirmed', images:['nyc-new-amsterdam.jpg','nyc-grand-central.jpg','nyc-washington-square.jpg','katz-pastrami.jpg'] },
    { date:'9/25', day:'FRI', city:'Transit', page:'nyc.html#nyc-0925', title:'跟朋友開去 Boston', summary:'主方案改為朋友載往 Boston；原 Train 176 保留到開車確定後取消。', route:'Weehawken → road trip → Boston → Meco', status:'planned', images:['nyc-sunset.jpg','nyc-grand-central.jpg','boston-beacon-hill.jpg','boston-old-state-house.jpg'] },
    { date:'9/26', day:'SAT', city:'Boston', page:'new-england.html#ne-0926', title:'Boston 一日長鏡頭', summary:'從 Beacon Hill 接上精選 Freedom Trail，黃昏停在 North End 與港邊。', route:'Common → Beacon Hill → Freedom Trail → North End', status:'planned', images:['boston-beacon-hill.jpg','boston-public-garden.jpg','boston-old-state-house.jpg','boston-north-end.jpg'] },
    { date:'9/27', day:'SUN', city:'Beverly', page:'new-england.html#ne-0927', title:'Tupper Manor Wedding', summary:'今天不追景點；海岸、朋友與婚禮就是全程唯一不可複製的一天。', route:'Beverly → Tupper Manor → 住宿', status:'confirmed', images:['beverly-tupper-manor.jpg','beverly-coast.jpg','beverly-endicott-pond.jpg','beverly-west-beach.jpg'] },
    { date:'9/28', day:'MON', city:'Transit', page:'new-england.html#ne-0928', title:'Boston → Philadelphia', summary:'朋友送到 South Station；11:40 的 Train 173 直達 Philadelphia。', route:'South Station 11:40 → 30th Street 17:29', status:'confirmed', images:['boston-old-state-house.jpg','philly-30th-street.jpg','reading-terminal.jpg','philly-independence-hall.jpg'] },
    { date:'9/29', day:'TUE', city:'Philadelphia', page:'philadelphia.html#phl-0929', title:'建國史，準時開場', summary:'10:50 前到安檢；11:20 Independence Hall 已訂，之後串 Liberty Bell 與 Old City。', route:'Independence Hall 11:20 → Liberty Bell → Old City', status:'confirmed', images:['philly-independence-hall.jpg','philly-liberty-bell.jpg','philly-elfreths-alley.jpg','reading-terminal.jpg'] },
    { date:'9/30', day:'WED', city:'Transit', page:'philadelphia.html#phl-0930', title:'Philadelphia → Washington', summary:'Train 141 早班南下；11:47 抵達 Union Station，下午只做城市暖身。', route:'30th Street 09:50 → Union Station 11:47 → U Street', status:'confirmed', images:['philly-30th-street.jpg','dc-capitol.jpg','dc-u-street.jpg','dc-georgetown.jpg'] },
    { date:'10/1', day:'THU', city:'Washington, DC', page:'dc.html#dc-1001', title:'民主制度的一天', summary:'10:20 Capitol、13:00 Library of Congress，15:15 之後 National Archives。', route:'Capitol 10:20 → LOC 13:00 → Archives', status:'confirmed', images:['dc-capitol.jpg','dc-library-congress.jpg','dc-archives.jpg','dc-georgetown.jpg'] },
    { date:'10/2', day:'FRI', city:'Washington, DC', page:'dc.html#dc-1002', title:'雙館行軍＋紀念碑夜走', summary:'10:00 Air & Space、13:00 NMAAHC 都已訂；日落後沿 Reflecting Pool 走到 Lincoln。', route:'Air & Space 10:00 → NMAAHC 13:00 → Lincoln', status:'confirmed', images:['dc-air-space.jpg','dc-nmaahc.jpg','dc-lincoln-memorial.jpg','dc-capitol.jpg'] },
    { date:'10/3', day:'SAT', city:'Washington, DC', page:'dc.html#dc-1003', title:'自由半日，準時離境', summary:'Natural History 或 Washington Monument 擇一；20:15–20:30 離開 U Street 前往 IAD。', route:'彈性半日 → 取行李 → IAD', status:'planned', images:['dc-nmaahc.jpg','dc-georgetown.jpg','ethiopian-platter.jpg','dc-lincoln-memorial.jpg'] },
    { date:'10/4', day:'SUN', city:'Flight', page:'dc.html#dc-1003', title:'Washington → Taipei', summary:'01:15 從 IAD 起飛；真正的離境行動都在 10/3 晚上完成。', route:'IAD 01:15 → BR3 → 跨越換日線', status:'confirmed', images:['dc-lincoln-memorial.jpg','dc-capitol.jpg','nyc-sunset.jpg','boston-beacon-hill.jpg'] },
    { date:'10/5', day:'MON', city:'Taipei', page:'itinerary.html#day-17', title:'抵達 Taipei', summary:'05:10 抵達 TPE Terminal 2，上午不排任何不可移動的承諾。', route:'TPE T2 → 入境／領行李 → 回家', status:'confirmed', images:['nyc-sunset.jpg','boston-beacon-hill.jpg','philly-independence-hall.jpg','dc-lincoln-memorial.jpg'] }
  ],
  bookings: [
    { type:'FLIGHT · TICKETED', date:'9/19', title:'CI12 · Taipei → New York', facts:['17:40 · TPE Terminal 2','20:40 · JFK Terminal 4','Economy','託運 2 × 23 kg；手提 1 × 7 kg'] },
    { type:'BROADWAY · TICKETED', date:'9/20', title:'Aladdin', facts:['13:00 · New Amsterdam Theatre','Mezzanine · Row JJ · Seat 107','約 15:30 散場','Mobile ticket'] },
    { type:'DINNER · RESERVED', date:'9/21', title:'Soothr', facts:['20:00','已訂位','Lower Manhattan 晚餐錨點','白天 Katz’s 控制份量'] },
    { type:'BROADWAY · TICKETED', date:'9/23', title:'Maybe Happy Ending', facts:['19:00 · Belasco Theatre','Center Mezz · Row F · Seat 107','100 分鐘 · 無中場','Mobile ticket · delayed delivery'] },
    { type:'DINNER · PREPAID', date:'9/23', title:'Moono', facts:['21:15 · 1 位','看完 MHE 立刻離場','步行約 15–20 分','依 SevenRooms 條款取消'] },
    { type:'DINNER · RESERVED', date:'9/24', title:'Keens Steakhouse', facts:['18:00 · 7 位','Midtown','遲到保留時間依訂位確認','與朋友的 NYC 壓軸晚餐'] },
    { type:'LODGING · RESERVED', date:'9/25 → 9/26', title:'Meco Hotel', facts:['與朋友同行','兩間房','朋友開車 NYC → Boston','HI Boston 暫作備援'] },
    { type:'WEDDING + LODGING', date:'9/27', title:'Tupper Manor Wedding', facts:['Beverly, Massachusetts','下午至晚間','9/27 住宿已訂','隔天朋友送 South Station'] },
    { type:'TRAIN · TICKETED', date:'9/28', title:'Northeast Regional 173', facts:['11:40 · Boston South Station','17:29 · Philadelphia 30th Street','Coach','朋友送到車站'] },
    { type:'TOUR · RESERVED', date:'9/29', title:'Independence Hall', facts:['11:20 tour','10:50 前抵達安檢','手機票／列印票皆可','準時開場，遲到不保證入場'] },
    { type:'TRAIN · TICKETED', date:'9/30', title:'Northeast Regional 141', facts:['09:50 · Philadelphia 30th Street','11:47 · Washington Union Station','Coach','至少提前 25 分抵達'] },
    { type:'LODGING · RESERVED', date:'9/30 → 10/3', title:'U Street Capsule Hostel', facts:['U Street / Shaw','6 Pod Mixed · locked capsule','靠近 Metro','公開頁不放付款與床位資料'] },
    { type:'DC · ALL RESERVED', date:'10/1 → 10/2', title:'Capitol + LOC + Archives + Smithsonian', facts:['10/1 Capitol 10:20','10/1 Library of Congress 13:00','10/1 National Archives','10/2 Air & Space 10:00 · NMAAHC 13:00'] },
    { type:'RETURN · TICKETED', date:'10/4 → 10/5', title:'BR3 · Washington → Taipei', facts:['10/4 01:15 · IAD','10/5 05:10 · TPE Terminal 2','10/3 晚上就是離境日','目標 21:30 左右抵達 IAD'] }
  ],
  transport: [
    ['01','9/19 · FLIGHT','Taipei → New York','CI12 · 17:40 → 20:40','confirmed'],
    ['02','9/25 · CAR','New York → Boston','朋友開車 · 主方案','planned'],
    ['03','9/25 · BACKUP','New York → Boston','Train 176 · 可取消，開車確認後處理','watch'],
    ['04','9/27 · LOCAL','Boston → Beverly','與朋友同行 · 依當日會合','planned'],
    ['05','9/28 · TRAIN','Boston → Philadelphia','Train 173 · 11:40 → 17:29','confirmed'],
    ['06','9/30 · TRAIN','Philadelphia → Washington, DC','Train 141 · 09:50 → 11:47','confirmed'],
    ['07','10/3 · METRO / CAR','U Street → IAD','20:15–20:30 出發；Silver Line 或 rideshare','planned'],
    ['08','10/4 · FLIGHT','Washington → Taipei','BR3 · 01:15 → 10/5 05:10','confirmed']
  ],
  actions: {
    high: [
      ['shukette','Shukette 開放後補訂；訂不到就保留彈性，不硬塞'],
      ['hi-cancel','9/22 23:59 EDT 前確認朋友行程，若不變就取消 HI Boston'],
      ['train-cancel','9/25 開車方案確認後，在 Train 176 發車前取消 Amtrak']
    ],
    medium: [
      ['jfk-weehawken','把 JFK → Weehawken 深夜交通方案與朋友聯絡方式存離線'],
      ['washington-monument','決定是否搶 Washington Monument；Natural History 可直接排候補'],
      ['iad-transfer','10/3 確認行李寄放與 U Street → IAD 最終走法'],
      ['ethiopian','選一間 U Street／Shaw 附近 Ethiopian final meal']
    ],
    packing: [
      ['passport','護照、ESTA、旅遊保險資料'],['tickets','機票、Amtrak、劇場與 timed entry 加入錢包／離線保存'],
      ['wedding','婚禮服裝與正式鞋分袋'],['layers','薄外套與洋蔥式穿搭'],['rain','小雨傘／防水外套'],
      ['power','行動電源、充電線、轉接頭'],['network','eSIM／網路方案'],['sleep','耳塞與眼罩']
    ]
  }
};

const $ = (selector, root=document) => root.querySelector(selector);
const $$ = (selector, root=document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key, fallback){ try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value){ try { localStorage.setItem(key, JSON.stringify(value)); } catch {} },
  remove(key){ try { localStorage.removeItem(key); } catch {} }
};
const badge = (status, label=statusLabels[status]) => `<span class="status-badge status-${status}">${label}</span>`;

function renderNav(){
  const nav = $('#siteNav'); if(!nav) return;
  const active = location.pathname.split('/').pop() || 'index.html';
  nav.innerHTML = pages.map(([href,label]) => `<a href="${href}"${href===active?' aria-current="page"':''}>${label}</a>`).join('');
}

function renderItinerary(){
  const grid = $('#itineraryGrid'); if(!grid) return;
  const filter = $('#cityFilters');
  const cities = ['全部','New York','Boston','Beverly','Philadelphia','Washington, DC','移動／飛行'];
  if(filter) filter.innerHTML = cities.map((city,index) => `<button class="filter-btn${index===0?' active':''}" type="button" data-filter="${city}" aria-pressed="${index===0}">${city}</button>`).join('');
  grid.innerHTML = trip.itinerary.map((item,index) => `
    <article class="journey-card reveal" id="day-${index+1}" data-city="${item.city}">
      <a class="journey-gallery" href="${item.page}" aria-label="打開 ${item.title} 詳細行程">
        ${item.images.map((image,photoIndex) => `<img src="images/${image}" alt="" loading="${index<2&&photoIndex===0?'eager':'lazy'}" decoding="async" />`).join('')}
      </a>
      <div class="journey-copy">
        <div class="journey-meta"><span>${String(index+1).padStart(2,'0')}</span><div><small>${item.date} · ${item.day}</small><strong>${item.city}</strong></div>${badge(item.status)}</div>
        <h2>${item.title}</h2><p>${item.summary}</p>
        <div class="mini-route"><span>ROUTE</span>${item.route}</div>
        <a class="text-link" href="${item.page}">打開詳細行程 <span>→</span></a>
      </div>
    </article>`).join('');
  $$('.filter-btn', filter || document).forEach(button => button.addEventListener('click', () => {
    $$('.filter-btn', filter).forEach(item => { item.classList.toggle('active', item===button); item.setAttribute('aria-pressed', item===button?'true':'false'); });
    const value = button.dataset.filter;
    $$('.journey-card', grid).forEach(card => {
      const transit = ['Transit','Flight','Taipei'].includes(card.dataset.city);
      card.hidden = value!=='全部' && !(value==='移動／飛行' ? transit : card.dataset.city===value);
    });
  }));
}

function renderBookings(){
  const grid = $('#bookingGrid'); if(!grid) return;
  grid.innerHTML = trip.bookings.map(item => `<article class="booking-card reveal"><div class="booking-head"><div><span class="micro-label">${item.type}</span><h3>${item.title}</h3></div><div class="booking-date"><strong>${item.date}</strong>${badge('confirmed')}</div></div><ul>${item.facts.map(fact=>`<li>${fact}</li>`).join('')}</ul></article>`).join('');
}

function renderTransport(){
  const list = $('#transportList'); if(!list) return;
  list.innerHTML = trip.transport.map(item => `<article class="transport-row reveal"><span class="transport-index">${item[0]}</span><div><small>${item[1]}</small><h3>${item[2]}</h3></div><div class="transport-state">${badge(item[4])}<span>${item[3]}</span></div></article>`).join('');
}

function renderChecklist(type, target){
  const root = $(target); if(!root) return;
  const saved = storage.get(`ec2026-${type}`, {});
  root.innerHTML = trip.actions[type].map(([id,text]) => `<label class="check-item${saved[id]?' done':''}"><input type="checkbox" data-checklist="${type}" data-item-id="${id}" ${saved[id]?'checked':''}/><span>${text}</span></label>`).join('');
}

function initChecklists(){
  const configs = {high:'#highPriorityChecklist',medium:'#mediumPriorityChecklist',packing:'#packingChecklist'};
  Object.entries(configs).forEach(([type,target]) => renderChecklist(type,target));
  document.addEventListener('change', event => {
    if(!event.target.matches('[data-checklist]')) return;
    const type=event.target.dataset.checklist, saved=storage.get(`ec2026-${type}`,{});
    saved[event.target.dataset.itemId]=event.target.checked; storage.set(`ec2026-${type}`,saved);
    event.target.closest('.check-item').classList.toggle('done',event.target.checked);
  });
  $$('[data-reset]').forEach(button => button.addEventListener('click', () => { const type=button.dataset.reset; storage.remove(`ec2026-${type}`); renderChecklist(type,configs[type]); }));
}

function initNotes(){
  const notes=$('#tripNotes'); if(!notes) return;
  try { notes.value=localStorage.getItem('ec2026-notes')||''; } catch {}
  let timer;
  notes.addEventListener('input', () => {
    const state=$('#saveState'); if(state) state.textContent='儲存中…'; clearTimeout(timer);
    timer=setTimeout(() => { try { localStorage.setItem('ec2026-notes',notes.value); if(state) state.textContent='已儲存'; } catch { if(state) state.textContent='無法儲存'; } },300);
  });
}

function initTheme(){
  let saved; try { saved=localStorage.getItem('ec2026-theme'); } catch { saved=null; }
  document.documentElement.dataset.theme=saved||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const button=$('#themeToggle'); if(!button) return;
  button.addEventListener('click', () => {
    const next=document.documentElement.dataset.theme==='dark'?'light':'dark'; document.documentElement.dataset.theme=next;
    const meta=$('meta[name="theme-color"]'); if(meta) meta.content=next==='dark'?'#07131a':'#142b3a';
    try { localStorage.setItem('ec2026-theme',next); } catch {}
  });
}

function initCountdown(){
  const target=$('#countdownText'); if(!target) return;
  const now=new Date(), start=new Date(trip.start), end=new Date(trip.end), days=Math.ceil((start-now)/86400000);
  target.textContent=days>0?`距離 CI12 起飛還有 ${days} 天`:now<=end?'旅程進行中':'旅程已結束';
}

function initReveal(){
  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const observer=new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), {threshold:.08});
  $$('.reveal').forEach(el => observer.observe(el));
}

function toast(message){ const target=$('#toast'); if(!target) return; target.textContent=message; target.classList.add('show'); setTimeout(()=>target.classList.remove('show'),1800); }
function initActions(){
  const print=$('#printBtn'); if(print) print.addEventListener('click',()=>window.print());
  const copy=$('#copySummaryBtn'); if(copy) copy.addEventListener('click', async () => {
    const summary=`East Coast 2026\n9/19 CI12 TPE 17:40 → JFK 20:40\n9/20 13:00 Aladdin\n9/21 20:00 Soothr\n9/23 19:00 Maybe Happy Ending → 21:15 Moono\n9/24 18:00 Keens\n9/25 朋友開車 NYC → Boston（確認後取消 Train 176）\n9/27 Tupper Manor wedding\n9/28 Train 173 BOS 11:40 → PHL 17:29\n9/29 Independence Hall 11:20（10:50 前安檢）\n9/30 Train 141 PHL 09:50 → WAS 11:47\n10/1 Capitol 10:20 → LOC 13:00 → Archives\n10/2 Air & Space 10:00 → NMAAHC 13:00\n10/3 20:15–20:30 前往 IAD\n10/4 BR3 IAD 01:15 → TPE`;
    try { await navigator.clipboard.writeText(summary); toast('行程摘要已複製'); } catch { toast('瀏覽器未允許剪貼簿權限'); }
  });
}

renderNav(); renderItinerary(); renderBookings(); renderTransport(); initChecklists(); initNotes(); initTheme(); initCountdown(); initActions(); initReveal();
if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('./sw.js').catch(()=>{});
