const t = value => window.sunyTranslate ? window.sunyTranslate(value) : value;
// Set only to the business email confirmed by the site owner.
const inquiryEmail = '';
const dialog = document.createElement('dialog');
dialog.className = 'inquiry-dialog';
dialog.setAttribute('aria-labelledby', 'inquiry-title');
dialog.innerHTML = `<div class="dialog-heading"><div><span class="eyebrow">PRODUCT INQUIRY</span><h2 id="inquiry-title">咨询这款产品</h2></div><button class="close-dialog" type="button" aria-label="关闭询盘">×</button></div>
<p>告诉我们采购需求，询盘将附上所选产品型号与参数。</p>
<div class="inquiry-preview"><img alt=""><div><strong id="inquiry-model"></strong><small>产品询价 / OEM · ODM</small></div></div>
<form id="inquiry-form"><div class="form-grid">
<label>姓名 *<input name="name" autocomplete="name" required maxlength="80"></label>
<label>联系邮箱 *<input name="email" type="email" autocomplete="email" required maxlength="150"></label>
<label>公司<input name="company" autocomplete="organization" maxlength="150"></label>
<label>预计采购数量（件） *<input name="quantity" type="number" min="1" step="1" max="100000000" required inputmode="numeric"></label>
<label class="full">具体需求<textarea name="message" maxlength="1200" placeholder="例如：目标阻抗、定制要求、交货地区及时间"></textarea></label>
</div><div class="form-actions"><button class="primary" type="submit">${inquiryEmail ? '通过邮件询盘' : '下载询盘单'}</button><button class="secondary" id="copy-inquiry" type="button">复制询盘内容</button></div>
<p class="delivery-note">${inquiryEmail ? '将打开你的邮件应用。请在邮件中确认并发送；网站不会自动发送。' : '在线发送尚未开通。你可以先下载或复制询盘单；填写内容不会上传。'}</p><p class="status" role="status" aria-live="polite"></p></form>`;
document.body.append(dialog);
const form = dialog.querySelector('form');
const status = dialog.querySelector('.status');
let product = null;
let opener = null;
for (const card of document.querySelectorAll('.product')) {
 const button = document.createElement('button');
 button.type = 'button'; button.className = 'inquire'; button.textContent = '产品询盘';
 button.setAttribute('aria-label', `咨询 ${card.querySelector('h3').textContent}`);
 button.addEventListener('click', () => {
  opener = button;
  product = {model: card.querySelector('h3').textContent, specs: Array.from(card.querySelectorAll('dl > div'), row => row.textContent).join('\n')};
  dialog.querySelector('#inquiry-model').textContent = product.model;
  const image = dialog.querySelector('.inquiry-preview img');
  image.src = card.querySelector('img').getAttribute('src'); image.alt = product.model;
  status.textContent = ''; dialog.showModal();
 });
 card.querySelector('.product-body').append(button);
}
dialog.querySelector('.close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => opener?.focus());
function inquiryText() {
 const data = new FormData(form);
 return `SUNY ${t('产品询盘')}\n${t('产品型号')}: ${product.model}\n${t('姓名 *').replace(' *','')}: ${data.get('name')}\n${t('联系邮箱 *').replace(' *','')}: ${data.get('email')}\n${t('公司')}: ${data.get('company') || t('未填写')}\n${t('预计采购数量（件） *').replace(' *','')}: ${data.get('quantity')}\n${t('具体需求')}: ${data.get('message') || t('未填写')}\n\n${t('产品参数（彩页资料）')}:\n${product.specs}`;
}
form.addEventListener('submit', event => {
 event.preventDefault();
 const body = inquiryText();
 if (inquiryEmail) {
  window.location.href = `mailto:${inquiryEmail}?subject=${encodeURIComponent('SUNY ' + t('产品询盘') + ' - ' + product.model)}&body=${encodeURIComponent(body)}`;
  status.textContent = t('已请求打开邮件应用，请在那里完成发送。若未打开，可复制询盘内容。');
 } else {
  const url = URL.createObjectURL(new Blob(['\ufeff', body], {type:'text/plain;charset=utf-8'}));
  const a = document.createElement('a'); a.href = url; a.download = `SUNY-${product.model.replace(/[^a-z0-9-]/gi,'')}-inquiry.txt`; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  status.textContent = t('询盘单已生成并开始下载，尚未发送。');
 }
});
dialog.querySelector('#copy-inquiry').addEventListener('click', async () => {
 if (!form.reportValidity()) return;
 try { await navigator.clipboard.writeText(inquiryText()); status.textContent = t('询盘内容已复制，尚未发送。'); }
 catch { status.textContent = t('无法访问剪贴板，请使用下载询盘单。'); }
});
