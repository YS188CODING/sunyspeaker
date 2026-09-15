from pathlib import Path
for file in ['dist/index.html','make_site.py']:
 p=Path(file);s=p.read_text(encoding='utf-8')
 s=s.replace('<script src="inquiry.js" defer></script>','<script src="inquiry.js" defer></script><script src="languages.js" defer></script>')
 p.write_text(s,encoding='utf-8')
p=Path('dist/inquiry.js');s=p.read_text(encoding='utf-8')
s="const t = value => window.sunyTranslate ? window.sunyTranslate(value) : value;\n"+s
import re
s=re.sub(r"status.textContent = '([^']+)';",lambda m:"status.textContent = t('"+m[1]+"');",s)
start=s.index(' return `SUNY 产品询盘')
end=s.index(';',start)+1
s=s[:start]+''' return `SUNY ${t('产品询盘')}\\n${t('产品型号')}: ${product.model}\\n${t('姓名 *').replace(' *','')}: ${data.get('name')}\\n${t('联系邮箱 *').replace(' *','')}: ${data.get('email')}\\n${t('公司')}: ${data.get('company') || t('未填写')}\\n${t('预计采购数量（件） *').replace(' *','')}: ${data.get('quantity')}\\n${t('具体需求')}: ${data.get('message') || t('未填写')}\\n\\n${t('产品参数（彩页资料）')}:\\n${product.specs}`;'''+s[end:]
s=s.replace("'SUNY 产品询盘 - ' + product.model","'SUNY ' + t('产品询盘') + ' - ' + product.model")
s=s.replace('-询盘.txt','-inquiry.txt')
p.write_text(s,encoding='utf-8')
