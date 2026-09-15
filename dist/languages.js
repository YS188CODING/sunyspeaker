// UI translations. Product codes, dimensions and measured values are never translated.
const languageRows = [
['产品中心','Products','ผลิตภัณฑ์','Sản phẩm','Productos'],
['关于 SUNY','About SUNY','เกี่ยวกับ SUNY','Về SUNY','Acerca de SUNY'],
['品质与制造','Quality & manufacturing','คุณภาพและการผลิต','Chất lượng và sản xuất','Calidad y fabricación'],
['好声音。','Great sound.','เสียงที่ยอดเยี่ยม','Âm thanh tuyệt vời.','Un gran sonido.'],
['从这里开始。','Starts here.','เริ่มต้นที่นี่','Bắt đầu từ đây.','Empieza aquí.'],
['从汽车音响到专业扩声，','From car audio to professional sound,','ตั้งแต่เครื่องเสียงรถยนต์ไปจนถึงระบบเสียงมืออาชีพ','Từ âm thanh ô tô đến âm thanh chuyên nghiệp,','Del audio para automóvil al sonido profesional,'],
['以三十余年的制造经验，支持每一种声音表达。','built on over 30 years of manufacturing experience.','ด้วยประสบการณ์การผลิตมากกว่า 30 ปี','với hơn 30 năm kinh nghiệm sản xuất.','con más de 30 años de experiencia en fabricación.'],
['探索产品系列','Explore our products','สำรวจผลิตภัณฑ์','Khám phá sản phẩm','Explorar productos'],
['额定功率','Nominal power','กำลังขับพิกัด','Công suất danh định','Potencia nominal'],
['创立于中国厦门','Founded in Xiamen, China','ก่อตั้งที่เมืองเซี่ยเหมิน ประเทศจีน','Thành lập tại Hạ Môn, Trung Quốc','Fundada en Xiamen, China'],
['年声学产品制造经验','Years in acoustic manufacturing','ปีแห่งประสบการณ์การผลิตอุปกรณ์เสียง','Năm kinh nghiệm sản xuất thiết bị âm thanh','Años de fabricación acústica'],
['产品制造与技术合作','Manufacturing & technical partnerships','การผลิตและความร่วมมือด้านเทคนิค','Sản xuất và hợp tác kỹ thuật','Fabricación y colaboración técnica'],
['为不同应用，','For every application,','สำหรับทุกการใช้งาน','Cho từng ứng dụng,','Para cada aplicación,'],
['找到合适的声音。','find the right sound.','เลือกเสียงที่เหมาะสม','tìm âm thanh phù hợp.','encuentra el sonido adecuado.'],
['探索扬声器系列，查看尺寸、阻抗、功率及频率范围。','Explore speaker dimensions, impedance, power and frequency ranges.','สำรวจขนาด อิมพีแดนซ์ กำลังขับ และช่วงความถี่ของลำโพง','Khám phá kích thước, trở kháng, công suất và dải tần của loa.','Consulta las dimensiones, impedancia, potencia y respuesta en frecuencia.'],
['汽车扬声器','Car speakers','ลำโพงรถยนต์','Loa ô tô','Altavoces para automóvil'],
['低音扬声器','Subwoofers','ลำโพงซับวูฟเฟอร์','Loa siêu trầm','Subwoofers'],
['小型扬声器','Compact speakers','ลำโพงขนาดเล็ก','Loa nhỏ gọn','Altavoces compactos'],
['专业扩声单元','Professional audio drivers','ดอกลำโพงสำหรับระบบเสียงมืออาชีพ','Củ loa chuyên nghiệp','Transductores de audio profesional'],
['专业扩声','Professional audio','ระบบเสียงมืออาชีพ','Âm thanh chuyên nghiệp','Audio profesional'],
['吸顶扬声器','Ceiling speakers','ลำโพงติดเพดาน','Loa âm trần','Altavoces de techo'],
['技术参数','Specifications','ข้อมูลจำเพาะ','Thông số kỹ thuật','Especificaciones'],
['展开完整系列','View the full range','ดูผลิตภัณฑ์ทั้งหมดในซีรีส์','Xem toàn bộ dòng sản phẩm','Ver toda la gama'],
['立足厦门。','Based in Xiamen.','ฐานการผลิตที่เซี่ยเหมิน','Đặt tại Hạ Môn.','Desde Xiamen.'],
['声音连接世界。','Connecting the world through sound.','เชื่อมโลกด้วยเสียง','Kết nối thế giới bằng âm thanh.','Conectando el mundo con el sonido.'],
['Xiamen Suny Electronic Co., Ltd 成立于 1994 年，专注声学产品及相关电子元件的研发与制造。','Founded in 1994, Xiamen Suny Electronic Co., Ltd develops and manufactures acoustic products and related electronic components.','Xiamen Suny Electronic Co., Ltd ก่อตั้งในปี 1994 โดยมุ่งเน้นการพัฒนาและผลิตผลิตภัณฑ์เสียงและชิ้นส่วนอิเล็กทรอนิกส์ที่เกี่ยวข้อง','Thành lập năm 1994, Xiamen Suny Electronic Co., Ltd chuyên phát triển và sản xuất sản phẩm âm thanh cùng các linh kiện điện tử liên quan.','Fundada en 1994, Xiamen Suny Electronic Co., Ltd desarrolla y fabrica productos acústicos y componentes electrónicos relacionados.'],
['产品范围涵盖汽车音响、家用音响、公共广播扬声器，以及分频器、变压器等配套元件。公司与欧洲、北美、中东等市场的客户开展合作，为采购商和分销商提供产品制造支持。','Our range covers car audio, home audio, public-address speakers, crossovers and transformers. We support buyers and distributors in Europe, North America, the Middle East and other markets.','ผลิตภัณฑ์ครอบคลุมเครื่องเสียงรถยนต์ เครื่องเสียงบ้าน ลำโพงประกาศสาธารณะ ครอสโอเวอร์ และหม้อแปลงไฟฟ้า เราสนับสนุนการผลิตให้ผู้ซื้อและผู้จัดจำหน่ายในยุโรป อเมริกาเหนือ ตะวันออกกลาง และตลาดอื่น ๆ','Sản phẩm bao gồm âm thanh ô tô, âm thanh gia đình, loa thông báo, bộ phân tần và biến áp. Chúng tôi hỗ trợ sản xuất cho khách hàng và nhà phân phối tại châu Âu, Bắc Mỹ, Trung Đông và các thị trường khác.','Nuestra gama incluye audio para automóvil y hogar, altavoces de megafonía, filtros divisores y transformadores. Apoyamos a compradores y distribuidores en Europa, Norteamérica, Oriente Medio y otros mercados.'],
['从产品设计，','From product design','ตั้งแต่การออกแบบผลิตภัณฑ์','Từ thiết kế sản phẩm','Del diseño del producto'],
['到稳定交付。','to reliable delivery.','จนถึงการส่งมอบที่เชื่อถือได้','đến giao hàng đáng tin cậy.','a una entrega fiable.'],
['声学研发','Acoustic development','การพัฒนาด้านเสียง','Phát triển âm học','Desarrollo acústico'],
['研发团队与工程人员支持产品开发，提供 OEM / ODM 及技术合作。','Our development team and engineers support product development, OEM / ODM manufacturing and technical cooperation.','ทีมพัฒนาและวิศวกรสนับสนุนการพัฒนาผลิตภัณฑ์ การผลิต OEM / ODM และความร่วมมือด้านเทคนิค','Đội ngũ phát triển và kỹ sư hỗ trợ phát triển sản phẩm, sản xuất OEM / ODM và hợp tác kỹ thuật.','Nuestro equipo de desarrollo e ingeniería ofrece desarrollo de productos, fabricación OEM / ODM y colaboración técnica.'],
['品质管理','Quality management','การจัดการคุณภาพ','Quản lý chất lượng','Gestión de calidad'],
['以标准化制造、过程记录和持续改进，为产品质量提供支持。','Standardized manufacturing, process documentation and continuous improvement support product quality.','การผลิตที่ได้มาตรฐาน การบันทึกกระบวนการ และการปรับปรุงอย่างต่อเนื่องช่วยสนับสนุนคุณภาพผลิตภัณฑ์','Sản xuất theo tiêu chuẩn, ghi chép quy trình và cải tiến liên tục giúp duy trì chất lượng sản phẩm.','La fabricación estandarizada, la documentación de procesos y la mejora continua respaldan la calidad del producto.'],
['生产交付','Production & delivery','การผลิตและการส่งมอบ','Sản xuất và giao hàng','Producción y entrega'],
['围绕客户的产品要求组织生产，重视制造一致性与交付安排。','Production is organized around customer requirements, with attention to manufacturing consistency and delivery schedules.','จัดการผลิตตามข้อกำหนดของลูกค้า โดยให้ความสำคัญกับความสม่ำเสมอในการผลิตและกำหนดการส่งมอบ','Sản xuất được tổ chức theo yêu cầu của khách hàng, chú trọng tính đồng nhất và lịch giao hàng.','Organizamos la producción según los requisitos del cliente, cuidando la uniformidad de fabricación y los plazos de entrega.'],
['专业扬声器与声学电子元件制造','Speaker and acoustic component manufacturing','การผลิตลำโพงและชิ้นส่วนอิเล็กทรอนิกส์ด้านเสียง','Sản xuất loa và linh kiện âm thanh','Fabricación de altavoces y componentes acústicos'],
['浏览产品 ↑','Browse products ↑','ดูผลิตภัณฑ์ ↑','Xem sản phẩm ↑','Ver productos ↑'],
['产品规格依据企业产品彩页整理，具体配置以双方确认的技术资料为准。','Specifications are based on the company catalog. Final configurations are subject to mutually approved technical documentation.','ข้อมูลจำเพาะอ้างอิงจากแค็ตตาล็อกของบริษัท โดยให้ยึดเอกสารทางเทคนิคที่ทั้งสองฝ่ายยืนยันเป็นหลัก','Thông số dựa trên danh mục sản phẩm của công ty. Cấu hình cuối cùng căn cứ vào tài liệu kỹ thuật được hai bên xác nhận.','Las especificaciones se basan en el catálogo de la empresa. La configuración final se rige por la documentación técnica acordada por ambas partes.'],
['产品询盘','Product inquiry','สอบถามผลิตภัณฑ์','Yêu cầu báo giá','Consultar producto'],
['咨询这款产品','Ask about this product','สอบถามเกี่ยวกับผลิตภัณฑ์นี้','Hỏi về sản phẩm này','Consultar sobre este producto'],
['关闭询盘','Close inquiry','ปิดแบบสอบถาม','Đóng yêu cầu','Cerrar consulta'],
['告诉我们采购需求，询盘将附上所选产品型号与参数。','Tell us what you need. Your inquiry includes the selected model and specifications.','แจ้งความต้องการสั่งซื้อของคุณ โดยคำสอบถามจะแนบรุ่นและข้อมูลจำเพาะที่เลือก','Cho chúng tôi biết nhu cầu của bạn. Yêu cầu sẽ kèm mã sản phẩm và thông số đã chọn.','Cuéntanos qué necesitas. La consulta incluirá el modelo seleccionado y sus especificaciones.'],
['产品询价 / OEM · ODM','Pricing / OEM · ODM','สอบถามราคา / OEM · ODM','Báo giá / OEM · ODM','Precios / OEM · ODM'],
['姓名 *','Name *','ชื่อ *','Họ tên *','Nombre *'],
['联系邮箱 *','Email *','อีเมล *','Email liên hệ *','Correo electrónico *'],
['公司','Company','บริษัท','Công ty','Empresa'],
['预计采购数量（件） *','Quantity (units) *','จำนวนที่ต้องการ (ชิ้น) *','Số lượng (chiếc) *','Cantidad (unidades) *'],
['具体需求','Requirements','ความต้องการเพิ่มเติม','Yêu cầu cụ thể','Requisitos'],
['例如：目标阻抗、定制要求、交货地区及时间','For example: impedance, customization, delivery location and schedule','เช่น อิมพีแดนซ์ การปรับแต่ง สถานที่และกำหนดส่งมอบ','Ví dụ: trở kháng, tùy chỉnh, địa điểm và thời gian giao hàng','Por ejemplo: impedancia, personalización, lugar y plazo de entrega'],
['通过邮件询盘','Inquire by email','สอบถามทางอีเมล','Gửi yêu cầu qua email','Consultar por correo'],
['下载询盘单','Download inquiry','ดาวน์โหลดใบสอบถาม','Tải yêu cầu báo giá','Descargar consulta'],
['复制询盘内容','Copy inquiry','คัดลอกคำสอบถาม','Sao chép yêu cầu','Copiar consulta'],
['在线发送尚未开通。你可以先下载或复制询盘单；填写内容不会上传。','Online sending is not yet available. Download or copy your inquiry; your details are not uploaded.','ยังไม่เปิดให้ส่งออนไลน์ คุณสามารถดาวน์โหลดหรือคัดลอกใบสอบถามได้ ข้อมูลที่กรอกจะไม่ถูกอัปโหลด','Chưa hỗ trợ gửi trực tuyến. Bạn có thể tải hoặc sao chép yêu cầu; thông tin đã nhập không được tải lên.','El envío en línea aún no está disponible. Descarga o copia tu consulta; tus datos no se cargan en línea.'],
['将打开你的邮件应用。请在邮件中确认并发送；网站不会自动发送。','Your email app will open. Review and send the email there; this website does not send it automatically.','ระบบจะเปิดแอปอีเมล โปรดตรวจสอบและส่งจากแอป เว็บไซต์จะไม่ส่งให้อัตโนมัติ','Ứng dụng email sẽ mở. Hãy kiểm tra và gửi tại đó; trang web không tự động gửi.','Se abrirá tu aplicación de correo. Revisa y envía el mensaje allí; la web no lo envía automáticamente.'],
['询盘单已生成并开始下载，尚未发送。','Your inquiry download has started. It has not been sent.','เริ่มดาวน์โหลดใบสอบถามแล้ว ยังไม่ได้ส่ง','Đã bắt đầu tải yêu cầu. Yêu cầu chưa được gửi.','La descarga ha comenzado. La consulta no se ha enviado.'],
['询盘内容已复制，尚未发送。','Inquiry copied. It has not been sent.','คัดลอกคำสอบถามแล้ว ยังไม่ได้ส่ง','Đã sao chép yêu cầu. Chưa gửi.','Consulta copiada. No se ha enviado.'],
['无法访问剪贴板，请使用下载询盘单。','Clipboard unavailable. Please download your inquiry.','ไม่สามารถใช้คลิปบอร์ดได้ โปรดดาวน์โหลดใบสอบถาม','Không thể truy cập bộ nhớ tạm. Vui lòng tải yêu cầu.','No se puede acceder al portapapeles. Descarga la consulta.'],
['已请求打开邮件应用，请在那里完成发送。若未打开，可复制询盘内容。','Please finish sending in your email app. If it did not open, copy the inquiry instead.','โปรดส่งจากแอปอีเมล หากแอปไม่เปิด คุณสามารถคัดลอกคำสอบถามได้','Vui lòng hoàn tất gửi trong ứng dụng email. Nếu ứng dụng không mở, hãy sao chép yêu cầu.','Completa el envío en tu aplicación de correo. Si no se abre, copia la consulta.'],
['SUNY 首页','SUNY home','หน้าแรก SUNY','Trang chủ SUNY','Inicio SUNY'],
['主导航','Main navigation','เมนูหลัก','Điều hướng chính','Navegación principal'],
['产品型号','Model','รุ่น','Mã sản phẩm','Modelo'],
['未填写','Not provided','ไม่ได้ระบุ','Chưa cung cấp','No indicado'],
['产品参数（彩页资料）','Specifications (catalog)','ข้อมูลจำเพาะ (แค็ตตาล็อก)','Thông số (danh mục)','Especificaciones (catálogo)']
];
languageRows.push(
 ['SUNY SA1507 低音扬声器正面与背面','SUNY SA1507 subwoofer, front and rear views','ลำโพงซับวูฟเฟอร์ SUNY SA1507 มุมมองด้านหน้าและด้านหลัง','Loa siêu trầm SUNY SA1507, mặt trước và mặt sau','Subwoofer SUNY SA1507, vistas frontal y trasera'],
 ['Dimension','Dimensions','ขนาด','Kích thước','Dimensiones'],
 ['Impedance','Impedance','อิมพีแดนซ์','Trở kháng','Impedancia'],
 ['Nom Power','Nominal power','กำลังขับพิกัด','Công suất danh định','Potencia nominal'],
 ['Max Power','Maximum power','กำลังขับสูงสุด','Công suất tối đa','Potencia máxima'],
 ['Freq Range','Frequency range','ช่วงความถี่','Dải tần','Rango de frecuencia'],
 ['VC Size','Voice coil size','ขนาดวอยซ์คอยล์','Kích thước cuộn dây âm','Tamaño de bobina móvil'],
 ['Magnet Weight','Magnet weight','น้ำหนักแม่เหล็ก','Khối lượng nam châm','Peso del imán'],
 ['Cone Body','Cone material','วัสดุกรวยลำโพง','Vật liệu màng loa','Material del cono'],
 ['Cone Edge','Surround material','วัสดุขอบลำโพง','Vật liệu gân loa','Material de la suspensión'],
 ['Frame Material','Frame material','วัสดุโครงลำโพง','Vật liệu khung loa','Material del chasis'],
 ['Paper','Paper','กระดาษ','Giấy','Papel'],['Rubber','Rubber','ยาง','Cao su','Goma'],
 ['Foam','Foam','โฟม','Mút xốp','Espuma'],['Steel','Steel','เหล็ก','Thép','Acero'],
 ['Aluminum','Aluminum','อะลูมิเนียม','Nhôm','Aluminio'],['Cloth','Cloth','ผ้า','Vải','Tela']
);
const languageCodes = ['zh','en','th','vi','es'];
let activeLanguage = 'en';
try { if(languageCodes.includes(localStorage.getItem('suny-language'))) activeLanguage=localStorage.getItem('suny-language'); } catch {}
const dictionaries = new Map(languageRows.map(row=>[row[0],row]));
function translateText(value) {
 const index=languageCodes.indexOf(activeLanguage);
 if(dictionaries.has(value)) return dictionaries.get(value)[index];
 // Some original catalog rows use a space instead of a colon.
 for(const label of ['Dimension','Impedance','Nom Power','Max Power','Freq Range','VC Size','Magnet Weight','Cone Body','Cone Edge','Frame Material']) {
  if(value.startsWith(label+' '))return translateText(label)+' '+value.slice(label.length+1);
 }
 const arrow=value.match(/^(.*) (↗)$/); if(arrow&&dictionaries.has(arrow[1]))return translateText(arrow[1])+' '+arrow[2];
 const count=value.match(/^(\d+) 款产品$/); if(count)return [value,`${count[1]} models`,`${count[1]} รุ่น`,`${count[1]} mẫu`,`${count[1]} modelos`][index];
 const page=value.match(/^产品彩页 · 第 (\d+) 页$/); if(page)return [value,`Catalog · Page ${page[1]}`,`แค็ตตาล็อก · หน้า ${page[1]}`,`Danh mục · Trang ${page[1]}`,`Catálogo · Página ${page[1]}`][index];
 if(value.startsWith('咨询 '))return translateText('产品询盘')+' · '+value.slice(3);
 if(value.endsWith(' 扬声器'))return value.slice(0,-4)+' · '+['扬声器','Speaker','ลำโพง','Loa','Altavoz'][index];
 return value;
}
window.sunyTranslate=translateText;
const sourceNodes=new Map(), sourceAttrs=[];
function capture(root) {
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 while(walker.nextNode()) {
  const node=walker.currentNode;
  if(node.parentElement?.closest('script,style,select,textarea,.status'))continue;
  const source=node.textContent.trim();
  if(source&&!sourceNodes.has(node))sourceNodes.set(node,source);
 }
 root.querySelectorAll('[aria-label],[placeholder],img[alt]').forEach(el=>{
  for(const attr of ['aria-label','placeholder','alt'])if(el.hasAttribute(attr))sourceAttrs.push([el,attr,el.getAttribute(attr)]);
 });
}
capture(document.body);
const selector=document.createElement('select');selector.className='language-select';selector.setAttribute('aria-label','Language / ภาษา / Ngôn ngữ / Idioma / 语言');
[['en','English'],['th','ไทย'],['vi','Tiếng Việt'],['es','Español'],['zh','中文']].forEach(([code,label])=>selector.add(new Option(label,code)));
document.querySelector('header').append(selector);
function applyLanguage() {
 document.documentElement.lang=activeLanguage==='zh'?'zh-CN':activeLanguage;
 selector.value=activeLanguage;
 sourceNodes.forEach((source,node)=>{if(node.isConnected)node.textContent=translateText(source);});
 sourceAttrs.forEach(([el,attr,value])=>{if(el.isConnected)el.setAttribute(attr,translateText(value));});
 document.title=['SUNY Audio | 专业扬声器制造','SUNY Audio | Speaker Manufacturer','SUNY Audio | ผู้ผลิตลำโพง','SUNY Audio | Nhà sản xuất loa','SUNY Audio | Fabricante de altavoces'][languageCodes.indexOf(activeLanguage)];
 document.querySelector('meta[name="description"]').content=translateText('专业扬声器与声学电子元件制造');
 document.querySelector('.status').textContent='';
}
selector.addEventListener('change',()=>{activeLanguage=selector.value;try{localStorage.setItem('suny-language',activeLanguage);}catch{}applyLanguage();});
applyLanguage();
