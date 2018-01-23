# react-musicplayer
A music player by React
![首页](/player.png)
## 说明
技术栈采用react(16.x)+react-router-dom(4.x)+ES6+create-react-app
### 如何运行

####  1、将项目克隆到本地，cd 到 react-musicplayer
```javascript
git clone git@github.com:LuvJia/react-musicplayer.git
cd eact-musicplayer
```
#### 2、安装依赖
```javascript
npm install
或
yarn install
```
#### 3、执行
```javascript
npm start
// npm run build(打包)
```
#### 4、打开浏览器浏览 http://localhost:3000/

## GitHub Page 发布
GitHub Page 需要使用相对路径，修改：
在yarn run build后该项目会生成一个build文件，但是点击其中的index.html文件打开后浏览器是空白页面。
解决办法:
```
去掉.gitignore文件中的/build,另外在在package.json配置文件中加一句："homepage": "./",然后进行打包(yarn run build)
```

打包后播放页面是空白的,是因为使用react-router-dom里的BrowserRouter as Router,改用HashRouter就好了
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
