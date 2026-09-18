(() => {
  const page = document.body.classList.contains('home-page') ? 'home' : location.pathname.includes('products') ? 'product' : location.pathname.includes('oem-odm') ? 'oem' : 'contact';
  const assets = {home:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-HOME',product:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/banner-product',oem:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-OEM-ODM',contact:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-CONTACT'};
  const copy = {home:{eyebrow:'SUNY LOUDSPEAKER DRIVERS',heading:'LOUDSPEAKER DRIVERS, BUILT AROUND YOUR NEEDS.',summary:'Multi-model. Flexible. Custom-engineered.',detail:'From proven products to customized solutions, SUNY supports your project from development to production.',actions:'<a class="button" href="products.html">Explore Products</a><a class="text-link" href="contact.html">Start a Project <b>↗</b></a>'},product:{eyebrow:'PRODUCT RANGE',heading:'EXTENSIVE MODELS. MULTIPLE APPLICATIONS.',summary:'Explore our range of loudspeaker drivers for automotive, subwoofer, compact, professional and ceiling applications.',actions:'<a class="button" href="#car">Explore Products</a>'},oem:{eyebrow:'OEM / ODM',heading:'FROM YOUR REQUIREMENTS TO A PRODUCTION-READY DRIVER.',summary:'From engineering and material selection to rapid prototyping, testing and production, we develop loudspeaker drivers around your application.',actions:'<a class="button" href="#oem-development">Learn About OEM / ODM</a>'},contact:{eyebrow:'CONTACT SUNY',heading:'LET’S TALK ABOUT YOUR PROJECT.',summary:'聊聊您的项目。',actions:'<a class="button" href="#project-brief">Send Your Requirement</a>'}}[page];
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


  if (page === 'oem') {
    document.body.classList.add('suny-oem-page');
    document.querySelector('.trust-bar')?.replaceWith(Object.assign(document.createElement('section'), {className:'suny-oem-signal', innerHTML:'<span>CONCEPT</span><i></i><span>ENGINEERING</span><i></i><span>VALIDATION</span><i></i><span>PRODUCTION</span>'}));
    document.querySelector('main > .page-section')?.remove();
    const process = document.querySelector('.oem-process');
    if (process) {
      process.querySelector('.eyebrow').textContent = 'OUR OEM / ODM PROCESS';
      process.querySelector('h2').textContent = '从需求到量产，一站式推进';
      const steps = [['01','DEFINE','明确需求','了解您的应用、尺寸、性能目标、材料及其他产品要求。'],['02','ENGINEER','工程设计','根据产品需求进行声学、结构及材料设计。'],['03','PROTOTYPE','快速出样','整合供应链与生产资源，高效完成样品开发与制作。'],['04','VALIDATE','测试验证','通过专业测试与持续优化，验证产品性能与可靠性。'],['05','PRODUCE','量产交付','将验证后的设计转化为稳定、一致的量产产品。']];
      process.querySelector('.process-grid').innerHTML = steps.map(([n,en,zh,desc]) => '<article><span>'+n+'</span><h3>'+en+'</h3><h4>'+zh+'</h4><p>'+desc+'</p></article>').join('');
    }
    const customize = document.querySelector('.custom-capabilities');
    if (customize) {
      customize.querySelector('.eyebrow').textContent = 'WHAT WE CAN CUSTOMIZE';
      customize.querySelector('h2').textContent = '根据您的需求，灵活定制';
      customize.querySelector('.section-head > p').textContent = 'Engineering choices are made around your application, target performance and product constraints.';
      const list = customize.querySelector('.oem-detail-list');
      list.className = 'suny-oem-customize';
      list.innerHTML = '<article><span>01</span><h3>ACOUSTIC PERFORMANCE</h3><h4>声学性能</h4><p>根据应用需求调整频响、灵敏度、阻抗及其他声学参数。</p></article><article><span>02</span><h3>MECHANICAL DESIGN</h3><h4>结构设计</h4><p>根据安装空间、尺寸及产品结构进行设计。</p></article><article><span>03</span><h3>MATERIALS</h3><h4>材料选择</h4><p>根据性能、成本及应用环境选择合适的材料与组件。</p></article><article><span>04</span><h3>APPEARANCE</h3><h4>外观与结构</h4><p>根据最终产品的设计要求进行相应定制。</p></article>';
    }
    const band = document.querySelector('.oem-band');
    if (band) { band.querySelector('.eyebrow').textContent='FROM PROTOTYPE TO PRODUCTION'; band.querySelector('h2').textContent='快速出样，稳定量产'; band.querySelector('p').textContent='SUNY 不仅提供样品开发，更关注产品从样品到量产的连续性。通过工程、供应链与生产团队协同，将经过验证的设计转化为稳定、可持续的量产方案。'; }
    document.querySelector('main > .page-section:not(.custom-capabilities)')?.remove();
    const cta = document.querySelector('.final-cta');
    if (cta) { cta.querySelector('.eyebrow').textContent='START A PROJECT'; cta.querySelector('h2').textContent='Have a loudspeaker driver requirement?'; cta.querySelector('p').textContent='Tell us about your application, drawing, reference driver or performance target.'; cta.querySelector('.button').textContent='Start a Project'; }
  }


  if (page === 'contact') {
    document.body.classList.add('suny-contact-page');
    const grid = document.querySelector('.contact-grid');
    if (grid) {
      const about = document.createElement('section');
      about.className = 'suny-contact-about';
      about.innerHTML = '<div><p class="eyebrow">ABOUT SUNY</p><h2>Professional loudspeaker<br>manufacturing, built to adapt.</h2></div><div><p><strong>Xiamen Suny Electronic Co., Ltd.</strong> is a professional loudspeaker and audio component manufacturer with decades of experience in loudspeaker manufacturing.</p><p>From standard loudspeaker drivers to customized OEM / ODM solutions, SUNY combines engineering expertise, flexible supply chain integration and manufacturing capabilities to support customers from product development and prototyping through to production.</p></div>';
      grid.before(about);
      const intro = grid.firstElementChild;
      intro.innerHTML = '<p class="eyebrow">CONTACT US</p><h2>WE’RE HERE TO HELP.</h2><h3>欢迎与我们联系。</h3><p class="contact-note">Whether you are looking for a standard loudspeaker driver, developing a new product, or exploring an OEM / ODM project, we’d be happy to discuss your requirements.</p><p class="contact-note">Tell us about your application, dimensions, performance requirements or reference model, and our team will get back to you.</p>';
      grid.querySelector('button[type="submit"]')?.replaceChildren('SEND YOUR REQUIREMENT');
      const details = document.createElement('section');
      details.className = 'suny-contact-details';
      details.innerHTML = '<p class="eyebrow">CONTACT DETAILS</p><div><article><span>ADDRESS</span><strong>Xiamen, Fujian, China</strong></article><article><span>PHONE</span><a href="tel:+8613806013315">+86 138 0601 3315</a></article><article><span>EMAIL</span><a href="mailto:GM@XMSUNY.COM">GM@XMSUNY.COM</a></article></div>';
      grid.after(details);
      const cta = document.createElement('section');
      cta.className = 'suny-contact-cta';
      cta.innerHTML = '<div><p class="eyebrow">HAVE A PROJECT IN MIND?</p><h2>已经有项目需求？</h2><p>Share your application, drawing, reference driver or performance target with us.</p></div><a class="button light" href="#project-brief">SEND YOUR REQUIREMENT</a>';
      details.after(cta);
    }
  }

})();
