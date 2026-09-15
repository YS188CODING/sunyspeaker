from pathlib import Path
from html.parser import HTMLParser
from PIL import Image
class Assets(HTMLParser):
 refs=set()
 def handle_starttag(self,t,a):
  self.refs.update(v for k,v in a if k=='src')
c=Assets();c.feed(Path('dist/index.html').read_text(encoding='utf-8'))
root=Path('dist/assets').resolve()
for f in root.iterdir():
 assert f.resolve().parent==root
 if 'assets/'+f.name not in c.refs:f.unlink()
 elif f.suffix.lower() in ['.jpg','.jpeg']:
  im=Image.open(f).convert('RGB');im.thumbnail((1000,1000));im.save(f,quality=86,optimize=True)
print('Optimized image bytes:',sum(f.stat().st_size for f in root.iterdir()))
