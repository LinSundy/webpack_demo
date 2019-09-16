# webpack_demo

基于webpack 4.x的配置

- 支持css, less
- 配置文件已拆分为开发与生产
- 添加了eslint的检查
- 优化了图片打包时可以无损压缩
- 开发环境是内置style的模式
- 生产环境是提取css为独立文件的的模式
- 自带浏览器前缀兼容
- 支持字体文件
- 开发环境增加source-map
- 内置lodash包文件
- 项目可忽略对.js, .json, .css文件的后缀引用
- 生产环境中启用css以及js的压缩

还需要做：

- 多页面的配置
- 引入css module
- 当启用多页面时，公共模块的提取

## 字体

> 使用的是icon的字体库，已经新建好的项目

[字体库地址](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=971327)
