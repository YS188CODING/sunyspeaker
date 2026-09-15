from pathlib import Path
for file in ['make_site.py','dist/index.html']:
 p=Path(file);s=p.read_text(encoding='utf-8')
 if 'refinement.css' not in s:
  s=s.replace('</head>','<link rel="stylesheet" href="refinement.css"></head>')
 if 'inquiry.js' not in s:
  s=s.replace('</body>','<script src="inquiry.js" defer></script></body>')
 s=s.replace('专注声学制造<br>让好声音，<br><em>抵达每一处。</em>','好声音。<br><em>从这里开始。</em>')
 p.write_text(s,encoding='utf-8')
print('Light design and product inquiries integrated.')
