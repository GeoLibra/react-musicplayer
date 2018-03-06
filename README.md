# react-musicplayer
A music player by React
![首页](/player.png)
## 说明
技术栈采用react(16.x)+react-router-dom(4.x)+ES6+HTML5+create-react-app。音乐播放采用HTML5的audio标签
### 如何运行

####  1、将项目克隆到本地，cd 到 react-musicplayer
```bash
git clone git@github.com:LuvJia/react-musicplayer.git
cd react-musicplayer
```
#### 2、安装依赖
```bash
npm install
或
yarn install
```
#### 3、执行
```bash
npm start
// npm run build(打包)
```
#### 4、打开浏览器浏览 http://localhost:3000/

## GitHub Page 发布
GitHub Page 需要使用相对路径，修改：
在yarn run build后该项目会生成一个build文件，但是点击其中的index.html文件打开后浏览器是空白页面。
解决办法:
```
去掉.gitignore文件中的/build,或者使用git add -f build。因为配置文件中对这个文件夹的上传进行了忽略。另外在在package.json配置文件中加一句："homepage": "./",然后进行打包(yarn run build)
```

打包后播放页面是空白的,是因为使用react-router-dom里的BrowserRouter as Router,改用Router就好了
然后打包项目：
```bash
yarn run build
```

将 `build` 提交到 Git 仓库：
```bash
git add -A
git commit -m "release project"
git push origin master
```

推送到 GitHub Page：
```bash
git subtree push --prefix=build origin gh-pages
```
## 项目预览
地址：https://luvjia.github.io/react-musicplayer/

## create-react-app项目添加less配置
###暴露配置文件
`create-react-app`生成的项目，看不到webpack相关的配置文件，需要先暴露出来，使用如下命令即可:  

```bash
npm run eject


**安装`less-loader`和`less`**  

```bash
yarn add less-loader less --save
``  

**修改`webpack`配置**  

修改 `webpack.config.dev.js` 和 `webpack.config-prod.js` 配置文件  
  
*改动1*

+ `/\.css$/` 改为 `/\.(css|less)$/`  

*改动2*  
+ `test: /\.css$/` 改为 `/\.(css|less)$/`  

+ `test: /\.css$/` 的 `use` 数组配置增加 `less-loader`  

修改后如下  
``javascript
  {  
  loader:require.resolve('less-loader')  
  }
``

