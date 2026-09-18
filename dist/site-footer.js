(() => {
  const isZh = new URLSearchParams(location.search).get('lang') === 'zh';
  document.documentElement.lang = isZh ? 'zh-CN' : 'en';
  document.documentElement.dataset.locale = isZh ? 'zh' : 'en';

  const q = isZh ? '?lang=zh' : '';
  const footer = document.querySelector('footer');
  if (footer) {
    footer.className = 'suny-footer';
    footer.innerHTML = isZh ? `
      <div class="footer-main">
        <div class="footer-brand">
          <a href="index.html${q}" aria-label="三立电子首页"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a>
          <p>自 1994 年起，专注扬声器单元工程研发与专业制造。</p>
        </div>
        <div class="footer-col"><h4>网站导航</h4><a href="products.html${q}">产品</a><a href="oem-odm.html${q}">定制开发</a><a href="about.html${q}">关于我们</a><a href="contact.html${q}">联系我们</a></div>
        <div class="footer-col"><h4>联系信息</h4><p>厦门三立电子有限公司</p><p>厦门火炬高新区（翔安）产业区翔虹路5号</p><a href="mailto:gm@xmsuny.com">gm@xmsuny.com</a><a href="tel:+8613806013315">+86 138 0601 3315</a></div>
        <div class="footer-col"><h4>法律与隐私</h4><a href="privacy.html${q}">隐私政策</a><a href="cookies.html${q}">Cookie 政策</a><a href="terms.html${q}">使用条款</a><a href="legal.html${q}">法律声明</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 厦门三立电子有限公司。保留所有权利。</span><span>产品规格与供货条件以双方最终确认的技术资料及商务文件为准。</span></div>`
    : `
      <div class="footer-main">
        <div class="footer-brand">
          <a href="index.html" aria-label="SUNY home"><img src="https://speaker-1303055923.cos.ap-singapore.myqcloud.com/IMAGE/LOGO/SUNYLOGO" alt="SUNY"></a>
          <p>Professional loudspeaker driver engineering and manufacturing since 1994.</p>
        </div>
        <div class="footer-col"><h4>Company</h4><a href="products.html">Products</a><a href="oem-odm.html">OEM / ODM</a><a href="about.html">About</a><a href="contact.html">Contact</a></div>
        <div class="footer-col"><h4>Contact</h4><p>Xiamen Suny Electronic Co., Ltd.</p><p>No. 5 Xianghong Road, Torch Hi-Tech Industrial Development Zone (Xiang'an), Xiamen, Fujian, China</p><a href="mailto:gm@xmsuny.com">gm@xmsuny.com</a><a href="tel:+8613806013315">+86 138 0601 3315</a></div>
        <div class="footer-col"><h4>Legal</h4><a href="privacy.html">Privacy Policy</a><a href="cookies.html">Cookie Policy</a><a href="terms.html">Terms of Use</a><a href="legal.html">Legal Notice</a></div>
      </div>
      <div class="footer-bottom"><span>© 2026 Xiamen Suny Electronic Co., Ltd. All rights reserved.</span><span>Product specifications and availability are subject to final technical and commercial confirmation.</span></div>`;
  }

  if (!localStorage.getItem('suny-cookie-notice')) {
    const banner = document.createElement('div');
    banner.className = 'cookie-notice';
    banner.innerHTML = isZh
      ? '<div><strong>隐私与浏览器存储</strong><p>本网站仅使用必要的浏览器存储来保存网站偏好。目前不使用广告追踪 Cookie。详情请查看 <a href="cookies.html?lang=zh">Cookie 政策</a>。</p></div><button type="button">知道了</button>'
      : '<div><strong>Privacy & browser storage</strong><p>This site uses only essential browser storage for site preferences. We do not currently use advertising cookies. See our <a href="cookies.html">Cookie Policy</a>.</p></div><button type="button">Got it</button>';
    document.body.appendChild(banner);
    banner.querySelector('button')?.addEventListener('click', () => {
      localStorage.setItem('suny-cookie-notice','acknowledged');
      banner.remove();
    });
  }
})();