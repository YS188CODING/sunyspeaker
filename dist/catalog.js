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
@media(max-width:780px){header.site-header{height:70px;padding:0 20px}header.site-header nav{display:none}header.site-header .button{display:none}header.site-header .menu{display:block;margin-left:auto;width:36px;border:0;background:none}header.site-header .menu span{display:block;height:1px;background:#0b1723;margin:7px}header.site-header nav.open{display:flex;position:absolute;top:70px;left:0;right:0;flex-direction:column;padding:20px;background:#fff;border-bottom:1px solid #dce3e8;gap:0}header.site-header nav.open a{padding:9px 0;border:0}}
`;
document.head.insertAdjacentHTML('beforeend','<style>'+catalogShellCss+'</style>');
const catalogHeader=document.querySelector('header');
if(catalogHeader){catalogHeader.className='site-header';catalogHeader.innerHTML='<a class="brand" href="index.html" aria-label="SUNY home"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a><button class="menu" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button><nav aria-label="Primary navigation"><a href="index.html">HOME</a><a class="active" href="products.html">PRODUCT</a><a href="oem-odm.html">OEM-ODM</a><a href="about.html">ABOUT</a><a href="contact.html">CONTACT</a></nav><a class="button" href="contact.html">Start a Project</a>';const menu=catalogHeader.querySelector('.menu'),nav=catalogHeader.querySelector('nav');menu?.addEventListener('click',()=>{nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'));});}
const catalogFooter=document.querySelector('footer');
if(catalogFooter){catalogFooter.innerHTML='<a href="index.html" class="brand"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a><p>Professional loudspeaker driver engineering and manufacturing since 1994.</p><div><a href="products.html">PRODUCT</a><a href="oem-odm.html">OEM-ODM</a><a href="about.html">ABOUT</a><a href="contact.html">CONTACT</a></div><small>© 2026 Xiamen Suny Electronic Co., Ltd.</small>';}
document.querySelectorAll('article.product').forEach((card,index)=>{const model=card.querySelector('h3')?.textContent.trim();if(!model)return;const link=document.createElement('a');link.className='catalog-link';link.href=`product.html?model=${encodeURIComponent(model)}&item=${index}`;link.textContent='View product →';card.querySelector('.product-body')?.append(link);});
