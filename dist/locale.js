(() => {
  const isZh = new URLSearchParams(location.search).get('lang') === 'zh';
  const page = location.pathname.includes('products') ? 'product' : location.pathname.includes('oem-odm') ? 'oem' : location.pathname.includes('contact') ? 'contact' : 'home';
  document.documentElement.lang = isZh ? 'zh-CN' : 'en';
  document.body.dataset.locale = isZh ? 'zh' : 'en';
  const nav = document.querySelector('.site-header nav');
  if (nav && !document.querySelector('.locale-switch')) {
    const q = isZh ? '' : '?lang=zh';
    const e = isZh ? '?lang=en' : '';
    nav.insertAdjacentHTML('afterend','<div class="locale-switch"><a class="'+(!isZh?'active':'')+'" href="'+location.pathname+e+'">EN</a><i></i><a class="'+(isZh?'active':'')+'" href="'+location.pathname+q+'">中文</a></div>');
  }
  const set=(selector,text)=>{const el=document.querySelector(selector);if(el)el.innerHTML=text};
  const setText=(selector,text)=>{const el=document.querySelector(selector);if(el)el.textContent=text};
  const cards=(selector, en, zh)=>document.querySelectorAll(selector).forEach((el,i)=>{if(el){const h=el.querySelector('h3'),p=el.querySelector('p');if(h)h.textContent=isZh?zh[i][0]:en[i][0];if(p)p.textContent=isZh?zh[i][1]:en[i][1];}});
  const hero={
    home:['SUNY LOUDSPEAKER DRIVERS','LOUDSPEAKER DRIVERS, BUILT AROUND YOUR NEEDS.','Multi-model. Flexible. Custom-engineered.<br>From proven products to customized solutions, SUNY supports your project from development to production.','SUNY 扬声器单元','扬声器单元，围绕您的需求打造。','多型号 · 灵活生产 · 按需定制<br>从成熟产品到定制方案，SUNY 为您的项目提供从开发到生产的支持。'],
    product:['PRODUCT RANGE','EXTENSIVE MODELS. MULTIPLE APPLICATIONS.','Explore our range of loudspeaker drivers for automotive, subwoofer, compact, professional and ceiling applications.','产品系列','丰富型号，覆盖多种应用。','涵盖汽车音响、低音扬声器、紧凑型、专业音响及吸顶扬声器等产品系列。'],
    oem:['OEM / ODM','FROM YOUR REQUIREMENTS TO A PRODUCTION-READY DRIVER.','From engineering and material selection to rapid prototyping, testing and production, SUNY develops loudspeaker drivers around your application.','OEM / ODM','从您的需求，到可量产的扬声器单元。','从工程设计、材料选择到快速出样、测试验证与量产，SUNY 围绕您的应用需求开发合适的扬声器单元。'],
    contact:['CONTACT SUNY','LET’S TALK ABOUT YOUR PROJECT.','聊聊您的项目。','联系 SUNY','聊聊您的项目。','告诉我们您的产品应用、尺寸、性能要求或参考型号。']
  }[page];
  setText('.suny-shared-hero .eyebrow',isZh?hero[3]:hero[0]);setText('.suny-shared-hero h1',isZh?hero[4]:hero[1]);set('.suny-shared-hero__copy>p:not(.eyebrow)',isZh?hero[5]:hero[2]);
  if(page==='home'){
    set('.sun-why .sun-section-head h2',isZh?'为什么选择 SUNY？':'More Than a Supplier.<br>Built Around Your Needs.');
    setText('.sun-why .sun-section-head>p',isZh?'不只是供应商，更是围绕客户需求协同的合作伙伴。':'A collaborative partner that helps turn your requirements into reliable, production-ready loudspeaker drivers.');
    cards('.suny-capability-chain article',[
      ['30+ YEARS OF FOCUS','Over 30 years of loudspeaker-driver product and manufacturing experience.'],
      ['INTEGRATED & AGILE SUPPLY CHAIN','An integrated supply chain that brings materials, components and production resources together efficiently.'],
      ['CUSTOMIZED ENGINEERING','Application-led acoustic, mechanical and material engineering that becomes a verified solution quickly.'],
      ['QUALITY CONTROL','Engineering discipline and testing systems keep performance reliable from prototype through production.']],
      [['专注深耕 30+ 年','深耕扬声器单元领域 30+ 年，积累成熟的产品与制造经验。'],['完整供应链，灵活快速','完整的供应链体系，可根据客户需求灵活整合材料、零部件与生产资源。'],['专业设计，按需定制','根据客户的应用、尺寸、材料、结构及性能要求进行定制设计。'],['严格检测，品质稳定','确保产品从样品到量产的性能稳定与品质一致。']]);
  }
  if(page==='oem'){
    setText('.oem-process .eyebrow',isZh?'OEM / ODM 开发流程':'OUR OEM / ODM PROCESS');setText('.oem-process h2',isZh?'从需求到量产，一站式推进':'From Requirements to Production.');
    cards('.process-grid article',[
      ['DEFINE','Clarify application, dimensions, performance targets, materials and other product needs.'],['ENGINEER','Develop acoustic, mechanical and material solutions around your requirements.'],['PROTOTYPE','Integrate supply-chain and production resources for efficient sample development.'],['VALIDATE','Verify performance and reliability through testing and ongoing optimization.'],['PRODUCE','Turn validated designs into stable, consistent production.']],
      [['明确需求','了解您的应用、尺寸、性能目标、材料及其他产品要求。'],['工程设计','根据产品需求进行声学、结构及材料设计。'],['快速出样','整合供应链与生产资源，高效完成样品开发与制作。'],['测试验证','通过专业测试与持续优化，验证产品性能与可靠性。'],['量产交付','将验证后的设计转化为稳定、一致的量产产品。']]);
    setText('.custom-capabilities .eyebrow',isZh?'定制能力':'WHAT WE CAN CUSTOMIZE');setText('.custom-capabilities h2',isZh?'根据您的需求，灵活定制':'Flexible Customization for Your Requirements.');
    cards('.suny-oem-customize article',[
      ['ACOUSTIC PERFORMANCE','Tune frequency response, sensitivity, impedance and other acoustic parameters.'],['MECHANICAL DESIGN','Engineer around installation space, dimensions and product structure.'],['MATERIALS','Select components for performance, cost and the operating environment.'],['APPEARANCE','Adapt appearance and structure to the finished product design.']],
      [['声学性能','根据应用需求调整频响、灵敏度、阻抗及其他声学参数。'],['结构设计','根据安装空间、尺寸及产品结构进行设计。'],['材料选择','根据性能、成本及应用环境选择合适的材料与组件。'],['外观与结构','根据最终产品的设计要求进行相应定制。']]);
  }
  if(page==='contact'){
    set('.suny-contact-about h2',isZh?'专业扬声器制造，<br>灵活响应客户需求。':'Professional loudspeaker<br>manufacturing, built to adapt.');
    const about=document.querySelectorAll('.suny-contact-about>div:last-child p'); if(about.length===2&&isZh){about[0].textContent='厦门三立电子有限公司是一家专业的扬声器及音响零部件制造企业，在扬声器领域拥有多年的研发与制造经验。';about[1].textContent='从成熟的扬声器单元产品，到 OEM / ODM 定制开发，SUNY 依托专业工程能力、完整的供应链整合体系与制造能力，为客户提供从产品开发、快速出样到量产的支持。';}
    setText('.contact-grid .eyebrow',isZh?'联系我们':'CONTACT US');setText('.contact-grid h2',isZh?'欢迎与我们联系。':'WE’RE HERE TO HELP.');const helper=document.querySelector('.contact-grid h3');if(helper)helper.style.display='none';
    if(isZh){const ps=document.querySelectorAll('.contact-grid .contact-note');if(ps.length>1){ps[0].textContent='无论您正在寻找成熟的扬声器单元、开发新产品，还是有 OEM / ODM 项目需求，都欢迎与我们联系。';ps[1].textContent='告诉我们您的产品应用、尺寸、性能要求或参考型号，我们将根据您的需求与您进一步沟通。';}}
  }
  if(page==='product'&&isZh){const old=document.querySelector('.language-select');if(old){old.value='zh';old.dispatchEvent(new Event('change'));}}
})();