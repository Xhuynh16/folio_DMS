/* Folio DMS clickable prototype. No backend, no remote requests, no actual auth/OCR. */
'use strict';
const ICONS={
 layers:'<path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
 folder:'<path d="M3 7V5a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z"/><path d="M3 8h18"/>',
 upload:'<path d="M12 16V3m-4 4 4-4 4 4M4 15v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5"/>',
 download:'<path d="M12 3v13m-4-4 4 4 4-4M4 16v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4"/>',
 file:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6M8 13h8m-8 4h6"/>',
 files:'<path d="M7 3h8l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm8 0v5h4"/><path d="M2 6v14M9 12h6m-6 4h6"/>',
 template:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12m4-8h4m-4 4h4"/>',
 briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18m-9-2v4"/>',
 checkCircle:'<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
 check:'<path d="m5 12 4 4L19 6"/>',
 send:'<path d="m22 2-7 20-4-9-9-4 20-7Z"/><path d="M22 2 11 13"/>',
 archive:'<rect x="3" y="3" width="18" height="5" rx="1"/><path d="M5 8v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8m-10 5h6"/>',
 link:'<path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-2 2M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l2-2"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
 chart:'<path d="M3 3v18h18M7 15v-4m5 4V7m5 8V4"/>',
 history:'<path d="M3 11a9 9 0 1 1 2 7M3 4v7h7m2-5v6l4 2"/>',
 plug:'<path d="M8 3v4m8-4v4M6 7h12v4a6 6 0 0 1-12 0V7Zm6 10v5"/>',
 settings:'<path d="m9 3-1 3-3 1-2 3 2 2-1 3 2 3h3l2 3h3l1-3 3-1 2-3-2-2 1-3-2-3h-3l-2-3H9Z"/><circle cx="11.5" cy="12" r="3"/>',
 chevron:'<path d="m9 5 7 7-7 7"/>',chevronDown:'<path d="m6 9 6 6 6-6"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
 lock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 8 0v4m-4 5v2"/>',unlock:'<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V6a4 4 0 0 1 7.5-2m-3.5 11v2"/>',
 menu:'<path d="M4 6h16M4 12h16M4 18h16"/>',cloud:'<path d="M7 18a5 5 0 1 1-.7-10A6 6 0 0 1 18 8a5 5 0 0 1-1 10M12 12v9m-3-6 3-3 3 3"/>',
 scan:'<path d="M4 8V4h4m8 0h4v4M4 16v4h4m8 0h4v-4M2 12h20M8 8h8m-8 8h8"/>',mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/>',
 api:'<path d="m7 6-5 6 5 6m10-12 5 6-5 6M14 3l-4 18"/>',x:'<path d="m6 6 12 12M6 18 18 6"/>',more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
 star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
 pencil:'<path d="m15 4 5 5M3 21l5-1L21 7a2.8 2.8 0 0 0-4-4L4 16l-1 5Z"/>',filter:'<path d="M3 4h18l-7 8v7l-4 2v-9L3 4Z"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',arrowLeft:'<path d="M20 12H4m6-6-6 6 6 6"/>',arrowUp:'<path d="M12 20V4m-6 6 6-6 6 6"/>',
 info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v1"/>',shield:'<path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6l8-4Z"/><path d="m8 12 3 3 5-6"/>',
 user:'<circle cx="12" cy="7" r="4"/><path d="M4 21v-3a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v3"/>',users:'<circle cx="9" cy="7" r="3"/><path d="M3 21v-3a6 6 0 0 1 12 0v3m1-17a3 3 0 0 1 0 6m2 4a5 5 0 0 1 3 5v2"/>',refresh:'<path d="M3 10a9 9 0 0 1 15-6l3 3m0-5v5h-5M21 14a9 9 0 0 1-15 6l-3-3m0 5v-5h5"/>',
 copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18m-14 4h3m4 0h3"/>',
 globe:'<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>',external:'<path d="M14 3h7v7m0-7-10 10m-1-9H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2v-5"/>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',tag:'<path d="M3 3h8l10 10-8 8L3 11V3Z"/><circle cx="7" cy="7" r="1"/>',
 workflow:'<rect x="8" y="2" width="8" height="5" rx="1"/><rect x="2" y="17" width="7" height="5" rx="1"/><rect x="15" y="17" width="7" height="5" rx="1"/><path d="M12 7v5M5 17v-5h14v5"/>',office:'<path d="m12 2 9 4v14l-9 2-9-4V5l9-3Zm0 0v20M3 5l9 3m0 0 9-2M7 8v8"/>',signature:'<path d="M3 20h18M5 15c2-12 8-15 7-9-1 6-9 13-9 10s13-5 14-2 4-1 4-1"/>',help:'<circle cx="12" cy="12" r="9"/><path d="M9 8a3 3 0 0 1 6 0c0 2-3 2-3 5m0 3v1"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12l4 4v12a2 2 0 0 1-2 2Z"/><path d="M7 3v6h9V3M7 21v-8h10v8"/>',key:'<circle cx="8" cy="9" r="5"/><path d="m12 13 9 9m-4-4 3-3m-6 0 3-3"/>',server:'<rect x="3" y="3" width="18" height="7" rx="2"/><rect x="3" y="14" width="18" height="7" rx="2"/><path d="M7 6h.1M7 17h.1"/>',alert:'<path d="m12 3 10 18H2L12 3Zm0 6v5m0 3v1"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.1M3 12h.1M3 18h.1"/>',print:'<path d="M6 9V3h12v6M6 18H3V9h18v9h-3M6 14h12v7H6v-7Zm11-2h.1"/>',sliders:'<path d="M4 4v5m0 5v6M12 4v10m0 5v1M20 4v1m0 5v10M1 9h6m2 5h6m2-9h6"/>',message:'<path d="M21 12a9 9 0 0 1-9 9c-2 0-4-1-5-1l-5 2 2-5c0-1-1-3-1-5a9 9 0 0 1 18 0Z"/><path d="M8 10h8m-8 4h5"/>',bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z"/>',logout:'<path d="M9 3H3v18h6m5-15 6 6-6 6M8 12h12"/>',move:'<path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3m12-6 3 3-3 3"/>'
};
const I=(name,cls='')=>`<svg class="icon ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name]||ICONS.file}</svg>`;
const E=(s)=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=(x)=>JSON.parse(JSON.stringify(x));
const STORE_KEY='folio_dms_prototype_v4';
let storageOK=true;
let DB;
try{let s=JSON.parse(localStorage.getItem(STORE_KEY)||'null');DB=s&&s.schema===SEED.schema?s:clone(SEED);}catch(e){DB=clone(SEED);storageOK=false;}
DB.docs.forEach(d=>{if(!d.history)d.history=[{v:d.version,date:'28/09/2026 · 09:30',author:d.owner,note:'Tạo phiên bản tài liệu.'}];});
const UI={role:'Quản trị viên',repoTab:'all',repoView:'list',repoDept:'',repoStatus:'',repoType:'',repoSearch:'',selected:[],search:'',searchDept:'',searchStatus:'',searchType:'',searchOCR:false,searchMode:'all',searchDate:'',searchAdvanced:false,templateType:'',approvalId:'d01',approvalTab:'pending',notificationTab:'all',auditAction:'',auditSearch:'',reportRange:'Tháng 10/2026',taxonomyTab:'types',tour:null,mobile:false,import:{step:1,source:'upload',files:[],meta:{name:'',dept:'Hành chính',type:'Quy trình',tags:'Nội bộ',folder:'Hành chính'},access:'department',ocr:true},lastDoc:null};
let MOD={};let lastFocus=null;let ROUTE='dashboard';
const TODAY='2026-10-01';
const $=(sel,root=document)=>root.querySelector(sel);
const $$=(sel,root=document)=>Array.from(root.querySelectorAll(sel));
const docById=id=>DB.docs.find(d=>d.id===id);
const dateFmt=s=>s?String(s).split('-').reverse().join('/'):'—';
const initials=s=>s.split(' ').slice(-2).map(x=>x[0]).join('');
const statusBadge=s=>`<span class="badge ${STATUS[s]?.[1]||''}"><span class="dot"></span>${E(STATUS[s]?.[0]||s)}</span>`;
const badge=(txt,c='')=>`<span class="badge ${c}">${E(txt)}</span>`;
const avatar=(txt,color='',size='')=>`<span class="avatar ${color}" ${size?`style="width:${size}px;height:${size}px"`:''}>${E(txt)}</span>`;
const fileIcon=(ext='pdf',big=false)=>`<span class="file-icon ${E(ext)} ${big?'big':''}"><span>${E(ext.toUpperCase().slice(0,4))}</span></span>`;
const B=(label,action,icon='',cls='',attrs='')=>`<button type="button" class="btn ${cls}" data-action="${E(action)}" ${attrs}>${icon?I(icon,'sm'):''}${label}</button>`;
const R=(label,route,icon='',cls='',attrs='')=>`<button type="button" class="btn ${cls}" data-route="${E(route)}" ${attrs}>${icon?I(icon,'sm'):''}${label}</button>`;
const IB=(icon,label,action,attrs='')=>`<button type="button" class="icon-button" aria-label="${E(label)}" title="${E(label)}" data-action="${E(action)}" ${attrs}>${I(icon)}</button>`;
const input=(name,value='',attrs='')=>`<input class="input" name="${E(name)}" id="${E(name)}" value="${E(value)}" ${attrs}>`;
const options=(arr,value='')=>arr.map(x=>{let v=Array.isArray(x)?x[0]:x,l=Array.isArray(x)?x[1]:x;return `<option value="${E(v)}" ${String(v)===String(value)?'selected':''}>${E(l)}</option>`;}).join('');
const select=(name,arr,value='',attrs='')=>`<select class="select" name="${E(name)}" id="${E(name)}" ${attrs}>${options(arr,value)}</select>`;
const F=(label,control,hint='')=>`<label class="form-field"><span>${label}</span>${control}${hint?`<small>${hint}</small>`:''}</label>`;
const notice=(txt,kind='',icon='info')=>`<div class="notice ${kind}">${I(icon)}<div>${txt}</div></div>`;
const toggle=(name,title,hint,checked=true,attrs='')=>`<label class="toggle-row"><span><span class="toggle-title">${title}</span>${hint?`<p>${hint}</p>`:''}</span><input type="checkbox" role="switch" aria-label="${E(title)}" class="switch" name="${E(name)}" ${checked?'checked':''} ${attrs}></label>`;
const empty=(title,desc,button='',icon='folder')=>`<div class="empty"><div class="empty-icon">${I(icon,'lg')}</div><h3>${title}</h3><p>${desc}</p>${button}</div>`;
const infoRow=(label,value)=>`<div class="info-row"><span class="label">${label}</span><span class="value">${value}</span></div>`;
const tags=(arr)=>arr.map(t=>`<span class="tag">${E(t)}</span>`).join(' ');
const pageHead=(title,desc,actions='',eyebrow='')=>`<div class="page-head"><div>${eyebrow?`<div class="eyebrow">${eyebrow}</div>`:''}<h1>${title}</h1><p>${desc}</p></div>${actions?`<div class="page-actions">${actions}</div>`:''}</div>`;
const tabbar=(items,current,base)=>`<div class="tabs">${items.map(([key,label,count])=>`<button class="tab ${current===key?'active':''}" data-route="${E(base+'/'+key)}">${label}${count!==undefined?`<span class="tab-count">${count}</span>`:''}</button>`).join('')}</div>`;
const save=()=>{try{localStorage.setItem(STORE_KEY,JSON.stringify(DB));}catch(e){storageOK=false;}};
function logEvent(action,d,detail='',before='—',after='—'){DB.audit.unshift({id:'a'+Date.now()+Math.random().toString(36).slice(2,6),time:new Date().toLocaleString('vi-VN',{timeZone:'Asia/Bangkok',hour12:false}),user:'Nguyễn Minh',action,doc:d?.name||'Hệ thống',code:d?.code||'SYSTEM',detail,before,after});save();}
function toast(text,error=false){const t=document.createElement('div');t.className='toast'+(error?' error':'');t.setAttribute('role','status');t.innerHTML=I(error?'alert':'checkCircle')+`<span>${E(text)}</span>`;$('#toasts').append(t);setTimeout(()=>t.remove(),4200);}
function go(route){closeModal();UI.mobile=false;if(location.hash==='#'+route){ROUTE=route;render();window.scrollTo(0,0);}else location.hash=route;}
function focusSnapshot(){const e=document.activeElement;return e?.id?{id:e.id,start:e.selectionStart,end:e.selectionEnd}:null;}
function restoreFocus(s){if(!s)return;const e=document.getElementById(s.id);if(e){e.focus({preventScroll:true});try{if(s.start!==null)e.setSelectionRange(s.start,s.end);}catch(_){}}}
