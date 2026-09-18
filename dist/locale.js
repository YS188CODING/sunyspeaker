(() => {
  const isZh = new URLSearchParams(location.search).get('lang') === 'zh';
  const page = location.pathname.includes('products') ? 'product' : location.pathname.includes('oem-odm') ? 'oem' : location.pathname.includes('about') ? 'about' : location.pathname.includes('contact') ? 'contact' : 'home';
  document.documentElement.lang = isZh ? 'zh-CN' : 'en';
  document.body.dataset.locale = isZh ? 'zh' : 'en';
  if (isZh) {
    document.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || /^(https?:|mailto:|tel:)/.test(href)) return;
      const [path, hash] = href.split('#');
      if (!path.endsWith('.html') || /[?&]lang=/.test(path)) return;
      link.setAttribute('href', path + (path.includes('?') ? '&' : '?') + 'lang=zh' + (hash ? '#' + hash : ''));
    });
  }
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
    home:['SUNY LOUDSPEAKER DRIVERS','LOUDSPEAKER DRIVERS,<br>BUILT AROUND YOUR NEEDS','Multi-model. Flexible. Custom-engineered.<br>From proven products to customized solutions, SUNY supports your project from development to production.','SUNY 扬声器单元','扬声器单元，<br>围绕您的需求打造','多型号 · 灵活生产 · 按需定制<br>从成熟产品到定制方案，SUNY 为您的项目提供从开发到生产的支持。'],
    product:['PRODUCT RANGE','EXTENSIVE MODELS.<br>MULTIPLE APPLICATIONS','Explore our range of loudspeaker drivers for automotive, subwoofer, compact, professional and ceiling applications.','产品系列','丰富型号，<br>覆盖多种应用','涵盖汽车音响、低音扬声器、紧凑型、专业音响及吸顶扬声器等产品系列。'],
    oem:['OEM / ODM','FROM YOUR REQUIREMENTS<br>TO A PRODUCTION-READY DRIVER','From engineering and material selection to rapid prototyping, testing and production, SUNY develops loudspeaker drivers around your application.','OEM / ODM','从您的需求，<br>到可量产的扬声器单元','从工程设计、材料选择到快速出样、测试验证与量产，SUNY 围绕您的应用需求开发合适的扬声器单元。'],
    about:['ABOUT SUNY','ENGINEERING SOUND.<br>BUILDING TRUST.','Since 1994, SUNY has focused on loudspeaker driver engineering and dependable manufacturing in Xiamen, China.','关于三立电子','专注声学工程，<br>建立长期信任','自 1994 年起，三立电子专注扬声器单元工程与稳定制造，总部位于中国厦门。'],contact:['CONTACT SUNY','LET’S TALK ABOUT<br>YOUR PROJECT','','联系三立电子','让我们聊聊<br>您的项目','']
  }[page];
  setText('.suny-shared-hero .eyebrow',isZh?hero[3]:hero[0]);set('.suny-shared-hero h1',isZh?hero[4]:hero[1]);set('.suny-shared-hero__copy>p:not(.eyebrow)',isZh?hero[5]:hero[2]);
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
    setText('.oem-band h2',isZh?'快速出样，稳定量产':'Rapid Prototyping. Reliable Production.');setText('.oem-band>p',isZh?'SUNY 不仅提供样品开发，更关注产品从样品到量产的连续性。通过工程、供应链与生产团队协同，将经过验证的设计转化为稳定、可持续的量产方案。':'SUNY supports more than prototype development. Engineering, supply-chain and production teams work together to turn validated designs into stable, sustainable production.');
    setText('.custom-capabilities .eyebrow',isZh?'定制能力':'WHAT WE CAN CUSTOMIZE');setText('.custom-capabilities h2',isZh?'根据您的需求，灵活定制':'Flexible Customization for Your Requirements.');
    cards('.suny-oem-customize article',[
      ['ACOUSTIC PERFORMANCE','Tune frequency response, sensitivity, impedance and other acoustic parameters.'],['MECHANICAL DESIGN','Engineer around installation space, dimensions and product structure.'],['MATERIALS','Select components for performance, cost and the operating environment.'],['APPEARANCE','Adapt appearance and structure to the finished product design.']],
      [['声学性能','根据应用需求调整频响、灵敏度、阻抗及其他声学参数。'],['结构设计','根据安装空间、尺寸及产品结构进行设计。'],['材料选择','根据性能、成本及应用环境选择合适的材料与组件。'],['外观与结构','根据最终产品的设计要求进行相应定制。']]);
  }
  if(page==='contact'){
    set('.suny-contact-about h2',isZh?'专业扬声器制造，<br>灵活响应客户需求。':'Professional loudspeaker<br>manufacturing, built to adapt.');
    const about=document.querySelectorAll('.suny-contact-about>div:last-child p'); if(about.length===2&&isZh){about[0].textContent='厦门三立电子有限公司是一家专业的扬声器及音响零部件制造企业，在扬声器领域拥有多年的研发与制造经验。';about[1].textContent='从成熟的扬声器单元产品，到 OEM / ODM 定制开发，SUNY 依托专业工程能力、完整的供应链整合体系与制造能力，为客户提供从产品开发、快速出样到量产的支持。';}
    setText('.contact-grid .eyebrow',isZh?'联系我们':'CONTACT US');setText('.contact-grid h2',isZh?'欢迎与我们联系。':'WE’RE HERE TO HELP.');const helper=document.querySelector('.contact-grid h3');if(helper)helper.style.display='none';
    setText('.suny-contact-cta h2',isZh?'已经有项目需求？':'Have a Project in Mind?');setText('.suny-contact-cta p:last-child',isZh?'告诉我们您的应用、图纸、参考型号或性能目标。':'Share your application, drawing, reference driver or performance target with us.');
    if(isZh){document.querySelectorAll('.contact-form label').forEach((el,i)=>{const labels=['姓名','公司','商务邮箱','国家 / 地区','应用','预计数量','参考型号','需求说明'];el.textContent=labels[i]||el.textContent});const btn=document.querySelector('.contact-form button');if(btn)btn.textContent='提交您的需求';}
    if(isZh){const ps=document.querySelectorAll('.contact-grid .contact-note');if(ps.length>1){ps[0].textContent='无论您正在寻找成熟的扬声器单元、开发新产品，还是有 OEM / ODM 项目需求，都欢迎与我们联系。';ps[1].textContent='告诉我们您的产品应用、尺寸、性能要求或参考型号，我们将根据您的需求与您进一步沟通。';}}
  }

  if(page==='home'&&isZh){
    setText('.sun-why .eyebrow','为什么选择三立电子');
    document.querySelectorAll('.suny-capability-chain article').forEach((el,i)=>{
      const data=[
        ['专注深耕 30+ 年','三十余年专注扬声器单元工程与制造，积累成熟的产品与量产经验。'],
        ['完整供应链，灵活快速','整合材料、零部件与生产资源，支持快速开发、出样与量产。'],
        ['专业设计，按需定制','围绕应用、尺寸、结构、材料与性能目标进行声学和结构设计。'],
        ['严格检测，品质稳定','通过测试与过程控制，确保从样品到量产的性能一致性。']
      ][i];
      if(!data)return; const h=el.querySelector('h3'),p=el.querySelector('p'); if(h)h.textContent=data[0]; if(p)p.textContent=data[1];
    });
    setText('.sun-products .eyebrow','产品系列');
    set('.sun-products h2','覆盖多种应用的<br>扬声器单元');
    setText('.sun-products .sun-section-head>p','从完整产品目录出发，可选择成熟型号作为参考平台，也可与我们的工程团队共同开发定制扬声器单元。');
    const pnames=['汽车扬声器','低音扬声器','小型扬声器','专业音响','吸顶扬声器'];
    const psubs=['110 款 · 查看系列 ↗','96 款 · 查看系列 ↗','44 款 · 查看系列 ↗','34 款 · 查看系列 ↗','3 款 · 查看系列 ↗'];
    document.querySelectorAll('.sun-product-grid a').forEach((el,i)=>{const h=el.querySelector('h3'),p=el.querySelector('p');if(h)h.textContent=pnames[i]||h.textContent;if(p)p.textContent=psubs[i]||p.textContent;});
    setText('.sun-oem .eyebrow','OEM / ODM 定制能力');
    set('.sun-oem h2','为您的声音需求<br>而打造');
    setText('.sun-oem .sun-section-head>p','从早期需求到稳定量产，我们围绕声音、结构、材料和一致性等关键细节协同推进。');
    setText('.sun-home-band .eyebrow','从样品到量产');
    set('.sun-home-band h2','更好的声音，<br>源于精密制造');
    setText('.sun-home-band>p','您可以提供图纸、参考单元或目标性能，我们将与您共同确定工程开发与量产路径。');
  }

  if(page==='about'){
    if(isZh){
      setText('.trust-bar div:nth-child(1) span','工厂面积');
      setText('.trust-bar div:nth-child(2) span','年产能');
      setText('.trust-bar div:nth-child(3) span','扬声器制造');
      setText('.trust-bar div:nth-child(4) span','质量管理体系');
      const sections=[...document.querySelectorAll('main > .page-section')];
      if(sections[0]){setText(sections[0].querySelector('.eyebrow'),'我们是谁');set(sections[0].querySelector('h2'),'专注声学工程，<br>落实到制造');setText(sections[0].querySelector('.intro-copy'),'我们专注多品种、小批量及定制化扬声器单元项目，从高音、中音到低音单元，覆盖不同频段、尺寸与应用需求。');}
      if(sections[1]){setText(sections[1].querySelector('.eyebrow'),'我们的方向');set(sections[1].querySelector('h2'),'灵活制造，<br>为需求而设计');setText(sections[1].querySelector('.section-head>p'),'结合多年工程经验与灵活制造能力，为客户提供从概念、声学设计、样品、测试到量产优化及全球供应的支持。');
        const cards=[['多型号','覆盖多种尺寸、频段与应用的成熟扬声器单元结构。'],['小批量','支持市场验证、专业项目及可控规模扩产。'],['按需定制','围绕声学、结构、材料与生产工艺进行项目定制。'],['全球供应','以快速响应和稳定交付支持全球客户。']];
        sections[1].querySelectorAll('.simple-card').forEach((el,i)=>{const d=cards[i];if(!d)return;setText(el.querySelector('h3'),d[0]);setText(el.querySelector('p'),d[1]);});
      }
      const banner=document.querySelector('.about-banner');if(banner){setText(banner.querySelector('.eyebrow'),'生产制造');set(banner.querySelector('h2'),'为声音而制造，<br>为量产而准备');setText(banner.querySelector('p'),'我们的生产体系兼顾灵活性与一致性，支持定制产品、小批量项目以及面向全球客户的稳定扩产。');}
      const q=document.querySelector('#quality');if(q){setText(q.querySelector('.eyebrow'),'质量管理');set(q.querySelector('h2'),'一致性，<br>从设计开始');const cs=[['声学验证','围绕频响、灵敏度与失真等目标进行测试与验证。'],['可靠性','根据实际使用环境对材料和组件进行可靠性评估。'],['过程控制','通过生产过程控制，确保不同批次保持稳定一致的性能。']];q.querySelectorAll('.simple-card').forEach((el,i)=>{const d=cs[i];if(!d)return;setText(el.querySelector('h3'),d[0]);setText(el.querySelector('p'),d[1]);});}
      const iso=document.querySelector('.iso-band span');if(iso)iso.textContent='质量管理体系 · 证书编号 00125Q38611R4S/3502';
    }
  }

  if(page==='oem'&&isZh){
    setText('.suny-oem-signal span:nth-of-type(1)','概念');
    setText('.suny-oem-signal span:nth-of-type(2)','工程');
    setText('.suny-oem-signal span:nth-of-type(3)','验证');
    setText('.suny-oem-signal span:nth-of-type(4)','量产');
    const processCards=[['明确需求','了解应用、尺寸、性能目标、材料及其他产品要求。'],['工程设计','围绕需求进行声学、结构与材料方案设计。'],['快速出样','协调工程、供应链与生产资源，高效完成样品开发。'],['测试验证','通过测试与持续优化验证声学性能、可靠性与产品适配。'],['量产交付','将验证后的设计转化为稳定、可重复的量产产品。']];
    document.querySelectorAll('.process-grid article').forEach((el,i)=>{const d=processCards[i];if(!d)return;setText(el.querySelector('h3'),d[0]);setText(el.querySelector('p'),d[1]);});
    const customizeCards=[['声学性能','根据应用需求调整频响、灵敏度、阻抗及其他声学参数。'],['结构设计','围绕安装空间、尺寸、安装方式与产品结构进行设计。'],['材料选择','根据性能、成本及使用环境选择合适的材料与组件。'],['外观与结构','根据最终产品要求调整外观与结构细节。']];
    document.querySelectorAll('.suny-oem-customize article').forEach((el,i)=>{const d=customizeCards[i];if(!d)return;setText(el.querySelector('h3'),d[0]);setText(el.querySelector('p'),d[1]);});
    setText('.final-cta .eyebrow','开始项目');setText('.final-cta h2','已有扬声器单元需求？');setText('.final-cta p','告诉我们您的应用、图纸、参考型号或目标性能。');setText('.final-cta .button','开始项目');
  }

  if(page==='contact'){
    if(isZh){
      setText('.suny-contact-about .eyebrow','关于三立电子');
      set('.suny-contact-about h2','专业扬声器制造，<br>灵活响应客户需求');
      const aboutPs=document.querySelectorAll('.suny-contact-about>div:first-child p:not(.eyebrow)');
      if(aboutPs[0])aboutPs[0].innerHTML='<strong>厦门三立电子有限公司</strong>自 1994 年起专注扬声器单元及音响零部件。';
      if(aboutPs[1])aboutPs[1].textContent='从标准型号到 OEM / ODM 定制项目，三立电子结合工程能力、灵活制造与供应链协同，为客户提供从开发到量产的支持。';
      setText('.suny-contact-details .eyebrow','联系方式');
      const labs=['地址','电话','邮箱'];document.querySelectorAll('.suny-contact-details article span').forEach((el,i)=>{if(labs[i])el.textContent=labs[i]});
      const addr=document.querySelector('.suny-contact-details article strong');if(addr)addr.textContent='中国福建省厦门市';
      setText('.suny-contact-cta .eyebrow','已有项目需求？');setText('.suny-contact-cta h2','告诉我们您的需求');setText('.suny-contact-cta p:last-child','请提供您的应用、图纸、参考单元或目标性能。');
      const sel=document.querySelector('#application');if(sel){const opts=['汽车音响','Hi-Fi / 家用音响','专业音响','建筑音响','智能家居','其他'];[...sel.options].forEach((o,i)=>{if(opts[i])o.textContent=opts[i]});}
      const placeholders={'#quantity':'样品 / 100 / 1,000…','#model':'选填','#message':'目标尺寸、阻抗、功率、频响、材料或其他要求'};
      Object.entries(placeholders).forEach(([s,t])=>{const el=document.querySelector(s);if(el)el.placeholder=t;});
      const sm=document.querySelector('.contact-form small');if(sm)sm.textContent='提交后会生成本地项目需求文件，不会自动上传或发送。';
    }
  }

  if(page==='product'&&isZh){const old=document.querySelector('.language-select');if(old){old.value='zh';old.dispatchEvent(new Event('change'));}}

  if (isZh) {
    const zhText = new Map([
      ['HOME','首页'],['PRODUCT','产品'],['OEM-ODM','定制开发'],['ABOUT','关于我们'],['CONTACT','联系我们'],['Start a Project','开始项目'],['Explore Products','查看产品'],['Learn About OEM / ODM','了解 OEM / ODM'],['Send Your Requirement','提交需求'],['SEND YOUR REQUIREMENT','提交您的需求'],
      ['WHY SUNY','为什么选择三立电子？'],['PRODUCT RANGE','产品系列'],['OEM / ODM CAPABILITY','OEM / ODM 定制能力'],['FROM PROTOTYPE TO PRODUCTION','从样品到量产'],['30+ Years of Focus','30+ 年深耕'],['Years of Focus','年专注'],['Product Models','产品型号'],['Engineering Support','工程支持'],['Supply Ready','全球供应'],['GLOBAL','全球'],
      ['Drivers for Every Application.','覆盖多种应用的扬声器单元。'],['Made for Your Sound Requirement.','为您的声音需求而打造。'],['Better Sound. Built with Precision.','更好的声音，源于精密制造。'],['View All 287 Product Models ↗','查看全部产品型号 ↗'],['Explore OEM-ODM ↗','了解 OEM / ODM ↗'],
      ['Acoustic Engineering','声学工程'],['Mechanical Design','结构设计'],['Material Selection','材料选择'],['Testing & Validation','测试与验证'],['Production Optimization','量产优化'],
      ['A collaborative partner that helps turn your requirements into reliable, production-ready loudspeaker drivers.','不只是供应商，更是围绕客户需求协同的合作伙伴。'],
      ['Professional loudspeaker driver engineering and manufacturing since 1994.','自 1994 年起，专注扬声器单元工程与制造。'],['Professional loudspeaker engineering and manufacturing since 1994.','自 1994 年起，专注扬声器工程与制造。'],['© 2026 Xiamen Suny Electronic Co., Ltd.','© 2026 厦门三立电子有限公司'],
      ['CONTACT DETAILS','联系方式'],['ADDRESS','地址'],['PHONE','电话'],['EMAIL','邮箱'],['HAVE A PROJECT IN MIND?','已经有项目需求？'],['CONTACT SUNY','联系三立电子'],['ABOUT SUNY','关于三立电子'],
      ['Professional loudspeaker manufacturing, built to adapt.','专业扬声器制造，灵活响应客户需求。'],['WE’RE HERE TO HELP.','欢迎与我们联系。'],['Have a Project in Mind?','已经有项目需求？'],['Rapid Prototyping. Reliable Production.','快速出样，稳定量产'],['EXTENSIVE MODELS. MULTIPLE APPLICATIONS.','丰富型号，覆盖多种应用。']
    ]);
    const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
    const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);
    nodes.forEach(node=>{const value=node.nodeValue.trim();if(zhText.has(value))node.nodeValue=node.nodeValue.replace(value,zhText.get(value));});
    document.querySelectorAll('.brand[aria-label]').forEach(el=>el.setAttribute('aria-label','三立电子首页'));
  }

  document.documentElement.classList.add('locale-ready');
})();
