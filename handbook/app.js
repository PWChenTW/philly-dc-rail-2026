const statusLabels = {
  confirmed: 'Confirmed',
  planned: 'Planned',
  need: 'Need to book',
  optional: 'Optional'
};

const visuals = {
  NYC: {
    src: 'images/nyc-sunset.jpg', alt: 'Brooklyn Bridge 與 Manhattan skyline 的金色日落', label: 'NEW YORK · GOLDEN HOUR',
    photos: [
      { src: 'images/nyc-sunset.jpg', alt: 'Brooklyn Bridge 與 Manhattan skyline 的金色日落', caption: 'Brooklyn sunset' },
      { src: 'images/nyc-high-line.jpg', alt: 'Chelsea 的 High Line elevated park', caption: 'High Line' },
      { src: 'images/nyc-williamsburg.jpg', alt: 'Williamsburg Bedford Avenue 的街景', caption: 'Williamsburg' },
      { src: 'images/nyc-jackson-heights.jpg', alt: 'Queens Jackson Heights 的商店與高架地鐵', caption: 'Jackson Heights' },
      { src: 'images/nyc-washington-square.jpg', alt: 'Washington Square Park 與拱門', caption: 'Washington Square' },
      { src: 'images/nyc-grand-central.jpg', alt: 'Grand Central Terminal 主大廳', caption: 'Grand Central' },
      { src: 'images/katz-pastrami.jpg', alt: 'Katz’s Delicatessen 的 pastrami sandwich', caption: 'Katz’s pastrami' }
    ]
  },
  Boston: {
    src: 'images/boston-beacon-hill.jpg', alt: 'Boston Beacon Hill 的紅磚 Acorn Street', label: 'BOSTON · BRICK & HISTORY',
    photos: [
      { src: 'images/boston-beacon-hill.jpg', alt: 'Boston Beacon Hill 的紅磚 Acorn Street', caption: 'Beacon Hill' },
      { src: 'images/boston-public-garden.jpg', alt: 'Boston Public Garden 湖上的 Swan Boats', caption: 'Public Garden' },
      { src: 'images/boston-old-state-house.jpg', alt: 'Freedom Trail 上的 Boston Old State House', caption: 'Freedom Trail' },
      { src: 'images/boston-north-end.jpg', alt: 'Boston North End 的夜間街景', caption: 'North End' }
    ]
  },
  Beverly: {
    src: 'images/beverly-coast.jpg', alt: 'Beverly 的 Massachusetts Bay 海岸景色', label: 'BEVERLY · COASTAL WEDDING',
    photos: [
      { src: 'images/beverly-tupper-manor.jpg', alt: 'Beverly Endicott College 的 Tupper Manor', caption: 'Tupper Manor' },
      { src: 'images/beverly-coast.jpg', alt: 'Beverly 的 Massachusetts Bay 海岸景色', caption: 'Mingo Beach' },
      { src: 'images/beverly-endicott-pond.jpg', alt: 'Endicott College 校園池塘與花園', caption: 'Endicott campus' },
      { src: 'images/beverly-west-beach.jpg', alt: '從空中看 Beverly West Beach', caption: 'West Beach' }
    ]
  },
  Philly: {
    src: 'images/philly-independence-hall.jpg', alt: 'Philadelphia Independence Hall 的紅磚建築', label: 'PHILADELPHIA · FOUNDING STORY',
    photos: [
      { src: 'images/philly-independence-hall.jpg', alt: 'Philadelphia Independence Hall 的紅磚建築', caption: 'Independence Hall' },
      { src: 'images/philly-liberty-bell.jpg', alt: 'Philadelphia Liberty Bell', caption: 'Liberty Bell' },
      { src: 'images/philly-elfreths-alley.jpg', alt: 'Philadelphia Elfreth’s Alley 的歷史街屋', caption: 'Elfreth’s Alley' },
      { src: 'images/reading-terminal.jpg', alt: 'Philadelphia Reading Terminal Market 內部', caption: 'Reading Terminal' }
    ]
  },
  DC: {
    src: 'images/dc-lincoln-memorial.jpg', alt: 'Washington DC Lincoln Memorial 與 Reflecting Pool', label: 'WASHINGTON, DC · AFTER DARK',
    photos: [
      { src: 'images/dc-lincoln-memorial.jpg', alt: 'Washington DC Lincoln Memorial 與 Reflecting Pool', caption: 'Lincoln Memorial' },
      { src: 'images/dc-capitol.jpg', alt: 'Washington DC United States Capitol', caption: 'U.S. Capitol' },
      { src: 'images/dc-library-congress.jpg', alt: 'Library of Congress Main Reading Room', caption: 'Library of Congress' },
      { src: 'images/dc-georgetown.jpg', alt: 'Georgetown waterfront 與 Potomac River', caption: 'Georgetown waterfront' }
    ]
  }
};

const trip = {
  start: '2026-09-19T00:00:00+08:00',
  end: '2026-10-05T23:59:59+08:00',
  highlights: [
    {
      visual: 'NYC', sequence: '01', date: '9/19—9/25', title: '把紐約留給第二次來的人',
      pitch: '不重跑帝國大廈與時代廣場。這次從 West Village 的街角、Williamsburg 的店鋪、Katz’s 的切肉聲，一路待到 Brooklyn waterfront 亮起金色。',
      tags: ['Neighborhoods', 'Food', 'Broadway after dark']
    },
    {
      visual: 'Boston', sequence: '02', date: '9/25—9/27', title: '一天走進三百年歷史',
      pitch: '用 Beacon Hill 的磚巷開場，沿 Freedom Trail 走到 North End，再把傍晚交給港邊。短，但會很像一部完整的片。',
      tags: ['Freedom Trail', 'Beacon Hill']
    },
    {
      visual: 'Beverly', sequence: '03', date: '9/27', title: '旅程唯一無法複製的一幕',
      pitch: 'Massachusetts Bay 的海風、Tupper Manor 的婚禮、久違的朋友。這一天不趕景點，因為你不是觀光客，而是故事裡的賓客。',
      tags: ['Wedding', 'North Shore']
    },
    {
      visual: 'Philly', sequence: '04', date: '9/28—9/30', title: '在美國誕生的地方住兩晚',
      pitch: '同學的便車與家，讓 Philadelphia 不只是過境。白天走 Independence Hall，午餐鑽進 Reading Terminal，晚上回到有人情味的城市。',
      tags: ['Founding history', 'Local hosting']
    },
    {
      visual: 'DC', sequence: '05', date: '9/30—10/4', title: '白天看制度，入夜看記憶',
      pitch: 'Capitol、Library of Congress 與 Smithsonian 各有自己的日子；太陽落下後，沿 National Mall 走進紀念碑的光。',
      tags: ['Smithsonian', 'Monuments at dusk']
    }
  ],
  itinerary: [
    {
      date: '9/19', weekday: '六', city: 'NYC', title: 'Taipei → New York',
      summary: '抵達日只處理入境與進城，不綁任何晚間訂位。',
      gallery: ['Brooklyn sunset', 'Grand Central', 'Washington Square'],
      slots: [
        { label: '17:40', status: 'confirmed', text: 'CI12 · TPE Terminal 2 出發' },
        { label: '20:40', status: 'confirmed', text: '抵達 JFK Terminal 4；入境、領行李後進城' },
        { label: 'Night', status: 'planned', text: '住朋友家；餓了只吃住處附近的簡單宵夜' }
      ],
      decision: '長程飛行與入境時間不可控，第一晚的成功標準只有平安抵達。'
    },
    {
      date: '9/20', weekday: '日', city: 'NYC', title: 'West Side 慢速開場',
      summary: '用河岸與 Village 調時差，避開第一次到紐約式的地標清單。',
      gallery: ['High Line', 'Washington Square', 'Brooklyn sunset'],
      slots: [
        { label: 'Day', status: 'planned', text: 'Chelsea / Meatpacking → High Line → Hudson River Park' },
        { label: 'Late day', status: 'planned', text: 'Little Island（順路才去）→ West Village → Greenwich Village' },
        { label: 'Food', status: 'planned', text: 'Joe’s Pizza 再訪' },
        { label: 'Night', status: 'optional', text: 'Broadway、Off-Broadway、comedy 或單純夜走' }
      ],
      decision: '第一個完整日保留隨時收工的權利。'
    },
    {
      date: '9/21', weekday: '一', city: 'NYC', title: 'Lower East Side 食物日',
      summary: '把經典再訪放進街區脈絡，不為了吃而跨城折返。',
      gallery: ['Katz’s pastrami', 'Washington Square', 'Brooklyn sunset'],
      slots: [
        { label: 'Day', status: 'planned', text: 'Lower East Side → Katz’s Delicatessen → East Village' },
        { label: 'Late day', status: 'optional', text: 'Nolita 或 Chinatown 邊緣，依體力收放' },
        { label: 'Night', status: 'optional', text: '演出、comedy 或 neighborhood walk' }
      ],
      decision: 'Katz’s 份量大，當晚不要再安排另一頓重食。'
    },
    {
      date: '9/22', weekday: '二', city: 'NYC', title: 'Brooklyn 第二次造訪',
      summary: '主角是 Williamsburg、Greenpoint 的日常感與日落水岸。',
      gallery: ['Williamsburg', 'Brooklyn sunset', 'Washington Square'],
      slots: [
        { label: 'Day', status: 'planned', text: 'Williamsburg 的咖啡、烘焙、商店與街區漫遊' },
        { label: 'Late day', status: 'planned', text: 'Greenpoint → Brooklyn waterfront 看日落' },
        { label: 'Fallback', status: 'optional', text: 'DUMBO 只在動線自然時加入；上次已去過' }
      ],
      decision: '不追名店，讓當天看到的店鋪決定節奏。'
    },
    {
      date: '9/23', weekday: '三', city: 'NYC', title: 'Queens 或一個真正的留白日',
      summary: '這是全段 NYC 的天氣緩衝，不要提前塞滿。',
      gallery: ['Jackson Heights', 'Katz’s pastrami', 'Washington Square'],
      slots: [
        { label: 'Option A', status: 'planned', text: 'Jackson Heights 食物行程；若還有胃口再去 Flushing' },
        { label: 'Option B', status: 'optional', text: '書店、購物、咖啡與一場真正想看的展覽' },
        { label: 'Weather', status: 'optional', text: '依全週預報與前幾天疲勞程度決定' }
      ],
      decision: '這一天的價值是可替換，不是多完成一區。'
    },
    {
      date: '9/24', weekday: '四', city: 'NYC', title: 'Midtown＋Keens',
      summary: '下午開始收斂在 Midtown，為 18:00 晚餐留足安全邊界。',
      gallery: ['Grand Central', 'Washington Square', 'Brooklyn sunset'],
      slots: [
        { label: 'Day', status: 'planned', text: 'Bryant Park、New York Public Library、Grand Central 或 Midtown 購物' },
        { label: '18:00', status: 'confirmed', text: 'Keens Steakhouse · 7 位 · 72 W 36th St' },
        { label: 'Night', status: 'planned', text: '飯後輕鬆散步，不再疊一個高摩擦固定活動' }
      ],
      decision: '餐廳只保留 15 分鐘，傍晚不要人在離 Midtown 很遠的地方。'
    },
    {
      date: '9/25', weekday: '五', city: 'Transit', title: 'New York → Boston',
      summary: '火車是晚班，白天仍可用，但下午必須回到 Manhattan。',
      slots: [
        { label: 'Day', status: 'planned', text: '慢早餐、最後採買、整理行李；只選一個緊湊街區活動' },
        { label: '18:40', status: 'planned', text: '最晚約此時抵達 Moynihan Train Hall' },
        { label: '19:12', status: 'confirmed', text: 'Northeast Regional 176 出發；Coach Seat' },
        { label: '23:50', status: 'confirmed', text: '抵達 Boston South Station，前往 HI Boston Hostel' },
        { label: 'Check-in', status: 'confirmed', text: 'Hostel 已收到預計 00:00–01:00 抵達的通知' }
      ],
      decision: '舊版 17:38 車次作廢；已買的是 19:12 → 23:50。'
    },
    {
      date: '9/26', weekday: '六', city: 'Boston', title: '唯一完整 Boston 日',
      summary: '先走歷史核心；Cambridge 只有在主線提早完成時才加入。',
      slots: [
        { label: 'Before 11', status: 'confirmed', text: 'HI Boston Hostel 退房並處理行李' },
        { label: 'Core', status: 'planned', text: 'Boston Common → Public Garden → Beacon Hill → Freedom Trail 核心 → North End' },
        { label: 'Late day', status: 'planned', text: 'Harborwalk；有餘裕再接 Back Bay / Copley' },
        { label: 'Extra', status: 'optional', text: 'Harvard / Cambridge，不為了打卡硬塞' },
        { label: 'Night', status: 'confirmed', text: '9/26 住宿已預訂' }
      ],
      decision: '住宿缺口已解決；依實際住宿地點安排隔天前往 Beverly 的方式。'
    },
    {
      date: '9/27', weekday: '日', city: 'Beverly', title: 'Tupper Manor Wedding',
      summary: '整天以婚禮為主，不安排 Boston 觀光，也不在晚間跨城。',
      slots: [
        { label: 'Morning', status: 'planned', text: '退房、帶行李前往 Beverly；行程刻意留鬆' },
        { label: 'Afternoon', status: 'confirmed', text: 'Tupper Manor 婚禮開始' },
        { label: '≈ 22:00', status: 'confirmed', text: '婚禮預計結束' },
        { label: 'Night', status: 'confirmed', text: '9/27 婚禮夜住宿已預訂' }
      ],
      decision: '婚禮與當晚住宿都已固定，不在晚間跨城。'
    },
    {
      date: '9/28', weekday: '一', city: 'Transit', title: 'Beverly → Philadelphia by car',
      summary: '搭費城同學便車南下，省去回 Boston 轉 Amtrak 的摩擦。',
      slots: [
        { label: 'Morning', status: 'planned', text: '正常早餐、退房，與同學確認集合時間與地點' },
        { label: 'Drive', status: 'confirmed', text: '搭費城同學便車回 Philadelphia' },
        { label: 'Evening', status: 'planned', text: '到同學家安頓 → City Hall / Rittenhouse Square → cheesesteak' },
        { label: 'Night', status: 'confirmed', text: '住費城同學家' }
      ],
      decision: '不需 Boston → Philadelphia Amtrak 或 Philadelphia 飯店；抵達後仍不排 timed entry。'
    },
    {
      date: '9/29', weekday: '二', city: 'Philly', title: '建國史主線',
      summary: '把 Philadelphia 最不可替代的歷史內容走完整。',
      slots: [
        { label: 'Morning', status: 'planned', text: 'Independence Hall → Liberty Bell → Old City' },
        { label: 'Lunch', status: 'planned', text: 'Reading Terminal Market；優先 DiNic’s roast pork' },
        { label: 'Afternoon', status: 'planned', text: 'Elfreth’s Alley 與歷史街區' },
        { label: 'Art', status: 'optional', text: 'Barnes Foundation 只在時間與興趣都成立時加入' }
      ],
      decision: '不把唯一完整日變成兩間美術館趕場。'
    },
    {
      date: '9/30', weekday: '三', city: 'Transit', title: 'Philadelphia → Washington, DC',
      summary: '上午離開，抵達 DC 後只排不需門票的低摩擦街區。',
      slots: [
        { label: 'Morning', status: 'need', text: '預訂 Philadelphia → Washington Union Station Amtrak' },
        { label: 'Afternoon', status: 'planned', text: '抵達、入住後前往 Georgetown / C&O Canal / waterfront' },
        { label: 'Night', status: 'need', text: '預訂 Washington, DC 住宿' }
      ],
      decision: '抵達日不安排任何 timed-entry 景點。'
    },
    {
      date: '10/1', weekday: '四', city: 'DC', title: 'Capitol Hill 制度核心',
      summary: '國會、國會圖書館與國家機構放在同一天。',
      slots: [
        { label: 'Morning', status: 'planned', text: 'U.S. Capitol tour → Supreme Court exterior' },
        { label: 'Afternoon', status: 'planned', text: 'Library of Congress → National Gallery 或 National Archives' },
        { label: 'Reserve', status: 'need', text: '確認 Capitol tour 與 Library of Congress 入場需求' },
        { label: 'Late day', status: 'planned', text: 'National Mall 傍晚散步' }
      ],
      decision: 'National Gallery 與 Archives 視當天進度二選一即可。'
    },
    {
      date: '10/2', weekday: '五', city: 'DC', title: 'Smithsonian＋紀念碑夜走',
      summary: '白天只選一間大館，把體力留給傍晚後的 Mall 西段。',
      slots: [
        { label: 'Museum', status: 'planned', text: 'Air & Space / African American History / American History 三選一' },
        { label: 'Reserve', status: 'need', text: '出發前確認選定館舍的 timed-entry 規則' },
        { label: 'Dusk', status: 'planned', text: 'Washington Monument → WWII → Reflecting Pool → Lincoln Memorial' },
        { label: 'Night', status: 'planned', text: 'Vietnam 與 Korean War Veterans Memorials' }
      ],
      decision: '兩間大型館只在精神與排隊狀況都很好時才考慮。'
    },
    {
      date: '10/3', weekday: '六', city: 'DC', title: '最後一日＋前往 IAD',
      summary: '白天保持彈性；晚間移動至機場是今天唯一不能失手的事。',
      slots: [
        { label: 'Day', status: 'optional', text: 'Georgetown、Arlington、第二間 Smithsonian、White House / Lafayette Square 擇一' },
        { label: 'Meal', status: 'planned', text: '安排舒服的最後一餐，不為清單跨城' },
        { label: 'Evening', status: 'planned', text: '以 Silver Line 或 rideshare 前往 IAD，保留充足報到緩衝' },
        { label: 'Flight', status: 'confirmed', text: 'IAD → TPE 已開票；10/4 01:15 起飛' }
      ],
      decision: '回程已開票；01:15 起飛代表 10/3 晚上就是實際離境時間。'
    },
    {
      date: '10/4', weekday: '日', city: 'Flight', title: 'Washington → Taipei',
      summary: '回程已開票，10/3 晚上就是實際離境時段。',
      slots: [
        { label: '01:15', status: 'confirmed', text: 'IAD 起飛；ticketed' },
        { label: 'In flight', status: 'confirmed', text: '長程飛行並跨越國際換日線' }
      ],
      decision: '班機已確認；10/3 須依 IAD 報到需求反推離開 DC 的時間。'
    },
    {
      date: '10/5', weekday: '一', city: 'Taipei', title: '抵達 Taipei',
      summary: '旅程結束，上午不安排不可移動的承諾。',
      slots: [
        { label: '05:10', status: 'confirmed', text: '抵達 TPE Terminal 2' },
        { label: 'Morning', status: 'planned', text: '入境、領行李、返家；保留延誤備案' }
      ],
      decision: '上午不安排不可移動的承諾，保留入境與交通延誤備案。'
    }
  ],
  bookings: [
    {
      type: 'FLIGHT · TICKETED', date: '9/19 SAT', title: 'CI12 · Taipei → New York', status: 'confirmed',
      facts: ['17:40 · TPE Terminal 2', '20:40 · JFK Terminal 4', 'Economy · 約 15 小時', '託運 2 件 × 23 kg；手提 1 件 × 7 kg'],
      note: '抵達後只安排入境、領行李與進城。'
    },
    {
      type: 'DINNER · RESERVED', date: '9/24 THU', title: 'Keens Steakhouse', status: 'confirmed',
      facts: ['18:00 · 7 位', '72 W 36th St, New York', '遲到保留 15 分鐘', '取消請至少提前 24 小時'],
      note: '下午保持在 Midtown；這不是單人訂位。'
    },
    {
      type: 'TRAIN · TICKETED', date: '9/25 FRI', title: 'Northeast Regional 176', status: 'confirmed',
      facts: ['19:12 · Moynihan Train Hall', '23:50 · Boston South Station', '1 Coach Seat', '建議約 18:40 前到站'],
      note: '舊版較早的 17:38 車次已作廢。'
    },
    {
      type: 'LODGING · RESERVED', date: '9/25 → 9/26', title: 'HI Boston Hostel', status: 'confirmed',
      facts: ['19 Stuart Street, Boston', 'Check-in 9/25 16:00 起', 'Check-out 9/26 11:00 前', 'Men’s 6-Bed Dorm · US$116.45'],
      note: 'Hostel 已收到 00:00–01:00 check-in 通知；可免費取消至 9/22 23:59 EDT。'
    },
    {
      type: 'FIXED EVENT', date: '9/27 SUN', title: 'Wedding · Tupper Manor', status: 'confirmed',
      facts: ['295 Hale St, Beverly, MA', '下午開始至約 22:00', '這天不安排 Boston 觀光', '婚禮後必須住 Beverly 附近'],
      note: '婚禮固定；9/27 當晚住宿也已預訂。'
    },
    {
      type: 'LODGING · RESERVED', date: '9/26 → 9/27', title: '9/26 Accommodation', status: 'confirmed',
      facts: ['住宿已預訂', '不再是 itinerary gap', '依住宿地點安排隔天 Beverly 交通'],
      note: '住宿名稱與地址未放入公開頁面。'
    },
    {
      type: 'LODGING · RESERVED', date: '9/27 → 9/28', title: 'Wedding Night Accommodation', status: 'confirmed',
      facts: ['住宿已預訂', '婚禮結束後直接入住', '不在 22:00 後跨城'],
      note: '住宿名稱與地址未放入公開頁面。'
    },
    {
      type: 'RIDE + HOSTING · ARRANGED', date: '9/28 → 9/30', title: 'Philadelphia with classmate', status: 'confirmed',
      facts: ['9/28 搭同學便車回 Philadelphia', 'Philadelphia 期間住同學家', '不需 Boston → Philly Amtrak', '不需 Philadelphia 飯店'],
      note: '出發前再確認 9/28 集合時間與地點。'
    },
    {
      type: 'RETURN FLIGHT · TICKETED', date: '10/4 → 10/5', title: 'Washington → Taipei', status: 'confirmed',
      facts: ['10/4 01:15 · IAD 出發', '10/5 05:10 · TPE Terminal 2 抵達', '機票已開票', '10/3 晚上前往 IAD'],
      note: 'DC 住宿與 10/3 機場移動方式仍待決定。'
    }
  ],
  transport: [
    { mode: 'FLIGHT', date: '9/19', title: 'TPE → JFK', status: 'confirmed', meta: 'CI12 · 17:40 → 20:40', detail: '已開票。JFK Terminal 4 抵達，當晚住朋友家。' },
    { mode: 'TRAIN', date: '9/25', title: 'New York → Boston', status: 'confirmed', meta: 'Train 176 · 19:12 → 23:50', detail: '已開票。Moynihan Train Hall → South Station；抵達後步行／短程車前往 hostel。' },
    { mode: 'LOCAL', date: '9/27', title: 'Boston / North Shore → Beverly', status: 'planned', meta: '依 9/26 住宿位置決定', detail: '行李多時優先比較 rideshare；大眾運輸需把週日班距算進去。' },
    { mode: 'CAR', date: '9/28', title: 'Beverly / North Shore → Philadelphia', status: 'confirmed', meta: '同學便車 · 已安排', detail: '不需回 Boston 搭 Amtrak；出發前只要確認集合時間、地點與行李空間。' },
    { mode: 'TRAIN', date: '9/30', title: 'Philadelphia → Washington, DC', status: 'need', meta: '尚未訂票 · 早上出發', detail: '市中心到市中心；目標在中午至午後早段抵達 Union Station。' },
    { mode: 'METRO / CAR', date: '10/3', title: 'DC → IAD', status: 'planned', meta: 'Silver Line 或 rideshare', detail: '01:15 班機等於 10/3 晚上離境；依住宿位置反推離開時間。' },
    { mode: 'FLIGHT', date: '10/4', title: 'IAD → TPE', status: 'confirmed', meta: 'Ticketed · 01:15 → 10/5 05:10', detail: '已開票。10/3 晚上須依報到時間前往 IAD。' }
  ],
  cities: [
    {
      name: 'New York', code: 'NYC · SECOND VISIT', visual: 'NYC',
      thesis: '把第二次紐約留給街區、食物和晚上節目；不重做第一次旅行的地標清單。',
      priority: ['Williamsburg / Greenpoint', 'Queens food day', 'West Village 與河岸慢走'],
      optional: ['Hadestown / Maybe Happy Ending', 'Comedy Cellar 早場', 'The Play That Goes Wrong'],
      guardrail: '夜生活不以酒吧為中心；Comedy Cellar 的 two-item minimum 可用食物或非酒精飲料完成。'
    },
    {
      name: 'Boston', code: 'BOS · ONE FULL DAY', visual: 'Boston',
      thesis: '9/26 是唯一完整日，先完成 Boston 獨有的歷史核心，再考慮 Back Bay 或 Cambridge。',
      priority: ['Boston Common / Beacon Hill', 'Freedom Trail 核心', 'North End / Harborwalk'],
      optional: ['Copley / Public Library', 'Harvard / Cambridge', '單一室內歷史點'],
      guardrail: '不把 Harvard 硬塞進已經走不完的歷史路線。'
    },
    {
      name: 'Philadelphia', code: 'PHL · FOUNDING STORY', visual: 'Philly',
      thesis: '只有一個完整日，優先理解美國建國史；美術館是加分題，不是主線。',
      priority: ['Independence Hall / Liberty Bell', 'Old City / Elfreth’s Alley', 'Reading Terminal Market'],
      optional: ['Barnes Foundation', 'City Hall / Rittenhouse', 'PMA / Rocky Steps'],
      guardrail: '不要把 9/29 變成兩間美術館的趕場日。'
    },
    {
      name: 'Washington, DC', code: 'DC · 3.5 DAYS', visual: 'DC',
      thesis: '把制度、Smithsonian 與紀念碑拆成不同日，最後一天保留自由選擇與機場緩衝。',
      priority: ['Capitol / Library of Congress', '一間 Smithsonian 主館', 'National Mall dusk / night'],
      optional: ['Arlington', '第二間 Smithsonian', 'Dupont / Georgetown 補遺'],
      guardrail: '單日最多一間大型館；10/3 晚上必須回到離境模式。'
    }
  ],
  food: [
    { city: 'NYC', title: '三個明確錨點', image: 'images/katz-pastrami.jpg', alt: 'Katz’s Delicatessen 的 pastrami sandwich', items: [
      { tag: 'Confirmed', status: 'confirmed', name: 'Keens Steakhouse', note: '9/24 18:00 · 7 位' },
      { tag: 'Must repeat', status: 'planned', name: 'Katz’s Delicatessen', note: '放在 Lower East Side 日' },
      { tag: 'Must repeat', status: 'planned', name: 'Joe’s Pizza', note: 'West Village 動線順路再訪' },
      { tag: 'Priority', status: 'planned', name: 'Queens food', note: 'Jackson Heights 優先；Flushing 看胃口' }
    ]},
    { city: 'PHL', title: 'Roast pork 優先於第二份牛排', image: 'images/reading-terminal.jpg', alt: 'Philadelphia Reading Terminal Market 內部', items: [
      { tag: 'Priority', status: 'planned', name: 'DiNic’s roast pork', note: 'Reading Terminal Market' },
      { tag: 'Planned', status: 'planned', name: 'Cheesesteak', note: '抵達晚或行程中吃一次即可' },
      { tag: 'Optional', status: 'optional', name: 'Soft pretzel', note: '看到合適的就吃，不特地繞路' }
    ]},
    { city: 'DC', title: '替整趟補上不同風味', image: 'images/ethiopian-platter.jpg', alt: '鋪在 injera 上的 Ethiopian fasting platter', items: [
      { tag: 'Priority', status: 'planned', name: 'Ethiopian food', note: '出發前選一家並確認營業日' },
      { tag: 'Planned', status: 'planned', name: 'Mid-Atlantic / Chesapeake', note: '做為最後幾天較完整的一餐' },
      { tag: 'Optional', status: 'optional', name: 'Half-smoke', note: '順路即可，不設成 mandatory stop' }
    ]}
  ],
  actions: {
    high: [
      { id: 'train-0930', urgent: true, text: '預訂 9/30 Philadelphia → DC Amtrak' },
      { id: 'lodging-dc', urgent: true, text: '預訂 Washington, DC 住宿' },
      { id: 'independence-entry', text: '確認 / 預約 Independence Hall 入場' },
      { id: 'capitol-tour', text: '確認 / 預約 U.S. Capitol tour' },
      { id: 'loc-entry', text: '確認 / 預約 Library of Congress 入場' },
      { id: 'smithsonian-entry', text: '接近出發時確認 Smithsonian timed-entry 要求' }
    ],
    medium: [
      { id: 'nyc-show', text: '決定 NYC 的 Broadway / Off-Broadway 演出' },
      { id: 'nyc-comedy', text: '決定是否安排 comedy show' },
      { id: 'barnes', text: '決定 Barnes Foundation 是否值得預約' },
      { id: 'dc-ethiopian', text: '選定 DC Ethiopian restaurant' },
      { id: 'iad-transfer', text: '確認 10/3 晚上前往 IAD 的方式與出發時間' }
    ]
  },
  packing: [
    { id: 'passport', text: '護照、ESTA、保險資料' },
    { id: 'tickets', text: '離線保存機票、Amtrak、住宿與訂位截圖' },
    { id: 'wedding-clothes', text: '婚禮正式服裝與正式鞋分袋' },
    { id: 'layers', text: '洋蔥式穿搭與輕薄外套' },
    { id: 'rain', text: '小雨傘或防水外套' },
    { id: 'power', text: '行動電源、充電線與轉接頭' },
    { id: 'medicine', text: '常備藥' },
    { id: 'network', text: 'eSIM / 網路方案' },
    { id: 'tracker', text: '行李定位器' },
    { id: 'sleep', text: '耳塞與眼罩' }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const storage = {
  get(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  },
  set(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch { return false; }
  },
  remove(key) {
    try { localStorage.removeItem(key); }
    catch { /* Storage can be unavailable in private browsing. */ }
  }
};

function statusBadge(status, label = statusLabels[status]) {
  return `<span class="status-badge status-${status}">${label}</span>`;
}

function resolveDayVisual(day) {
  if (visuals[day.city]) return visuals[day.city];
  if (day.title.includes('Washington')) return visuals.DC;
  if (day.title.includes('Philadelphia')) return visuals.Philly;
  if (day.title.includes('Beverly')) return visuals.Beverly;
  if (day.title.includes('Boston')) return visuals.Boston;
  return visuals.NYC;
}

function rotatedPhotos(visual, offset = 0, count = 3) {
  return Array.from({ length: count }, (_, index) => visual.photos[(offset + index) % visual.photos.length]);
}

function renderHighlights() {
  $('#highlightGrid').innerHTML = trip.highlights.map((highlight, index) => {
    const visual = visuals[highlight.visual];
    const photos = rotatedPhotos(visual, index, 3);
    return `
      <article class="highlight-card highlight-card-${index + 1}">
        <div class="highlight-gallery">
          ${photos.map((photo, photoIndex) => `<img src="${photo.src}" alt="${photo.alt}" width="1280" height="850" loading="${index === 0 && photoIndex === 0 ? 'eager' : 'lazy'}" decoding="async" />`).join('')}
        </div>
        <div class="highlight-shade"></div>
        <div class="highlight-topline"><span>${highlight.sequence}</span><span>${highlight.date}</span></div>
        <div class="highlight-copy">
          <span class="micro-label">${visual.label}</span>
          <h3>${highlight.title}</h3>
          <p>${highlight.pitch}</p>
          <div class="highlight-tags">${highlight.tags.map(tag => `<span>${tag}</span>`).join('')}</div>
        </div>
      </article>
    `;
  }).join('');
}

function renderItinerary() {
  const labels = { All: '全部', NYC: 'NYC', Transit: '移動日', Boston: 'Boston', Beverly: '婚禮', Philly: 'Philly', DC: 'DC', Flight: '飛行', Taipei: '台北' };
  const filters = ['All', ...new Set(trip.itinerary.map(day => day.city))];
  $('#cityFilters').innerHTML = filters.map((filter, index) => `
    <button class="filter-btn ${index === 0 ? 'active' : ''}" type="button" data-filter="${filter}" aria-pressed="${index === 0}">${labels[filter] || filter}</button>
  `).join('');

  $('#itineraryGrid').innerHTML = trip.itinerary.map((day, index) => {
    const statuses = [...new Set(day.slots.map(slot => slot.status))];
    const visual = resolveDayVisual(day);
    const photos = day.gallery
      ? day.gallery.map(caption => visual.photos.find(photo => photo.caption === caption)).filter(Boolean)
      : rotatedPhotos(visual, index, 3);
    return `
      <details class="day-card" data-city="${day.city}">
        <summary>
          <div class="day-media">
            ${photos.map(photo => `
              <figure><img src="${photo.src}" alt="" width="640" height="420" loading="lazy" decoding="async" /><figcaption>${photo.caption}</figcaption></figure>
            `).join('')}
          </div>
          <div class="day-topline">
            <div class="day-index">${String(index + 1).padStart(2, '0')}</div>
            <div class="day-date"><small>${day.date}（${day.weekday}）</small><strong>${day.title}</strong></div>
            <span class="city-tag">${labels[day.city] || day.city}</span>
          </div>
          <p class="day-summary">${day.summary}</p>
          <div class="day-statuses">${statuses.map(status => statusBadge(status)).join('')}</div>
          <span class="day-expand" aria-hidden="true">＋</span>
        </summary>
        <div class="day-detail">
          <div class="day-slots">
            ${day.slots.map(slot => `
              <div class="day-slot">
                <time>${slot.label}</time>
                <p>${slot.text}</p>
                ${statusBadge(slot.status)}
              </div>
            `).join('')}
          </div>
          <div class="decision-note"><strong>Decision</strong><span>${day.decision}</span></div>
        </div>
      </details>
    `;
  }).join('');

  $$('.filter-btn').forEach(button => button.addEventListener('click', () => {
    $$('.filter-btn').forEach(item => {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', item === button ? 'true' : 'false');
    });
    const filter = button.dataset.filter;
    $$('.day-card').forEach(card => card.classList.toggle('hidden', filter !== 'All' && card.dataset.city !== filter));
  }));
}

function renderBookings() {
  $('#bookingGrid').innerHTML = trip.bookings.map(booking => `
    <article class="booking-card">
      <div class="booking-head">
        <div><span class="micro-label">${booking.type}</span><h3>${booking.title}</h3></div>
        <div class="booking-date"><strong>${booking.date}</strong>${statusBadge(booking.status)}</div>
      </div>
      <ul>${booking.facts.map(fact => `<li>${fact}</li>`).join('')}</ul>
      ${booking.warning ? `<p class="booking-warning"><strong>Action</strong>${booking.warning}</p>` : ''}
      <p class="booking-note">${booking.note}</p>
    </article>
  `).join('');
}

function renderTransport() {
  $('#transportList').innerHTML = trip.transport.map((leg, index) => `
    <article class="transport-row">
      <div class="transport-index">${String(index + 1).padStart(2, '0')}</div>
      <div class="transport-route"><span class="micro-label">${leg.mode} · ${leg.date}</span><h3>${leg.title}</h3><p>${leg.detail}</p></div>
      <div class="transport-state">${statusBadge(leg.status)}<span>${leg.meta}</span></div>
    </article>
  `).join('');
}

function renderCityGuides() {
  $('#cityGuideGrid').innerHTML = trip.cities.map(city => {
    const visual = visuals[city.visual];
    return `
      <article class="city-card">
        <div class="city-card-media city-card-gallery">
          ${rotatedPhotos(visual, 0, 3).map(photo => `<img src="${photo.src}" alt="${photo.alt}" width="960" height="640" loading="lazy" decoding="async" />`).join('')}
          <div class="city-card-title"><span>${city.code}</span><h3>${city.name}</h3></div>
        </div>
        <div class="city-card-body">
          <p class="city-thesis">${city.thesis}</p>
          <div class="city-columns">
            <div><h4>Priority</h4><ul>${city.priority.map(item => `<li>${item}</li>`).join('')}</ul></div>
            <div><h4>Optional</h4><ul>${city.optional.map(item => `<li>${item}</li>`).join('')}</ul></div>
          </div>
          <p class="guardrail"><strong>Guardrail</strong>${city.guardrail}</p>
        </div>
      </article>
    `;
  }).join('');
}

function renderFood() {
  $('#foodGrid').innerHTML = trip.food.map(group => {
    const cityVisual = visuals[group.city === 'PHL' ? 'Philly' : group.city];
    const sidePhoto = cityVisual.photos[1];
    return `
    <article class="food-card">
      <div class="food-cover">
        <img src="${group.image}" alt="${group.alt}" width="1200" height="800" loading="lazy" decoding="async" />
        <img src="${sidePhoto.src}" alt="${sidePhoto.alt}" width="640" height="800" loading="lazy" decoding="async" />
        <div class="food-title"><span>${group.city}</span><h3>${group.title}</h3></div>
      </div>
      <div class="food-list">${group.items.map(item => `
        <div class="food-item">
          <div><strong>${item.name}</strong><small>${item.note}</small></div>
          ${statusBadge(item.status, item.tag)}
        </div>
      `).join('')}</div>
    </article>
  `;
  }).join('');
}

function renderChecklist(type, items, target) {
  const key = `ec2026-${type}`;
  const saved = storage.get(key, {});
  $(target).innerHTML = items.map(item => `
    <label class="check-item ${saved[item.id] ? 'done' : ''} ${item.urgent ? 'urgent' : ''}">
      <input type="checkbox" data-checklist="${type}" data-item-id="${item.id}" ${saved[item.id] ? 'checked' : ''} />
      <span>${item.text}</span>
    </label>
  `).join('');
}

function checklistConfig(type) {
  if (type === 'actions-high') return { items: trip.actions.high, target: '#highPriorityChecklist' };
  if (type === 'actions-medium') return { items: trip.actions.medium, target: '#mediumPriorityChecklist' };
  return { items: trip.packing, target: '#packingChecklist' };
}

function initChecklists() {
  ['actions-high', 'actions-medium', 'packing'].forEach(type => {
    const config = checklistConfig(type);
    renderChecklist(type, config.items, config.target);
  });

  document.addEventListener('change', event => {
    if (!event.target.matches('[data-checklist]')) return;
    const type = event.target.dataset.checklist;
    const id = event.target.dataset.itemId;
    const saved = storage.get(`ec2026-${type}`, {});
    saved[id] = event.target.checked;
    storage.set(`ec2026-${type}`, saved);
    event.target.closest('.check-item').classList.toggle('done', event.target.checked);
  });

  $$('[data-reset]').forEach(button => button.addEventListener('click', () => {
    const type = button.dataset.reset;
    const config = checklistConfig(type);
    storage.remove(`ec2026-${type}`);
    renderChecklist(type, config.items, config.target);
  }));
}

function initNotes() {
  const notes = $('#tripNotes');
  try { notes.value = localStorage.getItem('ec2026-notes') || ''; }
  catch { $('#saveState').textContent = '此瀏覽器無法儲存'; }

  let timer;
  notes.addEventListener('input', () => {
    $('#saveState').textContent = '儲存中…';
    clearTimeout(timer);
    timer = setTimeout(() => {
      try {
        localStorage.setItem('ec2026-notes', notes.value);
        $('#saveState').textContent = '已儲存';
      } catch {
        $('#saveState').textContent = '無法儲存';
      }
    }, 350);
  });
}

function initTheme() {
  let saved;
  try { saved = localStorage.getItem('ec2026-theme'); } catch { saved = null; }
  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  document.documentElement.dataset.theme = saved || preferred;

  $('#themeToggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]').content = next === 'dark' ? '#0b151d' : '#132a3a';
    try { localStorage.setItem('ec2026-theme', next); } catch { /* Theme still works for the session. */ }
  });
}

function initCountdown() {
  const now = new Date();
  const start = new Date(trip.start);
  const end = new Date(trip.end);
  const days = Math.ceil((start - now) / 86400000);
  if (days > 0) $('#countdownText').textContent = `距離出發還有 ${days} 天`;
  else if (now <= end) $('#countdownText').textContent = '旅程進行中';
  else $('#countdownText').textContent = '旅程已結束';
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
}

function initActions() {
  $('#printBtn').addEventListener('click', () => window.print());
  $('#copySummaryBtn').addEventListener('click', async () => {
    const summary = `East Coast 2026\n9/19 CI12 TPE 17:40 → JFK 20:40（已開票）\n9/20–9/24 New York City\n9/24 18:00 Keens · 7 位（已確認）\n9/25 Train 176 Moynihan 19:12 → Boston 23:50（已開票）\n9/25 HI Boston；00:00–01:00 check-in 已通知\n9/26 住宿已訂\n9/27 Beverly wedding＋住宿已訂\n9/28 同學便車回 Philadelphia；住同學家\n9/30 Washington, DC（交通與住宿待訂）\n10/4 01:15 IAD → TPE（已開票）\n10/5 05:10 抵達 TPE`;
    try {
      await navigator.clipboard.writeText(summary);
      showToast('行程摘要已複製');
    } catch {
      showToast('瀏覽器未允許剪貼簿權限');
    }
  });

  let previouslyOpen = [];
  window.addEventListener('beforeprint', () => {
    previouslyOpen = $$('.day-card').filter(card => card.open);
    $$('.day-card').forEach(card => { card.open = true; });
  });
  window.addEventListener('afterprint', () => {
    $$('.day-card').forEach(card => { card.open = previouslyOpen.includes(card); });
  });
}

renderHighlights();
renderItinerary();
renderBookings();
renderTransport();
renderCityGuides();
renderFood();
initChecklists();
initNotes();
initTheme();
initCountdown();
initActions();

if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
