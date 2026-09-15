from pathlib import Path
from html.parser import HTMLParser
from PIL import Image
class Check(HTMLParser):
 def handle_starttag(self,tag,attrs):
  for k,v in attrs:
   if k in ['src','href'] and not v.startswith(('#','data:')):
    p=Path('dist')/v
    assert p.exists(),v
    if k=='src':Image.open(p).verify()
Check().feed(Path('dist/index.html').read_text(encoding='utf-8'))
print('All local links and product images verified.')
print(Path('.openai/hosting.json').read_text())
