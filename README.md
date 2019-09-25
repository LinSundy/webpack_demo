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
- 增加多线程打包
- 增加dll预打包
- 引入了css module

还需要做：

- 多页面的配置
- 引入css module
- 当启用多页面时，公共模块的提取（多入口配置）

## 字体

> 使用的是icon的字体库，已经新建好的项目

[字体库地址](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.11&manage_type=myprojects&projectId=971327)

## 测试v-charts雷达图

- 测试完成删除 v-charts, echarts 两个包

## 优化
想法: 生产环境-使用bootcdn 与 dll 配合使用

## css/less 说明
- 只对less使用了css module处理，并且增加了hash
- css未经任何处理，两者可以根据场景选择合适的加载方式

## Element
***1. 首先element 加载实现按需加载***
- element-theme
- element-theme-chalk
element主题生成工具 如果不需要自定义主题的话，可以删除不安装

> 此安装包可以只在开发环境中使用，最终编译生成对应的css文件
- 执行命令在 node_module/.bin/et
- 初始化变量(scss类型) `node_module/.bin/et -i [文件名.scss]` 
- 编译时，要指定自定义文件名 需要命令行加 -c

## src文件夹及文件说明
- pages 为多页面入口文件夹
- components 不同模块中公共的组件
- assert 所有模块存放的静态资源
- index.html  template的基础模板
