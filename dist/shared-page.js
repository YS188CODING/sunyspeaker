(() => {
  const page = document.body.classList.contains('home-page') ? 'home' : location.pathname.includes('products') ? 'product' : location.pathname.includes('oem-odm') ? 'oem' : 'contact';
  const assets = {home:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-HOME',product:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/banner-product',oem:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-OEM-ODM',contact:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-HOME'};
  const copy = {home:{eyebrow:'SUNY LOUDSPEAKER DRIVERS',heading:'LOUDSPEAKER DRIVERS, BUILT AROUND YOUR NEEDS.',summary:'Multi-model. Flexible. Custom-engineered.',detail:'From proven products to customized solutions, SUNY supports your project from development to production.',actions:'<a class="button" href="products.html">Explore Products</a><a class="text-link" href="contact.html">Start a Project <b>↗</b></a>'},product:{eyebrow:'PRODUCT RANGE',heading:'287 MODELS. MULTIPLE APPLICATIONS.',summary:'Explore our range of loudspeaker drivers for automotive, subwoofer, compact, professional and ceiling applications.',actions:'<a class="button" href="#car">Explore Products</a>'},oem:{eyebrow:'OEM / ODM',heading:'FROM YOUR REQUIREMENTS TO A PRODUCTION-READY DRIVER.',summary:'From engineering and material selection to rapid prototyping, testing and production, we develop loudspeaker drivers around your application.',actions:'<a class="button" href="#oem-development">Learn About OEM / ODM</a>'},contact:{eyebrow:'CONTACT SUNY',heading:'HAVE A LOUDSPEAKER DRIVER REQUIREMENT?',summary:'Tell us about your application, dimensions, performance target or reference driver. Let’s discuss the right solution for your project.',actions:'<a class="button" href="#project-brief">Send Your Requirement</a>'}}[page];
  document.querySelectorAll('a[href="about.html"]').forEach(a => a.remove());
  document.querySelectorAll('.suny-page-hero,.sun-home-hero').forEach(oldHero => {const hero=document.createElement('section');hero.className='suny-shared-hero';hero.innerHTML=`<img class="suny-shared-hero__image" src="${assets[page]}" alt="SUNY loudspeaker manufacturing"><div class="suny-shared-hero__copy"><p class="eyebrow">${copy.eyebrow}</p><h1>${copy.heading}</h1><p>${copy.summary}</p>${copy.detail?`<p class="suny-shared-hero__detail">${copy.detail}</p>`:''}<div class="suny-shared-hero__actions">${copy.actions}</div></div>`;oldHero.replaceWith(hero)});
  document.querySelectorAll('.site-trust-bar,.sun-fact-bar').forEach(bar => {bar.className='suny-shared-trust';bar.setAttribute('aria-label','SUNY credentials');bar.innerHTML='<div><strong>30+</strong><span>Years of Focus</span></div><div><strong>ISO</strong><span>9001:2015</span></div><div><strong>OEM / ODM</strong><span>Engineering Support</span></div><div><strong>GLOBAL</strong><span>Supply Ready</span></div>'});
  document.querySelectorAll('.oem-hero').forEach(el=>el.remove());document.querySelectorAll('main > .page-hero:not(.suny-shared-hero)').forEach(el=>el.remove());
  document.querySelector('.oem-detail-list')?.closest('section')?.setAttribute('id','oem-development');document.querySelector('.contact-grid')?.setAttribute('id','project-brief');

  const why = document.querySelector('.sun-why');
  if (why) {
    const title = why.querySelector('.sun-section-head h2');
    const lead = why.querySelector('.sun-section-head > p');
    if (title) title.innerHTML = 'More Than a Supplier.<br>Built Around Your Needs.';
    if (lead) lead.textContent = 'A collaborative partner that helps turn your requirements into reliable, production-ready loudspeaker drivers.';
    const grid = why.querySelector('.sun-value-grid');
    if (grid) {
      grid.className = 'suny-capability-chain';
      grid.innerHTML = '<article><span>01</span><h3>30+ YEARS OF FOCUS</h3><h4>专注深耕 30+ 年</h4><p>深耕扬声器单元领域 30+ 年，积累成熟的产品与制造经验。</p></article><article><span>02</span><h3>INTEGRATED &amp; AGILE SUPPLY CHAIN</h3><h4>完整供应链，灵活快速</h4><p>完整的供应链体系，可根据客户需求灵活整合材料、零部件与生产资源，从定制开发、快速出样到量产交付，高效推进项目。</p></article><article><span>03</span><h3>CUSTOMIZED ENGINEERING</h3><h4>专业设计，按需定制</h4><p>根据客户的应用、尺寸、材料、结构及性能要求进行定制设计，将需求快速转化为可验证的产品方案。</p></article><article><span>04</span><h3>QUALITY CONTROL</h3><h4>严格检测，品质稳定</h4><p>专业的工程能力与严格的测试体系，确保产品从样品到量产的性能稳定与品质一致。</p></article>';
    }
  }

})();
