/* =========================================================
   BorrowLoop: peer-to-peer borrowing website (demo, no backend)
   ========================================================= */

/* ---------- Illustrations ---------- */
const ART = {
  tent:'<svg viewBox="0 0 160 110" aria-hidden="true"><circle cx="124" cy="30" r="12" fill="#F6C453"/><path d="M14 92h132" stroke="#9CCBB5" stroke-width="4" stroke-linecap="round"/><path d="M36 90 80 28l44 62z" fill="#1F8A62"/><path d="M80 28 66 90h28z" fill="#0F5A3F"/><path d="M80 28v-8" stroke="#14201B" stroke-width="3" stroke-linecap="round"/><path d="M80 20l12 4-12 4" fill="#E8743B"/></svg>',
  drill:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="38" y="34" width="70" height="30" rx="10" fill="#E8743B"/><rect x="108" y="42" width="18" height="14" rx="3" fill="#3A4741"/><rect x="126" y="47" width="22" height="4" rx="2" fill="#8A9690"/><path d="M56 64h26l-6 30H62z" fill="#3A4741"/><rect x="52" y="90" width="34" height="10" rx="3" fill="#14201B"/><circle cx="56" cy="49" r="6" fill="#FBD3B9"/></svg>',
  camera:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="30" y="34" width="100" height="62" rx="12" fill="#2E3A59"/><rect x="48" y="24" width="30" height="14" rx="4" fill="#2E3A59"/><circle cx="80" cy="65" r="22" fill="#AFC0EA"/><circle cx="80" cy="65" r="13" fill="#2E3A59"/><circle cx="76" cy="61" r="4" fill="#FFFFFF"/><circle cx="114" cy="46" r="4" fill="#F6C453"/></svg>',
  projector:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M96 52 152 30v60z" fill="#F6E7A6"/><rect x="18" y="40" width="84" height="46" rx="10" fill="#7A3E73"/><circle cx="84" cy="63" r="14" fill="#E9C7E4"/><circle cx="84" cy="63" r="7" fill="#7A3E73"/><rect x="30" y="52" width="30" height="5" rx="2.5" fill="#E9C7E4"/><rect x="30" y="64" width="20" height="5" rx="2.5" fill="#E9C7E4"/><rect x="28" y="86" width="10" height="8" rx="2" fill="#3A2238"/><rect x="82" y="86" width="10" height="8" rx="2" fill="#3A2238"/></svg>',
  ladder:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M52 98 70 14M108 98 90 14M66 34h28M62 54h36M58 74h44" stroke="#8A6512" stroke-width="7" stroke-linecap="round"/><path d="M66 14h28" stroke="#F6C453" stroke-width="8" stroke-linecap="round"/></svg>',
  speaker:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="50" y="12" width="60" height="90" rx="12" fill="#2E3A59"/><circle cx="80" cy="68" r="21" fill="#AFC0EA"/><circle cx="80" cy="68" r="9" fill="#2E3A59"/><circle cx="80" cy="33" r="9" fill="#AFC0EA"/><circle cx="80" cy="33" r="3" fill="#2E3A59"/><path d="M122 44c6 6 6 18 0 24M132 36c10 10 10 30 0 40" stroke="#F6C453" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
  bike:'<svg viewBox="0 0 160 110" aria-hidden="true"><circle cx="42" cy="74" r="22" fill="none" stroke="#14201B" stroke-width="6"/><circle cx="118" cy="74" r="22" fill="none" stroke="#14201B" stroke-width="6"/><path d="M42 74 66 40h40l12 34M66 40l18 34h34M58 30h18M104 40l-4-12h14" fill="none" stroke="#1F8A62" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  table:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="16" y="34" width="128" height="14" rx="5" fill="#7A3E73"/><path d="M36 48 58 96M124 48l-22 48M58 48 36 96M102 48l22 48" stroke="#3A2238" stroke-width="6" stroke-linecap="round"/><circle cx="50" cy="26" r="7" fill="#F6C453"/><rect x="70" y="18" width="22" height="16" rx="3" fill="#E9C7E4"/></svg>',
  box:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M30 40 80 20l50 20v48l-50 20-50-20z" fill="#E8C9A0"/><path d="M30 40l50 20 50-20M80 60v48" stroke="#B68B5A" stroke-width="4" fill="none" stroke-linejoin="round"/></svg>'
};

/* ---------- Icons ---------- */
const I = {
  heart:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg>',
  chat:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 5h16v11H9l-5 4z"/></svg>',
  check:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 12 5 5 9-10"/></svg>',
  shield:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6z"/><path d="m9 12 2 2 4-4"/></svg>',
  camera:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>',
  lock:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>',
  id:'<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="12" r="2.5"/><path d="M14 10h4M14 14h3"/></svg>',
  pin:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
  info:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/></svg>',
  bulb:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/></svg>',
  close:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  back:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg>',
  send:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12 20 4l-6 16-3-7z"/></svg>',
  plus:'<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  star:'<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.5 2.9 1-6.1L3.1 9.5l6.1-.9z"/></svg>',
  bolt:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 3 5 14h6l-1 7 8-11h-6z"/></svg>',
  search:'<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>'
};

/* ---------- Data ---------- */
/* ---------- More illustrations ---------- */
Object.assign(ART, {
  mixer:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="40" y="88" width="80" height="10" rx="4" fill="#B4501E"/><path d="M48 88V40a14 14 0 0 1 14-14h50a8 8 0 0 1 8 8v8H70v46z" fill="#E8743B"/><path d="M78 58h40l-6 30H84z" fill="#D9DEE2"/><rect x="94" y="42" width="6" height="16" fill="#8A9690"/></svg>',
  airfryer:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="44" y="14" width="72" height="88" rx="18" fill="#14201B"/><rect x="54" y="50" width="52" height="40" rx="8" fill="#3A4741"/><rect x="70" y="64" width="20" height="6" rx="3" fill="#8A9690"/><circle cx="80" cy="32" r="8" fill="#F6C453"/></svg>',
  console:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="22" y="38" width="116" height="48" rx="24" fill="#2E3A59"/><circle cx="52" cy="62" r="11" fill="#AFC0EA"/><circle cx="108" cy="52" r="5" fill="#F6C453"/><circle cx="119" cy="62" r="5" fill="#E8743B"/><circle cx="97" cy="62" r="5" fill="#9AD8BE"/><circle cx="108" cy="72" r="5" fill="#E9C7E4"/></svg>',
  guitar:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M104 14l14-6 8 8-6 14z" fill="#3A2238"/><path d="M108 22 70 62" stroke="#3A2238" stroke-width="6"/><path d="M58 48c10-4 22 2 20 14 10 2 16 12 10 22-8 14-36 18-50 4S34 54 44 48c4-2 10-2 14 0z" fill="#E8743B"/><circle cx="60" cy="72" r="7" fill="#3A2238"/></svg>',
  stroller:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M40 30a34 34 0 0 1 48 0v30H40z" fill="#E9C7E4"/><rect x="36" y="58" width="76" height="14" rx="6" fill="#7A3E73"/><path d="M112 62l14-36h10" stroke="#3A2238" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="50" cy="90" r="10" fill="#3A2238"/><circle cx="100" cy="90" r="10" fill="#3A2238"/></svg>',
  luggage:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="50" y="26" width="60" height="70" rx="10" fill="#2E8F9E"/><path d="M68 26V14h24v12" stroke="#14201B" stroke-width="5" fill="none"/><path d="M66 40v42M80 40v42M94 40v42" stroke="#1F6F7A" stroke-width="4"/><circle cx="62" cy="100" r="5" fill="#14201B"/><circle cx="98" cy="100" r="5" fill="#14201B"/></svg>',
  mower:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M100 60 128 16" stroke="#3A4741" stroke-width="6" stroke-linecap="round"/><path d="M120 14h16" stroke="#14201B" stroke-width="7" stroke-linecap="round"/><rect x="30" y="54" width="78" height="30" rx="10" fill="#1F8A62"/><circle cx="44" cy="88" r="11" fill="#14201B"/><circle cx="96" cy="88" r="11" fill="#14201B"/><path d="M10 100h140" stroke="#9CCBB5" stroke-width="4"/></svg>',
  kayak:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M10 96c20-6 40 6 70 0s50 6 70 0" stroke="#AFC0EA" stroke-width="4" fill="none"/><path d="M10 70c40 18 100 18 140 0-40-12-100-12-140 0z" fill="#E8743B"/><ellipse cx="80" cy="66" rx="16" ry="5" fill="#14201B"/><path d="M40 30l80 70" stroke="#3A4741" stroke-width="5" stroke-linecap="round"/><path d="M32 22l14 4-4 12zM122 94l10 10-12-4z" fill="#F6C453"/></svg>',
  drone:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M62 52 34 34M98 52l28-18M62 64 34 80M98 64l28 16" stroke="#3A4741" stroke-width="5"/><ellipse cx="34" cy="32" rx="20" ry="4" fill="#AFC0EA"/><ellipse cx="126" cy="32" rx="20" ry="4" fill="#AFC0EA"/><ellipse cx="34" cy="82" rx="20" ry="4" fill="#AFC0EA"/><ellipse cx="126" cy="82" rx="20" ry="4" fill="#AFC0EA"/><rect x="60" y="46" width="40" height="24" rx="9" fill="#2E3A59"/><circle cx="80" cy="74" r="6" fill="#14201B"/></svg>',
  sewing:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M28 90h104v10H28z" fill="#7A3E73"/><path d="M40 90V40a10 10 0 0 1 10-10h70a8 8 0 0 1 8 8v20H68v32z" fill="#E9C7E4"/><rect x="104" y="58" width="10" height="22" fill="#3A2238"/><circle cx="118" cy="44" r="8" fill="#F6C453"/></svg>',
  vacuum:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="56" y="68" width="62" height="28" rx="12" fill="#E8743B"/><path d="M62 72 40 22" stroke="#3A4741" stroke-width="6" stroke-linecap="round"/><rect x="26" y="12" width="22" height="13" rx="4" fill="#14201B"/><circle cx="68" cy="98" r="6" fill="#14201B"/><circle cx="108" cy="98" r="6" fill="#14201B"/></svg>',
  badminton:'<svg viewBox="0 0 160 110" aria-hidden="true"><ellipse cx="56" cy="38" rx="20" ry="26" fill="#FFFFFF" stroke="#2E3A59" stroke-width="5"/><path d="M44 30h24M44 42h24M56 14v48" stroke="#AFC0EA" stroke-width="2"/><path d="M56 64v36" stroke="#2E3A59" stroke-width="7" stroke-linecap="round"/><path d="M112 46l14 30h-28z" fill="#FFFFFF" stroke="#8A9690" stroke-width="2"/><circle cx="112" cy="82" r="8" fill="#E8743B"/></svg>',
  laptop:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="34" y="20" width="92" height="60" rx="6" fill="#2E3A59"/><rect x="40" y="26" width="80" height="48" rx="3" fill="#AFC0EA"/><path d="M20 84h120l-8 12H28z" fill="#3A4741"/></svg>',
  bbq:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M40 46h80a40 40 0 0 1-80 0z" fill="#14201B"/><path d="M56 82 46 102M104 82l10 20M80 86v16" stroke="#3A4741" stroke-width="5" stroke-linecap="round"/><path d="M60 38c0-8 8-8 8-16M80 38c0-8 8-8 8-16M100 38c0-8 8-8 8-16" stroke="#E8743B" stroke-width="4" fill="none" stroke-linecap="round"/></svg>',
  cooler:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="34" y="42" width="92" height="56" rx="10" fill="#2E8F9E"/><rect x="30" y="34" width="100" height="16" rx="6" fill="#FFFFFF" stroke="#2E8F9E" stroke-width="3"/><path d="M66 34v-10h28v10" stroke="#14201B" stroke-width="5" fill="none"/></svg>',
  canopy:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M18 44 80 16l62 28z" fill="#E8743B"/><path d="M18 44h124" stroke="#B4501E" stroke-width="5"/><path d="M28 44c6 8 12 8 18 0 6 8 12 8 18 0 6 8 12 8 18 0 6 8 12 8 18 0 6 8 12 8 18 0" stroke="#F6C453" stroke-width="4" fill="none"/><path d="M26 44v56M134 44v56" stroke="#3A4741" stroke-width="5"/></svg>',
  keyboard:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="12" y="40" width="136" height="44" rx="6" fill="#14201B"/><rect x="18" y="54" width="124" height="24" fill="#FFFFFF"/><path d="M33 54v24M48 54v24M63 54v24M78 54v24M93 54v24M108 54v24M123 54v24" stroke="#C9D2CE" stroke-width="2"/><path d="M30 54v14M45 54v14M75 54v14M90 54v14M105 54v14M135 54v14" stroke="#14201B" stroke-width="6"/><circle cx="30" cy="47" r="3" fill="#E8743B"/></svg>',
  washer:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="36" y="48" width="58" height="42" rx="10" fill="#F6C453"/><rect x="46" y="58" width="22" height="10" rx="3" fill="#14201B"/><circle cx="48" cy="94" r="8" fill="#14201B"/><circle cx="84" cy="94" r="8" fill="#14201B"/><path d="M94 66h18l22-32" stroke="#3A4741" stroke-width="5" fill="none" stroke-linecap="round"/><path d="M136 30l10-8M138 36l12-2" stroke="#2E8F9E" stroke-width="3" stroke-linecap="round"/></svg>',
  vr:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M34 56H16M126 56h18" stroke="#14201B" stroke-width="6" stroke-linecap="round"/><rect x="34" y="36" width="92" height="44" rx="18" fill="#3A4741"/><circle cx="62" cy="58" r="11" fill="#AFC0EA"/><circle cx="98" cy="58" r="11" fill="#AFC0EA"/></svg>',
  playpen:'<svg viewBox="0 0 160 110" aria-hidden="true"><rect x="26" y="36" width="108" height="56" rx="8" fill="#FBF1D3" stroke="#7A3E73" stroke-width="5"/><path d="M44 36v56M62 36v56M80 36v56M98 36v56M116 36v56" stroke="#7A3E73" stroke-width="3"/><circle cx="70" cy="78" r="8" fill="#E8743B"/><rect x="88" y="70" width="14" height="14" rx="3" fill="#2E8F9E"/></svg>',
  hammock:'<svg viewBox="0 0 160 110" aria-hidden="true"><path d="M20 100V20M140 100V20" stroke="#8A6512" stroke-width="7" stroke-linecap="round"/><path d="M20 34c30 50 90 50 120 0" stroke="#E8743B" stroke-width="14" fill="none" stroke-linecap="round"/><path d="M14 18c4-8 12-8 16 0M134 18c4-8 12-8 16 0" stroke="#1F8A62" stroke-width="6" fill="none" stroke-linecap="round"/></svg>'
});

/* ---------- Data ---------- */
const ME = { name:'Alice L.', initials:'A', color:'#F6C453', area:'Subang Jaya' };
const CATS = ['All','Camping','Tools','Cameras','Electronics','Party','Sports','Kitchen','Home','Kids','Travel','Garden','Music'];
const CAT_ART = { Camping:'tent', Tools:'drill', Cameras:'camera', Electronics:'laptop', Party:'speaker', Sports:'bike', Kitchen:'mixer', Home:'vacuum', Kids:'stroller', Travel:'luggage', Garden:'mower', Music:'guitar', Other:'box' };
const CAT_BG = { Camping:'#DDEFE6', Tools:'#FDE9D9', Cameras:'#E4E9F7', Electronics:'#E4E9F7', Party:'#F5E6F3', Sports:'#FBF1D3', Kitchen:'#FDE9D9', Home:'#F5E6F3', Kids:'#F5E6F3', Travel:'#DDEEF0', Garden:'#DDEFE6', Music:'#FBF1D3', Other:'#F4F7F5' };

/* Neighbourhoods (approximate centre points, used for the map and distances) */
const AREAS = {
  'SS15, Subang Jaya':[3.0779,101.5862], 'SS17, Subang Jaya':[3.0811,101.5905], 'SS19, Subang Jaya':[3.0745,101.5786],
  'SS14, Subang Jaya':[3.0727,101.5913], 'USJ 9, Subang Jaya':[3.0434,101.5844], 'Sunway, Petaling Jaya':[3.0680,101.6040],
  'Kelana Jaya':[3.1035,101.6046], 'SS2, Petaling Jaya':[3.1170,101.6210], 'Damansara Utama':[3.1365,101.6229],
  'Ara Damansara':[3.1140,101.5800], 'Bangsar, Kuala Lumpur':[3.1300,101.6710], 'Mont Kiara, Kuala Lumpur':[3.1700,101.6500],
  'KLCC, Kuala Lumpur':[3.1579,101.7117], 'Cheras, Kuala Lumpur':[3.0870,101.7440], 'Puchong':[3.0230,101.6170],
  'Shah Alam Seksyen 7':[3.0730,101.4900], 'Setia Alam':[3.1030,101.4560], 'Cyberjaya':[2.9220,101.6510]
};
const PICK_AREAS = ['Subang Jaya','Petaling Jaya','Kuala Lumpur','Shah Alam','Puchong','Cyberjaya'];
const PICK_COORDS = { 'Subang Jaya':[3.0779,101.5862], 'Petaling Jaya':[3.1170,101.6210], 'Kuala Lumpur':[3.1500,101.6950], 'Shah Alam':[3.0730,101.5100], 'Puchong':[3.0230,101.6170], 'Cyberjaya':[2.9220,101.6510] };

const OWNER_COLORS = ['#F6C453','#AFC0EA','#9AD8BE','#E9C7E4','#FBD3B9','#BFE3E8'];
const colorFor = n => OWNER_COLORS[[...n].reduce((s, c) => s + c.charCodeAt(0), 0) % OWNER_COLORS.length];

/* id, title, category, art, price/day, deposit, area, owner, rating, reviews, condition, delivery, description, included, rules, booked days in Nov */
const RAW = [
  [1,'4-person camping tent','Camping','tent',15,100,'SS15, Subang Jaya','Farid A.',4.9,32,'Like new',true,"Waterproof dome tent that sets up in about 10 minutes. Fits four people with bags. Great for Fraser's Hill or a beach weekend.",['Tent + rain fly','12 pegs','Ground sheet','Carry bag'],['Return it dry, or tell me so I can air it out','No campfires within 3 metres of the tent','Lost pegs: RM2 each from the deposit'],[2,3,12,13,21,22]],
  [2,'Cordless power drill + bits','Tools','drill',10,80,'SS17, Subang Jaya','Raj K.',4.8,51,'Good',false,'18V cordless drill with two batteries and a 20-piece bit set. Handles concrete walls fine with the masonry bits.',['Drill','2 batteries','Charger','20 bits'],['Return both batteries charged','Masonry bits only for walls, please'],[5,6,7,19]],
  [3,'Mirrorless camera kit','Cameras','camera',45,400,'USJ 9, Subang Jaya','Hana R.',5.0,18,'Like new',true,'24MP mirrorless camera with a 24–70mm lens. Perfect for weddings, trips or product shoots.',['Camera body','24–70mm lens','2 batteries','64GB card','Camera bag'],['Verified borrowers only','Keep it away from sand and sea water','Damage protection required'],[14,15,20,21,28,29]],
  [4,'Mini projector + 100" screen','Party','projector',25,200,'SS19, Subang Jaya','Mei Shan',4.7,24,'Good',true,'Full HD mini projector with a foldable 100-inch screen. Movie nights, football screenings, presentations.',['Projector','Screen + stand','HDMI cable','Remote'],['Let it cool down before packing','No ceiling mounting'],[7,8,14]],
  [5,'6-step aluminium ladder','Tools','ladder',0,50,'SS15, Subang Jaya','Alice L.',4.9,12,'Good',false,'Sturdy 6-step ladder, reaches most ceiling lights and fans. Free to borrow for neighbours.',['Ladder'],['Same-day return preferred'],[14]],
  [6,'Party speaker with mic','Party','speaker',20,150,'SS15, Subang Jaya','Alice L.',4.6,40,'Like new',true,'Loud Bluetooth party speaker with a wireless karaoke mic. Battery lasts about 10 hours.',['Speaker','Wireless mic','Charging cable'],['Keep it dry','Volume down after 11pm please'],[6,7,8]],
  [7,'Road bike (size M)','Sports','bike',18,150,'Kelana Jaya','Siti N.',4.9,27,'Good',false,'Lightweight road bike, fits riders around 165–180cm. Helmet and lock included.',['Bike','Helmet','Lock','Lights'],['Lock it whenever you stop','No off-road trails'],[1,8,15,22,29]],
  [8,'Folding tables × 4','Party','table',12,60,'SS14, Subang Jaya','Kumar P.',4.8,15,'Good',true,'Four 6-foot folding tables. Great for kenduri, open houses and garage sales.',['4 tables'],['Wipe clean before returning'],[15,16]],
  [9,'Stand mixer (5L)','Kitchen','mixer',15,150,'SS19, Subang Jaya','Nurul H.',4.9,22,'Like new',true,'Powerful 5L stand mixer for cakes, bread and kuih. Perfect for Raya or Christmas baking season.',['Mixer','Whisk','Dough hook','Flat beater'],['Wash attachments before returning','No hot liquids in the bowl'],[9,10,23]],
  [10,'Air fryer XL','Kitchen','airfryer',8,80,'Sunway, Petaling Jaya','Jason W.',4.6,19,'Good',true,'5.5L air fryer, big enough for a whole chicken. Try it before you buy one!',['Air fryer','Basket','Recipe booklet'],['Clean the basket before returning'],[3,4]],
  [11,'Gaming console + 2 controllers','Electronics','console',30,350,'SS2, Petaling Jaya','Daniel T.',4.8,45,'Like new',true,'Latest-gen console with two controllers and five games installed. Perfect for a weekend gaming session.',['Console','2 controllers','HDMI + power cables','5 games'],['Do not log out of my account','Damage protection recommended'],[6,7,13,14,20,21]],
  [12,'Acoustic guitar','Music','guitar',10,120,'Damansara Utama','Aiman Z.',4.9,14,'Good',false,'Full-size acoustic guitar with a soft case, tuner and spare strings. Great for beginners.',['Guitar','Soft case','Clip-on tuner','Spare strings'],['Keep it out of hot cars'],[11]],
  [13,'Baby stroller','Kids','stroller',8,100,'USJ 9, Subang Jaya','Priya S.',4.8,26,'Good',true,'Foldable stroller with canopy and storage basket. Handy when family visits with a little one.',['Stroller','Rain cover'],['Wipe the seat before returning'],[1,2,3]],
  [14,'Large hard-shell luggage','Travel','luggage',8,120,'Puchong','Lim W.',4.7,33,'Like new',false,'28-inch spinner suitcase with TSA lock. Fits two weeks of clothes.',['Suitcase','Luggage tag'],['Please do not put stickers on it'],[18,19,20,21,22,23,24]],
  [15,'Electric lawn mower','Garden','mower',20,150,'Shah Alam Seksyen 7','Hafiz M.',4.7,11,'Good',false,'Corded electric mower with a 40L grass bag. Easy to start, quiet enough for mornings.',['Mower','Grass bag','15m extension cord'],['Empty the grass bag before returning','Unplug before clearing the blade'],[7,14]],
  [16,'Sit-on-top kayak + paddle','Sports','kayak',35,300,'Setia Alam','Rachel O.',5.0,9,'Like new',false,'Stable single kayak, good for lakes and calm sea. Comes with a paddle and life jacket.',['Kayak','Paddle','Life jacket','Roof straps'],['Rinse with fresh water after sea use','Life jacket must be worn'],[1,2,8,9]],
  [17,'Camera drone with 4K','Cameras','drone',60,600,'Mont Kiara, Kuala Lumpur','Kevin C.',4.9,21,'Like new',true,'Compact 4K drone with 3 batteries. Great for travel videos and property photos.',['Drone','3 batteries','Controller','Spare propellers','Case'],['Check local flying rules before use','Damage protection required','Verified borrowers only'],[5,6,12,19,26]],
  [18,'Sewing machine','Home','sewing',12,150,'Cheras, Kuala Lumpur','Aunty Mary',5.0,38,'Good',true,'Reliable sewing machine for hemming, altering baju and small projects.',['Machine','Foot pedal','Bobbins','Needles'],['Keep the foot pedal cable untangled'],[10,11]],
  [19,'Cordless stick vacuum','Home','vacuum',10,120,'SS17, Subang Jaya','Wong K.Y.',4.6,17,'Good',true,'Lightweight cordless vacuum, great for moving-out cleaning or car interiors.',['Vacuum','Charger','2 nozzles'],['Empty the dust bin after use'],[4,5]],
  [20,'Badminton set (4 rackets)','Sports','badminton',5,40,'SS14, Subang Jaya','Arif R.',4.8,29,'Good',false,'Four rackets and a tube of shuttlecocks. Perfect for a weekend game with friends.',['4 rackets','12 shuttlecocks','Bag'],['Replace shuttlecocks if you use them all'],[]],
  [21,'Laptop for presentations','Electronics','laptop',25,500,'Bangsar, Kuala Lumpur','Sarah J.',4.7,13,'Good',false,'14-inch laptop with office apps installed. Handy when your own laptop is in repair.',['Laptop','Charger','HDMI adapter'],['Do not install software','Your files will be wiped on return'],[2,3,4,5,6]],
  [22,'BBQ grill + tongs','Camping','bbq',12,80,'Ara Damansara','Ben L.',4.8,24,'Well used',false,'Charcoal BBQ grill for garden parties or beach trips. Comes with tongs and a brush.',['Grill','Tongs','Wire brush'],['Clean the grill before returning','Let the coals fully cool down'],[7,14,28]],
  [23,'Cooler box (45L)','Camping','cooler',6,50,'Kelana Jaya','Siti N.',4.9,31,'Good',false,'Keeps drinks cold for two days. Great for picnics, fishing trips and road trips.',['Cooler box'],['Drain and dry before returning'],[]],
  [24,'Party canopy tent 3×3m','Party','canopy',30,200,'Puchong','Lim W.',4.7,20,'Good',true,'Pop-up canopy tent for open houses, bazaars and outdoor events. Sets up in 5 minutes with two people.',['Canopy','Frame','4 sandbags','Carry bag'],['Do not use in strong wind','Dry before folding'],[14,15,21,22]],
  [25,'Digital piano (61 keys)','Music','keyboard',15,200,'SS2, Petaling Jaya','Grace T.',4.9,12,'Like new',true,'61-key keyboard with stand and sustain pedal. Try it before signing up for lessons.',['Keyboard','Stand','Sustain pedal','Power adapter'],['No food or drinks near the keys'],[1,2]],
  [26,'Pressure washer','Tools','washer',20,150,'Shah Alam Seksyen 7','Hafiz M.',4.8,25,'Good',false,'High-pressure washer for cars, porches and driveways. Makes old tiles look new.',['Washer','Hose','Spray gun','2 nozzles'],['Drain the water before returning'],[7,8]],
  [27,'VR headset','Electronics','vr',25,300,'Cyberjaya','Farah I.',4.6,10,'Like new',true,'Standalone VR headset with two controllers. Fun for parties and kids (13+).',['Headset','2 controllers','Charging cable'],['Clean the face cushion after use'],[13,14]],
  [28,'Baby playpen','Kids','playpen',6,60,'Puchong','Priya S.',4.8,15,'Good',true,'Foldable playpen for when grandkids or little cousins come to visit.',['Playpen','Mattress','Carry bag'],['Wipe clean before returning'],[]],
  [29,'Cabin backpack (40L)','Travel','luggage',5,60,'Sunway, Petaling Jaya','Jason W.',4.7,22,'Good',false,'Carry-on sized travel backpack. Fits budget airline cabin limits.',['Backpack','Rain cover'],['Empty all pockets before returning'],[]],
  [30,'Camping hammock','Camping','hammock',5,40,'Damansara Utama','Aiman Z.',4.9,18,'Like new',false,'Lightweight double hammock with tree straps. Sets up in 2 minutes.',['Hammock','Tree straps','Carabiners'],['Do not hang over water'],[7,8]],
  [31,'Telescope-style spotting scope','Cameras','camera',20,250,'Cyberjaya','Farah I.',4.5,6,'Good',false,'Spotting scope with tripod for birdwatching or stargazing nights.',['Scope','Tripod','Phone adapter'],['Never point it at the sun'],[]],
  [32,'Karaoke machine','Music','speaker',35,250,'Cheras, Kuala Lumpur','Ah Seng',4.8,52,'Good',true,'Karaoke set with two wireless mics and a big song library. Party starter guaranteed.',['Speaker','2 mics','Remote','Song list'],['Volume down after 11pm please'],[7,14,21,28]],
  [33,'Folding chairs × 20','Party','table',20,100,'SS14, Subang Jaya','Kumar P.',4.8,19,'Good',true,'Twenty sturdy plastic chairs. Pairs well with my folding tables.',['20 chairs'],['Stack them neatly when returning'],[15,16]],
  [34,'Tile cutter','Tools','drill',15,120,'Setia Alam','Rachel O.',4.6,8,'Good',false,'Manual tile cutter for DIY bathroom and kitchen jobs.',['Tile cutter','Spare wheel'],['Clean off tile dust'],[]],
  [35,'Electric scooter','Sports','bike',25,300,'KLCC, Kuala Lumpur','Kevin C.',4.7,16,'Like new',false,'Foldable e-scooter, about 25 km range. Fun for park rides and short trips.',['Scooter','Charger','Helmet'],['Max rider weight 100kg','Not for highways'],[3,4,10,11]],
  [36,'Hedge trimmer','Garden','mower',10,100,'Ara Damansara','Ben L.',4.7,9,'Good',false,'Cordless hedge trimmer for tidying up bushes and fences.',['Trimmer','Battery','Charger','Blade cover'],['Put the blade cover back on'],[]]
];

let items = RAW.map(([id, title, cat, art, price, deposit, area, owner, rating, reviews, cond, delivery, desc, included, rules, booked]) => {
  const [lat, lng] = AREAS[area];
  return { id, title, cat, art, bg: CAT_BG[cat], price, deposit, area, lat, lng, km: 0, owner, oc: colorFor(owner),
           rating, reviews, cond, delivery, desc, included, rules, booked };
});

let rentals = [
  { id:'r1', itemId:1, role:'borrow', status:'active', start:6, end:8, progress:35 },
  { id:'r2', itemId:3, role:'borrow', status:'pending', start:20, end:21 },
  { id:'r3', itemId:2, role:'borrow', status:'done', label:'Returned 18 Oct', refund:80, rated:false },
  { id:'r4', itemId:5, role:'lend', status:'request', start:14, end:14, from:'Raj K.', fc:'#AFC0EA', note:'Need it to change a ceiling light, will bring it back the same evening.' },
  { id:'r5', itemId:6, role:'lend', status:'active', start:6, end:8, from:'Mei Shan', fc:'#AFC0EA', earn:60 }
];

let wants = [
  { title:'Pressure washer', when:'This Saturday', budget:'Up to RM20/day', offers:3 },
  { title:'Folding chairs × 20', when:'15 Nov', budget:'Up to RM30 total', offers:0 }
];

const chats = {
  'Farid A.': [
    { from:'me', text:"Hi Farid! Is the tent free for 6–8 Nov? Going to Fraser's Hill" },
    { from:'them', text:"Yes it is! Nice spot. It can get rainy up there, so the rain fly is in the bag" },
    { from:'sys', text:'Farid accepted · RM100 deposit held' },
    { from:'them', text:'Can meet at SS15 LRT, Friday 6pm?' }
  ]
};

/* ---------- State ---------- */
const state = { q:'', cat:'All', sort:'near', profileTab:'offers', rentTab:'borrow', book:null,
  f:{ cats:[], maxPrice:60, maxKm:30, free:false, delivery:false, sort:'near' }, filtersOpen:false, view:'list' };
let wish = new Set();
try { wish = new Set(JSON.parse(localStorage.getItem('borrowloop-wish') || '[]')); } catch (e) {}
function saveWish(){ try { localStorage.setItem('borrowloop-wish', JSON.stringify([...wish])); } catch (e) {} }

/* ---------- Your profile ---------- */
Object.assign(ME, {
  bio:'Weekend camper and DIY fan. Happy to lend my gear to neighbours. Just bring it back clean!',
  photo:null, cover:'#0B7A55', phone:'+60 12-345 6789', email:'alice@example.com',
  idVerified:false, phoneVerified:true, joined:'Oct 2026', signedIn:true
});

/* ---------- More app data ---------- */
let notifs = [
  { id:1, icon:'check', text:'Farid accepted your request for the 4-person camping tent.', link:'#/rentals', time:'2h ago', read:false },
  { id:2, icon:'cal', text:'Reminder: return the camping tent by Sun, 8 Nov, 8 pm.', link:'#/rentals', time:'5h ago', read:false },
  { id:3, icon:'user', text:'Raj K. wants to borrow your 6-step aluminium ladder.', link:'#/rentals', time:'Yesterday', read:true }
];
let recent = [];                 // recently viewed item ids
let unread = {};                 // unread messages per person
let chatMeta = { 'Farid A.':1 }; // which item each chat is about
let wallet = { balance:210, history:[
  { text:'Lending: Party speaker with mic', amt:60, date:'20 Oct' },
  { text:'Lending: 6-step aluminium ladder (free)', amt:0, date:'12 Oct' },
  { text:'Lending: Party speaker with mic', amt:150, date:'5 Oct' }
]};
let settings = { theme:'light', notifyMsgs:true, notifyReminders:true, notifyDeals:false, mapSource:0 };

/* ---------- Save & load everything (this device only) ---------- */
const STORE = 'borrowloop-data-v2';
function saveAll(){
  try { localStorage.setItem(STORE, JSON.stringify({ items, rentals, chats, chatMeta, wants, me:ME, notifs, recent, unread, wallet, settings })); }
  catch (e) { console.warn('Could not save (storage may be full)', e); }
}
function loadAll(){
  try {
    const d = JSON.parse(localStorage.getItem(STORE) || 'null'); if (!d) return;
    if (Array.isArray(d.items) && d.items.length) items = d.items;
    if (Array.isArray(d.rentals)) rentals = d.rentals;
    if (Array.isArray(d.wants)) wants = d.wants;
    if (Array.isArray(d.notifs)) notifs = d.notifs;
    if (Array.isArray(d.recent)) recent = d.recent;
    if (d.chats) { Object.keys(chats).forEach(k => delete chats[k]); Object.assign(chats, d.chats); }
    Object.assign(chatMeta, d.chatMeta || {});
    Object.assign(unread, d.unread || {});
    Object.assign(ME, d.me || {});
    if (d.wallet) wallet = d.wallet;
    if (d.settings) Object.assign(settings, d.settings);
  } catch (e) { console.warn('Saved data could not be read', e); }
}
loadAll();
window.addEventListener('pagehide', saveAll);
document.addEventListener('visibilitychange', () => { if (document.hidden) saveAll(); });

/* ---------- Your location (saved on this device) ---------- */
const DEFAULT_LOC = { lat:3.0779, lng:101.5862, label:'Subang Jaya', source:'default' };
let userLoc = { ...DEFAULT_LOC };
try { const s = JSON.parse(localStorage.getItem('borrowloop-loc') || 'null'); if (s && typeof s.lat === 'number') userLoc = s; } catch (e) {}
function saveLoc(){ try { localStorage.setItem('borrowloop-loc', JSON.stringify(userLoc)); } catch (e) {} }
function distanceKm(aLat, aLng, bLat, bLng){
  const R = 6371, rad = x => x * Math.PI / 180;
  const dLat = rad(bLat - aLat), dLng = rad(bLng - aLng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(aLat)) * Math.cos(rad(bLat)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
function updateDistances(){ items.forEach(it => { it.km = Math.round(distanceKm(userLoc.lat, userLoc.lng, it.lat, it.lng) * 10) / 10; }); }
function fmtKm(km){ if (km < 1) return Math.max(100, Math.round(km * 10) * 100) + ' m'; if (km < 100) return km.toFixed(1) + ' km'; return Math.round(km).toLocaleString() + ' km'; }
const kmLabel = k => k >= 30 ? 'Any distance' : 'Within ' + k + ' km';
updateDistances();

/* ---------- Helpers ---------- */
const $ = (s, el = document) => el.querySelector(s);
const app = $('#app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId = id => items.find(i => i.id === id);
const initials = n => n.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase();
const money = n => 'RM' + (Number.isInteger(n) ? n : n.toFixed(2));
const fmtDay = d => new Date(2026, 10, d).toLocaleDateString('en-GB', { weekday:'short', day:'numeric', month:'short' });
const fmtRange = (a, b) => a === b ? `${a} Nov` : `${a}–${b} Nov`;
function priceLabel(it){ return it.price === 0 ? 'Free' : `${money(it.price)}<small> /day</small>`; }
function artFor(it, size){
  if (it.photo) return '';
  return ART[it.art] || ART.box;
}
function imgStyle(it){ return it.photo ? `background-image:url('${it.photo}');background-color:#ddd` : `background-color:${it.bg}`; }

function toast(msg){
  saveAll();
  const t = $('#toast');
  t.innerHTML = I.check + '<span>' + esc(msg) + '</span>';
  t.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove('show'), 2600);
}

/* ---------- Card ---------- */
function card(it){
  const saved = wish.has(it.id);
  const tag = it.paused ? '<span class="pill pill-orange card-tag">Paused</span>'
            : it.price === 0 ? '<span class="pill pill-green card-tag">Free to borrow</span>'
            : it.delivery ? '<span class="pill pill-grey card-tag" style="background:var(--card)">Delivery available</span>' : '';
  return `<article class="card">
    <a href="#/item/${it.id}" class="card-img" style="${imgStyle(it)}" aria-label="${esc(it.title)}">${artFor(it)}${tag}</a>
    <button class="heart ${saved ? 'on' : ''}" data-wish="${it.id}" aria-pressed="${saved}" aria-label="Save ${esc(it.title)}">${I.heart}</button>
    <a href="#/item/${it.id}" class="card-body">
      <h3>${esc(it.title)}</h3>
      <span class="card-meta">${fmtKm(it.km)} away · ★ ${it.rating.toFixed(1)} (${it.reviews})</span>
      <div class="card-foot">
        <span class="price">${priceLabel(it)}</span>
        <span class="owner-mini">${avatar(it.owner, 24, it.owner === ME.name ? null : it.oc)}${esc(it.owner)}</span>
      </div>
    </a>
  </article>`;
}

/* =========================================================
   HOME
   ========================================================= */
function renderHome(){
  app.innerHTML = `
  <section class="hero">
    <div class="wrap">
      <div>
        <span class="hero-eyebrow">Borrow, don't buy</span>
        <h1>Need it once?<br>Borrow it from a neighbour.</h1>
        <p class="lead">Tents, drills, cameras, party gear and more, from people nearby. Pay a small fee and a refundable deposit, and give it back when you're done.</p>
        <form class="hero-search" id="heroSearch">
          <label>${I.search}<span class="sr">What do you need?</span><input id="heroInput" type="search" placeholder="What do you need to borrow?" value="${esc(state.q)}"></label>
          <button class="btn btn-primary" type="submit">Search</button>
        </form>
        <div class="hero-points">
          <span>${I.check} Refundable deposits</span>
          <span>${I.check} Photo condition checks</span>
          <span>${I.check} Verified neighbours</span>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-tile" style="left:8%;top:6%;width:56%;height:62%;background:#E3F3EC;transform:rotate(-4deg)">${ART.tent}</div>
        <div class="hero-tile" style="right:2%;top:24%;width:40%;height:42%;background:#FDE9D9;transform:rotate(5deg)">${ART.drill}</div>
        <div class="hero-tile" style="left:26%;bottom:0;width:42%;height:40%;background:#E4E9F7;transform:rotate(3deg)">${ART.camera}</div>
        <div class="hero-float" style="left:0;bottom:22%"><span class="avatar" style="width:32px;height:32px;background:#F6C453;font-size:11px">FA</span>Tent borrowed · RM45 for 3 days</div>
        <div class="hero-float" style="right:0;top:2%"><span style="color:var(--green)">${I.check}</span>RM100 deposit refunded</div>
      </div>
    </div>
  </section>

  <div class="wrap">
    <div class="explore-head">
      <div>
        <h2 class="section-title">Near you</h2>
        <p class="muted" style="display:flex;align-items:center;gap:6px;margin-top:4px;flex-wrap:wrap">${I.pin} ${esc(userLoc.label)}${userLoc.source === 'gps' ? ' (your real location)' : ''} · ${visibleItems().length} things to borrow <button type="button" class="link-btn" data-loc>Change</button></p>
      </div>
      <div style="display:flex;align-items:center;gap:16px">
      <a href="#/search" class="see-all">See all →</a>
      <label><span class="sr">Sort by</span>
        <select class="select" id="sort">
          <option value="near" ${state.sort==='near'?'selected':''}>Nearest first</option>
          <option value="cheap" ${state.sort==='cheap'?'selected':''}>Lowest price</option>
          <option value="rated" ${state.sort==='rated'?'selected':''}>Top rated</option>
        </select>
      </label>
      </div>
    </div>
    <div class="chips" id="cats" role="group" aria-label="Categories">
      ${CATS.map(c => `<button class="chip ${state.cat===c?'on':''}" data-cat="${c}" aria-pressed="${state.cat===c}">${c}</button>`).join('')}
    </div>
    ${userLoc.source !== 'gps' ? `<div class="loc-banner">
      <span class="loc-banner-ic">${I.pin}</span>
      <div style="flex:1;min-width:200px"><b>See what's closest to you</b><div class="muted" style="font-size:14px">Turn on location to sort items by real distance from where you are.</div></div>
      <button type="button" class="btn btn-primary" data-loc>Use my location</button>
    </div>` : ''}
    <div class="grid" id="grid" style="margin-top:20px"></div>
    <div id="moreWrap" style="text-align:center;margin-top:24px"></div>

    <section style="margin-top:64px">
      <div class="explore-head" style="margin-top:0">
        <div><h2 class="section-title">On the map</h2><p class="muted" style="margin-top:4px">Tap a price to see the item. The blue dot is you.</p></div>
        <a href="#/search" class="see-all" id="mapToSearch">Open map search →</a>
      </div>
      <div class="map map-lg" id="homeMap"></div>
    </section>

    ${recent.filter(id => byId(id)).length ? `<section style="margin-top:56px">
      <div class="explore-head" style="margin-top:0"><h2 class="section-title">Recently viewed</h2><button type="button" class="link-btn" id="clearRecentHome">Clear</button></div>
      <div class="grid">${recent.map(byId).filter(Boolean).slice(0, 4).map(card).join('')}</div>
    </section>` : ''}

    <section id="how" style="margin-top:72px">
      <h2 class="section-title">How BorrowLoop works</h2>
      <p class="muted" style="margin-top:4px">Four simple steps, from request to refund.</p>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><h3>Find &amp; request</h3><p>Search nearby items, pick your dates and send a request to the owner.</p></div>
        <div class="step"><div class="step-num">2</div><h3>Pay &amp; hold deposit</h3><p>Pay the rental fee. Your deposit is held safely, not spent.</p></div>
        <div class="step"><div class="step-num">3</div><h3>Photo check at pickup</h3><p>Both of you snap time-stamped photos, so everyone knows the condition.</p></div>
        <div class="step"><div class="step-num">4</div><h3>Return &amp; get refunded</h3><p>Photos again at return. All good? Your deposit comes back automatically.</p></div>
      </div>
    </section>

    <section id="safety" style="margin-top:72px">
      <h2 class="section-title">Built for trust</h2>
      <p class="muted" style="margin-top:4px">Lending to strangers feels safer with the right tools.</p>
      <div class="trust">
        <div class="trust-card" style="background:var(--orange-soft)"><div class="ic" style="color:var(--orange)">${I.lock}</div><h3>Held deposits</h3><p>Deposits are held until the return check is done, then released or used for repairs.</p></div>
        <div class="trust-card" style="background:var(--green-soft)"><div class="ic" style="color:var(--green)">${I.camera}</div><h3>Condition photos</h3><p>Before and after photos settle any "it was already scratched" arguments.</p></div>
        <div class="trust-card" style="background:var(--blue-soft)"><div class="ic" style="color:var(--blue)">${I.id}</div><h3>Verified profiles</h3><p>ID and phone checks, plus ratings from both lenders and borrowers.</p></div>
        <div class="trust-card" style="background:var(--yellow-soft)"><div class="ic" style="color:#8A6512">${I.shield}</div><h3>Damage protection</h3><p>Add cover for a few ringgit, so accidents don't eat your deposit.</p></div>
      </div>
    </section>

    <section class="lend-band">
      <svg width="260" height="260" viewBox="0 0 260 260" aria-hidden="true" style="position:absolute;right:-60px;top:-80px;opacity:.12"><circle cx="130" cy="130" r="130" fill="#F6C453"/></svg>
      <div style="position:relative">
        <h2>Got things sitting in your cupboard? Earn from them.</h2>
        <p>List a tent, drill or camera in two minutes. You set the price, the deposit and the rules.</p>
      </div>
      <a href="#/list" class="btn btn-lg" style="background:var(--yellow);color:var(--ink);position:relative">Start lending</a>
    </section>
  </div>`;

  renderGrid();
  const hm = makeMap($('#homeMap'), [userLoc.lat, userLoc.lng], 12);
  if (hm) plotItems(hm, visibleItems());
  $('#mapToSearch').addEventListener('click', () => { state.view = 'map'; });
  const crh = $('#clearRecentHome'); if (crh) crh.addEventListener('click', () => { recent = []; toast('Recently viewed cleared'); renderHome(); });
  $('#heroSearch').addEventListener('submit', e => { e.preventDefault(); state.q = $('#heroInput').value; $('#navSearch').value = state.q; location.hash = '#/search'; });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; renderGrid(); });
  $('#cats').addEventListener('click', e => {
    const b = e.target.closest('[data-cat]'); if (!b) return;
    state.cat = b.dataset.cat;
    document.querySelectorAll('#cats .chip').forEach(c => { const on = c.dataset.cat === state.cat; c.classList.toggle('on', on); c.setAttribute('aria-pressed', on); });
    renderGrid();
  });
}

function renderGrid(){
  const grid = $('#grid'); if (!grid) return;
  const q = ''; // the home page shows everything; keyword search lives on the Search page
  let list = visibleItems().filter(it => (state.cat === 'All' || it.cat === state.cat) &&
    (!q || (it.title + ' ' + it.cat + ' ' + it.owner + ' ' + it.area).toLowerCase().includes(q)));
  if (state.sort === 'near') list.sort((a, b) => a.km - b.km);
  if (state.sort === 'cheap') list.sort((a, b) => a.price - b.price);
  if (state.sort === 'rated') list.sort((a, b) => b.rating - a.rating);
  const total = list.length;
  if (!state.showAll) list = list.slice(0, 12);
  const more = $('#moreWrap');
  if (more) {
    more.innerHTML = total > 12 ? `<button type="button" class="btn btn-ghost btn-lg" id="moreBtn">${state.showAll ? 'Show less' : `Show all ${total} items`}</button>` : '';
    const mb = $('#moreBtn'); if (mb) mb.addEventListener('click', () => { state.showAll = !state.showAll; renderGrid(); });
  }
  grid.innerHTML = list.length ? list.map(card).join('')
    : `<div class="empty" style="grid-column:1/-1"><b>Nothing found${q ? ` for "${esc(state.q)}"` : ''}.</b><br>Try another word, or <a href="#/profile" style="color:var(--green);font-weight:700">post a "looking for" request</a> so neighbours can offer it.</div>`;
}

/* =========================================================
   ITEM PAGE
   ========================================================= */
function renderItem(id){
  const it = byId(id);
  if (!it) { app.innerHTML = `<div class="wrap page"><div class="empty">That item doesn't exist anymore. <a href="#/" style="color:var(--green);font-weight:700">Back to explore</a></div></div>`; return; }
  if (!state.book || state.book.itemId !== id) state.book = { itemId:id, start:null, end:null, delivery:false, protect:true, img:0 };
  const mine = it.owner === ME.name;
  const shades = [it.bg, shade(it.bg, -8), shade(it.bg, 6)];
  const pics = (it.photos && it.photos.length ? it.photos : (it.photo ? [it.photo] : []));
  markRecent(it.id);
  if (!it.reviewList) it.reviewList = [
    { name:'Mei Shan', stars:5, text:'Super clean and exactly as described. Pickup was quick and easy.', when:'2 weeks ago' },
    { name:'Daniel T.', stars:5, text:'Friendly owner, flexible with the return time. Would borrow again.', when:'last month' }
  ];
  const similar = visibleItems().filter(x => x.id !== it.id && x.cat === it.cat).sort((a, b) => a.km - b.km).slice(0, 4);

  app.innerHTML = `
  <div class="wrap page">
    <a href="#/" class="back">${I.back} Back to explore</a>
    <div class="item-grid">
      <div>
        <div class="gallery">
          <div class="gallery-main" id="gMain" style="${pics.length ? `background-image:url('${pics[0]}')` : 'background-color:' + shades[0]}">${pics.length ? '' : artFor(it)}</div>
          <div class="gallery-side">
            ${pics.length > 1 ? pics.slice(0, 3).map((p, i) => `<button class="thumb ${i===0?'on':''}" data-thumb="${i}" data-img="${i}" style="background-image:url('${p}')" aria-label="Photo ${i+1}"></button>`).join('')
              : shades.map((s, i) => `<button class="thumb ${i===0?'on':''}" data-thumb="${i}" data-bg="${s}" style="${pics.length ? `background-image:url('${pics[0]}')` : 'background-color:' + s}" aria-label="Photo ${i+1}">${pics.length ? '' : artFor(it)}</button>`).join('')}
          </div>
        </div>

        <div style="margin-top:22px;display:flex;gap:8px;flex-wrap:wrap">
          <span class="pill pill-green">${esc(it.cat)}</span><span class="pill pill-grey">${esc(it.cond)}</span>
          ${it.delivery ? '<span class="pill pill-blue">Delivery available</span>' : ''}
        </div>
        ${it.paused ? `<div class="note note-orange" style="margin-top:14px">${I.info}<span>This listing is paused, so it's hidden from search.${mine ? ' Resume it to start getting requests again.' : ''}</span></div>` : ''}
        <div class="title-row">
          <h1 class="item-title">${esc(it.title)}</h1>
          <div class="title-actions">
            <button class="icon-btn" id="shareItem" aria-label="Share this item"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3v12M7 8l5-5 5 5"/><path d="M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6"/></svg></button>
            <button class="icon-btn heart-inline ${wish.has(it.id) ? 'on' : ''}" data-wish="${it.id}" aria-pressed="${wish.has(it.id)}" aria-label="Save this item">${I.heart}</button>
            ${mine ? '' : `<button class="icon-btn" id="reportItem" aria-label="Report this listing"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 21V4h11l-1.5 4L16 12H5"/></svg></button>`}
          </div>
        </div>
        <p class="muted" style="display:flex;align-items:center;gap:6px">${I.pin} ${fmtKm(it.km)} from you · ${esc(it.area)}</p>

        <div class="box owner-card" style="margin-top:22px">
          ${avatar(it.owner, 56, mine ? null : it.oc)}
          <div style="flex:1;min-width:0">
            <a href="#/user/${encodeURIComponent(it.owner)}" class="owner-link">${esc(it.owner)} <span style="color:var(--green)" title="ID verified">${I.shield}</span></a>
            <div class="muted" style="font-size:14px">★ ${it.rating.toFixed(1)} · ${it.reviews} lends · usually replies in 10 min</div>
          </div>
          ${mine ? `<div class="row-btns"><a class="btn btn-soft" href="#/list/${it.id}">Edit</a><button class="btn btn-ghost" data-manage="pause" data-id="${it.id}">${it.paused ? 'Resume' : 'Pause'}</button><button class="btn btn-ghost btn-danger-text" data-manage="delete" data-id="${it.id}">Delete</button></div>`
                 : `<button class="btn btn-soft" data-chat="${esc(it.owner)}" data-item="${it.id}">${I.chat} Message</button>`}
        </div>

        <div class="block"><h2>About this item</h2><p style="color:var(--ink-2);font-size:16px">${esc(it.desc)}</p></div>
        <div class="block">
          <h2>Pickup area</h2>
          <div class="map" id="itemMap"></div>
          <div class="map-foot">
            <span>${I.pin} <b>${esc(it.area)}</b> · ${fmtKm(it.km)} from ${userLoc.source === 'gps' ? 'you' : esc(userLoc.label)}</span>
            <a class="btn btn-ghost" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/?api=1&origin=${userLoc.lat},${userLoc.lng}&destination=${it.lat},${it.lng}">Get directions</a>
          </div>
          <p class="muted" style="font-size:13px;margin-top:6px">The circle shows the rough area. The exact pickup spot is shared after ${esc(it.owner.split(' ')[0])} accepts.</p>
        </div>
        <div class="block"><h2>What's included</h2><div class="include">${it.included.map(x => `<span>${esc(x)}</span>`).join('')}</div></div>
        <div class="block"><h2>Availability</h2><div class="cal" id="cal"></div></div>
        <div class="block"><h2>Owner's rules</h2><ul class="rules">${it.rules.map(r => `<li><span style="color:var(--green)">${I.check}</span>${esc(r)}</li>`).join('')}</ul></div>
        <div class="block">
          <h2>Reviews <span class="muted" style="font-weight:600;font-size:16px">★ ${it.rating.toFixed(1)} · ${it.reviews}</span></h2>
          ${it.reviewList.length ? `<div class="reviews">${it.reviewList.slice(0, 6).map(r => `<div class="box review"><div style="display:flex;gap:10px;align-items:center">${avatar(r.name, 36)}<div><b>${esc(r.name)}</b><div class="muted" style="font-size:12px"><span class="stars-txt">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span> · ${esc(r.when)}</div></div></div><p style="color:var(--ink-2)">${esc(r.text)}</p></div>`).join('')}</div>` : '<p class="muted">No reviews yet. Be the first to borrow it!</p>'}
        </div>
        ${similar.length ? `<div class="block"><h2>Similar items nearby</h2><div class="grid grid-sm">${similar.map(card).join('')}</div></div>` : ''}
      </div>

      <aside class="book" id="book" aria-label="Booking"></aside>
    </div>
  </div>`;

  renderCal(it);
  renderBook(it);
  $('#shareItem').addEventListener('click', () => shareLink(`${it.title} on BorrowLoop`, location.href, `Borrow a ${it.title.toLowerCase()} for ${it.price ? money(it.price) + '/day' : 'free'} on BorrowLoop`));
  const rp = $('#reportItem'); if (rp) rp.addEventListener('click', () => {
    openModal(`<div class="modal-head"><h2>Report this listing</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
      <fieldset class="field" style="margin-bottom:14px"><legend>What's wrong?</legend>
        ${['Looks like a scam','Item is not as described','Prohibited or dangerous item','Rude or unsafe owner','Something else'].map((r, i) => `<label class="f-check"><input type="radio" name="rep" value="${r}" ${i === 0 ? 'checked' : ''}>${r}</label>`).join('')}
      </fieldset>
      <label class="field" style="margin-bottom:16px"><span>More details <small>(optional)</small></span><textarea class="input" rows="3" id="repTxt"></textarea></label>
      <button class="btn btn-warn btn-lg btn-block" id="repSend">Send report</button>`);
    $('#repSend').addEventListener('click', () => { closeAll(); toast('Thanks. Our team will review this listing within 24 hours'); });
  });
  const im = makeMap($('#itemMap'), [it.lat, it.lng], 13);
  if (im){
    L.circle([it.lat, it.lng], { radius:600, color:'#0B7A55', weight:2, fillColor:'#0B7A55', fillOpacity:.15 }).addTo(im);
    meMarker().addTo(im);
    if (it.km < 60) im.fitBounds([[it.lat, it.lng], [userLoc.lat, userLoc.lng]], { padding:[50, 50], maxZoom:14 });
    setTimeout(() => im.invalidateSize(), 60);
  }
  document.querySelectorAll('[data-thumb]').forEach(b => b.addEventListener('click', () => {
    document.querySelectorAll('[data-thumb]').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    if (b.dataset.img) $('#gMain').style.backgroundImage = `url('${pics[+b.dataset.img]}')`;
    else if (!pics.length) $('#gMain').style.backgroundColor = b.dataset.bg;
  }));
}

function shade(hex, amt){
  const n = parseInt(hex.slice(1), 16);
  const c = v => Math.max(0, Math.min(255, v + amt));
  return '#' + [c(n >> 16), c((n >> 8) & 255), c(n & 255)].map(v => v.toString(16).padStart(2, '0')).join('');
}

function renderCal(it){
  const b = state.book;
  const first = (new Date(2026, 10, 1).getDay() + 6) % 7;
  let cells = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d => `<span class="cal-dow">${d}</span>`).join('');
  for (let i = 0; i < first; i++) cells += '<span></span>';
  for (let d = 1; d <= 30; d++){
    const booked = it.booked.includes(d);
    const end = b.end || b.start;
    const inRange = b.start && d >= b.start && d <= end;
    const edge = d === b.start || d === b.end;
    cells += `<button class="day ${edge ? 'edge' : inRange ? 'in' : ''}" data-day="${d}" ${booked ? 'disabled aria-label="' + d + ' Nov, booked"' : 'aria-label="' + d + ' Nov"'}>${d}</button>`;
  }
  $('#cal').innerHTML = `
    <div class="cal-head"><span>November 2026</span><span class="muted" style="font-size:13px;font-weight:600">${b.start ? 'Tap another day to set the return date' : 'Tap your pickup day'}</span></div>
    <div class="cal-grid">${cells}</div>
    <div class="cal-legend"><span><i style="background:var(--green)"></i>Your dates</span><span><i style="background:var(--bg);border:1px solid var(--line)"></i>Booked</span><span>Rent 7+ days and get 15% off</span></div>`;
  $('#cal').onclick = e => {
    const btn = e.target.closest('[data-day]'); if (!btn || btn.disabled) return;
    const d = +btn.dataset.day;
    if (!b.start || b.end || d < b.start) { b.start = d; b.end = null; }
    else {
      const clash = it.booked.some(x => x > b.start && x < d);
      if (clash) { toast('Some days in between are already booked'); return; }
      b.end = d;
    }
    renderCal(it); renderBook(it);
  };
}

function quote(it, b){
  const days = b.start ? (b.end || b.start) - b.start + 1 : 0;
  const rent = it.price * days;
  const disc = days >= 7 ? Math.round(rent * 0.15) : 0;
  const fee = it.price ? Math.max(2, Math.round((rent - disc) * 0.05)) : 0;
  const prot = b.protect ? 5 : 0;
  const del = b.delivery ? 8 : 0;
  return { days, rent, disc, fee, prot, del, total: rent - disc + fee + prot + del + it.deposit };
}

function renderBook(it){
  const b = state.book, q = quote(it, b), mine = it.owner === ME.name;
  $('#book').innerHTML = `
    <div class="book-price"><b>${it.price ? money(it.price) : 'Free'}</b>${it.price ? '<span class="muted">/ day</span>' : '<span class="muted">to borrow</span>'}</div>
    <div class="muted" style="font-size:13px">+ ${money(it.deposit)} refundable deposit</div>

    <div class="dates">
      <div><small>Pick up</small><span>${b.start ? fmtDay(b.start) : 'Add date'}</span></div>
      <div><small>Return</small><span>${b.start ? fmtDay(b.end || b.start) : 'Add date'}</span></div>
    </div>

    <div class="opt-row" role="group" aria-label="How you'll get it">
      <button class="opt ${!b.delivery ? 'on' : ''}" data-del="0" aria-pressed="${!b.delivery}"><b>Meet up</b><small>Free · ${esc(it.area.split(',')[0])}</small></button>
      <button class="opt ${b.delivery ? 'on' : ''}" data-del="1" aria-pressed="${b.delivery}" ${it.delivery ? '' : 'disabled'}><b>Delivery</b><small>${it.delivery ? 'To your door · RM8' : 'Not offered'}</small></button>
    </div>

    <label class="toggle-row">
      <span style="color:var(--green)">${I.shield}</span>
      <span style="flex:1"><b style="font-size:14px">Damage protection · RM5</b><br><small class="muted">Covers accidents up to RM300 so your deposit stays safe</small></span>
      <span class="switch"><input type="checkbox" id="protect" ${b.protect ? 'checked' : ''}><span></span></span>
    </label>

    <div class="lines">
      ${q.days ? `<div class="line"><span>${it.price ? money(it.price) : 'Free'} × ${q.days} day${q.days > 1 ? 's' : ''}</span><span>${money(q.rent)}</span></div>` : '<div class="line"><span class="muted">Pick dates on the calendar to see your total</span><span></span></div>'}
      ${q.disc ? `<div class="line disc"><span>Weekly discount (15%)</span><span>−${money(q.disc)}</span></div>` : ''}
      ${q.days && q.fee ? `<div class="line"><span>Service fee</span><span>${money(q.fee)}</span></div>` : ''}
      ${q.prot ? `<div class="line"><span>Damage protection</span><span>${money(q.prot)}</span></div>` : ''}
      ${q.del ? `<div class="line"><span>Delivery</span><span>${money(q.del)}</span></div>` : ''}
      <div class="line dep"><span>Deposit (held, refundable)</span><span>${money(it.deposit)}</span></div>
      <div class="line total"><span>Total today</span><span>${money(q.total)}</span></div>
    </div>

    <button class="btn btn-primary btn-lg btn-block" id="reqBtn" style="margin-top:16px${mine ? ';opacity:.5' : ''}" ${mine ? 'disabled' : ''}>${mine ? 'This is your listing' : 'Request to borrow'}</button>
    <p class="muted" style="font-size:12px;text-align:center;margin-top:10px">You won't be charged until ${esc(it.owner.split(' ')[0])} accepts.</p>

    <div class="note note-blue" style="margin-top:14px">${I.info}<span>Your deposit is only held, not spent. It's released 24 hours after you both confirm the return photos.</span></div>`;

  $('#book').querySelectorAll('[data-del]').forEach(x => x.addEventListener('click', () => { b.delivery = x.dataset.del === '1'; renderBook(it); }));
  $('#protect').addEventListener('change', e => { b.protect = e.target.checked; renderBook(it); });
  $('#reqBtn').addEventListener('click', () => {
    if (mine) return;
    if (!b.start) { toast('Pick your dates on the calendar first'); $('#cal').scrollIntoView({ behavior:'smooth', block:'center' }); return; }
    openModal(`
      <div class="modal-head"><h2>Send borrow request?</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
      <div style="display:flex;gap:14px;align-items:center;margin-bottom:16px">
        <div class="rent-img" style="${imgStyle(it)}">${artFor(it)}</div>
        <div><b>${esc(it.title)}</b><div class="muted" style="font-size:14px">${fmtDay(b.start)} → ${fmtDay(b.end || b.start)} · ${b.delivery ? 'Delivery' : 'Meet up'}</div></div>
      </div>
      <fieldset style="margin-bottom:16px"><legend style="font-weight:800;margin-bottom:8px">Pay with</legend>
        <div class="opt-row" style="grid-template-columns:repeat(3,1fr)">
          <button class="opt on" data-pay><b>DuitNow</b></button><button class="opt" data-pay><b>Card</b></button><button class="opt" data-pay><b>E-wallet</b></button>
        </div>
      </fieldset>
      <label class="field" style="margin-bottom:16px"><span>Message to ${esc(it.owner.split(' ')[0])} <small>(optional)</small></span><textarea class="input" id="reqMsg" rows="3" placeholder="Say hi and tell them what it's for"></textarea></label>
      <div class="line total" style="display:flex;justify-content:space-between;margin-bottom:16px"><span>Total today</span><span>${money(quote(it, b).total)}</span></div>
      <button class="btn btn-primary btn-lg btn-block" id="confirmReq">Pay &amp; send request</button>`);
    $('#modal').querySelectorAll('[data-pay]').forEach(p => p.addEventListener('click', () => { $('#modal').querySelectorAll('[data-pay]').forEach(x => x.classList.remove('on')); p.classList.add('on'); }));
    $('#confirmReq').addEventListener('click', () => {
      const msg = $('#reqMsg').value.trim();
      const nr = { id:'r' + Date.now(), itemId:it.id, role:'borrow', status:'pending', start:b.start, end:b.end || b.start, mine:true, paid: quote(it, b).total };
      rentals.unshift(nr); chatMeta[it.owner] = it.id; scheduleAccept(nr);
      addNotif(`Request sent to ${it.owner.split(' ')[0]} for the ${it.title.toLowerCase()}.`, '#/rentals', 'cal');
      (chats[it.owner] = chats[it.owner] || []).push({ from:'me', text: msg || `Hi! I'd like to borrow your ${it.title.toLowerCase()} for ${fmtRange(b.start, b.end || b.start)}.` });
      closeAll();
      state.book = null;
      toast('Request sent! We\'ll tell you when ' + it.owner.split(' ')[0] + ' replies.');
      state.rentTab = 'borrow';
      location.hash = '#/rentals';
    });
  });
}

/* =========================================================
   LIST AN ITEM
   ========================================================= */
function renderList(editId){
  const editing = editId ? byId(editId) : null;
  if (editId && (!editing || editing.owner !== ME.name)) { app.innerHTML = `<div class="wrap page"><div class="empty">You can only edit your own listings. <a href="#/profile" class="link-btn">Go to your profile</a></div></div>`; return; }

  let saved = null;
  if (!editing) { try { saved = JSON.parse(localStorage.getItem('borrowloop-draft') || 'null'); } catch (e) {} }
  const src = editing || saved || {};
  const draft = {
    title: src.title || '', cat: src.cat || 'Tools', cond: src.cond || 'Like new',
    price: src.price ?? 10, deposit: src.deposit ?? 80, free: editing ? editing.price === 0 : !!src.free,
    delivery: src.delivery ?? true, verified: editing ? (editing.rules || []).includes('Verified borrowers only') : (src.verified ?? true),
    desc: editing ? (editing.desc === 'No description yet.' ? '' : editing.desc) : (src.desc || ''),
    included: (src.included || []).join(', '), rules: (src.rules || []).filter(r => r !== 'Verified borrowers only').join('\n'),
    area: src.area || (userLoc.source === 'gps' ? userLoc.label : (ME.area || 'SS15, Subang Jaya')),
    photos: editing ? (editing.photos || (editing.photo ? [editing.photo] : [])) : (src.photos || []),
    booked: [...(src.booked || [])]
  };
  if (typeof src.included === 'string') draft.included = src.included;
  if (typeof src.rules === 'string') draft.rules = src.rules;

  app.innerHTML = `
  <div class="wrap page">
    <a href="${editing ? '#/item/' + editing.id : '#/'}" class="back">${I.back} Back</a>
    <h1 class="section-title" style="font-size:34px">${editing ? 'Edit listing' : 'List an item'}</h1>
    <p class="muted" style="margin:4px 0 28px">${editing ? 'Changes go live as soon as you save.' : 'Takes about two minutes. You set the price, deposit and rules.'}${saved && !editing ? ' <b style="color:var(--green)">Your saved draft has been loaded.</b>' : ''}</p>

    <div class="list-grid">
      <form class="form" id="listForm" novalidate>
        <div class="field">
          <span>Photos <small>· add up to 4, good light helps</small></span>
          <div class="photo-row" id="photoRow"></div>
        </div>

        <label class="field"><span>Title</span><input class="input" id="fTitle" maxlength="60" placeholder="e.g. Cordless power drill + 20 bits" value="${esc(draft.title)}" required></label>

        <div class="two">
          <label class="field"><span>Category</span>
            <select class="input" id="fCat">${CATS.slice(1).concat('Other').map(c => `<option ${c === draft.cat ? 'selected' : ''}>${c}</option>`).join('')}</select>
          </label>
          <label class="field"><span>Condition</span>
            <select class="input" id="fCond">${['New','Like new','Good','Well used'].map(c => `<option ${c === draft.cond ? 'selected' : ''}>${c}</option>`).join('')}</select>
          </label>
        </div>

        <label class="field"><span>Description</span><textarea class="input" id="fDesc" rows="4" maxlength="400" placeholder="What is it, what's it good for, anything borrowers should know?">${esc(draft.desc)}</textarea></label>
        <label class="field"><span>What's included</span><input class="input" id="fInc" value="${esc(draft.included)}" placeholder="Separate with commas, e.g. Drill, 2 batteries, Charger"></label>

        <div class="two">
          <label class="field"><span>Price per day</span><span class="money"><b>RM</b><input id="fPrice" inputmode="decimal" value="${draft.free ? 0 : draft.price}"></span></label>
          <label class="field"><span>Refundable deposit</span><span class="money"><b>RM</b><input id="fDep" inputmode="decimal" value="${draft.deposit}"></span></label>
        </div>
        <div class="note note-green">${I.bulb}<span id="priceTip"></span></div>

        <label class="field"><span>Your rules <small>(one per line, optional)</small></span><textarea class="input" id="fRules" rows="3" placeholder="e.g. Return it clean&#10;No use in the rain">${esc(draft.rules)}</textarea></label>
        <label class="field"><span>Pickup area</span><input class="input" id="fArea" value="${esc(draft.area)}"><small>Borrowers only see this area, never your exact address.</small></label>

        <div class="field">
          <span>Days you're NOT available <small>· tap to block days in November</small></span>
          <div class="cal" style="padding:14px"><div class="cal-grid" id="blockCal"></div></div>
        </div>

        <div class="check-list">
          <label><span><b>Lend for free</b><small>Great for building your neighbour score</small></span><input type="checkbox" id="fFree" ${draft.free ? 'checked' : ''}></label>
          <label><span><b>Offer delivery</b><small>Borrowers pay RM8 within 5 km</small></span><input type="checkbox" id="fDel" ${draft.delivery ? 'checked' : ''}></label>
          <label><span><b>Verified borrowers only</b><small>Only people with a checked ID can request</small></span><input type="checkbox" id="fVer" ${draft.verified ? 'checked' : ''}></label>
        </div>

        <div style="display:flex;gap:10px;flex-wrap:wrap">
          ${editing ? `<button type="button" class="btn btn-ghost btn-lg btn-danger-text" data-manage="delete" data-id="${editing.id}">Delete</button>` : '<button type="button" class="btn btn-ghost btn-lg" id="saveDraft">Save draft</button>'}
          <button type="submit" class="btn btn-primary btn-lg" style="flex:1">${editing ? 'Save changes' : 'Publish listing'}</button>
        </div>
      </form>

      <div class="preview-wrap">
        <b>Live preview</b>
        <div id="preview"></div>
        <div class="note note-blue">${I.info}<span>Borrowers see this card in search. A clear photo and a fair deposit get the most requests.</span></div>
      </div>
    </div>
  </div>`;

  const slots = ['Cover','Side','Details','Extra'];
  function drawPhotos(){
    $('#photoRow').innerHTML = slots.map((s, i) => {
      const p = draft.photos[i];
      return `<div class="photo-slot ${p ? 'filled' : ''}" style="${p ? `background-image:url('${p}')` : ''}">
        ${p ? `<button type="button" class="photo-x" data-rmphoto="${i}" aria-label="Remove ${s} photo">${I.close}</button>` : `<label class="photo-add">${I.camera}<span>${s}</span><input type="file" accept="image/*" data-slot="${i}" aria-label="Add ${s} photo"></label>`}
      </div>`;
    }).join('');
  }
  drawPhotos();
  $('#photoRow').addEventListener('change', async e => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    try { draft.photos[+e.target.dataset.slot] = await compressImage(f, 900, .72); }
    catch (err) { toast('That file is not a photo'); return; }
    draft.photos = draft.photos.filter(Boolean); drawPhotos(); preview();
  });
  $('#photoRow').addEventListener('click', e => {
    const b = e.target.closest('[data-rmphoto]'); if (!b) return;
    draft.photos.splice(+b.dataset.rmphoto, 1); drawPhotos(); preview();
  });

  function drawBlock(){
    const first = (new Date(2026, 10, 1).getDay() + 6) % 7;
    let cells = ['M','T','W','T','F','S','S'].map(d => `<span class="cal-dow">${d}</span>`).join('');
    for (let i = 0; i < first; i++) cells += '<span></span>';
    for (let d = 1; d <= 30; d++) cells += `<button type="button" class="day ${draft.booked.includes(d) ? 'blocked' : ''}" data-block="${d}" aria-pressed="${draft.booked.includes(d)}" aria-label="${d} November">${d}</button>`;
    $('#blockCal').innerHTML = cells;
  }
  drawBlock();
  $('#blockCal').addEventListener('click', e => {
    const b = e.target.closest('[data-block]'); if (!b) return;
    const d = +b.dataset.block;
    draft.booked = draft.booked.includes(d) ? draft.booked.filter(x => x !== d) : draft.booked.concat(d).sort((a, b) => a - b);
    drawBlock();
  });

  const tips = { Camping:'Similar camping gear nearby goes for RM5–20 a day.', Tools:'Similar tools nearby go for RM8–20 a day.', Cameras:'Cameras nearby go for RM20–60 a day. Ask for a bigger deposit.', Electronics:'Electronics nearby go for RM25–30 a day.', Party:'Party gear nearby goes for RM12–35 a day.', Sports:'Sports gear nearby goes for RM5–35 a day.', Kitchen:'Kitchen gadgets nearby go for RM8–15 a day.', Home:'Home appliances nearby go for RM10–12 a day.', Kids:'Baby and kids gear nearby goes for RM6–8 a day.', Travel:'Travel gear nearby goes for RM5–8 a day.', Garden:'Garden tools nearby go for RM10–20 a day.', Music:'Instruments nearby go for RM10–35 a day.', Other:'Check similar items to set a fair price.' };

  function read(){
    draft.title = $('#fTitle').value.trim();
    draft.cat = $('#fCat').value; draft.cond = $('#fCond').value; draft.desc = $('#fDesc').value.trim();
    draft.included = $('#fInc').value; draft.rules = $('#fRules').value; draft.area = $('#fArea').value.trim();
    draft.free = $('#fFree').checked; draft.delivery = $('#fDel').checked; draft.verified = $('#fVer').checked;
    draft.price = draft.free ? 0 : Math.max(0, parseFloat($('#fPrice').value) || 0);
    draft.deposit = Math.max(0, parseFloat($('#fDep').value) || 0);
    $('#fPrice').disabled = draft.free;
  }
  function preview(){
    read();
    $('#priceTip').innerHTML = `<b>Smart price tip:</b> ${tips[draft.cat] || tips.Other} A deposit of about a third of the item's value works well.`;
    const fake = { id:0, title: draft.title || 'Your item title', cat: draft.cat, art: CAT_ART[draft.cat], bg: CAT_BG[draft.cat], price: draft.price, deposit: draft.deposit,
      km:0, area: draft.area, owner: ME.name, oc: ME.color, rating:5, reviews:0, delivery: draft.delivery, photo: draft.photos[0] };
    $('#preview').innerHTML = card(fake).replace(/href="#\/item\/0"/g, 'href="javascript:void 0"').replace(/data-wish="0"/, 'disabled');
  }
  ['input','change'].forEach(ev => $('#listForm').addEventListener(ev, e => { if (e.target.type !== 'file') preview(); }));
  preview();

  const sd = $('#saveDraft');
  if (sd) sd.addEventListener('click', () => {
    read();
    try { localStorage.setItem('borrowloop-draft', JSON.stringify(draft)); toast('Draft saved. It will be here when you come back'); }
    catch (e) { toast('Draft too big to save. Try fewer photos'); }
  });

  $('#listForm').addEventListener('submit', e => {
    e.preventDefault(); read();
    if (draft.title.length < 3) { toast('Give your item a title first'); $('#fTitle').focus(); return; }
    if (!draft.free && draft.price <= 0) { toast('Set a price, or tick "Lend for free"'); $('#fPrice').focus(); return; }
    const included = draft.included.split(',').map(x => x.trim()).filter(Boolean);
    const rules = draft.rules.split('\n').map(x => x.trim()).filter(Boolean);
    if (draft.verified) rules.unshift('Verified borrowers only');
    const data = { title: draft.title, cat: draft.cat, art: CAT_ART[draft.cat] || 'box', bg: CAT_BG[draft.cat] || CAT_BG.Other,
      price: draft.price, deposit: draft.deposit, area: draft.area || userLoc.label, cond: draft.cond, delivery: draft.delivery,
      desc: draft.desc || 'No description yet.', included: included.length ? included : [draft.title],
      rules: rules.length ? rules : ['Please return it in the same condition'], booked: draft.booked,
      photo: draft.photos[0] || null, photos: draft.photos };
    let id;
    if (editing) { Object.assign(editing, data); id = editing.id; toast('Changes saved'); }
    else {
      id = Math.max(0, ...items.map(i => i.id)) + 1;
      items.push({ id, ...data, km:0, lat: userLoc.lat + (Math.random() - .5) * 0.004, lng: userLoc.lng + (Math.random() - .5) * 0.004,
        owner: ME.name, oc: ME.color, rating:5.0, reviews:0, reviewList:[] });
      try { localStorage.removeItem('borrowloop-draft'); } catch (err) {}
      addNotif(`Your listing "${draft.title}" is live!`, '#/item/' + id, 'check');
      toast('Your listing is live!');
    }
    updateDistances(); saveAll();
    location.hash = '#/item/' + id;
  });
}


/* =========================================================
   RENTALS
   ========================================================= */
function renderRentals(){
  const mine = rentals.filter(r => r.role === state.rentTab && byId(r.itemId));
  const nB = rentals.filter(r => r.role === 'borrow' && r.status !== 'done').length;
  const nL = rentals.filter(r => r.role === 'lend' && r.status !== 'done').length;
  const active = mine.filter(r => r.status !== 'done');
  const done = mine.filter(r => r.status === 'done');

  app.innerHTML = `
  <div class="wrap page">
    <h1 class="section-title" style="font-size:34px">My rentals</h1>
    <p class="muted" style="margin:4px 0 22px">Track what you're borrowing and lending.</p>
    <div class="tabs" role="tablist" id="rTabs">
      <button class="tab ${state.rentTab==='borrow'?'on':''}" role="tab" aria-selected="${state.rentTab==='borrow'}" data-rtab="borrow">Borrowing · ${nB}</button>
      <button class="tab ${state.rentTab==='lend'?'on':''}" role="tab" aria-selected="${state.rentTab==='lend'}" data-rtab="lend">Lending · ${nL}</button>
    </div>
    <div class="rent-layout">
      <div>
        ${active.length ? active.map(rentCard).join('') : '<div class="empty">Nothing here right now.</div>'}
        ${done.length ? '<div class="group-label">COMPLETED</div>' + done.map(rentCard).join('') : ''}
      </div>
      <aside style="display:flex;flex-direction:column;gap:14px">
        <div class="box">
          <b style="font-size:16px">Deposits</b>
          <div class="lines" style="margin-top:12px">
            <div class="line"><span>Held right now</span><span style="font-weight:700">${money(rentals.filter(r => r.role==='borrow' && ['active','returned','upcoming'].includes(r.status) && byId(r.itemId)).reduce((s, r) => s + byId(r.itemId).deposit, 0))}</span></div>
            <div class="line"><span>Refunded this month</span><span style="font-weight:700;color:var(--green)">RM80</span></div>
          </div>
        </div>
        <div class="note note-orange">${I.shield}<span>If something comes back broken, open a claim within 24 hours with return photos. The deposit stays held until it's sorted.</span></div>
        <a href="#/" class="btn btn-soft">Find something to borrow</a>
      </aside>
    </div>
  </div>`;

  $('#rTabs').addEventListener('click', e => { const t = e.target.closest('[data-rtab]'); if (!t) return; state.rentTab = t.dataset.rtab; renderRentals(); });
  app.querySelectorAll('[data-act]').forEach(b => b.addEventListener('click', () => rentAction(b.dataset.act, b.dataset.id)));
}

function rentCard(r){
  const it = byId(r.itemId);
  if (!it) return '';
  const other = r.role === 'borrow' ? it.owner : r.from;
  const status = {
    active:['In use','pill-green'], pending:['Awaiting OK','pill-yellow'], request:['New request','pill-yellow'],
    returned:['Refund pending','pill-blue'], done:['Completed','pill-grey'], accepted:['Accepted','pill-green'], upcoming:['Accepted','pill-green']
  }[r.status];
  const dates = r.start ? fmtRange(r.start, r.end) : r.label;
  let body = '';

  if (r.role === 'borrow' && r.status === 'active') body = `
    <div><div style="display:flex;justify-content:space-between;font-size:13px;font-weight:600;margin-bottom:6px"><span>Return by ${fmtDay(r.end)} · 8 pm</span><span style="color:var(--orange)">2 days left</span></div>
    <div class="progress"><div style="width:${r.progress}%"></div></div></div>
    <div class="row-btns"><button class="btn btn-primary" data-act="return" data-id="${r.id}">Start return check</button><button class="btn btn-ghost" data-act="extend" data-id="${r.id}">Extend</button><button class="btn btn-soft" data-chat="${esc(other)}" data-item="${it.id}">${I.chat} Message</button></div>`;
  if (r.role === 'borrow' && r.status === 'pending') body = `
    <div class="row-btns"><button class="btn btn-soft" data-chat="${esc(other)}" data-item="${it.id}">${I.chat} Message ${esc(other.split(' ')[0])}</button><button class="btn btn-ghost" data-act="cancel" data-id="${r.id}">Cancel request</button></div>`;
  if (r.role === 'borrow' && r.status === 'upcoming') body = `
    <div class="note note-green">${I.check}<span>${esc(other.split(' ')[0])} accepted! Pick it up on ${fmtDay(r.start)}. Take photos together before you leave.</span></div>
    <div class="row-btns"><button class="btn btn-primary" data-act="pickup" data-id="${r.id}">Start pickup check</button><button class="btn btn-soft" data-chat="${esc(other)}" data-item="${it.id}">${I.chat} Message</button><button class="btn btn-ghost" data-act="cancel" data-id="${r.id}">Cancel</button></div>`;
  if (r.status === 'returned') body = `<div class="note note-blue">${I.info}<span>Return photos uploaded. Your ${money(it.deposit)} deposit will be released within 24 hours if ${esc(other.split(' ')[0])} doesn't raise an issue.</span></div>`;
  if (r.role === 'borrow' && r.status === 'done') body = `
    <div class="note note-green" style="font-weight:700">${I.check}<span>${money(r.refund)} deposit refunded to DuitNow</span></div>
    ${r.rated ? '<span class="muted" style="font-size:14px">Thanks for your rating!</span>' : `<div class="row-btns"><button class="btn btn-ghost" data-act="rate" data-id="${r.id}">★ Rate ${esc(other.split(' ')[0])}</button></div>`}`;
  if (r.role === 'lend' && r.status === 'request') body = `
    <div class="quote-box">"${esc(r.note)}"</div>
    <div class="row-btns"><button class="btn btn-primary" data-act="accept" data-id="${r.id}">Accept</button><button class="btn btn-ghost" data-act="decline" data-id="${r.id}">Decline</button><button class="btn btn-soft" data-chat="${esc(other)}" data-item="${it.id}">${I.chat} Message</button></div>`;
  if (r.role === 'lend' && (r.status === 'active' || r.status === 'accepted')) body = `
    <div class="row-btns"><button class="btn btn-primary" data-act="lendback" data-id="${r.id}">It's been returned</button><button class="btn btn-ghost" data-act="photos" data-id="${r.id}">Pickup photos</button><button class="btn btn-warn" data-act="report" data-id="${r.id}">Report an issue</button><button class="btn btn-soft" data-chat="${esc(other)}" data-item="${it.id}">${I.chat} Message</button></div>`;
  if (r.role === 'lend' && r.status === 'done') body = `<div class="note note-green" style="font-weight:700">${I.check}<span>${money(r.earn || 0)} added to your wallet</span></div>`;

  return `<article class="rent ${r.status === 'request' ? 'highlight' : ''}">
    <div class="rent-top">
      <a href="#/item/${it.id}" class="rent-img" style="${imgStyle(it)}" aria-label="${esc(it.title)}">${artFor(it)}</a>
      <div style="flex:1;min-width:0">
        <h3>${r.status === 'request' ? esc(other) + ' wants your ' + esc(it.title.toLowerCase()) : esc(it.title)}</h3>
        <div class="muted" style="font-size:14px">${r.role === 'borrow' ? 'from' : 'with'} ${esc(other)} · ${dates}</div>
      </div>
      ${r.earn && r.role === 'lend' ? `<b style="color:var(--green)">+${money(r.earn)}</b>` : ''}
      <span class="pill ${status[1]}">${status[0]}</span>
    </div>
    ${body}
  </article>`;
}

function rentAction(act, id){
  const r = rentals.find(x => x.id === id); if (!r) return;
  const it = byId(r.itemId);
  if (act === 'accept'){ r.status = 'accepted'; r.earn = r.earn ?? it.price * ((r.end || r.start) - r.start + 1);
    (chats[r.from] = chats[r.from] || []).push({ from:'sys', text:`You accepted ${r.from.split(' ')[0]}'s request` }); chatMeta[r.from] = it.id;
    toast(`Accepted! ${r.from.split(' ')[0]} has been notified`); }
  if (act === 'pickup'){ openReturn(r, it, true); return; }
  if (act === 'lendback'){
    confirmBox('Item returned?', `Confirm the ${esc(it.title.toLowerCase())} is back in good condition. ${r.earn ? money(r.earn) + ' will be added to your wallet.' : ''}`, 'Yes, it\'s back', () => {
      r.status = 'done'; r.earn = r.earn || 0;
      if (r.earn) { wallet.balance += r.earn; wallet.history.unshift({ text:`Lending: ${it.title}`, amt:r.earn, date:'Today' }); }
      addNotif(`${r.from.split(' ')[0]} returned your ${it.title.toLowerCase()}.${r.earn ? ' ' + money(r.earn) + ' added to your wallet.' : ''}`, '#/wallet', 'money');
      toast('Marked as returned'); renderRentals();
    });
    return;
  }
  if (act === 'decline'){ rentals = rentals.filter(x => x !== r); toast('Request declined'); }
  if (act === 'cancel'){ rentals = rentals.filter(x => x !== r); toast('Request cancelled, nothing was charged'); }
  if (act === 'extend'){
    if (r.end >= 30 || it.booked.includes(r.end + 1)) { toast(`Sorry, it's booked on ${Math.min(30, r.end + 1)} Nov. Message the owner to sort it out`); return; }
    r.end++; toast(`Extended to ${fmtDay(r.end)}. ${it.price ? money(it.price) + ' added' : 'Still free'}`);
  }
  if (act === 'photos'){ openPhotos(r, it); return; }
  if (act === 'report'){ openReport(r, it); return; }
  if (act === 'rate'){ openRate(r, it); return; }
  if (act === 'return'){ openReturn(r, it); return; }
  renderRentals();
}

function openReturn(r, it, isPickup){
  const shots = [];
  const labels = ['Front','Inside','Accessories','Any marks'];
  openModal(`
    <div class="modal-head"><div><h2>${isPickup ? 'Pickup check' : 'Return check'}</h2><p class="muted" style="font-size:14px">${esc(it.title)} · with ${esc(it.owner)}</p></div><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <p style="margin-bottom:12px;color:var(--ink-2)">Take time-stamped photos so ${esc(it.owner.split(' ')[0])} can see it's in the same condition.</p>
    <div class="photo-row" id="retPhotos" style="margin-bottom:16px"></div>
    <div class="check-list" style="margin-bottom:16px">
      ${it.included.map(x => `<label><span><b>${esc(x)}</b></span><input type="checkbox" class="retCheck"></label>`).join('')}
    </div>
    <label class="field" style="margin-bottom:16px"><span>Notes <small>(optional)</small></span><textarea class="input" id="retNote" rows="2" placeholder="Anything to mention?"></textarea></label>
    <button class="btn btn-primary btn-lg btn-block" id="retDone">${isPickup ? 'Confirm pickup' : 'Confirm return'}</button>`);
  function draw(){
    $('#retPhotos').innerHTML = labels.map((l, i) => `<label class="photo-slot ${shots[i] ? 'filled' : ''}" style="${shots[i] ? `background-image:url('${shots[i]}')` : ''}">${shots[i] ? '' : I.camera + '<span>' + l + '</span>'}<input type="file" accept="image/*" capture="environment" data-i="${i}" aria-label="${l} photo"></label>`).join('');
  }
  draw();
  $('#retPhotos').addEventListener('change', e => { const f = e.target.files[0]; if (f) { shots[+e.target.dataset.i] = URL.createObjectURL(f); draw(); } });
  $('#retDone').addEventListener('click', () => {
    const n = shots.filter(Boolean).length;
    const unchecked = [...document.querySelectorAll('.retCheck')].filter(c => !c.checked).length;
    if (n < 2) { toast('Please add at least 2 photos'); return; }
    if (unchecked) { toast('Tick every item you are returning'); return; }
    if (isPickup) { r.status = 'active'; r.progress = 5; closeAll(); toast('Pickup confirmed. Enjoy!'); renderRentals(); return; }
    r.status = 'returned'; closeAll(); toast('Return confirmed! Deposit release in progress'); scheduleRefund(r); renderRentals();
  });
}

function openRate(r, it){
  let stars = 5;
  const other = it.owner;
  openModal(`
    <div class="modal-head"><h2>Rate ${esc(other)}</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="stars" id="stars" role="group" aria-label="Rating"></div>
    <label class="field" style="margin:16px 0"><span>Review</span><textarea class="input" id="revText" rows="3" placeholder="How was borrowing from ${esc(other.split(' ')[0])}?"></textarea></label>
    <button class="btn btn-primary btn-block btn-lg" id="sendRate">Submit review</button>`);
  const draw = () => $('#stars').innerHTML = [1,2,3,4,5].map(n => `<button class="${n <= stars ? 'on' : ''}" data-s="${n}" aria-label="${n} star${n>1?'s':''}">${I.star}</button>`).join('');
  draw();
  $('#stars').addEventListener('click', e => { const b = e.target.closest('[data-s]'); if (b) { stars = +b.dataset.s; draw(); } });
  $('#sendRate').addEventListener('click', () => {
    const txt = $('#revText').value.trim();
    it.reviewList = it.reviewList || [];
    it.reviewList.unshift({ name: ME.name, stars, text: txt || 'Great experience, thank you!', when:'Just now' });
    it.rating = Math.round(((it.rating * it.reviews) + stars) / (it.reviews + 1) * 10) / 10; it.reviews++;
    r.rated = true; closeAll(); toast(`Thanks! You gave ${stars} star${stars>1?'s':''}`); renderRentals(); });
}

function openReport(r, it){
  openModal(`
    <div class="modal-head"><h2>Report an issue</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <p class="muted" style="margin-bottom:14px">${esc(it.title)} · borrowed by ${esc(r.from)}</p>
    <label class="field" style="margin-bottom:12px"><span>What happened?</span>
      <select class="input" id="issueType"><option>Item damaged</option><option>Part missing</option><option>Returned late</option><option>Not returned</option><option>Something else</option></select></label>
    <label class="field" style="margin-bottom:12px"><span>Amount to claim from deposit</span><span class="money"><b>RM</b><input id="claimAmt" inputmode="decimal" value="0"></span><small>Max ${money(it.deposit)}</small></label>
    <label class="field" style="margin-bottom:16px"><span>Details</span><textarea class="input" rows="3" placeholder="Describe the problem and compare with the pickup photos"></textarea></label>
    <div class="note note-blue" style="margin-bottom:16px">${I.info}<span>${esc(r.from.split(' ')[0])} has 48 hours to respond. If you can't agree, the BorrowLoop team reviews both sets of photos and decides.</span></div>
    <button class="btn btn-warn btn-lg btn-block" id="sendClaim">Submit claim</button>`);
  $('#sendClaim').addEventListener('click', () => {
    const amt = Math.min(it.deposit, Math.max(0, parseFloat($('#claimAmt').value) || 0));
    closeAll(); toast(`Claim for ${money(amt)} submitted. The deposit stays held`);
  });
}

/* =========================================================
   CHAT DRAWER (with smart, question-aware replies)
   ---------------------------------------------------------
   This is a demo without a server, so the other person's
   replies are generated here. They read your message and
   answer about the real item: dates, price, deposit,
   pickup spot, delivery, what's included, damage and more.
   In a real app, replace botReply() with real-time messages
   from a database (for example Firebase).
   ========================================================= */
let chatCtx = null;   // { name, itemId, isOwner }

const MEET_SPOTS = {
  'SS15, Subang Jaya':'SS15 LRT station', 'SS17, Subang Jaya':'the SS17 shoplots near the bus stop', 'SS19, Subang Jaya':'the SS19 surau car park',
  'SS14, Subang Jaya':'the SS14 market', 'USJ 9, Subang Jaya':'the USJ 9 McDonald\'s', 'Sunway, Petaling Jaya':'Sunway Pyramid, Gate 4',
  'Kelana Jaya':'Kelana Jaya LRT station', 'SS2, Petaling Jaya':'SS2 night market area', 'Damansara Utama':'Uptown Damansara, near the 7-Eleven',
  'Ara Damansara':'the Ara Damansara LRT station', 'Bangsar, Kuala Lumpur':'Bangsar LRT station', 'Mont Kiara, Kuala Lumpur':'the 163 Retail Park lobby',
  'KLCC, Kuala Lumpur':'KLCC park entrance', 'Cheras, Kuala Lumpur':'Taman Connaught night market area', 'Puchong':'IOI Mall Puchong, main entrance',
  'Shah Alam Seksyen 7':'the Seksyen 7 i-City entrance', 'Setia Alam':'Setia City Mall, main entrance', 'Cyberjaya':'DPulze mall, ground floor'
};
const CAT_TIPS = {
  Camping:'Tip: practise setting it up once at home before your trip.', Tools:'Tip: wear safety glasses, and I can lend you some if you need.',
  Cameras:'Tip: charge all batteries the night before your shoot.', Electronics:'Tip: give it a full charge before you start.',
  Party:'Tip: test everything the day before your event.', Sports:'Tip: check the tyres or gear before you head out.',
  Kitchen:'Tip: start on low speed so things don\'t splash.', Home:'Tip: check the filter is clean before use.',
  Kids:'Tip: the fold button is on the handle, push and lift.', Travel:'Tip: set your own lock code when you get it.',
  Garden:'Tip: clear stones and sticks from the grass first.', Music:'Tip: there are lots of free beginner lessons on YouTube.'
};

function openChat(name, itemId){
  const it = (itemId && byId(itemId)) || items.find(i => i.owner === name) || null;
  const isOwner = !!it && it.owner === name;        // true: you're talking to the item's owner
  chatCtx = { name, itemId: it ? it.id : null, isOwner };
  if (it) chatMeta[name] = it.id;
  unread[name] = 0; updateBadges();
  if (location.hash === '#/messages') setTimeout(renderMessages, 0);
  chats[name] = chats[name] || [{ from:'sys', text: it ? `Chat about: ${it.title}` : 'Say hi!' }];
  const quick = isOwner
    ? ['Is it available this weekend?', 'How much for 3 days?', 'Where can we meet?', "What's included?", 'Can you deliver?', 'How does the deposit work?']
    : ['What time will you pick it up?', 'Please return it by the due date', "Let's take photos at pickup"];

  $('#drawer').innerHTML = `
    <div class="drawer-head">
      ${avatar(name, 42, isOwner ? it.oc : null)}
      <div style="flex:1;min-width:0"><a href="#/user/${encodeURIComponent(name)}" style="font-weight:800">${esc(name)}</a><div style="font-size:12px;color:var(--green-d);font-weight:600">Online now</div></div>
      <button class="icon-btn" data-close aria-label="Close chat">${I.close}</button>
    </div>
    ${it ? `<a href="#/item/${it.id}" class="chat-item"><span class="rent-img" style="${imgStyle(it)};width:44px;height:44px;border-radius:10px">${artFor(it)}</span><span style="flex:1;min-width:0"><b style="font-size:14px">${esc(it.title)}</b><br><small class="muted">${it.price ? money(it.price) + '/day' : 'Free'} · ${money(it.deposit)} deposit</small></span></a>` : ''}
    <div class="msgs" id="msgs" aria-live="polite"></div>
    <div class="quick" id="quick">${quick.map(q => `<button type="button" data-q="${esc(q)}">${esc(q)}</button>`).join('')}</div>
    <form class="composer" id="composer">
      <label class="sr" for="msgInput">Message</label>
      <input id="msgInput" placeholder="Message ${esc(name.split(' ')[0])}…" autocomplete="off">
      <button class="btn btn-primary" style="width:46px;padding:0" aria-label="Send">${I.send}</button>
    </form>`;
  drawMsgs();
  $('#overlay').classList.add('open'); $('#drawer').classList.add('open');
  $('#composer').addEventListener('submit', e => { e.preventDefault(); send($('#msgInput').value); $('#msgInput').value = ''; });
  $('#quick').addEventListener('click', e => { const b = e.target.closest('[data-q]'); if (b) send(b.dataset.q); });
  setTimeout(() => { const m = $('#msgInput'); if (m) m.focus(); }, 250);
}

function drawMsgs(typing){
  const box = $('#msgs'); if (!box || !chatCtx) return;
  box.innerHTML = chats[chatCtx.name].map(m => `<div class="msg ${m.from}">${esc(m.text)}</div>`).join('') +
    (typing ? '<div class="msg them typing" aria-label="typing"><span></span><span></span><span></span></div>' : '');
  box.scrollTop = box.scrollHeight;
}

function send(text){
  text = text.trim(); if (!text || !chatCtx) return;
  const ctx = { ...chatCtx };
  chats[ctx.name].push({ from:'me', text });
  drawMsgs(true);
  const reply = botReply(text, ctx.itemId ? byId(ctx.itemId) : null, ctx.isOwner);
  const delay = Math.min(2600, 700 + reply.length * 18);
  setTimeout(() => {
    chats[ctx.name].push({ from:'them', text: reply });
    if (chatCtx && chatCtx.name === ctx.name) drawMsgs(false);
    else {
      unread[ctx.name] = (unread[ctx.name] || 0) + 1;
      if (settings.notifyMsgs) addNotif(`${ctx.name}: ${reply.slice(0, 70)}${reply.length > 70 ? '…' : ''}`, '#/messages', 'chat');
      updateBadges();
      if (location.hash === '#/messages') renderMessages();
    }
    saveAll();
  }, delay);
}

/* Find day-of-month numbers in a message, e.g. "6 nov", "on the 14th", "12-14" (ignores 6pm, 3 days, RM10) */
function findDays(t){
  const days = [];
  const range = t.match(/\b(\d{1,2})\s*(?:-|–|to|until|till)\s*(\d{1,2})\b(?!\s*(?:am|pm|km|days?|hours?|hrs?|min))/);
  if (range){ const a = +range[1], b = +range[2]; if (a >= 1 && b <= 30 && a <= b) for (let d = a; d <= b; d++) days.push(d); }
  const re = /\b(\d{1,2})(?:st|nd|rd|th)?\b(?!\s*(?:am|pm|km|days?|hours?|hrs?|min|people|person|pax|x\b|:|\.\d))/g;
  let m; while ((m = re.exec(t))){ const d = +m[1]; if (d >= 1 && d <= 30 && !days.includes(d)) days.push(d); }
  return days.sort((a, b) => a - b);
}
function nearestFree(it, from){
  const out = [];
  for (let k = 0; k < 30 && out.length < 3; k++){
    for (const d of [from + k, from - k]){ if (d >= 1 && d <= 30 && !it.booked.includes(d) && !out.includes(d)) out.push(d); if (out.length >= 3) break; }
  }
  return out.sort((a, b) => a - b);
}
const listDays = ds => ds.length === 1 ? `${ds[0]} Nov` : ds.slice(0, -1).join(', ') + ' and ' + ds[ds.length - 1] + ' Nov';

function botReply(raw, it, isOwner){
  const t = ' ' + raw.toLowerCase().replace(/[’']/g, "'") + ' ';
  const has = (...w) => w.some(x => t.includes(x));
  const word = (...w) => w.some(x => new RegExp('\\b' + x + '\\b').test(t));
  const out = [];

  if (!it) return word('hi','hello','hey') ? 'Hi! How can I help?' : 'Okay, noted. Thanks!';

  const title = it.title.toLowerCase();
  const p = it.price, dep = it.deposit;
  const greet = word('hi','hello','hey','hai','salam','assalamualaikum','morning','evening','afternoon');
  const time = t.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);

  /* ---------- You are the borrower, talking to the owner ---------- */
  if (isOwner){
    const days = findDays(t.replace(/\b\d{1,2}(:\d{2})?\s*(am|pm)\b/g, ''));
    const askDates = days.length || has('available','free on','free this','free next','still free','can i borrow','can i rent','book','weekend','tomorrow','today','tonight','monday','tuesday','wednesday','thursday','friday','saturday','sunday','which date','what date','when is it','dates');

    if (askDates){
      if (days.length){
        const clash = days.filter(d => it.booked.includes(d));
        if (clash.length){ out.push(`Sorry, it's already booked on ${listDays(clash)}. The closest free days are ${listDays(nearestFree(it, clash[0]))}. Would any of those work?`); }
        else out.push(`Yes, it's free on ${listDays(days)}! Just pick the dates on the item page and send a request, and I'll accept it.`);
      } else if (has('weekend','saturday','sunday','tomorrow','today','tonight','monday','tuesday','wednesday','thursday','friday')){
        out.push(`Yes, it's free then. Send me a request with the dates and I'll accept it.`);
      } else {
        out.push(it.booked.length ? `Yes, it's available! In November it's only booked on ${listDays(it.booked)}. Which dates do you need?` : `Yes, it's available most days. Which dates do you need?`);
      }
    }
    if (has('how much','price','cost','rate','per day','charge','discount','cheaper','cheap','nego','murah','kurang','less','total','rm')){
      const dm = t.match(/\b(\d{1,2})\s*(?:days?|hari)\b/);
      if (p === 0) out.push(`It's free to borrow! I only ask for the ${money(dep)} refundable deposit.`);
      else if (dm){ const n = +dm[1]; const rent = p * n, disc = n >= 7 ? Math.round(rent * 0.15) : 0; out.push(`For ${n} day${n > 1 ? 's' : ''} it's ${money(rent - disc)}${disc ? ` (that's with the 15% weekly discount)` : ''}, plus the ${money(dep)} deposit that you get back.`); }
      else if (has('discount','cheaper','nego','murah','kurang','less')) out.push(`It's ${money(p)} a day. If you borrow it for 7 days or more, you get 15% off automatically.`);
      else out.push(`It's ${money(p)} a day, plus a ${money(dep)} deposit that you get back after returning it.`);
    }
    if (has('deposit','refund','money back','duit balik')) out.push(`The deposit is ${money(dep)}. BorrowLoop holds it, not me, and it goes back to you within 24 hours after we both confirm the return photos.`);
    if (has('where','meet','location','pickup','pick up','pick-up','collect','address','which area','how far','near')) out.push(`I'm in ${it.area}, about ${fmtKm(it.km)} from you. We can meet at ${MEET_SPOTS[it.area] || 'a spot near ' + it.area}. I'll share the exact place once I accept your request.`);
    if (time){
      const h = (+time[1] % 12) + (time[3] === 'pm' ? 12 : 0);
      out.push(h >= 22 || h < 7 ? `${time[0].trim()} is a bit late for me. Could we do before 10pm?` : `${time[0].trim()} works for me!`);
    } else if (has('what time','which time','when can','what hour','morning','evening','afternoon','night')) out.push(`I'm free after 6pm on weekdays and any time on weekends. What time suits you?`);
    if (has('deliver','delivery','send to','send it','hantar','grab','lalamove','drop off','drop it')) out.push(it.delivery ? `Yes, I can deliver within 5 km for RM8. Just choose "Delivery" when you send the request.` : `Sorry, I don't deliver this one, but pickup is easy. I'm in ${it.area}.`);
    if (has('broke','break','broken','damage','scratch','crack','rosak','accident','spoil','not working','stopped working','spill','lost','missing')) out.push(`Thanks for telling me straight away, I appreciate it. Could you send me a photo? If you added damage protection, it's covered up to RM300. If not, we'll agree on a fair repair cost from the deposit using the pickup photos.`);
    if (has('extend','longer','one more day','another day','extra day','return late','late return')) out.push(`Sure! You can extend it in My Rentals, it's ${p ? money(p) + ' per extra day' : 'still free'}.${it.booked.length ? ` Just note it's booked on ${listDays(it.booked)}.` : ''}`);
    if (has('cancel')) out.push(`No problem, you can cancel from My Rentals. You won't be charged if I haven't accepted yet.`);
    if (has('condition','working','work well','still work','does it work','new?','old','clean','any problem','any issue','good shape','quality')) out.push(`It's in ${it.cond.toLowerCase()} condition and works perfectly. We'll check it together and take photos at pickup.`);
    if (has('include','come with','comes with','accessor','charger','battery','batteries','bag','case','cable','what do i get',"what's in",'whats in')) out.push(`It comes with: ${it.included.join(', ')}.`);
    if (has('how to','how do i','how does','teach','use it','manual','set up','setup','install','beginner','first time','difficult','easy')) out.push(`It's easy to use! I'll give you a quick demo at pickup, it takes about 5 minutes. ${CAT_TIPS[it.cat] || ''}`.trim());
    if (has('rule','allowed','can i bring','can i take it','overseas','outstation')) out.push(`Just a few rules: ${it.rules.join('; ')}.`);
    if (has('photo','picture','pic ','pics','video')) out.push(`Sure, I'll send a few more photos tonight. You'll also see it properly at pickup.`);
    if (has('verify','verified','trust','safe','scam','legit')) out.push(`I'm ID-verified on BorrowLoop and have ${it.reviews} reviews. Payment and the deposit go through the app, so it's safe for both of us.`);
    if (has('size','big','small','heavy','weight','fit','dimension','how many people')) out.push(`${it.desc}`);
    if (has('thank','tq','terima kasih','appreciate')) out.push(`You're welcome! Let me know if you need anything else.`);

    if (!out.length){
      if (word('ok','okay','sure','alright','deal','noted','great','perfect','cool','nice','see you','bye','orait','set')) return pick(['Great, see you then!', 'Okay, sounds good!', 'Perfect, see you!']);
      if (greet) return `Hi! Thanks for your interest in my ${title}. Do you want to know about dates, price or pickup?`;
      return `Sorry, I'm not sure I understood. Are you asking about the dates, the price, pickup, or the ${title} itself?`;
    }
    return (greet ? 'Hi! ' : '') + out.slice(0, 2).join(' ');
  }

  /* ---------- You are the owner, talking to a borrower ---------- */
  const r = rentals.find(x => x.itemId === it.id && x.from === chatCtx.name);
  if (time) out.push(`${time[0].trim()} works, I'll be there on time.`);
  else if (has('what time','when','pick up','pickup','collect')) out.push(`Could I pick it up around 7pm? If that's too late, just tell me a time that suits you.`);
  if (has('where','meet','location','address')) out.push(`Anywhere near ${it.area.split(',')[0]} is fine for me. Just share the spot.`);
  if (has('return','due','back','give back')) out.push(r && r.end ? `Yes, I'll return it by ${fmtDay(r.end)} as agreed.` : `Of course, I'll return it on time.`);
  if (has('photo','picture','condition','careful','take care','damage','broke')) out.push(`Don't worry, I'll take good care of it. Let's take the photos together at pickup.`);
  if (has('deposit','pay','payment','price')) out.push(`Yes, I've already paid through the app, the deposit is held there.`);
  if (has('thank','tq','terima kasih')) out.push(`Thank you for lending it to me!`);
  if (!out.length){
    if (greet) return `Hi! Thanks for accepting. When can I collect it?`;
    return pick(['Okay, noted. Thanks!', 'Sure, no problem.', 'Got it, thanks for letting me know.']);
  }
  return (greet ? 'Hi! ' : '') + out.slice(0, 2).join(' ');
}
const pick = arr => arr[Math.floor(Math.random() * arr.length)];

/* =========================================================
   LOCATION
   ---------------------------------------------------------
   Asks the browser for your real position (you'll see the
   browser's own "Allow location?" popup). Works on
   localhost / Live Server or https. The position is only
   saved on this device.
   ========================================================= */
function openLocation(){
  const gpsOn = userLoc.source === 'gps';
  openModal(`
    <div class="modal-head"><div><h2>Find things near you</h2><p class="muted" style="font-size:14px">Currently: ${esc(userLoc.label)}${gpsOn ? ' (your real location)' : ''}</p></div><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="loc-hero">${I.pin.replace('width="18" height="18"','width="40" height="40"')}</div>
    <p style="color:var(--ink-2);margin-bottom:16px">BorrowLoop uses your location to show items closest to you and how far away they are. Your location is only saved on this device, and lenders never see your exact address.</p>
    <button class="btn btn-primary btn-lg btn-block" id="useGps">${I.pin} Use my current location</button>
    <p id="locStatus" class="loc-status" role="status"></p>
    <div class="divider"><span>or pick an area</span></div>
    <div class="chips" style="justify-content:center">${PICK_AREAS.map(a => `<button type="button" class="chip ${userLoc.source !== 'gps' && userLoc.label === a ? 'on' : ''}" data-area="${a}">${a}</button>`).join('')}</div>`);

  $('#useGps').addEventListener('click', requestGps);
  $('#modal').querySelectorAll('[data-area]').forEach(b => b.addEventListener('click', () => {
    const [lat, lng] = PICK_COORDS[b.dataset.area];
    setLocation({ lat, lng, label: b.dataset.area, source:'area' });
    closeAll(); toast(`Showing items near ${b.dataset.area}`);
  }));
}

function requestGps(){
  const status = $('#locStatus');
  const say = (msg, bad) => { if (status) { status.textContent = msg; status.classList.toggle('bad', !!bad); } };
  if (!('geolocation' in navigator)) { say("Your browser doesn't support location. Please pick an area below.", true); return; }
  if (!window.isSecureContext) { say('Location only works on https:// or a local server (for example VS Code Live Server). Please pick an area below for now.', true); return; }
  say('Waiting for your permission… Click "Allow" in the popup near the address bar.');
  $('#useGps').disabled = true;
  navigator.geolocation.getCurrentPosition(pos => {
    setLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude, label:'Your location', source:'gps', acc: Math.round(pos.coords.accuracy) });
    closeAll();
    toast('Location on! Showing what\'s closest to you');
    reverseGeocode(pos.coords.latitude, pos.coords.longitude);
  }, err => {
    const b = $('#useGps'); if (b) b.disabled = false;
    if (err.code === 1) say('Location is blocked. To allow it, click the icon on the left of the address bar, set Location to "Allow", then try again. Or pick an area below.', true);
    else if (err.code === 3) say('That took too long. Please try again, or pick an area below.', true);
    else say("We couldn't find your location. Check that location is turned on for your device, or pick an area below.", true);
  }, { enableHighAccuracy:true, timeout:15000, maximumAge:60000 });
}

function setLocation(loc){
  userLoc = loc; saveLoc(); updateDistances(); updateLocChip();
  rerender();
}

/* Turns coordinates into a neighbourhood name using OpenStreetMap (free, no key needed) */
function reverseGeocode(lat, lng){
  const apply = name => { if (name && userLoc.source === 'gps') { userLoc.label = name; saveLoc(); updateLocChip(); rerender(); } };
  // 1st choice: BigDataCloud (free, made for use straight from a browser)
  fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    .then(r => r.ok ? r.json() : Promise.reject())
    .then(d => { const n = d.locality || d.city || d.principalSubdivision; if (n) apply(n); else throw 0; })
    .catch(() => {
      // Backup: OpenStreetMap Nominatim
      fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=14&lat=${lat}&lon=${lng}`)
        .then(r => r.ok ? r.json() : null)
        .then(d => { const a = d && d.address; if (a) apply(a.suburb || a.neighbourhood || a.city_district || a.town || a.city || a.state); })
        .catch(() => {});
    });
}
function updateLocChip(){ const l = $('#locLabel'); if (l) l.textContent = userLoc.label; }
function rerender(){
  const y = window.scrollY;
  renderView();
  window.scrollTo(0, y);
}

/* ---------- Maps (Leaflet) ----------
   Map pictures ("tiles") come from CARTO, with Esri as an automatic backup.
   (The main OpenStreetMap server blocks pages opened straight from your computer,
   which caused the "403 Access blocked" error.) */
const TILE_SOURCES = [
  { name:'Streets', url:'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
    dark:'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}',
    opts:{ maxZoom:19, attribution:'Tiles &copy; Esri' }, darkOpts:{ maxZoom:16, attribution:'Tiles &copy; Esri' } },
  { name:'Community', url:'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    opts:{ subdomains:'abc', maxZoom:19, attribution:'&copy; OpenStreetMap contributors, Humanitarian OSM Team' } }
];
function addTiles(m){
  if (m._tiles) m.removeLayer(m._tiles);
  let i = (settings.mapSource || 0) % TILE_SOURCES.length, fails = 0;
  const src = TILE_SOURCES[i], dark = isDark() && src.dark;
  m._tiles = L.tileLayer(dark ? src.dark : src.url, dark && src.darkOpts ? src.darkOpts : src.opts).addTo(m);
  m._tiles.on('tileerror', () => {
    // Too many broken tiles: move on to the next provider automatically
    if (++fails === 4 && !m._autoSwitched) { m._autoSwitched = true; settings.mapSource = (i + 1) % TILE_SOURCES.length; addTiles(m); updateStyleBtns(); }
  });
}
/* "Map style" button: switches provider on every map and remembers the choice */
function addStyleButton(m, el){
  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'map-style-btn';
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg><span>${TILE_SOURCES[(settings.mapSource || 0) % TILE_SOURCES.length].name}</span>`;
  btn.title = 'Map not loading? Tap to switch map style';
  btn.setAttribute('aria-label', 'Switch map style');
  if (L.DomEvent) { L.DomEvent.disableClickPropagation(btn); L.DomEvent.disableScrollPropagation(btn); }
  btn.addEventListener('click', e => {
    e.preventDefault(); e.stopPropagation();
    settings.mapSource = ((settings.mapSource || 0) + 1) % TILE_SOURCES.length;
    Object.values(maps).forEach(mp => { try { mp._autoSwitched = true; addTiles(mp); } catch (err) {} });
    updateStyleBtns(); saveAll();
    toast('Map style: ' + TILE_SOURCES[settings.mapSource].name);
  });
  el.appendChild(btn);
}
function updateStyleBtns(){
  document.querySelectorAll('.map-style-btn span').forEach(s => s.textContent = TILE_SOURCES[(settings.mapSource || 0) % TILE_SOURCES.length].name);
}
const maps = {};
function makeMap(el, center, zoom){
  if (!el) return null;
  if (typeof L === 'undefined') { el.innerHTML = '<div class="map-fallback">The map couldn\'t load. Check your internet connection.</div>'; return null; }
  if (maps[el.id]) { try { maps[el.id].remove(); } catch (e) {} }
  let m;
  try {
    m = L.map(el, { scrollWheelZoom:false, zoomControl:true }).setView(center, zoom);
    addTiles(m);
    addStyleButton(m, el);
  } catch (e) {
    console.warn('Map failed', e);
    el.innerHTML = '<div class="map-fallback">The map couldn\'t load right now.</div>';
    return null;
  }
  maps[el.id] = m;
  return m;
}
function meMarker(){
  return L.marker([userLoc.lat, userLoc.lng], { icon: L.divIcon({ className:'', html:'<div class="me-pin" title="You"></div>', iconSize:[22,22], iconAnchor:[11,11] }), zIndexOffset:1000 })
    .bindPopup(`<b>You are here</b><br>${esc(userLoc.label)}`);
}
function itemMarker(it){
  const label = it.price ? 'RM' + it.price : 'Free';
  return L.marker([it.lat, it.lng], { icon: L.divIcon({ className:'', html:`<div class="map-pin">${label}</div>`, iconSize:[54,30], iconAnchor:[27,30] }) })
    .bindPopup(`<a href="#/item/${it.id}" class="map-pop"><span class="map-pop-img" style="${imgStyle(it)}">${artFor(it)}</span><b>${esc(it.title)}</b><span>${it.price ? money(it.price) + '/day' : 'Free'} · ${fmtKm(it.km)} away</span><span class="map-pop-link">View item →</span></a>`);
}
/* Shows a list of items on a map, spreading out items that share the same neighbourhood */
function plotItems(m, list){
  const layer = L.layerGroup().addTo(m);
  const seen = {};
  list.forEach(it => {
    const k = it.lat + ',' + it.lng; const n = seen[k] = (seen[k] || 0) + 1;
    const ang = n * 2.4, r = n > 1 ? 0.0018 * Math.sqrt(n) : 0;
    itemMarker({ ...it, lat: it.lat + Math.sin(ang) * r, lng: it.lng + Math.cos(ang) * r }).addTo(layer);
  });
  meMarker().addTo(layer);
  const pts = list.map(i => [i.lat, i.lng]).concat([[userLoc.lat, userLoc.lng]]);
  if (pts.length > 1) m.fitBounds(pts, { padding:[40, 40], maxZoom:14 });
  setTimeout(() => m.invalidateSize(), 60);
  return layer;
}

/* =========================================================
   MODAL / OVERLAY
   ========================================================= */
function openModal(html){
  $('#modal').innerHTML = html;
  $('#overlay').classList.add('open'); $('#modal').classList.add('open');
  const f = $('#modal').querySelector('input,textarea,select,button:not([data-close])');
  if (f) setTimeout(() => f.focus(), 50);
}
function closeAll(){
  ['#overlay','#modal','#drawer'].forEach(s => $(s).classList.remove('open'));
  chatCtx = null;
}
$('#overlay').addEventListener('click', closeAll);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeAll(); });

/* ---------- Global clicks ---------- */
document.addEventListener('click', e => {
  if (e.target.closest('[data-close]')) { closeAll(); return; }
  const w = e.target.closest('[data-wish]');
  if (w){
    e.preventDefault();
    const id = +w.dataset.wish;
    if (wish.has(id)) { wish.delete(id); toast('Removed from saved'); } else { wish.add(id); toast('Saved to your profile'); }
    saveWish();
    w.classList.toggle('on', wish.has(id)); w.setAttribute('aria-pressed', wish.has(id));
    return;
  }
  if (e.target.closest('[data-loc]')) { e.preventDefault(); openLocation(); return; }
  const mg = e.target.closest('[data-manage]');
  if (mg) { e.preventDefault(); manageListing(mg.dataset.manage, +mg.dataset.id); return; }
  const c = e.target.closest('[data-chat]');
  if (c) { e.preventDefault(); openChat(c.dataset.chat, +c.dataset.item || null); }
});

$('#navSearchForm').addEventListener('submit', e => {
  e.preventDefault();
  state.q = $('#navSearch').value;
  if (location.hash === '#/search') renderSearch(); else location.hash = '#/search';
});
$('#navSearch').addEventListener('input', e => {
  state.q = e.target.value;
  if (location.hash === '#/search') { const s = $('#pageSearch'); if (s) s.value = state.q; renderResults(); }
});

/* =========================================================
   SEARCH PAGE
   ========================================================= */
function renderSearch(){
  const f = state.f;
  app.innerHTML = `
  <div class="wrap page">
    <h1 class="section-title" style="font-size:34px">Search</h1>
    <p class="muted" style="margin:4px 0 20px">Find what you need near ${esc(userLoc.label)}. <button type="button" class="link-btn" data-loc>Change location</button></p>

    <form class="search-bar" id="pageSearchForm" role="search">
      <div class="nav-search" style="flex:1;min-width:220px">
        ${I.search}
        <label class="sr" for="pageSearch">Search</label>
        <input id="pageSearch" type="search" placeholder="Try tent, drill, camera, projector…" value="${esc(state.q)}" autocomplete="off">
      </div>
      <button class="btn btn-primary" type="submit">Search</button>
      <button class="btn btn-ghost filter-toggle" type="button" id="filterToggle" aria-expanded="${state.filtersOpen}">Filters</button>
    </form>

    <div class="search-layout">
      <aside class="filters ${state.filtersOpen ? 'open' : ''}" id="filters" aria-label="Filters">
        <div>
          <h3>Category</h3>
          ${CATS.slice(1).map(c => `<label class="f-check"><input type="checkbox" data-fcat="${c}" ${f.cats.includes(c) ? 'checked' : ''}>${c}</label>`).join('')}
        </div>
        <div>
          <h3>Max price per day</h3>
          <input class="range" type="range" id="fMax" min="0" max="60" step="5" value="${f.maxPrice}" aria-label="Maximum price per day">
          <div class="range-val"><span>Free</span><span id="fMaxVal">${f.maxPrice >= 60 ? 'Any price' : 'Up to RM' + f.maxPrice}</span></div>
        </div>
        <div>
          <h3>Distance</h3>
          <input class="range" type="range" id="fKm" min="1" max="30" step="1" value="${f.maxKm}" aria-label="Maximum distance in km">
          <div class="range-val"><span>1 km</span><span id="fKmVal">${kmLabel(f.maxKm)}</span></div>
        </div>
        <div>
          <h3>Options</h3>
          <label class="f-check"><input type="checkbox" id="fFreeOnly" ${f.free ? 'checked' : ''}>Free to borrow only</label>
          <label class="f-check"><input type="checkbox" id="fDelOnly" ${f.delivery ? 'checked' : ''}>Delivery available</label>
        </div>
        <button class="btn btn-ghost" type="button" id="fReset">Reset filters</button>
      </aside>

      <div>
        <div class="results-head">
          <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap">
            <b id="resCount"></b>
            <div class="seg" role="group" aria-label="View">
              <button type="button" data-view-mode="list" class="${state.view === 'list' ? 'on' : ''}" aria-pressed="${state.view === 'list'}">List</button>
              <button type="button" data-view-mode="map" class="${state.view === 'map' ? 'on' : ''}" aria-pressed="${state.view === 'map'}">Map</button>
            </div>
          </div>
          <label><span class="sr">Sort by</span>
            <select class="select" id="fSort">
              <option value="near" ${f.sort==='near'?'selected':''}>Nearest first</option>
              <option value="cheap" ${f.sort==='cheap'?'selected':''}>Lowest price</option>
              <option value="pricey" ${f.sort==='pricey'?'selected':''}>Highest price</option>
              <option value="rated" ${f.sort==='rated'?'selected':''}>Top rated</option>
            </select>
          </label>
        </div>
        <div class="active-filters" id="activeFilters"></div>
        ${state.view === 'map' ? '<div class="map map-lg" id="resMap"></div>' : ''}
        <div class="grid" id="results"></div>
      </div>
    </div>
  </div>`;

  $('#pageSearchForm').addEventListener('submit', e => { e.preventDefault(); state.q = $('#pageSearch').value; $('#navSearch').value = state.q; renderResults(); });
  $('#pageSearch').addEventListener('input', e => { state.q = e.target.value; $('#navSearch').value = state.q; renderResults(); });
  $('#filterToggle').addEventListener('click', () => {
    state.filtersOpen = !state.filtersOpen;
    $('#filters').classList.toggle('open', state.filtersOpen);
    $('#filterToggle').setAttribute('aria-expanded', state.filtersOpen);
  });
  $('#filters').addEventListener('change', e => {
    const t = e.target;
    if (t.dataset.fcat){ f.cats = t.checked ? f.cats.concat(t.dataset.fcat) : f.cats.filter(c => c !== t.dataset.fcat); }
    if (t.id === 'fFreeOnly') f.free = t.checked;
    if (t.id === 'fDelOnly') f.delivery = t.checked;
    renderResults();
  });
  $('#fMax').addEventListener('input', e => { f.maxPrice = +e.target.value; $('#fMaxVal').textContent = f.maxPrice >= 60 ? 'Any price' : 'Up to RM' + f.maxPrice; renderResults(); });
  $('#fKm').addEventListener('input', e => { f.maxKm = +e.target.value; $('#fKmVal').textContent = kmLabel(f.maxKm); renderResults(); });
  $('#fSort').addEventListener('change', e => { f.sort = e.target.value; renderResults(); });
  $('#fReset').addEventListener('click', resetFilters);
  app.querySelectorAll('[data-view-mode]').forEach(b => b.addEventListener('click', () => { state.view = b.dataset.viewMode; renderSearch(); }));
  $('#activeFilters').addEventListener('click', e => {
    const b = e.target.closest('[data-rm]'); if (!b) return;
    const [k, v] = b.dataset.rm.split(':');
    if (k === 'cat') f.cats = f.cats.filter(c => c !== v);
    if (k === 'q') { state.q = ''; $('#navSearch').value = ''; }
    if (k === 'price') f.maxPrice = 60;
    if (k === 'km') f.maxKm = 30;
    if (k === 'free') f.free = false;
    if (k === 'del') f.delivery = false;
    renderSearch();
  });
  renderResults();
}

function resetFilters(){
  state.f = { cats:[], maxPrice:60, maxKm:30, free:false, delivery:false, sort:state.f.sort };
  state.q = ''; $('#navSearch').value = '';
  renderSearch();
  toast('Filters cleared');
}

function renderResults(){
  const box = $('#results'); if (!box) return;
  const f = state.f, q = state.q.trim().toLowerCase();
  let list = visibleItems().filter(it =>
    (!f.cats.length || f.cats.includes(it.cat)) &&
    (f.maxPrice >= 60 || it.price <= f.maxPrice) &&
    (f.maxKm >= 30 || it.km <= f.maxKm) &&
    (!f.free || it.price === 0) &&
    (!f.delivery || it.delivery) &&
    (!q || (it.title + ' ' + it.cat + ' ' + it.owner + ' ' + it.area + ' ' + it.desc).toLowerCase().includes(q)));
  const sorters = { near:(a,b) => a.km - b.km, cheap:(a,b) => a.price - b.price, pricey:(a,b) => b.price - a.price, rated:(a,b) => b.rating - a.rating };
  list.sort(sorters[f.sort]);

  $('#resCount').textContent = `${list.length} item${list.length === 1 ? '' : 's'} found`;
  if (state.view === 'map'){
    const el = $('#resMap');
    if (el){
      let m = maps.resMap;
      if (!m || m.getContainer() !== el) { m = makeMap(el, [userLoc.lat, userLoc.lng], 12); if (m) m._items = null; }
      if (m){ if (m._items) m.removeLayer(m._items); m._items = plotItems(m, list); }
    }
  }

  const tags = [];
  if (q) tags.push(['q:', `"${state.q.trim()}"`]);
  f.cats.forEach(c => tags.push(['cat:' + c, c]));
  if (f.maxPrice < 60) tags.push(['price:', 'Up to RM' + f.maxPrice]);
  if (f.maxKm < 30) tags.push(['km:', 'Within ' + f.maxKm + ' km']);
  if (f.free) tags.push(['free:', 'Free only']);
  if (f.delivery) tags.push(['del:', 'Delivery']);
  $('#activeFilters').innerHTML = tags.map(([k, l]) => `<button type="button" data-rm="${esc(k)}" aria-label="Remove filter ${esc(l)}">${esc(l)} ✕</button>`).join('');

  box.innerHTML = list.length ? list.map(card).join('') :
    `<div class="empty" style="grid-column:1/-1"><b>No items match.</b><br>Try removing a filter, or ask your neighbours for it.<div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap"><button class="btn btn-ghost" type="button" id="emptyReset">Reset filters</button><button class="btn btn-primary" type="button" id="emptyAsk">Post a "looking for" request</button></div></div>`;
  const er = $('#emptyReset'); if (er) er.addEventListener('click', resetFilters);
  const ea = $('#emptyAsk'); if (ea) ea.addEventListener('click', () => { state.profileTab = 'wants'; location.hash = '#/profile'; });
}

/* =========================================================
   HELP PAGE
   ========================================================= */
function renderHelp(){
  const faqs = [
    ['How does the deposit work?', 'When you borrow, the deposit is held, not spent. After you return the item and both of you confirm the return photos, it is released back to you within 24 hours.'],
    ['What if I accidentally break something?', 'Tell the owner straight away in the chat. If you added damage protection, accidents up to RM300 are covered. Otherwise the repair cost comes out of your deposit, agreed with the owner using the pickup and return photos.'],
    ['What if the owner and I disagree?', 'Either of you can open a claim within 24 hours of the return. The BorrowLoop team compares both sets of photos and makes a fair decision.'],
    ['How do I get paid when I lend?', 'Your rental earnings collect in your profile. Tap "Cash out" to send them to your bank account.'],
    ['Do I need to verify my ID?', 'You can browse without it, but many owners only lend to verified borrowers. Verifying takes about two minutes with your IC and a selfie.'],
    ['Can I lend things for free?', 'Yes! Turn on "Lend for free" when listing. You can still ask for a deposit so your item is protected.']
  ];
  app.innerHTML = `
  <div class="wrap page">
    <a href="#/" class="back">${I.back} Back to home</a>
    <h1 class="section-title" style="font-size:34px">Help centre</h1>
    <p class="muted" style="margin:4px 0 24px">Answers to common questions about borrowing and lending.</p>
    <div class="help-grid">
      <div class="faq">${faqs.map(([q, a], i) => `<details ${i === 0 ? 'open' : ''}><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
      <form class="box" id="contactForm" style="display:flex;flex-direction:column;gap:14px">
        <b style="font-size:18px">Still need help?</b>
        <p class="muted" style="font-size:14px">Send us a message and we'll reply by email.</p>
        <label class="field"><span>Topic</span>
          <select class="input" id="cTopic"><option>A rental or deposit</option><option>Damage or a claim</option><option>My account</option><option>Something else</option></select></label>
        <label class="field"><span>Message</span><textarea class="input" id="cMsg" rows="5" placeholder="Tell us what happened"></textarea></label>
        <button class="btn btn-primary btn-lg" type="submit">Send message</button>
      </form>
    </div>
  </div>`;
  $('#contactForm').addEventListener('submit', e => {
    e.preventDefault();
    if (!$('#cMsg').value.trim()) { toast('Please write a message first'); $('#cMsg').focus(); return; }
    $('#cMsg').value = '';
    toast('Message sent! We usually reply within a day');
  });
}

/* Pickup photos viewer (used on the Lending tab) */
function openPhotos(r, it){
  const labels = ['Front · 6:04 pm','Inside · 6:04 pm','Accessories · 6:05 pm','Marks · 6:05 pm'];
  openModal(`
    <div class="modal-head"><div><h2>Pickup photos</h2><p class="muted" style="font-size:14px">${esc(it.title)} · ${esc(r.from)} · ${fmtDay(r.start)}</p></div><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="photo-row" style="grid-template-columns:repeat(2,1fr)">
      ${labels.map((l, i) => `<div class="photo-slot filled" style="${it.photo ? imgStyle(it) : 'background-color:' + shade(it.bg, i * -6)};aspect-ratio:4/3;cursor:default">${artFor(it).replace('<svg', '<svg style="width:60%"')}<span class="pill" style="position:absolute;left:8px;bottom:8px;background:var(--ink);color:#fff;font-size:11px">${l}</span></div>`).join('')}
    </div>
    <p class="muted" style="font-size:13px;margin-top:12px">Both of you confirmed these photos at pickup.</p>`);
}

/* =========================================================
   THEME (light / dark / match device)
   ========================================================= */
function isDark(){
  return settings.theme === 'dark' || (settings.theme === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
}
function applyTheme(){ document.documentElement.dataset.theme = isDark() ? 'dark' : 'light'; }
applyTheme();
if (window.matchMedia) matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => { if (settings.theme === 'auto') { applyTheme(); rerender(); } });

/* =========================================================
   SMALL SHARED HELPERS
   ========================================================= */
/* Avatar: shows your profile photo if you uploaded one, otherwise coloured initials */
function avatar(name, size = 42, color){
  const st = `width:${size}px;height:${size}px;font-size:${Math.round(size * .36)}px;`;
  if (name === ME.name && ME.photo) return `<span class="avatar" role="img" aria-label="${esc(name)}" style="${st}background:url('${ME.photo}') center/cover"></span>`;
  return `<span class="avatar" style="${st}background:${color || (name === ME.name ? ME.color : colorFor(name))}">${initials(name)}</span>`;
}
/* Shrinks a photo before saving it, so it fits in the browser's storage */
function compressImage(file, max = 900, quality = .75){
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(img.src);
      resolve(c.toDataURL('image/jpeg', quality));
    };
    img.onerror = () => reject(new Error('Not an image'));
    img.src = URL.createObjectURL(file);
  });
}
function copyText(text, msg){
  const done = () => toast(msg || 'Copied');
  if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, done);
  else { const t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove(); done(); }
}
function confirmBox(title, text, okLabel, onOk, danger){
  openModal(`<div class="modal-head"><h2>${title}</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <p style="color:var(--ink-2);margin-bottom:20px">${text}</p>
    <div style="display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap"><button class="btn btn-ghost" data-close>Cancel</button><button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" id="okBtn">${okLabel}</button></div>`);
  $('#okBtn').addEventListener('click', () => { closeAll(); onOk(); });
}
function markRecent(id){ recent = [id].concat(recent.filter(x => x !== id)).slice(0, 8); }
const visibleItems = () => items.filter(i => !i.paused);

/* =========================================================
   NOTIFICATIONS
   ========================================================= */
const NOTIF_ICONS = {
  check: I.check, cal:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>',
  user:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  chat: I.chat.replace('width="20" height="20"','width="18" height="18"'), money:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="2" y="6" width="20" height="13" rx="2"/><circle cx="12" cy="12.5" r="2.5"/></svg>',
  shield: I.shield.replace('width="22" height="22"','width="18" height="18"')
};
function addNotif(text, link, icon){
  notifs.unshift({ id: Date.now() + Math.random(), icon: icon || 'check', text, link: link || '', time:'Just now', read:false });
  notifs = notifs.slice(0, 40);
  updateBadges(); saveAll();
}
function updateBadges(){
  const n = notifs.filter(x => !x.read).length;
  const m = Object.values(unread).reduce((a, b) => a + b, 0);
  [['#bellBadge', n], ['#msgBadge', m], ['#tabMsgBadge', m]].forEach(([sel, v]) => {
    const b = $(sel); if (!b) return; b.textContent = v > 9 ? '9+' : v; b.hidden = !v;
  });
  const na = $('#navAvatar'); if (na) na.innerHTML = avatar(ME.name, 38);
  const uh = $('#umHead'); if (uh) uh.innerHTML = `${avatar(ME.name, 40)}<span style="min-width:0"><b>${esc(ME.name)}</b><small>${esc(ME.email || '')}</small></span>`;
  const on = !!ME.signedIn;
  ['#msgBtn', '#bellBtn', '#userMenuWrap'].forEach(sel => { const el = $(sel); if (el) el.hidden = !on; });
  const si = $('#signInBtn'); if (si) si.hidden = on;
}
function askSignOut(){
  confirmBox('Sign out?', 'You\'ll need to sign in again to borrow or lend.', 'Sign out', async () => {
    if (server.online) { try { await api('logout.php', {}); } catch (e) { /* signed out locally anyway */ } }
    ME.signedIn = false; ME.userId = null; saveAll(); updateBadges(); toast('You\'ve signed out');
    location.hash = '#/login';
  });
}
function toggleUserMenu(open){
  const menu = $('#userMenu'), btn = $('#navAvatar'); if (!menu) return;
  const show = open === undefined ? menu.hidden : open;
  menu.hidden = !show; btn.setAttribute('aria-expanded', show);
}
function openNotifs(){
  const draw = () => {
    openModal(`
      <div class="modal-head"><h2>Notifications</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
      ${notifs.length ? `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px"><span class="muted" style="font-size:14px">${notifs.filter(x => !x.read).length} unread</span>
        <div style="display:flex;gap:8px"><button class="btn btn-ghost" id="readAll" style="min-height:38px">Mark all read</button><button class="btn btn-ghost" id="clearN" style="min-height:38px">Clear</button></div></div>
        <div class="notif-list">${notifs.map(n => `<button type="button" class="notif ${n.read ? '' : 'unread'}" data-nid="${n.id}"><span class="notif-ic">${NOTIF_ICONS[n.icon] || I.check}</span><span style="flex:1;text-align:left"><span style="display:block">${esc(n.text)}</span><small class="muted">${esc(n.time)}</small></span></button>`).join('')}</div>`
      : '<div class="empty">You\'re all caught up!</div>'}`);
    const ra = $('#readAll'); if (ra) ra.addEventListener('click', () => { notifs.forEach(n => n.read = true); updateBadges(); saveAll(); draw(); });
    const cl = $('#clearN'); if (cl) cl.addEventListener('click', () => { notifs = []; updateBadges(); saveAll(); draw(); });
    $('#modal').querySelectorAll('[data-nid]').forEach(b => b.addEventListener('click', () => {
      const n = notifs.find(x => String(x.id) === b.dataset.nid); if (!n) return;
      n.read = true; updateBadges(); saveAll(); closeAll();
      if (n.link) { if (location.hash === n.link) rerender(); else location.hash = n.link; }
    }));
  };
  draw();
}

/* =========================================================
   OWNERS ACCEPT YOUR REQUESTS (simulated, since there's no server)
   ========================================================= */
function scheduleAccept(r){
  setTimeout(() => {
    if (r.status !== 'pending') return;
    const it = byId(r.itemId); if (!it) return;
    r.status = 'upcoming';
    const first = it.owner.split(' ')[0];
    (chats[it.owner] = chats[it.owner] || []).push({ from:'sys', text:`${first} accepted · ${money(it.deposit)} deposit held` },
      { from:'them', text:`Hi! I've accepted your request. See you on ${fmtDay(r.start)}. Meet at ${MEET_SPOTS[it.area] || it.area}?` });
    chatMeta[it.owner] = it.id;
    if (!(chatCtx && chatCtx.name === it.owner)) unread[it.owner] = (unread[it.owner] || 0) + 1;
    addNotif(`${first} accepted your request for the ${it.title.toLowerCase()}!`, '#/rentals', 'check');
    toast(`${first} accepted your request!`);
    if (location.hash === '#/rentals' || location.hash === '#/messages') rerender();
    else if (chatCtx && chatCtx.name === it.owner) drawMsgs(false);
  }, 7000);
}
function scheduleRefund(r){
  setTimeout(() => {
    if (r.status !== 'returned') return;
    const it = byId(r.itemId); if (!it) return;
    r.status = 'done'; r.refund = it.deposit; r.label = 'Returned ' + fmtDay(r.end || r.start || 8);
    addNotif(`Your ${money(it.deposit)} deposit for the ${it.title.toLowerCase()} has been refunded.`, '#/rentals', 'money');
    toast(`${money(it.deposit)} deposit refunded!`);
    if (location.hash === '#/rentals') rerender();
  }, 8000);
}

/* =========================================================
   MY PROFILE
   ========================================================= */
function profileChecks(){
  const mine = items.filter(i => i.owner === ME.name);
  return [
    ['Add a profile photo', !!ME.photo, 'photo'],
    ['Write a short bio', (ME.bio || '').length > 20, 'edit'],
    ['Verify your ID', ME.idVerified, 'verify'],
    ['List 3 items', mine.length >= 3, 'list']
  ];
}
function renderProfile(){
  const mineItems = items.filter(i => i.owner === ME.name);
  const lent = 12 + rentals.filter(r => r.role === 'lend' && r.status === 'done').length;
  const borrowed = 7 + rentals.filter(r => r.role === 'borrow').length;
  const checks = profileChecks(); const done = checks.filter(c => c[1]).length;
  const tabs = [['offers', `My listings (${mineItems.length})`], ['saved', `Saved (${wish.size})`], ['wants', 'Looking for'], ['reviews', 'Reviews']];

  app.innerHTML = `
  <div class="wrap page">
    <div class="cover" style="background:${ME.cover}">
      <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="opacity:.25"><circle cx="1080" cy="30" r="150" fill="#fff"/><circle cx="120" cy="230" r="120" fill="#000"/><path d="M640 200 720 70l80 130z" fill="#fff"/><path d="M760 200 820 110l60 90z" fill="#000"/></svg>
    </div>
    <div class="profile-top">
      <div class="profile-avatar" style="${ME.photo ? `background:url('${ME.photo}') center/cover` : `background:${ME.color}`}">
        ${ME.photo ? '' : initials(ME.name)}
        <label class="avatar-edit" title="Change profile photo">${I.camera.replace('width="22" height="22"','width="18" height="18"')}<input type="file" accept="image/*" id="quickPhoto" aria-label="Change profile photo"></label>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-ghost" id="shareProfile">Share profile</button>
        <button class="btn btn-primary" id="editProfile">Edit profile</button>
      </div>
    </div>

    <div class="profile-grid">
      <div style="display:flex;flex-direction:column;gap:16px">
        <div>
          <h1 style="font-size:28px;letter-spacing:-.02em">${esc(ME.name)}</h1>
          <p class="muted">${esc(ME.area || userLoc.label)} · joined ${esc(ME.joined)}</p>
          <p style="color:var(--ink-2);margin-top:10px">${esc(ME.bio || 'No bio yet.')}</p>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:6px">
          ${ME.idVerified ? `<span class="pill pill-green">${NOTIF_ICONS.shield} ID verified</span>` : `<button class="pill pill-orange pill-btn" id="verifyBtn">${NOTIF_ICONS.shield} Verify your ID</button>`}
          ${ME.phoneVerified ? '<span class="pill pill-green">Phone verified</span>' : ''}
          <span class="pill pill-blue">${I.bolt} Fast replier</span>
          <span class="pill pill-yellow">★ Top lender</span>
        </div>
        <div class="stats">
          <div class="stat"><b>${lent}</b><small>Times lent</small></div>
          <div class="stat"><b>${borrowed}</b><small>Borrowed</small></div>
          <div class="stat"><b>4.9★</b><small>20 reviews</small></div>
        </div>
        <a href="#/wallet" class="earn">
          <div><div style="font-size:12px;color:#B8C4BE;font-weight:600">Wallet balance</div><div style="font-size:26px;font-weight:800">${money(wallet.balance)}</div></div>
          <span class="btn" style="background:var(--yellow);color:#14201B">Open wallet</span>
        </a>
        ${done < checks.length ? `<div class="box">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b>Profile ${Math.round(done / checks.length * 100)}% complete</b><span class="muted" style="font-size:13px">${done}/${checks.length}</span></div>
          <div class="progress" style="margin-bottom:12px"><div style="width:${done / checks.length * 100}%"></div></div>
          ${checks.map(([label, ok, act]) => `<button type="button" class="check-row ${ok ? 'ok' : ''}" data-pc="${act}" ${ok ? 'disabled' : ''}><span class="check-dot">${ok ? I.check : ''}</span>${label}</button>`).join('')}
        </div>` : `<div class="note note-green">${I.check}<span>Your profile is complete. Great profiles get far more requests!</span></div>`}
        <div class="quick-links">
          <a href="#/messages">${I.chat}<span>Messages</span></a>
          <a href="#/wallet">${NOTIF_ICONS.money}<span>Wallet</span></a>
          <button type="button" id="inviteBtn">${NOTIF_ICONS.user}<span>Invite friends</span></button>
          <a href="#/settings"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/></svg><span>Settings</span></a>
          <a href="#/help">${I.info}<span>Help centre</span></a>
        </div>
      </div>

      <div>
        <div class="tabs" role="tablist" id="pTabs">
          ${tabs.map(([k, l]) => `<button class="tab ${state.profileTab === k ? 'on' : ''}" role="tab" aria-selected="${state.profileTab === k}" data-ptab="${k}">${l}</button>`).join('')}
        </div>
        <div id="pBody"></div>
      </div>
    </div>
  </div>`;

  $('#pTabs').addEventListener('click', e => { const t = e.target.closest('[data-ptab]'); if (!t) return; state.profileTab = t.dataset.ptab; renderProfile(); });
  $('#shareProfile').addEventListener('click', () => shareLink(`${ME.name} on BorrowLoop`, location.href.split('#')[0] + '#/user/' + encodeURIComponent(ME.name)));
  $('#editProfile').addEventListener('click', openEditProfile);
  $('#inviteBtn').addEventListener('click', openInvite);
  const vb = $('#verifyBtn'); if (vb) vb.addEventListener('click', openVerify);
  $('#quickPhoto').addEventListener('change', async e => {
    const f = e.target.files[0]; if (!f) return;
    try { ME.photo = await compressImage(f, 400, .8); updateBadges(); toast('Profile photo updated'); renderProfile(); }
    catch (err) { toast('That file is not a photo'); }
  });
  app.querySelectorAll('[data-pc]').forEach(b => b.addEventListener('click', () => {
    const a = b.dataset.pc;
    if (a === 'photo' || a === 'edit') openEditProfile();
    if (a === 'verify') openVerify();
    if (a === 'list') location.hash = '#/list';
  }));

  const body = $('#pBody');
  if (state.profileTab === 'offers'){
    body.innerHTML = `<div class="grid">${mineItems.map(it => `<div class="mine-wrap">${card(it)}
      <div class="mine-actions">
        <a class="btn btn-ghost" href="#/list/${it.id}">Edit</a>
        <button class="btn btn-ghost" data-manage="pause" data-id="${it.id}">${it.paused ? 'Resume' : 'Pause'}</button>
        <button class="btn btn-ghost btn-danger-text" data-manage="delete" data-id="${it.id}" aria-label="Delete ${esc(it.title)}">Delete</button>
      </div></div>`).join('')}<a href="#/list" class="add-tile">${I.plus}Offer something new</a></div>`;
  } else if (state.profileTab === 'saved'){
    const saved = items.filter(i => wish.has(i.id));
    body.innerHTML = saved.length ? `<div class="grid">${saved.map(card).join('')}</div>` : `<div class="empty">Nothing saved yet. Tap the heart on any item to save it here.</div>`;
  } else if (state.profileTab === 'wants'){
    body.innerHTML = `
      <form class="box" id="wantForm" style="display:flex;flex-direction:column;gap:12px;margin-bottom:14px">
        <b style="font-size:16px">Can't find something? Ask your neighbours.</b>
        <div class="two"><label class="field"><span class="sr">What do you need?</span><input class="input" id="wTitle" placeholder="e.g. Pressure washer" required></label>
        <label class="field"><span class="sr">When?</span><input class="input" id="wWhen" placeholder="When? e.g. This Saturday"></label></div>
        <label class="field"><span class="sr">Budget</span><input class="input" id="wBudget" placeholder="Budget (optional), e.g. Up to RM20/day"></label>
        <button class="btn btn-primary" type="submit" style="align-self:flex-start">Post request</button>
      </form>
      ${wants.length ? wants.map((w, i) => `<div class="box want" style="margin-bottom:10px"><div style="min-width:0"><b>${esc(w.title)}</b><div class="muted" style="font-size:14px">${esc(w.when)} · ${esc(w.budget)}</div></div>
        <div style="display:flex;gap:8px;align-items:center"><span class="pill ${w.offers ? 'pill-green' : 'pill-grey'}">${w.offers ? w.offers + ' offers' : 'No offers yet'}</span>
        <button class="icon-btn" data-delwant="${i}" aria-label="Delete request">${I.close}</button></div></div>`).join('') : '<div class="empty">No requests yet.</div>'}`;
    $('#wantForm').addEventListener('submit', e => {
      e.preventDefault();
      const t = $('#wTitle').value.trim(); if (!t) { toast('Write what you need first'); return; }
      const w = { title:t, when: $('#wWhen').value.trim() || 'Flexible', budget: $('#wBudget').value.trim() || 'Budget open', offers:0 };
      wants.unshift(w);
      toast('Request posted to neighbours nearby'); renderProfile();
      setTimeout(() => { w.offers = 1 + Math.floor(Math.random() * 3); addNotif(`${w.offers} neighbour${w.offers > 1 ? 's' : ''} can lend you: ${w.title}`, '#/profile', 'user'); if (location.hash === '#/profile') renderProfile(); }, 9000);
    });
    body.querySelectorAll('[data-delwant]').forEach(b => b.addEventListener('click', () => { wants.splice(+b.dataset.delwant, 1); toast('Request removed'); renderProfile(); }));
  } else {
    const mine = items.filter(i => i.owner === ME.name).flatMap(i => (i.reviewList || []).map(r => ({ ...r, item:i.title })));
    const base = [
      { name:'Mei Shan', stars:5, text:'Drill was fully charged and came with all the bits. Easy pickup.', when:'2 weeks ago' },
      { name:'Raj K.', stars:5, text:'Friendly and flexible with the return time. Would borrow again.', when:'last month' },
      { name:'Siti N.', stars:5, text:'Lent me the ladder for free on short notice. Thank you!', when:'last month' }
    ];
    body.innerHTML = mine.concat(base).map(reviewHTML).join('');
  }
}
function reviewHTML(r){
  return `<div class="box" style="margin-bottom:10px;display:flex;gap:12px">${avatar(r.name, 42)}<div style="min-width:0"><b>${esc(r.name)}</b> <span class="stars-txt">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</span> <small class="muted">· ${esc(r.when)}</small>${r.item ? `<div class="muted" style="font-size:12px">${esc(r.item)}</div>` : ''}<p style="color:var(--ink-2);margin-top:4px">${esc(r.text)}</p></div></div>`;
}

const COVERS = ['#0B7A55','#2E3A59','#7A3E73','#B4501E','#1F6F7A','#14201B'];
function openEditProfile(){
  let photo = ME.photo, cover = ME.cover;
  openModal(`
    <div class="modal-head"><h2>Edit profile</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <form id="profForm" style="display:flex;flex-direction:column;gap:16px">
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
        <div class="profile-avatar" id="pfPrev" style="width:96px;height:96px;font-size:34px;border-radius:28px;border:none"></div>
        <div style="display:flex;flex-direction:column;gap:8px">
          <label class="btn btn-soft" style="cursor:pointer">${I.camera} Upload photo<input type="file" accept="image/*" id="pfFile" class="sr"></label>
          <button type="button" class="btn btn-ghost" id="pfRemove">Remove photo</button>
        </div>
      </div>
      <label class="field"><span>Display name</span><input class="input" id="pfName" value="${esc(ME.name)}" maxlength="30" required></label>
      <label class="field"><span>Bio</span><textarea class="input" id="pfBio" rows="3" maxlength="200">${esc(ME.bio || '')}</textarea><small><span id="bioCount">${(ME.bio || '').length}</span>/200</small></label>
      <div class="two">
        <label class="field"><span>Area</span><input class="input" id="pfArea" value="${esc(ME.area || '')}" placeholder="e.g. Subang Jaya"></label>
        <label class="field"><span>Phone</span><input class="input" id="pfPhone" value="${esc(ME.phone || '')}" inputmode="tel"></label>
      </div>
      <fieldset class="field"><legend>Cover colour</legend>
        <div style="display:flex;gap:10px;flex-wrap:wrap">${COVERS.map(c => `<button type="button" class="swatch ${c === cover ? 'on' : ''}" data-cover="${c}" style="background:${c}" aria-label="Cover colour ${c}"></button>`).join('')}</div>
      </fieldset>
      <button class="btn btn-primary btn-lg" type="submit">Save changes</button>
    </form>`);
  const prev = () => { const p = $('#pfPrev'); p.style.background = photo ? `url('${photo}') center/cover` : ME.color; p.textContent = photo ? '' : initials($('#pfName').value || ME.name); };
  prev();
  $('#pfName').addEventListener('input', prev);
  $('#pfBio').addEventListener('input', e => $('#bioCount').textContent = e.target.value.length);
  $('#pfFile').addEventListener('change', async e => { const f = e.target.files[0]; if (!f) return; try { photo = await compressImage(f, 400, .8); prev(); } catch (err) { toast('That file is not a photo'); } });
  $('#pfRemove').addEventListener('click', () => { photo = null; prev(); });
  $('#modal').querySelectorAll('[data-cover]').forEach(b => b.addEventListener('click', () => {
    cover = b.dataset.cover; $('#modal').querySelectorAll('[data-cover]').forEach(x => x.classList.toggle('on', x === b));
  }));
  $('#profForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = $('#pfName').value.trim();
    if (name.length < 2) { toast('Your name needs at least 2 letters'); return; }
    renameMe(name);
    Object.assign(ME, { photo, cover, bio: $('#pfBio').value.trim(), area: $('#pfArea').value.trim(), phone: $('#pfPhone').value.trim() });
    closeAll(); updateBadges(); toast('Profile saved'); rerender();
  });
}
/* Changing your name also updates the owner name on your listings */
function renameMe(name){
  if (name === ME.name) return;
  items.forEach(i => { if (i.owner === ME.name) i.owner = name; });
  ME.name = name;
}

function openVerify(){
  const shots = {};
  openModal(`
    <div class="modal-head"><div><h2>Verify your ID</h2><p class="muted" style="font-size:14px">Verified members get more requests and can borrow higher-value items.</p></div><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <div class="photo-row" style="grid-template-columns:1fr 1fr;margin-bottom:14px">
      <label class="photo-slot" id="vIc">${I.id}<span>Front of IC</span><input type="file" accept="image/*" data-v="ic" aria-label="Photo of the front of your IC"></label>
      <label class="photo-slot" id="vSelfie">${I.camera}<span>Selfie</span><input type="file" accept="image/*" capture="user" data-v="selfie" aria-label="Take a selfie"></label>
    </div>
    <div class="note note-blue" style="margin-bottom:16px">${I.lock}<span>In this demo your photos stay on your device and are never uploaded. A real app would send them securely to an ID-check service.</span></div>
    <button class="btn btn-primary btn-lg btn-block" id="vSubmit">Submit for checking</button>`);
  $('#modal').querySelectorAll('[data-v]').forEach(inp => inp.addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const url = URL.createObjectURL(f); shots[inp.dataset.v] = url;
    const slot = inp.closest('.photo-slot'); slot.classList.add('filled'); slot.style.backgroundImage = `url('${url}')`;
    [...slot.childNodes].forEach(n => { if (n !== inp) n.remove(); });
  }));
  $('#vSubmit').addEventListener('click', () => {
    if (!shots.ic || !shots.selfie) { toast('Please add both photos'); return; }
    const b = $('#vSubmit'); b.disabled = true; b.innerHTML = '<span class="spinner"></span> Checking your ID…';
    setTimeout(() => {
      ME.idVerified = true; closeAll();
      addNotif('Your ID has been verified. You now have the verified badge!', '#/profile', 'shield');
      toast('ID verified!'); rerender();
    }, 2500);
  });
}

function openInvite(){
  const code = (ME.name.split(' ')[0] || 'FRIEND').toUpperCase().replace(/[^A-Z]/g, '') + '-LOOP';
  const link = location.href.split('#')[0] + '#/?invite=' + code;
  openModal(`
    <div class="modal-head"><h2>Invite friends</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <p style="color:var(--ink-2);margin-bottom:16px">When a friend joins with your code and finishes their first borrow, you both get <b>RM10</b> off your next rental.</p>
    <div class="code-box"><span>${code}</span><button class="btn btn-soft" id="copyCode">Copy code</button></div>
    <button class="btn btn-primary btn-lg btn-block" id="shareInvite" style="margin-top:14px">Share invite link</button>`);
  $('#copyCode').addEventListener('click', () => copyText(code, 'Invite code copied'));
  $('#shareInvite').addEventListener('click', () => shareLink('Join me on BorrowLoop', link, `Borrow things from neighbours instead of buying. Use my code ${code} for RM10 off!`));
}
function shareLink(title, url, text){
  if (navigator.share) navigator.share({ title, text: text || title, url }).catch(() => {});
  else copyText(url, 'Link copied. Paste it anywhere to share');
}

/* Your listings: pause, resume, delete */
function manageListing(act, id){
  const it = byId(id); if (!it) return;
  if (act === 'pause'){ it.paused = !it.paused; toast(it.paused ? 'Listing paused. It\'s hidden from search' : 'Listing is live again'); rerender(); }
  if (act === 'delete'){
    confirmBox('Delete this listing?', `"${esc(it.title)}" will be removed for good. Active rentals are not affected.`, 'Delete', () => {
      items = items.filter(x => x !== it); wish.delete(id); saveWish();
      toast('Listing deleted');
      if (location.hash.startsWith('#/item/')) location.hash = '#/profile'; else rerender();
    }, true);
  }
}

/* =========================================================
   OTHER PEOPLE'S PROFILES
   ========================================================= */
function renderUser(name){
  if (name === ME.name) { location.hash = '#/profile'; return; }
  const theirs = visibleItems().filter(i => i.owner === name);
  if (!theirs.length) { app.innerHTML = `<div class="wrap page"><div class="empty">We couldn't find that person. <a href="#/" class="link-btn">Back home</a></div></div>`; return; }
  const reviews = theirs.reduce((s, i) => s + i.reviews, 0);
  const rating = theirs.reduce((s, i) => s + i.rating * i.reviews, 0) / Math.max(1, reviews);
  const areas = [...new Set(theirs.map(i => i.area))];
  const sample = theirs.flatMap(i => (i.reviewList || []).map(r => ({ ...r, item:i.title }))).concat([
    { name:'Daniel T.', stars:5, text:`${name.split(' ')[0]} was friendly and everything was clean and working.`, when:'2 weeks ago', item:theirs[0].title }
  ]);
  app.innerHTML = `
  <div class="wrap page">
    <a href="javascript:history.back()" class="back">${I.back} Back</a>
    <div class="user-head box">
      ${avatar(name, 96)}
      <div style="flex:1;min-width:200px">
        <h1 style="font-size:28px;letter-spacing:-.02em;display:flex;align-items:center;gap:8px">${esc(name)} <span style="color:var(--green)" title="ID verified">${I.shield}</span></h1>
        <p class="muted">${esc(areas.join(' · '))} · ${fmtKm(Math.min(...theirs.map(i => i.km)))} from you</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-top:10px">
          <span class="pill pill-green">ID verified</span><span class="pill pill-yellow">★ ${rating.toFixed(1)} · ${reviews} reviews</span><span class="pill pill-blue">${I.bolt} Replies in ~10 min</span>
        </div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <button class="btn btn-primary" data-chat="${esc(name)}" data-item="${theirs[0].id}">${I.chat} Message</button>
        <button class="btn btn-ghost" id="shareUser">Share</button>
      </div>
    </div>
    <h2 class="section-title" style="font-size:22px;margin:28px 0 14px">${theirs.length} item${theirs.length > 1 ? 's' : ''} to borrow</h2>
    <div class="grid">${theirs.map(card).join('')}</div>
    <h2 class="section-title" style="font-size:22px;margin:32px 0 14px">Reviews</h2>
    ${sample.map(reviewHTML).join('')}
  </div>`;
  $('#shareUser').addEventListener('click', () => shareLink(`${name} on BorrowLoop`, location.href));
}

/* =========================================================
   MESSAGES INBOX
   ========================================================= */
function renderMessages(){
  const names = Object.keys(chats).filter(n => chats[n].some(m => m.from !== 'sys'));
  names.sort((a, b) => (unread[b] || 0) - (unread[a] || 0));
  app.innerHTML = `
  <div class="wrap page" style="max-width:820px">
    <h1 class="section-title" style="font-size:34px">Messages</h1>
    <p class="muted" style="margin:4px 0 22px">Chat with lenders and borrowers.</p>
    ${names.length ? `<div class="inbox">${names.map(n => {
      const msgs = chats[n].filter(m => m.from !== 'sys'); const last = msgs[msgs.length - 1];
      const it = byId(chatMeta[n]) || items.find(i => i.owner === n);
      const u = unread[n] || 0;
      return `<button type="button" class="inbox-row ${u ? 'unread' : ''}" data-chat="${esc(n)}" data-item="${it ? it.id : ''}">
        ${avatar(n, 48)}
        <span class="inbox-main"><span class="inbox-top"><b>${esc(n)}</b>${it ? `<small class="muted">${esc(it.title)}</small>` : ''}</span>
        <span class="inbox-last">${last.from === 'me' ? 'You: ' : ''}${esc(last.text)}</span></span>
        ${u ? `<span class="badge static">${u}</span>` : ''}
      </button>`; }).join('')}</div>`
    : `<div class="empty"><b>No messages yet.</b><br>Open any item and tap "Message" to ask the owner a question.<div style="margin-top:14px"><a href="#/search" class="btn btn-primary">Find something</a></div></div>`}
  </div>`;
}

/* =========================================================
   WALLET
   ========================================================= */
function renderWallet(){
  const held = rentals.filter(r => r.role === 'borrow' && ['active','upcoming','returned'].includes(r.status)).reduce((s, r) => s + (byId(r.itemId) ? byId(r.itemId).deposit : 0), 0);
  const earned = wallet.history.filter(h => h.amt > 0).reduce((s, h) => s + h.amt, 0);
  app.innerHTML = `
  <div class="wrap page" style="max-width:900px">
    <h1 class="section-title" style="font-size:34px">Wallet</h1>
    <p class="muted" style="margin:4px 0 22px">Your lending earnings and deposits.</p>
    <div class="wallet-grid">
      <div class="earn" style="flex-direction:column;align-items:flex-start;gap:14px">
        <div><div style="font-size:13px;color:#B8C4BE;font-weight:600">Available to cash out</div><div style="font-size:40px;font-weight:800;letter-spacing:-.02em">${money(wallet.balance)}</div></div>
        <button class="btn" style="background:var(--yellow);color:#14201B" id="cashOut" ${wallet.balance <= 0 ? 'disabled' : ''}>Cash out to bank</button>
      </div>
      <div class="box"><small class="muted" style="font-weight:600">Deposits held for you</small><div style="font-size:26px;font-weight:800">${money(held)}</div><small class="muted">Refunded after each return check</small></div>
      <div class="box"><small class="muted" style="font-weight:600">Total earned</small><div style="font-size:26px;font-weight:800;color:var(--green)">${money(earned)}</div><small class="muted">From lending your things</small></div>
    </div>
    <h2 class="section-title" style="font-size:22px;margin:30px 0 12px">History</h2>
    <div class="box" style="padding:6px 20px">${wallet.history.length ? wallet.history.map(h => `<div class="hist-row"><span><b style="font-size:14px">${esc(h.text)}</b><br><small class="muted">${esc(h.date)}</small></span><b style="color:${h.amt < 0 ? 'var(--orange)' : 'var(--green)'}">${h.amt < 0 ? '−' : '+'}${money(Math.abs(h.amt))}</b></div>`).join('') : '<p class="muted" style="padding:14px 0">No transactions yet.</p>'}</div>
  </div>`;
  $('#cashOut').addEventListener('click', openCashOut);
}
function openCashOut(){
  openModal(`
    <div class="modal-head"><h2>Cash out</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <form id="coForm" style="display:flex;flex-direction:column;gap:14px">
      <label class="field"><span>Bank</span><select class="input" id="coBank"><option>Maybank</option><option>CIMB Bank</option><option>Public Bank</option><option>RHB Bank</option><option>Hong Leong Bank</option><option>AmBank</option><option>Bank Islam</option></select></label>
      <label class="field"><span>Account number</span><input class="input" id="coAcc" inputmode="numeric" placeholder="e.g. 1234 5678 9012"></label>
      <label class="field"><span>Amount</span><span class="money"><b>RM</b><input id="coAmt" inputmode="decimal" value="${wallet.balance}"></span><small>Up to ${money(wallet.balance)}. Usually arrives in 1–2 working days.</small></label>
      <button class="btn btn-primary btn-lg" type="submit">Cash out</button>
    </form>`);
  $('#coForm').addEventListener('submit', e => {
    e.preventDefault();
    const amt = Math.round((parseFloat($('#coAmt').value) || 0) * 100) / 100;
    const acc = $('#coAcc').value.replace(/\D/g, '');
    if (acc.length < 8) { toast('Please enter a valid account number'); return; }
    if (amt <= 0 || amt > wallet.balance) { toast(`Enter an amount between RM1 and ${money(wallet.balance)}`); return; }
    wallet.balance = Math.round((wallet.balance - amt) * 100) / 100;
    wallet.history.unshift({ text:`Cash out to ${$('#coBank').value} ••${acc.slice(-4)}`, amt:-amt, date:'Today' });
    closeAll(); addNotif(`${money(amt)} is on its way to your bank account.`, '#/wallet', 'money');
    toast(`${money(amt)} is on its way to your bank`); rerender();
  });
}

/* =========================================================
   SETTINGS
   ========================================================= */
function renderSettings(){
  const sw = (id, on, title, sub) => `<label class="set-row"><span><b>${title}</b><small>${sub}</small></span><span class="switch"><input type="checkbox" id="${id}" ${on ? 'checked' : ''}><span></span></span></label>`;
  app.innerHTML = `
  <div class="wrap page" style="max-width:760px">
    <h1 class="section-title" style="font-size:34px">Settings</h1>
    <p class="muted" style="margin:4px 0 22px">Signed in as ${esc(ME.email || ME.name)}${server.online ? '' : ' · demo mode (no server)'}</p>

    <h2 class="set-h">Appearance</h2>
    <div class="box"><div class="seg seg-lg" role="group" aria-label="Theme">
      ${[['light','Light'],['dark','Dark'],['auto','Match device']].map(([k, l]) => `<button type="button" data-theme-set="${k}" class="${settings.theme === k ? 'on' : ''}" aria-pressed="${settings.theme === k}">${l}</button>`).join('')}
    </div></div>

    <h2 class="set-h">Notifications</h2>
    <div class="box set-list">
      ${sw('sMsgs', settings.notifyMsgs, 'New messages', 'When someone sends you a message')}
      ${sw('sRem', settings.notifyReminders, 'Return reminders', 'A day before something is due back')}
      ${sw('sDeals', settings.notifyDeals, 'Deals near you', 'New items and discounts in your area')}
    </div>

    <h2 class="set-h">Location &amp; privacy</h2>
    <div class="box set-list">
      <div class="set-row"><span><b>Your location</b><small>${esc(userLoc.label)}${userLoc.source === 'gps' ? ' (real location)' : ''}</small></span><button class="btn btn-ghost" data-loc>Change</button></div>
      <div class="set-row"><span><b>Saved items</b><small>${wish.size} item${wish.size === 1 ? '' : 's'} in your wishlist</small></span><button class="btn btn-ghost" id="clearWish" ${wish.size ? '' : 'disabled'}>Clear</button></div>
      <div class="set-row"><span><b>Recently viewed</b><small>${recent.length} item${recent.length === 1 ? '' : 's'}</small></span><button class="btn btn-ghost" id="clearRecent" ${recent.length ? '' : 'disabled'}>Clear</button></div>
    </div>

    <h2 class="set-h">Account</h2>
    <div class="box set-list">
      <div class="set-row"><span><b>Profile</b><small>Name, photo, bio and cover</small></span><button class="btn btn-ghost" id="setEdit">Edit</button></div>
      <div class="set-row"><span><b>ID verification</b><small>${ME.idVerified ? 'Verified' : 'Not verified yet'}</small></span>${ME.idVerified ? '<span class="pill pill-green">Verified</span>' : '<button class="btn btn-soft" id="setVerify">Verify</button>'}</div>
      ${server.online ? '<div class="set-row"><span><b>Password</b><small>Change the password you sign in with</small></span><button class="btn btn-ghost" id="chPw">Change</button></div>' : ''}
      <div class="set-row"><span><b>Reset demo data</b><small>Puts back the original items, rentals and messages</small></span><button class="btn btn-ghost btn-danger-text" id="resetData">Reset</button></div>
    </div>
  </div>`;
  app.querySelectorAll('[data-theme-set]').forEach(b => b.addEventListener('click', () => { settings.theme = b.dataset.themeSet; applyTheme(); toast('Theme updated'); renderSettings(); }));
  [['sMsgs','notifyMsgs'],['sRem','notifyReminders'],['sDeals','notifyDeals']].forEach(([id, k]) => $('#' + id).addEventListener('change', e => { settings[k] = e.target.checked; toast('Saved'); }));
  $('#clearWish').addEventListener('click', () => { wish.clear(); saveWish(); toast('Saved items cleared'); renderSettings(); });
  $('#clearRecent').addEventListener('click', () => { recent = []; toast('History cleared'); renderSettings(); });
  $('#setEdit').addEventListener('click', openEditProfile);
  const sv = $('#setVerify'); if (sv) sv.addEventListener('click', openVerify);
  $('#resetData').addEventListener('click', () => confirmBox('Reset all demo data?', 'Your listings, rentals, messages, profile changes and saved items on this device will be cleared.', 'Reset everything', () => {
    ['borrowloop-data-v2','borrowloop-wish','borrowloop-draft'].forEach(k => { try { localStorage.removeItem(k); } catch (e) {} });
    location.hash = '#/'; location.reload();
  }, true));
  const cp = $('#chPw'); if (cp) cp.addEventListener('click', openChangePassword);
}

/* =========================================================
   SIGN IN / CREATE ACCOUNT (real accounts, using the PHP files in api/)
   ---------------------------------------------------------
   Works when the site runs on a PHP server (for example XAMPP:
   http://localhost/borrowloop/homepage.html). If PHP isn't
   running, the page says so and offers demo mode instead.
   ========================================================= */
const NEEDS_LOGIN = ['rentals','profile','list','messages','wallet','settings'];
const API = 'api/';
const server = { checked:false, online:false };

/* Talks to the PHP files. Throws {offline:true} when there's no PHP server. */
async function api(path, body){
  let res, data;
  try {
    res = await fetch(API + path, {
      method: body ? 'POST' : 'GET', credentials:'same-origin', cache:'no-store',
      headers: body ? { 'Content-Type':'application/json' } : {},
      body: body ? JSON.stringify(body) : undefined
    });
  } catch (e) { throw { offline:true }; }
  try { data = await res.json(); }
  catch (e) { throw { offline:true }; }          // e.g. no PHP: the server sent the .php file as text
  if (!data.ok) throw { message: data.error || 'Something went wrong. Please try again.', status: res.status };
  return data;
}

/* Copies the signed-in account from the server into the page */
function applyUser(u){
  if (u){
    if (u.name && u.name !== ME.name) renameMe(u.name);
    ME.email = u.email; ME.userId = u.id; ME.signedIn = true;
    const d = new Date(String(u.created_at).replace(' ', 'T'));
    if (!isNaN(d)) ME.joined = d.toLocaleDateString('en-GB', { month:'short', year:'numeric' });
  } else {
    ME.signedIn = false; ME.userId = null;
  }
  saveAll();
}

/* On page load: ask the server who is signed in */
async function checkSession(){
  if (location.protocol === 'file:') { server.checked = true; return; }
  try {
    const d = await api('me.php');
    server.online = true; applyUser(d.user);
  } catch (e) {
    server.online = !e.offline;               // reachable but returned an error (e.g. database not imported)
    if (!e.offline) toast(e.message);
  }
  server.checked = true;
  updateBadges(); rerender();
}

function renderLogin(mode){
  mode = mode || state.loginMode || 'signin';
  state.loginMode = mode;
  const offline = server.checked && !server.online;
  app.innerHTML = `
  <div class="wrap page login-wrap">
    <div class="login-card box">
      <div class="logo" style="justify-content:center;margin-bottom:6px"><span class="logo-mark"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 7h8a4 4 0 0 1 0 8H9"/><path d="M10 12 7 15l3 3"/></svg></span>BorrowLoop</div>
      <p class="muted" style="text-align:center;margin-bottom:18px">${mode === 'signin' ? 'Welcome back! Sign in to borrow and lend.' : 'Create your free account.'}</p>
      ${offline ? `<div class="note note-orange" style="margin-bottom:16px">${I.info}<span><b>The login server isn't connected.</b> Start Apache and MySQL in XAMPP, then open the site at <b>http://localhost/borrowloop/homepage.html</b>. Until then you can use demo mode below.</span></div>` : ''}
      <div class="seg seg-lg" style="margin-bottom:18px" role="group" aria-label="Sign in or create account">
        <button type="button" data-lmode="signin" class="${mode === 'signin' ? 'on' : ''}" aria-pressed="${mode === 'signin'}">Sign in</button>
        <button type="button" data-lmode="signup" class="${mode === 'signup' ? 'on' : ''}" aria-pressed="${mode === 'signup'}">Create account</button>
      </div>
      <form id="loginForm" style="display:flex;flex-direction:column;gap:14px" novalidate>
        ${mode === 'signup' ? '<label class="field"><span>Your name</span><input class="input" id="lName" autocomplete="name" maxlength="50" placeholder="e.g. Alice Lim"></label>' : ''}
        <label class="field"><span>Email</span><input class="input" id="lEmail" type="email" autocomplete="email" maxlength="190" value="${mode === 'signin' ? esc(ME.email || '') : ''}" placeholder="you@example.com"></label>
        <label class="field"><span>Password</span>
          <span class="pw-wrap"><input class="input" id="lPass" type="password" autocomplete="${mode === 'signin' ? 'current-password' : 'new-password'}" placeholder="${mode === 'signup' ? 'At least 8 characters, with a number' : 'Your password'}"><button type="button" class="link-btn" id="pwToggle">Show</button></span></label>
        <label class="f-check" style="padding:0"><input type="checkbox" id="lRemember" checked>Keep me signed in for 30 days</label>
        <p id="lErr" class="loc-status bad" role="alert" hidden></p>
        <button class="btn btn-primary btn-lg" type="submit" id="lSubmit">${mode === 'signin' ? 'Sign in' : 'Create account'}</button>
        ${mode === 'signin' ? '<button type="button" class="link-btn" id="forgot" style="align-self:center">Forgot password?</button>' : ''}
      </form>
      ${offline || !server.checked ? `<div class="divider"><span>or</span></div>
      <button class="btn btn-ghost btn-lg btn-block" id="guestBtn">Continue in demo mode</button>
      <p class="muted" style="font-size:12px;text-align:center;margin-top:10px">Demo mode keeps everything in this browser only.</p>` : ''}
    </div>
  </div>`;

  app.querySelectorAll('[data-lmode]').forEach(b => b.addEventListener('click', () => renderLogin(b.dataset.lmode)));
  $('#pwToggle').addEventListener('click', e => { const p = $('#lPass'); p.type = p.type === 'password' ? 'text' : 'password'; e.target.textContent = p.type === 'password' ? 'Show' : 'Hide'; });
  const fg = $('#forgot');
  if (fg) fg.addEventListener('click', () => openModal(`<div class="modal-head"><h2>Forgot your password?</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <p style="color:var(--ink-2);margin-bottom:12px">Resetting a password by email needs an email service, which isn't set up on this site yet.</p>
    <p style="color:var(--ink-2);margin-bottom:18px">For now, ask the site admin to reset it, or create a new account with a different email.</p>
    <button class="btn btn-primary btn-block" data-close>OK</button>`));
  const gb = $('#guestBtn'); if (gb) gb.addEventListener('click', () => signIn(false, true));

  $('#loginForm').addEventListener('submit', async e => {
    e.preventDefault();
    const errEl = $('#lErr');
    const err = msg => { errEl.textContent = msg; errEl.hidden = false; };
    errEl.hidden = true;
    const email = $('#lEmail').value.trim(), password = $('#lPass').value, remember = $('#lRemember').checked;
    const name = mode === 'signup' ? $('#lName').value.trim() : '';

    if (mode === 'signup' && name.length < 2) return err('Please enter your name.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return err('Please enter a valid email address.');
    if (!password) return err('Please enter your password.');
    if (mode === 'signup' && password.length < 8) return err('Your password needs at least 8 characters.');
    if (mode === 'signup' && !(/[A-Za-z]/.test(password) && /\d/.test(password))) return err('Use at least one letter and one number in your password.');

    const btn = $('#lSubmit'), label = btn.textContent;
    btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Please wait…';
    try {
      const d = mode === 'signup'
        ? await api('register.php', { name, email, password, remember })
        : await api('login.php', { email, password, remember });
      server.online = true; server.checked = true;
      if (mode === 'signup') { ME.idVerified = false; ME.photo = null; }
      applyUser(d.user);
      signIn(mode === 'signup');
    } catch (ex) {
      btn.disabled = false; btn.textContent = label;
      if (ex.offline) { server.checked = true; server.online = false; renderLogin(mode); $('#lErr').textContent = 'Can\'t reach the login server. See the note above.'; $('#lErr').hidden = false; }
      else err(ex.message);
    }
  });
}

function signIn(isNew, demo){
  ME.signedIn = true; updateBadges(); saveAll();
  toast(demo ? 'Demo mode: nothing is saved to a server'
             : isNew ? `Welcome to BorrowLoop, ${ME.name.split(' ')[0]}!` : `Welcome back, ${ME.name.split(' ')[0]}!`);
  const go = state.afterLogin && state.afterLogin !== '#/login' ? state.afterLogin : '#/'; state.afterLogin = null;
  location.hash = go;
}

/* Change password (Settings) */
function openChangePassword(){
  openModal(`
    <div class="modal-head"><h2>Change password</h2><button class="icon-btn" data-close aria-label="Close">${I.close}</button></div>
    <form id="pwForm" style="display:flex;flex-direction:column;gap:14px" novalidate>
      <label class="field"><span>Current password</span><input class="input" type="password" id="pwCur" autocomplete="current-password"></label>
      <label class="field"><span>New password</span><input class="input" type="password" id="pwNew" autocomplete="new-password" placeholder="At least 8 characters, with a number"></label>
      <label class="field"><span>Repeat new password</span><input class="input" type="password" id="pwNew2" autocomplete="new-password"></label>
      <p id="pwErr" class="loc-status bad" role="alert" hidden></p>
      <button class="btn btn-primary btn-lg" type="submit" id="pwSave">Save new password</button>
    </form>`);
  $('#pwForm').addEventListener('submit', async e => {
    e.preventDefault();
    const err = m => { const el = $('#pwErr'); el.textContent = m; el.hidden = false; };
    const cur = $('#pwCur').value, nw = $('#pwNew').value;
    if (!cur) return err('Enter your current password.');
    if (nw.length < 8) return err('Your new password needs at least 8 characters.');
    if (nw !== $('#pwNew2').value) return err('The new passwords don\'t match.');
    const b = $('#pwSave'); b.disabled = true;
    try { await api('change_password.php', { current:cur, new:nw }); closeAll(); toast('Password changed'); }
    catch (ex) { b.disabled = false; err(ex.offline ? 'Can\'t reach the server right now.' : ex.message); }
  });
}

/* =========================================================
   ROUTER
   ========================================================= */
function renderView(){
  const h = location.hash;
  const parts = h.replace(/^#\/?/, '').split('?')[0].split('/').filter(Boolean);
  const view = parts[0] || 'home';
  document.querySelectorAll('.nav-links a, .tabbar a').forEach(a => a.classList.toggle('active', a.dataset.view === view));
  if (NEEDS_LOGIN.includes(view) && !ME.signedIn) { state.afterLogin = h; renderLogin(); return; }
  if (view === 'item') renderItem(+parts[1]);
  else if (view === 'search') renderSearch();
  else if (view === 'help') renderHelp();
  else if (view === 'list') renderList(parts[1] ? +parts[1] : null);
  else if (view === 'rentals') renderRentals();
  else if (view === 'profile') renderProfile();
  else if (view === 'user') renderUser(decodeURIComponent(parts[1] || ''));
  else if (view === 'messages') renderMessages();
  else if (view === 'wallet') renderWallet();
  else if (view === 'settings') renderSettings();
  else if (view === 'login') { if (ME.signedIn) { location.hash = '#/'; return; } renderLogin(); }
  else renderHome();
  updateBadges();
}
function route(){
  const h = location.hash;
  if (h === '#how' || h === '#safety') { if (!$('#how')) { renderHome(); } const t = $(h); if (t) t.scrollIntoView({ behavior:'smooth' }); return; }
  closeAll();
  toggleUserMenu(false);
  renderView();
  saveAll();
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', route);
$('#locBtn').addEventListener('click', openLocation);
$('#bellBtn').addEventListener('click', openNotifs);
$('#navAvatar').addEventListener('click', e => { e.stopPropagation(); toggleUserMenu(); });
$('#userMenu').addEventListener('click', e => { if (e.target.closest('a')) toggleUserMenu(false); });
document.addEventListener('click', e => { if (!e.target.closest('#userMenuWrap')) toggleUserMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleUserMenu(false); });
updateLocChip();
route();
checkSession();

/* Pick up where things left off (requests waiting for an owner, refunds in progress) */
rentals.filter(r => r.status === 'pending' && r.mine).forEach(scheduleAccept);
rentals.filter(r => r.status === 'returned').forEach(scheduleRefund);

/* First visit: ask once whether to use the real location */
try {
  if (!localStorage.getItem('borrowloop-asked')) {
    localStorage.setItem('borrowloop-asked', '1');
    setTimeout(() => { if (userLoc.source === 'default' && ME.signedIn) openLocation(); }, 900);
  }
} catch (e) {}