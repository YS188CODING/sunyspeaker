# SUNY Speaker

SUNY 产品展示网站，内容来自企业提供的 233 页产品彩页。

## 网站

- `dist/index.html`：企业介绍与 287 条产品资料。
- `dist/style.css` 与 `dist/refinement.css`：浅色响应式设计。
- `dist/inquiry.js`：带产品型号、技术参数的询盘表单。
- `dist/assets/`：来自产品彩页的品牌和产品图片。

直接将 `dist/` 作为静态网站目录部署。所有资源使用相对路径，支持子目录部署。

本地预览：`python -m http.server 8765 --directory dist`。

## 询盘

接收邮箱尚待企业确认。当前可下载或复制询盘内容，不会上传客户资料，也不会显示虚假的发送成功提示。

在 `dist/inquiry.js` 中将 `inquiryEmail` 设置为企业确认的业务邮箱，即可启用邮件询盘。此功能打开客户的邮件应用，由客户确认发送；不依赖后台邮件服务。

## 内容维护

`make_site.py` 用于从原始 PPT 生成页面，需要 Python 与 python-pptx，并将 PPT 路径改为实际文件位置。原始 PPT 不包含在仓库中。修改模板时保留 `refinement.css` 和 `inquiry.js` 的引用。

产品规格以企业确认的技术资料为准。
