const isCatalogZh = new URLSearchParams(location.search).get('lang') === 'zh';

const catalogShellCss=`
body{background:#f5f6f7}
header.site-header{height:82px;padding:0 5vw;display:flex;align-items:center;gap:26px;position:sticky;top:0;z-index:30;background:#fff;border-bottom:1px solid #dce3e8}
header.site-header .brand{display:flex;align-items:center}
header.site-header .brand img{width:112px;height:42px;object-fit:contain;display:block}
header.site-header nav{display:flex;gap:30px;margin-left:auto;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;font-size:14px}
header.site-header nav a{padding:30px 0 27px;border-bottom:2px solid transparent;color:#0b1723}
header.site-header nav a.active,header.site-header nav a:hover{color:#073d69;border-color:#073d69}
header.site-header .button{display:inline-flex;align-items:center;justify-content:center;padding:12px 18px;background:#073d69;color:#fff;font:650 14px Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;border-radius:0}
header.site-header .menu{display:none}
footer .brand img{width:112px;height:42px;object-fit:contain}
.catalog-quick-nav{padding:34px 7% 14px;background:#f5f6f7}
.catalog-quick-nav .category-nav{display:flex;gap:10px;flex-wrap:wrap}
.catalog-quick-nav .category-nav a{padding:11px 16px;background:#fff;border:1px solid #d8e0e6;color:#17334b;font-size:13px;font-weight:600}
.series{padding-top:74px}
.series .section-title>span{font-size:13px;color:#74808a}
.catalog-media{position:relative;background:#fff;overflow:hidden}
.catalog-media>img{display:block;width:100%;aspect-ratio:4/3;object-fit:contain;background:#fff}
.catalog-specs{position:absolute;left:12px;right:12px;bottom:12px;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:5px}
.catalog-spec{min-width:0;padding:7px 6px;background:rgba(255,255,255,.94);backdrop-filter:blur(7px);border:1px solid rgba(14,53,85,.12);box-shadow:0 3px 14px rgba(20,40,60,.07)}
.catalog-spec b{display:block;color:#0b5f9c;font-size:10px;line-height:1;letter-spacing:.04em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.catalog-spec small{display:block;margin-top:4px;color:#1a2732;font-size:10px;line-height:1.15;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.product .catalog-link{display:inline-flex;margin-top:15px;font-size:13px;font-weight:650;color:#0b5f9c}
.product details{margin-top:13px}
.product details summary{font-size:13px}
@media(max-width:780px){header.site-header{height:70px;padding:0 20px}header.site-header nav{display:none}header.site-header .button{display:none}header.site-header .menu{display:block;margin-left:auto;width:36px;border:0;background:none}header.site-header .menu span{display:block;height:1px;background:#0b1723;margin:7px}header.site-header nav.open{display:flex;position:absolute;top:70px;left:0;right:0;flex-direction:column;padding:20px;background:#fff;border-bottom:1px solid #dce3e8;gap:0}header.site-header nav.open a{padding:9px 0;border:0}.catalog-quick-nav{padding:24px 20px 8px}.series{padding-top:54px}.catalog-specs{grid-template-columns:1fr 1fr}.catalog-spec{padding:6px}.catalog-spec b,.catalog-spec small{font-size:9px}}
`;
document.head.insertAdjacentHTML('beforeend','<style>'+catalogShellCss+'</style>');

const catalogHeader=document.querySelector('header');
if(catalogHeader){
  catalogHeader.className='site-header';
  catalogHeader.innerHTML='<a class="brand" href="index.html" aria-label="SUNY home"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a><button class="menu" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button><nav aria-label="Primary navigation"><a href="index.html">HOME</a><a class="active" href="products.html">PRODUCT</a><a href="oem-odm.html">OEM-ODM</a><a href="about.html">ABOUT</a><a href="contact.html">CONTACT</a></nav><a class="button" href="contact.html">Start a Project</a>';
  const menu=catalogHeader.querySelector('.menu'),nav=catalogHeader.querySelector('nav');
  menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});
}
const catalogFooter=document.querySelector('footer');
if(catalogFooter){catalogFooter.innerHTML='<a href="index.html" class="brand"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a><p>Professional loudspeaker driver engineering and manufacturing since 1994.</p><div><a href="products.html">PRODUCT</a><a href="oem-odm.html">OEM-ODM</a><a href="about.html">ABOUT</a><a href="contact.html">CONTACT</a></div><small>© 2026 Xiamen Suny Electronic Co., Ltd.</small>';}

// PRODUCT is a product catalogue only: remove corporate/about and delivery sections.
document.querySelector('#about')?.remove();
document.querySelector('#quality')?.remove();

const familyCopy={
  car:{en:['CAR AUDIO','Automotive Speakers','models'],zh:['汽车音响','汽车扬声器','款产品']},
  bass:{en:['SUBWOOFERS','Subwoofers','models'],zh:['低音系列','低音扬声器','款产品']},
  compact:{en:['COMPACT DRIVERS','Compact Speakers','models'],zh:['紧凑型系列','小型扬声器','款产品']},
  pa:{en:['PRO AUDIO','Professional Audio','models'],zh:['专业音响','专业扩声单元','款产品']},
  ceiling:{en:['CEILING SPEAKERS','Ceiling Speakers','models'],zh:['吸顶系列','吸顶扬声器','款产品']}
};

document.querySelectorAll('.series').forEach(section=>{
  const meta=familyCopy[section.id]; if(!meta)return;
  const copy=isCatalogZh?meta.zh:meta.en;
  const eyebrow=section.querySelector('.section-title .eyebrow');
  const title=section.querySelector('.section-title h2');
  const count=section.querySelector('.section-title>span');
  if(eyebrow)eyebrow.textContent=copy[0];
  if(title)title.textContent=copy[1];
  if(count){
    const n=(count.textContent.match(/\d+/)||[''])[0];
    count.textContent=isCatalogZh?(n+' '+copy[2]):(n+' '+copy[2]);
  }
  section.querySelectorAll(':scope > details.more > summary').forEach(s=>s.innerHTML=(isCatalogZh?'展开完整系列':'View Full Series')+' <span>＋</span>');
});

const quickLabels=isCatalogZh
  ?['汽车扬声器','低音扬声器','小型扬声器','专业扩声','吸顶扬声器']
  :['Automotive Speakers','Subwoofers','Compact Speakers','Professional Audio','Ceiling Speakers'];
document.querySelectorAll('.catalog-quick-nav .category-nav a').forEach((a,i)=>{if(quickLabels[i])a.textContent=quickLabels[i]});

function findSpec(card,names){
  const rows=[...card.querySelectorAll('dl>div')];
  for(const row of rows){
    const dt=row.querySelector('dt')?.textContent.trim()||'';
    const dd=row.querySelector('dd')?.textContent.trim()||'';
    const key=dt.toLowerCase();
    if(names.some(n=>key.includes(n))){
      if(dd)return dd.replace(/^[:\s]+/,'');
      for(const name of names){
        const m=dt.match(new RegExp(name+'\\s*[:;]?\\s*(.+)$','i'));
        if(m&&m[1])return m[1].trim();
      }
    }
  }
  return '—';
}

document.querySelectorAll('article.product').forEach((card,index)=>{
  const model=card.querySelector('h3')?.textContent.trim();if(!model)return;
  const img=card.querySelector(':scope > img');
  if(img&&!card.querySelector('.catalog-media')){
    const media=document.createElement('div');media.className='catalog-media';img.before(media);media.append(img);
    const specs=[
      ['SIZE',findSpec(card,['dimension','size'])],
      ['POWER',findSpec(card,['nom power','rated power'])],
      ['Ω',findSpec(card,['impedance'])],
      ['FREQ',findSpec(card,['freq range','frequency'])]
    ];
    const overlay=document.createElement('div');overlay.className='catalog-specs';
    overlay.innerHTML=specs.map(([k,v])=>'<span class="catalog-spec"><b>'+k+'</b><small>'+v+'</small></span>').join('');
    media.append(overlay);
  }
  const summary=card.querySelector('details>summary');
  if(summary)summary.innerHTML=(isCatalogZh?'技术参数':'Specifications')+' <span>＋</span>';
  const small=card.querySelector('details small');
  if(small){
    const p=(small.textContent.match(/\d+/)||[''])[0];
    small.textContent=isCatalogZh?('产品彩页 · 第 '+p+' 页'):('Catalogue · Page '+p);
  }
  const link=document.createElement('a');link.className='catalog-link';
  link.href=`product.html?model=${encodeURIComponent(model)}&item=${index}`+(isCatalogZh?'&lang=zh':'');
  link.textContent=isCatalogZh?'查看产品 →':'View Product →';
  card.querySelector('.product-body')?.append(link);
});

document.documentElement.classList.add('catalog-ready');
