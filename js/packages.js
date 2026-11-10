const PACKAGES=[
{name:'Health Check Package',type:'ESSENTIAL CHECK',mrp:null,price:699,saving:null,tests:['CBP','Creatinine','Total Cholesterol','FBS','PPBS','Complete Urine Analysis','Bilirubin Total & Direct']},
{name:'Master Health Checkup – Male/Female',type:'PREVENTIVE HEALTH',mrp:10500,price:5499,saving:50,tests:['CBC','LFT','RFT','Lipid Profile','HbA1c','Thyroid Profile','CUE','FBS','Iron Studies','PPBS','Vitamin D','Vitamin B12','2D Echo','Chest X-Ray','USG Abdomen & Pelvis','ECG','Serum Calcium']},
{name:'Cardiac Advanced Profile',type:'HEART HEALTH',mrp:13000,price:6499,saving:50,tests:['Homocysteine','Lipoprotein(a)','APO-B','APO-A1','hsCRP','Lipase (Serum)','Lipid Profile','Amylase (Serum)','CBC','LFT','RFT','HbA1c','Chest X-Ray','FBS','PPBS','Thyroid Profile','Vitamin D','Vitamin B12','CUE','ECG','2D Echo','TMT','USG']},
{name:'Cancer Profile – Male',type:'MEN’S HEALTH',mrp:15000,price:6499,saving:57,tests:['AFP','CA 19.9','CEA','PSA Total','Stool Occult Blood','Peripheral Smear Examination','CBC','LFT','RFT','Lipid Profile','HbA1c','FBS','PPBS','Thyroid Profile','Vitamin D','Vitamin B12','CUE','ECG','USG','Chest X-Ray']},
{name:'Cancer Profile – Female',type:'WOMEN’S HEALTH',mrp:18000,price:8999,saving:50,tests:['AFP','CA 19.9','CEA','CA 125','Pap Smear Test','Stool Occult Blood','USG Both Breast','Peripheral Smear Examination','CBC','LFT','RFT','Thyroid Profile','Lipid Profile','HbA1c','Fasting Blood Glucose','Post Prandial Blood Glucose','Vitamin D','Vitamin B12','Complete Urine Analysis','ECG','USG','Chest X-Ray']},
{name:'Fever Profile',type:'COMMON CONCERNS',mrp:3500,price:1699,saving:51,tests:['CBC – Complete Blood Count','CRP – C-Reactive Protein','MP – Malarial Parasite','Widal Test','CUE – Complete Urine Examination','Creatinine – Serum Creatinine','Bilirubin Total & Direct','Liver Function / Jaundice Marker']},
{name:'Infertility Panel (Male & Female)',type:'FERTILITY HEALTH',mrp:13000,price:6499,saving:50,tests:['CBP','Blood Group & Rh Type','TFT','HbA1c','AMH (Female)','Ultrasound (Pelvis) – Female Fertility Evaluation','Semen Analysis – Complete Semen Analysis for Male Fertility']},
{name:'PCOS Profile – Major',type:'WOMEN’S HEALTH',mrp:10000,price:4999,saving:50,tests:['FBS & PPBS','HOMA','FSH','Free Testosterone','Complete Urine Analysis','LH','Prolactin','17 OHP & CBC & LFT','Vitamin B12','USG Abdomen & Pelvis Ultrasound Scan','RFT','Lipid Profile','HbA1c','Thyroid Profile','Vitamin D']},
{name:'Minor Surgical Profile',type:'PRE-PROCEDURE',mrp:3000,price:1500,saving:50,tests:['CBP Complete Blood Picture','CT – Clotting Time','BT – Bleeding Time','HIV I & II Test','HCV','HBsAg – Hepatitis B Surface Antigen','VDRL – Venereal Disease','Creatinine (Kidney Function)','Blood Group – Blood Grouping & Rh Typing']},
{name:'Major Surgical Profile',type:'PRE-PROCEDURE',mrp:11000,price:5499,saving:50,tests:['CBP','ESR','Blood Group and RH Typing','BT and CT','RBS','Liver Function Test','Urea and Creatinine','Electrolytes','HIV-I and II Rapid','HBSAG','VDRL','PT with INR','APTT','CUE','X Ray Chest PA View','ECG','2D Echo','HCV SPOT']},
{name:'PCOS Profile – Minor',type:'WOMEN’S HEALTH',mrp:4500,price:1999,saving:55,tests:['FBS','PPBS','FSH','LH','Prolactin','Iron Profile','CBC','TFT','DHEAS']},
{name:'Antenatal Profile',type:'MATERNITY',mrp:5000,price:2999,saving:40,tests:['CBP','TSH, T3 & T4','Blood Group','HIV – HIV I & II Test','HBsAg','HCV','VDRL','Beta HCG','UPT','CUE','USG Scan']}
];
const PACKAGE_ART={
'Health Check Package':{src:'https://static.tnn.in/thumb/msid-111395840,thumbsize-24374,width-1280,height-720,resizemode-75/111395840.jpg?quality=100',fallback:'images/services/lab.jpg',credit:'https://static.tnn.in/thumb/msid-111395840,thumbsize-24374,width-1280,height-720,resizemode-75/111395840.jpg?quality=100'},
'Master Health Checkup – Male/Female':{src:'https://images.pexels.com/photos/5214997/pexels-photo-5214997.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/xray.jpg',credit:'https://www.pexels.com/photo/a-patient-having-a-consultation-with-her-doctor-5214997/'},
'Cardiac Advanced Profile':{src:'https://images.pexels.com/photos/7108340/pexels-photo-7108340.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/echo.jpg',credit:'https://www.pexels.com/photo/a-patient-getting-an-ecg-at-a-clinic-7108340/'},
'Cancer Profile – Male':{src:'https://images.pexels.com/photos/9629674/pexels-photo-9629674.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/genetic.jpg',credit:'https://www.pexels.com/photo/a-man-holding-a-test-tube-9629674/'},
'Cancer Profile – Female':{src:'https://images.pexels.com/photos/9628833/pexels-photo-9628833.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/pap.jpg',credit:'https://www.pexels.com/photo/a-woman-holding-a-blood-sample-9628833/'},
'Fever Profile':{src:'https://images.pexels.com/photos/5214991/pexels-photo-5214991.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/swab.jpg',credit:'https://www.pexels.com/photo/doctor-checking-the-temperature-of-a-patient-5214991/'},
'Infertility Panel (Male & Female)':{src:'https://images.pexels.com/photos/7108418/pexels-photo-7108418.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/ultrasound.jpg',credit:'https://www.pexels.com/photo/doctor-doing-an-ultrasound-7108418/'},
'PCOS Profile – Major':{src:'https://images.pexels.com/photos/5327584/pexels-photo-5327584.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/ultrasound.jpg',credit:'https://www.pexels.com/photo/photo-of-doctor-checking-on-her-patient-5327584/'},
'Minor Surgical Profile':{src:'https://images.pexels.com/photos/6622571/pexels-photo-6622571.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/lab.jpg',credit:'https://www.pexels.com/photo/blood-samples-in-test-tubes-in-a-row-6622571/'},
'Major Surgical Profile':{src:'https://images.pexels.com/photos/7108261/pexels-photo-7108261.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/biopsy.jpg',credit:'https://www.pexels.com/photo/doctors-preparing-gel-for-patient-operation-7108261/'},
'PCOS Profile – Minor':{src:'https://images.pexels.com/photos/8851551/pexels-photo-8851551.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/lab.jpg',credit:'https://www.pexels.com/photo/scientist-wearing-lab-coat-using-a-microscope-8851551/'},
'Antenatal Profile':{src:'https://images.pexels.com/photos/7088826/pexels-photo-7088826.jpeg?auto=compress&cs=tinysrgb&w=1200',fallback:'images/services/ultrasound.jpg',credit:'https://www.pexels.com/photo/people-woman-sitting-technology-7088826/'}
};
function packageImage(p,className){const art=PACKAGE_ART[p.name]||{src:'images/services/lab.jpg',fallback:'images/services/lab.jpg',credit:''};return `<img class="${className}" src="${art.src}" alt="${p.name} package image" data-photo-source="${art.credit}" title="${p.name} package image" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='${art.fallback}'">`}
function packageCard(p,i){return `<article class="package-card package-scroll-card"><div class="package-top" data-package-details="${i}" role="button" tabindex="0" aria-haspopup="dialog" aria-label="View full details for ${p.name}"><div class="package-cover">${packageImage(p,'package-cover-image')}</div><span class="package-type">${p.type}</span>${p.saving?`<span class="save-badge">SAVE ${p.saving}%</span>`:''}<h3>${p.name}</h3><span class="package-collection">Home sample collection available</span><div class="package-prices">${p.mrp?`<span class="mrp">MRP ₹${p.mrp.toLocaleString('en-IN')}</span>`:''}<span class="offer">₹${p.price.toLocaleString('en-IN')}</span></div></div><div class="package-body"><div class="package-test-count">${p.tests.length} tests included</div><div class="test-preview">${p.tests.slice(0,4).join(' · ')}${p.tests.length>4?' · …':''}</div><button class="test-toggle" type="button" aria-expanded="false">View all ${p.tests.length} tests +</button><ul class="test-list" hidden>${p.tests.map(t=>`<li>${t}</li>`).join('')}</ul><div class="package-actions"><button class="btn btn-outline package-details-trigger" type="button" data-package-details="${i}">View full details <i class="fas fa-arrow-right" aria-hidden="true"></i></button><a class="btn btn-primary" href="index.html#appointment" data-package="${p.name}">Book package</a></div><a class="package-whatsapp" target="_blank" rel="noopener" href="https://wa.me/919701055516?text=${encodeURIComponent('Hello GENX, I would like to enquire about the '+p.name+' package.')}">WhatsApp enquiry ↗</a></div></article>`}function renderPackages(selector,items=PACKAGES){const el=document.querySelector(selector);if(el)el.innerHTML=items.map(packageCard).join('')}
function renderHeroOffers(){const el=document.querySelector('#hero-offers');if(!el)return;el.innerHTML=PACKAGES.slice(0,6).map(p=>`<article class="hero-offer">${packageImage(p,'hero-offer-image')}<span class="offer-label">${p.type}</span>${p.saving?`<span class="offer-save">SAVE ${p.saving}%</span>`:''}<h3>${p.name}</h3><span class="offer-price">₹${p.price.toLocaleString('en-IN')}</span>${p.mrp?`<span class="offer-mrp">₹${p.mrp.toLocaleString('en-IN')}</span>`:''}</article>`).join('')}
renderHeroOffers();
renderPackages('#featured-packages',PACKAGES);renderPackages('#all-packages');
function renderHomeTopTests(){const track=document.querySelector('#home-top-tests');if(!track)return;const tests=[...new Set(PACKAGES.flatMap(p=>p.tests))];const items=tests.map(t=>`<a href="packages.html?search=${encodeURIComponent(t)}">${t}</a>`).join('<span aria-hidden="true">/</span>');track.innerHTML=items+items}
renderHomeTopTests();
document.querySelectorAll('[data-package-scroll]').forEach(btn=>btn.addEventListener('click',()=>document.querySelector('#featured-packages')?.scrollBy({left:Number(btn.dataset.packageScroll)*Math.max(320,document.querySelector('#featured-packages').clientWidth*.82),behavior:'smooth'})));
const blogTrack=document.querySelector('#blog-track');
document.querySelectorAll('[data-blog-scroll]').forEach(button=>button.addEventListener('click',()=>{
    if(!blogTrack)return;
    const card=blogTrack.querySelector('.blog-card');
    if(!card)return;
    const gap=parseFloat(getComputedStyle(blogTrack).gap)||0;
    blogTrack.scrollBy({left:Number(button.dataset.blogScroll)*(card.getBoundingClientRect().width+gap),behavior:'smooth'});
}));
document.addEventListener('click',e=>{const btn=e.target.closest('.test-toggle');if(!btn)return;const list=btn.nextElementSibling;const show=list.hidden;list.hidden=!show;btn.setAttribute('aria-expanded',String(show));btn.textContent=show?'Hide tests −':`View all ${list.children.length} tests +`});
document.addEventListener('click',e=>{const a=e.target.closest('[data-package]');if(!a)return;const select=document.querySelector('select[name="package"]');if(select)select.value=a.dataset.package;else sessionStorage.setItem('genx-package',a.dataset.package)});
document.querySelectorAll('select[name="package"]').forEach(select=>{PACKAGES.forEach(p=>select.add(new Option(`${p.name} — ₹${p.price.toLocaleString('en-IN')}`,p.name)));const chosen=sessionStorage.getItem('genx-package');if(chosen){select.value=chosen;sessionStorage.removeItem('genx-package')}});

function packageDialog(){
  let dialog=document.querySelector('#package-details-dialog');
  if(dialog)return dialog;
  dialog=document.createElement('dialog');
  dialog.id='package-details-dialog';
  dialog.className='package-dialog';
  dialog.setAttribute('aria-labelledby','package-dialog-title');
  dialog.innerHTML='<div class="package-dialog-panel"><button class="package-dialog-close" type="button" aria-label="Close package details"><i class="fas fa-times" aria-hidden="true"></i></button><div class="package-dialog-content"></div></div>';
  document.body.append(dialog);
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
  dialog.querySelector('.package-dialog-close').addEventListener('click',()=>dialog.close());
  return dialog;
}
document.addEventListener('click',e=>{
  const trigger=e.target.closest('[data-package-details]');
  if(!trigger)return;
  const p=PACKAGES[Number(trigger.dataset.packageDetails)];
  if(!p)return;
  const art=PACKAGE_ART[p.name]||{src:'images/services/lab.jpg',fallback:'images/services/lab.jpg'};
  const dialog=packageDialog();
  const mrp=p.mrp?'<span class="mrp">MRP ₹'+p.mrp.toLocaleString('en-IN')+'</span>':'';
  const saving=p.saving?'<span class="package-dialog-saving">Save '+p.saving+'%</span>':'';
  const tests=p.tests.map(t=>'<li><i class="fas fa-check-circle" aria-hidden="true"></i>'+t+'</li>').join('');
  const message=encodeURIComponent('Hello GENX, I would like to enquire about the '+p.name+' package.');
  dialog.querySelector('.package-dialog-content').innerHTML=
    '<img class="package-dialog-image" src="'+art.src+'" alt="'+p.name+'" onerror="this.onerror=null;this.src=\''+art.fallback+'\'">'+
    '<div class="package-dialog-copy"><span class="package-type">'+p.type+'</span><h2 id="package-dialog-title">'+p.name+'</h2>'+
    '<p class="package-dialog-intro">A '+p.type.toLowerCase()+' package with '+p.tests.length+' included diagnostic tests. Home sample collection is available; contact GENX to confirm availability and appointment details.</p>'+
    '<div class="package-dialog-prices">'+mrp+'<strong>₹'+p.price.toLocaleString('en-IN')+'</strong>'+saving+'</div>'+
    '<div class="package-dialog-tests-head"><h3>Included tests</h3><span>'+p.tests.length+' tests</span></div><ul class="package-dialog-tests">'+tests+'</ul>'+
    '<div class="package-dialog-actions"><a class="btn btn-primary" href="index.html#appointment" data-package="'+p.name+'">Book this package <i class="fas fa-arrow-right" aria-hidden="true"></i></a>'+
    '<a class="btn btn-outline" target="_blank" rel="noopener" href="https://wa.me/919701055516?text='+message+'"><i class="fab fa-whatsapp" aria-hidden="true"></i> Ask on WhatsApp</a></div>'+
    '<p class="package-dialog-note">Please contact GENX to confirm current pricing, package availability, and any preparation instructions.</p></div>';
  dialog.showModal();
});
document.addEventListener('keydown',e=>{const card=e.target.closest('.package-top[role=button]');if(!card||(e.key!=='Enter'&&e.key!==' '))return;e.preventDefault();card.click()});
