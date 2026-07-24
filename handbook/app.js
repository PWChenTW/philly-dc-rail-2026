const trip = {
  start: '2026-09-19T00:00:00+08:00',
  itinerary: [
    { date:'9/19', weekday:'六', city:'NYC', title:'JFK 抵達', summary:'晚上抵達、入住，維持低風險。', items:['通關、領行李、前往飯店','只安排飯店附近晚餐','Joe’s Pizza 可視精神狀況提前解鎖'], note:'抵達日晚餐不要綁訂位，避免航班與入境延誤造成壓力。' },
    { date:'9/20', weekday:'日', city:'NYC', title:'West Village 慢速開場', summary:'用街區散步調時差，不追景點。', items:['Hudson River Park','West Village 小街','Washington Square Park','Greenwich Village／NoHo','Joe’s Pizza'], note:'第一天保留彈性，累了隨時收工。' },
    { date:'9/21', weekday:'一', city:'NYC', title:'Lower East Side＋Katz’s', summary:'移民城市、經典熟食與街區密度。', items:['Essex Market','Lower East Side','Katz’s Delicatessen','East Village','Nolita'], note:'Katz’s 份量大，晚餐不要再排重食。' },
    { date:'9/22', weekday:'二', city:'NYC', title:'Williamsburg＋Greenpoint', summary:'補上上次沒有真正進入的 Brooklyn 日常層。', items:['Bedford Avenue','Domino Park','Williamsburg waterfront','Greenpoint','Transmitter Park'], note:'這天不追名店，讓店鋪、咖啡與散步決定節奏。' },
    { date:'9/23', weekday:'三', city:'NYC', title:'Queens 食物日', summary:'把紐約從 Manhattan 擴張成真正的移民城市。', items:['Jackson Heights','南亞／尼泊爾／藏式料理','Flushing','中式小吃或韓食','視體力加 Flushing Meadows'], note:'若不想跨區移動，可改成 Harlem＋Columbia＋Upper West Side。' },
    { date:'9/24', weekday:'四', city:'NYC', title:'Midtown＋Keens', summary:'城市建築、購物與一頓正式牛排晚餐。', items:['Grand Central Terminal','New York Public Library','Bryant Park','Flatiron／Madison Square','Keens Steakhouse 晚餐'], note:'Keens 建議提早訂位，這晚不要再塞遠距離活動。' },
    { date:'9/25', weekday:'五', city:'Boston', title:'早班 Amtrak＋Boston 半日', summary:'上午離開紐約，下午進入 Boston 的城市核心。', items:['Moynihan Train Hall → Back Bay／South Station','飯店寄放行李','Copley Square','Boston Public Library','Public Garden／Beacon Hill'], note:'若飯店在 Back Bay，優先選 Back Bay 下車，少一次市內搬運。' },
    { date:'9/26', weekday:'六', city:'Boston', title:'歷史 Boston', summary:'一天抓住殖民城市的主要輪廓。', items:['Boston Common','Freedom Trail 精華段','Faneuil Hall','North End','Waterfront','Harvard／MIT 視體力擇一'], note:'不要每個 Freedom Trail 室內點都進去，否則整天會被切碎。' },
    { date:'9/27', weekday:'日', city:'Beverly', title:'Tupper Manor 婚禮', summary:'前往北岸、下午至晚間婚禮、場地旁過夜。', items:['Boston 飯店退房','前往 Beverly','入住 Wylie Inn／指定住宿','下午婚禮','22:00 結束後直接休息'], note:'婚禮服裝與日常行李分袋，抵達後能快速換裝。' },
    { date:'9/28', weekday:'一', city:'Philly', title:'Beverly 撤離＋南下費城', summary:'把這天當成交通日，不高估抵達後可用時間。', items:['正常早餐、退房','rideshare 前往 Boston South Station','Boston → Philadelphia Amtrak','入住','Rittenhouse／City Hall 晚餐散步'], note:'不要訂過早的南下車次；Beverly 交通與婚禮後疲勞都需要緩衝。' },
    { date:'9/29', weekday:'二', city:'Philly', title:'Old City＋建國史', summary:'費城最不可替代的一天。', items:['Reading Terminal Market 早餐','Independence Hall','Liberty Bell','Old City','Elfreth’s Alley','Barnes 或 Philadelphia Museum of Art 二選一'], note:'如果歷史點停留較久，就把美術館留成 optional，不要硬塞。' },
    { date:'9/30', weekday:'三', city:'DC', title:'費城半日＋抵達 DC', summary:'上午補費城，午後搭車，晚上看城市生活。', items:['City Hall／Rittenhouse 補遺','Philadelphia → Washington Union Station','飯店入住','Georgetown','C&O Canal／Waterfront'], note:'第一晚不排 timed-entry 景點，避免火車延誤破壞行程。' },
    { date:'10/1', weekday:'四', city:'DC', title:'Capitol Hill＋制度核心', summary:'用政治建築與國家檔案理解 DC。', items:['U.S. Capitol','Library of Congress','Supreme Court 外觀','National Gallery of Art','National Archives 視興趣'], note:'Capitol／Library tour 若需要預約，開放後優先處理。' },
    { date:'10/2', weekday:'五', city:'DC', title:'Smithsonian＋紀念碑夜景', summary:'白天只選一間主館，晚上走 National Mall 西段。', items:['Air and Space／African American History／American History 三選一','Washington Monument','World War II Memorial','Reflecting Pool','Lincoln Memorial','Korean & Vietnam Veterans Memorials'], note:'大型館只選一間，否則你會花一天在安檢與趕場。' },
    { date:'10/3', weekday:'六', city:'DC', title:'Arlington＋自由選擇', summary:'最後一天保留選擇權，晚上前往 IAD。', items:['Arlington National Cemetery','White House 外觀','Dupont Circle／Georgetown 補遺','或補第二間博物館','約 20:30–21:00 往 IAD'], note:'BR003 01:15 起飛，10/3 晚上就是實際離境時間。' },
    { date:'10/4', weekday:'日', city:'Flight', title:'BR003 IAD → TPE', summary:'01:15 起飛，跨越國際換日線。', items:['提早完成線上報到','確認退稅／行李規則','機上調整回台睡眠'], note:'時刻與航班規則以長榮最終票面為準。' },
    { date:'10/5', weekday:'一', city:'Taipei', title:'05:10 抵達台北', summary:'回家，避免把上午排入任何不可移動承諾。', items:['入境、領行李','返家或直接前往公司','當天晚上提早休息'], note:'即使理論上能直接上班，仍要為入境與交通延誤留備案。' }
  ],
  cities: [
    { name:'New York', code:'NYC', color:'#6c8fa3', thesis:'第二次去紐約，不再靠地標填滿，而是把食物、街區與晚上節目當成旅行主體。', must:['Keens Steakhouse','Katz’s 再訪','Joe’s Pizza','Williamsburg／Greenpoint','Queens food day'], optional:['Broadway／Off-Broadway','Harlem＋Columbia','臨時餐廳與留白日'] },
    { name:'Boston', code:'BOS', color:'#a46d5b', thesis:'Boston 的最佳投入是 1.5 天：一個完整歷史日，加一個 Back Bay／Cambridge 半日。', must:['Freedom Trail 精華','Beacon Hill','North End','Copley／Public Library'], optional:['Harvard／MIT','MFA／Gardner Museum','Fenway 周邊'] },
    { name:'Philadelphia', code:'PHL', color:'#b28b47', thesis:'費城的不可替代性在建國歷史。美術館是加分，但不該犧牲 Old City。', must:['Independence Hall','Liberty Bell','Reading Terminal Market','Old City'], optional:['Barnes Foundation','Philadelphia Museum of Art','Rittenhouse Square'] },
    { name:'Washington DC', code:'DC', color:'#5e8976', thesis:'DC 需要三天以上，不是因為景點分散，而是單一博物館與紀念碑群都會吃掉大量時間。', must:['Capitol＋Library of Congress','一間 Smithsonian 主館','National Mall 夜景','Georgetown'], optional:['Arlington Cemetery','第二間博物館','Dupont／Embassy Row'] }
  ],
  transport: [
    { icon:'✈', title:'TPE → JFK', text:'9/19 晚抵達。抵達日只做低承諾活動。', time:'國際線' },
    { icon:'🚆', title:'NYC → Boston', text:'Moynihan Train Hall 出發；飯店在 Back Bay 時優先選 Back Bay 下車。', time:'約半天門到門' },
    { icon:'🚕', title:'Boston → Beverly', text:'婚禮日帶行李前往 Tupper Manor／Wylie Inn。若多人同行，可比較包車與 rideshare。', time:'需留週日緩衝' },
    { icon:'🚕', title:'Beverly → Boston South Station', text:'婚禮隔天直接 rideshare 最省摩擦；大眾運輸會先到 North Station，再跨城轉站。', time:'9/28 上午' },
    { icon:'🚆', title:'Boston → Philadelphia', text:'全程最長的城市間移動。不要訂太早，讓婚禮隔天能正常退房。', time:'約 5–6 小時級' },
    { icon:'🚆', title:'Philadelphia → DC', text:'市中心到市中心，適合上午補景點後中午南下。', time:'約 2 小時級' },
    { icon:'🚇', title:'DC → IAD', text:'Silver Line 或 rideshare。01:15 起飛，建議 10/3 晚上約 20:30–21:00 離開市區。', time:'離境夜' }
  ],
  reservations: [
    '國際機票：TPE → JFK／IAD → TPE BR003',
    'NYC、Boston、Philadelphia、DC 飯店',
    'Wylie Inn／婚禮住宿與 room block',
    '9/25 NYC → Boston Amtrak',
    '9/28 Boston → Philadelphia Amtrak',
    '9/30 Philadelphia → DC Amtrak',
    'Keens Steakhouse',
    'Independence Hall（若當期需 timed entry）',
    'DC 主館 timed pass／Capitol tour',
    'Broadway 或其他演出（若要）'
  ],
  packing: [
    '護照、ESTA、保險資料','婚禮正式服裝','正式鞋與日常鞋分開','輕薄外套／洋蔥式穿搭','小雨傘或防水外套','行動電源與充電線','常備藥','eSIM／網路方案','行李定位器','可折疊購物袋','耳塞與眼罩','水壺','信用卡＋少量現金','離線保存票券截圖'
  ],
  budget: [
    { label:'機票', value:60000 },
    { label:'住宿', value:85000 },
    { label:'Amtrak／市內交通', value:18000 },
    { label:'餐飲', value:45000 },
    { label:'景點／表演', value:12000 },
    { label:'購物與緩衝', value:25000 }
  ]
};

const $ = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => [...el.querySelectorAll(s)];
const storage = {
  get(key, fallback) { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } },
  set(key, value) { localStorage.setItem(key, JSON.stringify(value)); }
};

function renderItinerary() {
  const filters = ['All', ...new Set(trip.itinerary.map(d => d.city))];
  const labels = {All:'全部', NYC:'NYC', Boston:'Boston', Beverly:'婚禮', Philly:'Philly', DC:'DC', Flight:'飛行', Taipei:'台北'};
  $('#cityFilters').innerHTML = filters.map((f,i)=>`<button class="filter-btn ${i===0?'active':''}" data-filter="${f}">${labels[f]||f}</button>`).join('');
  $('#itineraryGrid').innerHTML = trip.itinerary.map((d,i)=>`
    <details class="day-card" data-city="${d.city}">
      <summary>
        <div class="day-head">
          <div class="day-number">${String(i+1).padStart(2,'0')}</div>
          <div class="day-meta"><small>${d.date}（${d.weekday}）</small><strong>${d.title}</strong></div>
          <span class="city-tag">${labels[d.city]||d.city}</span>
        </div>
        <p class="day-summary">${d.summary}</p>
        <span class="day-expand">＋</span>
      </summary>
      <div class="day-detail">
        <ul>${d.items.map(x=>`<li>${x}</li>`).join('')}</ul>
        <div class="note">判斷：${d.note}</div>
      </div>
    </details>`).join('');
  $$('.filter-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.filter-btn').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const f = btn.dataset.filter;
    $$('.day-card').forEach(card => card.classList.toggle('hidden', f !== 'All' && card.dataset.city !== f));
  }));
}

function renderCityGuides() {
  $('#cityGuideGrid').innerHTML = trip.cities.map(c=>`
    <article class="city-card" style="--city-color:${c.color}">
      <div><span class="section-kicker">${c.code}</span><h3>${c.name}</h3><p class="city-thesis">${c.thesis}</p></div>
      <div class="city-lists">
        <div><h4>Priority</h4><ul>${c.must.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        <div><h4>Optionality</h4><ul>${c.optional.map(x=>`<li>${x}</li>`).join('')}</ul></div>
      </div>
    </article>`).join('');
}

function renderTransport() {
  $('#transportCards').innerHTML = trip.transport.map(t=>`
    <article class="transport-card"><div class="transport-icon">${t.icon}</div><div><h3>${t.title}</h3><p>${t.text}</p></div><div class="transport-time">${t.time}</div></article>`).join('');
}

function renderChecklist(type, items, target) {
  const saved = storage.get(`ec2026-${type}`, {});
  $(target).innerHTML = items.map((item,i)=>`
    <label class="check-item ${saved[i]?'done':''}"><input type="checkbox" data-type="${type}" data-index="${i}" ${saved[i]?'checked':''}><span>${item}</span></label>`).join('');
}

function initChecklists() {
  renderChecklist('reservations', trip.reservations, '#reservationChecklist');
  renderChecklist('packing', trip.packing, '#packingChecklist');
  document.addEventListener('change', e => {
    if (!e.target.matches('.check-item input')) return;
    const {type,index} = e.target.dataset;
    const saved = storage.get(`ec2026-${type}`, {});
    saved[index] = e.target.checked;
    storage.set(`ec2026-${type}`, saved);
    e.target.closest('.check-item').classList.toggle('done', e.target.checked);
  });
  $$('[data-reset]').forEach(btn=>btn.addEventListener('click',()=>{
    const type=btn.dataset.reset;
    storage.set(`ec2026-${type}`, {});
    renderChecklist(type, trip[type], type==='reservations'?'#reservationChecklist':'#packingChecklist');
  }));
}

function initNotes() {
  const notes = $('#tripNotes');
  notes.value = localStorage.getItem('ec2026-notes') || '';
  let timer;
  notes.addEventListener('input',()=>{
    $('#saveState').textContent='儲存中…';
    clearTimeout(timer);
    timer=setTimeout(()=>{localStorage.setItem('ec2026-notes',notes.value);$('#saveState').textContent='已儲存';},350);
  });
}

function renderBudget() {
  const saved = storage.get('ec2026-budget', Object.fromEntries(trip.budget.map((b,i)=>[i,b.value])));
  $('#budgetInputs').innerHTML = trip.budget.map((b,i)=>`<div class="budget-row"><label for="budget-${i}">${b.label}</label><input id="budget-${i}" type="number" min="0" step="1000" data-budget="${i}" value="${saved[i] ?? b.value}"></div>`).join('');
  const update=()=>{
    const values={}; let total=0;
    $$('[data-budget]').forEach(inp=>{const v=Number(inp.value)||0;values[inp.dataset.budget]=v;total+=v;});
    storage.set('ec2026-budget',values);
    $('#budgetTotal').textContent=`NT$${total.toLocaleString('zh-TW')}`;
  };
  $$('[data-budget]').forEach(inp=>inp.addEventListener('input',update));
  $('#resetBudget').addEventListener('click',()=>{localStorage.removeItem('ec2026-budget');renderBudget();});
  update();
}

function initTheme() {
  const saved = localStorage.getItem('ec2026-theme');
  if (saved) document.documentElement.dataset.theme=saved;
  $('#themeToggle').addEventListener('click',()=>{
    const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
    document.documentElement.dataset.theme=next;
    localStorage.setItem('ec2026-theme',next);
  });
}

function initCountdown() {
  const now=new Date(); const start=new Date(trip.start); const diff=Math.ceil((start-now)/(1000*60*60*24));
  $('#countdownText').textContent = diff>0 ? `距離出發還有 ${diff} 天` : diff===0 ? '今天出發' : '旅程日期已開始／結束';
}

function showToast(msg) {
  const t=$('#toast'); t.textContent=msg; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),1800);
}

function initActions() {
  $('#printBtn').addEventListener('click',()=>window.print());
  $('#copySummaryBtn').addEventListener('click', async()=>{
    const text=`East Coast 2026\n9/19 JFK 抵達\n9/20–9/24 NYC\n9/25–9/26 Boston\n9/27 Beverly 婚禮＋過夜\n9/28–9/29 Philadelphia\n9/30–10/3 Washington DC\n10/4 01:15 BR003 IAD→TPE\n10/5 05:10 抵達台北`;
    try { await navigator.clipboard.writeText(text); showToast('行程摘要已複製'); }
    catch { showToast('瀏覽器未允許剪貼簿權限'); }
  });
}

renderItinerary();
renderCityGuides();
renderTransport();
initChecklists();
initNotes();
renderBudget();
initTheme();
initCountdown();
initActions();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(()=>{});
}
