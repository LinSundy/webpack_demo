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

***1. 首先element 加载实现按需加载*** (当前项目已经支持)

- element-theme
- element-theme-chalk
element主题生成工具 如果不需要自定义主题的话，可以删除不安装

> 此安装包可以只在开发环境中使用，最终编译生成对应的css文件、

- 执行命令在 node_module/.bin/et
- 初始化变量(scss类型) `node_module/.bin/et -i [文件名.scss]` 
- 编译时，要指定自定义文件名 需要命令行加 -c

## src文件夹及文件说明

- pages 为多页面入口文件夹
- components 不同模块中公共的组件
- assert 所有模块存放的静态资源
- index.html  template的基础模板
- common 当为多页面时,为了不让每个页面入口都写相同的逻辑代码，故新建此文件夹。
  - 比如：
    - 1：当所有页面都需要引入element的Button时，那么每个入口都要引入且安装
    - 等等...

## 多种主题色定制的element

使用scss来处理 (案例: page1里的使用方式)

## Dll方式使用

- 目前是只使用dll在生产环境
- 当前dll打包只打vue， 多页面中暂时只有vue是公用的

-- 通过bootcdn的引用方式，不同页面可以引用不同的包

## 项目支持ts写法

必要的依赖：

- ts-loader
- typescript

> 创建 `tsconfig.json` 文件 `tsc --init`

可选

- vue-class-component 官方维护的
- vue-property-decorator 非官方维护
- vuex-class
- vuex-ts-decorators/vuex-typescript等：非官方维护，学习成本极高

## ES-lint 与 vscode结合使用

vscode 需安装 `eslint`

## 多页面的浏览器刷新

  > 因为随着页面越来越多，导致修改一出代码，但是会刷新所有的入口页面，所以在开发环境开发时，只需要启动当前开发模块的页面就可以：
    具体操作步骤：
    1. 打开`build/webpack.common.config.js`文件
    2. `dirs` 变量表示 src/pages下的目录名 string[]
    3. 将`dirs`设置为要开发的模块, 例如: dirs = ["page1"]

## 更新记录

  1. 将console.log修改为warn级别
  2. 修改devServer里当为警告时，不覆盖在页面上，只在控制台提示

## 注意事项

### style内置样式

1. 目前只支持以module的形式去写单页面的样式,例如:

    ``` html
      <template>
        <div :class="$style.red">您好</div>
      </template>
      <style lang="less" module>
      .red {
        color: red;
      }
      </style>
    ```

    用普通的class样式

    ``` html
    <template>
      <div class="green">你好, 世界</div>
    </template>
    ```

    ***只有将.green样式定义为全局的样式才可以访问到***

    使用css-module的的语法来实现

    - html

      ``` html
        <template>
          <div :class="styles.red">你好，世界</div>
        </template>
      ```

    - js

      ``` js
        import styles from "./index.module.less"
      ```

    - css

      ``` css
        .red {
          color: red;
        }
      ```
