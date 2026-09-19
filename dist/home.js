document.querySelectorAll('[data-asset]').forEach((img)=>{const src=window.SUNY_ASSETS?.[img.dataset.asset];if(src)img.src=src;});
const menu=document.querySelector('.menu'),nav=document.querySelector('.site-header nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false');}));

const appScroller=document.querySelector('.application-scroller');
const appPrev=document.querySelector('.application-prev');
const appNext=document.querySelector('.application-next');
if(appScroller&&appPrev&&appNext){
  const step=()=>{const card=appScroller.querySelector('.application-card');return card?card.getBoundingClientRect().width+14:appScroller.clientWidth;};
  const update=()=>{const max=appScroller.scrollWidth-appScroller.clientWidth-2;appPrev.disabled=appScroller.scrollLeft<=2;appNext.disabled=appScroller.scrollLeft>=max;};
  appPrev.addEventListener('click',()=>appScroller.scrollBy({left:-step(),behavior:'smooth'}));
  appNext.addEventListener('click',()=>{const max=appScroller.scrollWidth-appScroller.clientWidth-2;if(appScroller.scrollLeft>=max){appScroller.scrollTo({left:0,behavior:'smooth'});}else{appScroller.scrollBy({left:step(),behavior:'smooth'});}});
  appScroller.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
  let timer=setInterval(()=>{if(appScroller.scrollWidth>appScroller.clientWidth+5)appNext.click();},5000);
  const wrap=appScroller.closest('.application-carousel');wrap?.addEventListener('mouseenter',()=>clearInterval(timer));
}
