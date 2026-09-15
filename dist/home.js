document.querySelectorAll('[data-asset]').forEach((img)=>{const src=window.SUNY_ASSETS?.[img.dataset.asset];if(src)img.src=src;});
const menu=document.querySelector('.menu'),nav=document.querySelector('.site-header nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));
