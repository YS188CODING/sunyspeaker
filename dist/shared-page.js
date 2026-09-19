(() => {
  const page = document.body.classList.contains('home-page') ? 'home' : location.pathname.includes('products') ? 'product' : location.pathname.includes('oem-odm') ? 'oem' : location.pathname.includes('about') ? 'about' : 'contact';
  const assets = {home:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-HOME',product:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/banner-product',oem:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-OEM-ODM',about:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/banner-about',contact:'https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/BANNER/BANNER-CONTACT'};
  const copy = {home:{eyebrow:'SUNY LOUDSPEAKER DRIVERS',heading:'LOUDSPEAKER DRIVERS, BUILT AROUND YOUR NEEDS.',summary:'Multi-model. Flexible. Custom-engineered.',detail:'From proven products to customized solutions, SUNY supports your project from development to production.',actions:'<a class="button" href="products.html">Explore Products</a><a class="text-link" href="contact.html">Start a Project <b>↗</b></a>'},product:{eyebrow:'PRODUCT RANGE',heading:'EXTENSIVE MODELS. MULTIPLE APPLICATIONS.',summary:'Explore our range of loudspeaker drivers for automotive, subwoofer, compact, professional and ceiling applications.',actions:'<a class="button" href="#car">Explore Products</a>'},oem:{eyebrow:'OEM / ODM',heading:'FROM YOUR REQUIREMENTS TO A PRODUCTION-READY DRIVER.',summary:'From engineering and material selection to rapid prototyping, testing and production, we develop loudspeaker drivers around your application.',actions:'<a class="button" href="#oem-development">Learn About OEM / ODM</a>'},about:{eyebrow:'ABOUT SUNY',heading:'ENGINEERING SOUND. BUILDING TRUST.',summary:'Since 1994, SUNY has focused on loudspeaker driver engineering and dependable manufacturing in Xiamen, China.',actions:''},contact:{eyebrow:'CONTACT SUNY',heading:'LET’S TALK ABOUT YOUR PROJECT.',summary:'',actions:'<a class="button" href="#project-brief">Send Your Requirement</a>'}}[page];
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
      grid.innerHTML = '<article><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/HOME/30" alt="30 years of loudspeaker focus" loading="lazy"><div><span>01</span><h3>30+ YEARS OF FOCUS</h3><p>More than 30 years of loudspeaker driver engineering and manufacturing experience.</p></div></article><article><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/HOME/supply%20chain" alt="Integrated supply chain" loading="lazy"><div><span>02</span><h3>INTEGRATED &amp; AGILE SUPPLY CHAIN</h3><p>Materials, components and production resources are coordinated for fast development, prototyping and production.</p></div></article><article><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/HOME/quality" alt="Custom engineering" loading="lazy"><div><span>03</span><h3>CUSTOM ENGINEERING</h3><p>Acoustic, mechanical and material engineering is tailored to your application, dimensions and performance targets.</p></div></article><article><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/HOME/QUALITY%20CONTROL" alt="Quality control" loading="lazy"><div><span>04</span><h3>QUALITY CONTROL</h3><p>Testing and process control help keep performance consistent from prototype through production.</p></div></article>';
    }
  }


  if (page === 'oem') {
    document.body.classList.add('suny-oem-page');
    document.querySelector('.trust-bar')?.replaceWith(Object.assign(document.createElement('section'), {className:'suny-oem-signal', innerHTML:'<span>CONCEPT</span><i></i><span>ENGINEERING</span><i></i><span>VALIDATION</span><i></i><span>PRODUCTION</span>'}));
    document.querySelector('main > .page-section')?.remove();
    const process = document.querySelector('.oem-process');
    if (process) {
      process.querySelector('.eyebrow').textContent = 'OUR OEM / ODM PROCESS';
      process.querySelector('h2').textContent = 'From Requirements to Production';
      const steps = [['01','DEFINE','Clarify application, dimensions, performance targets, materials and other product requirements.'],['02','ENGINEER','Develop acoustic, mechanical and material solutions around your requirements.'],['03','PROTOTYPE','Build samples efficiently by coordinating engineering, supply-chain and production resources.'],['04','VALIDATE','Verify acoustic performance, reliability and product fit through testing and refinement.'],['05','PRODUCE','Turn the validated design into stable, repeatable production.']];
      process.querySelector('.process-grid').innerHTML = steps.map(([n,en,desc]) => '<article><span>'+n+'</span><h3>'+en+'</h3><p>'+desc+'</p></article>').join('');
    }
    const customize = document.querySelector('.custom-capabilities');
    if (customize) {
      customize.querySelector('.eyebrow').textContent = 'WHAT WE CAN CUSTOMIZE';
      customize.querySelector('h2').textContent = 'Flexible Customization for Your Requirements';
      customize.querySelector('.section-head > p').textContent = 'Engineering choices are made around your application, target performance and product constraints.';
      const list = customize.querySelector('.oem-detail-list');
      list.className = 'suny-oem-customize';
      list.innerHTML = '<article><span>01</span><h3>ACOUSTIC PERFORMANCE</h3><p>Tune frequency response, sensitivity, impedance and other acoustic parameters for the application.</p></article><article><span>02</span><h3>MECHANICAL DESIGN</h3><p>Engineer dimensions, mounting and structure around the available installation space.</p></article><article><span>03</span><h3>MATERIALS</h3><p>Select components and materials to balance performance, cost and operating conditions.</p></article><article><span>04</span><h3>APPEARANCE &amp; STRUCTURE</h3><p>Adapt visible and structural details to the requirements of the finished product.</p></article>';
    }
    const band = document.querySelector('.oem-band');
    if (band) { band.querySelector('.eyebrow').textContent='FROM PROTOTYPE TO PRODUCTION'; band.querySelector('h2').textContent='Rapid Prototyping. Reliable Production.'; band.querySelector('p').textContent='SUNY supports the full path from sample development to repeatable production. Engineering, supply-chain and production teams work together to turn validated designs into stable manufacturing programs.'; }
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
      about.innerHTML = '<div><p class="eyebrow">ABOUT SUNY</p><h2>Professional loudspeaker<br>manufacturing, built to adapt.</h2><p><strong>Xiamen Suny Electronic Co., Ltd.</strong> has focused on loudspeaker drivers and audio components since 1994.</p><p>From standard models to customized OEM / ODM projects, SUNY combines engineering, flexible manufacturing and supply-chain coordination to support customers from development through production.</p></div><div class="suny-contact-factory"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/CONTACT/suny" alt="Xiamen Suny factory" loading="lazy"></div>';
      grid.before(about);
      const intro = grid.firstElementChild;
      intro.innerHTML = '<p class="eyebrow">CONTACT US</p><h2>WE’RE HERE TO HELP</h2><p class="contact-note">Whether you are sourcing a standard loudspeaker driver, developing a new product or planning an OEM / ODM project, we are ready to discuss your requirements.</p><p class="contact-note">Share your application, dimensions, performance targets or reference model, and our team will follow up with you.</p>';
      grid.querySelector('button[type="submit"]')?.replaceChildren('SEND YOUR REQUIREMENT');
      const details = document.createElement('section');
      details.className = 'suny-contact-details';
      details.innerHTML = '<p class="eyebrow">CONTACT DETAILS</p><div><article><span>ADDRESS</span><strong>Xiamen, Fujian, China</strong></article><article><span>PHONE</span><a href="tel:+8613806013315">+86 138 0601 3315</a></article><article><span>EMAIL</span><a href="mailto:GM@XMSUNY.COM">GM@XMSUNY.COM</a></article></div>';
      grid.after(details);
      const cta = document.createElement('section');
      cta.className = 'suny-contact-cta';
      cta.innerHTML = '<div><p class="eyebrow">HAVE A PROJECT IN MIND?</p><h2>Tell Us What You Need</h2><p>Share your application, drawing, reference driver or performance target with us.</p></div><a class="button light" href="#project-brief">SEND YOUR REQUIREMENT</a>';
      details.after(cta);
    }
  }

})();
