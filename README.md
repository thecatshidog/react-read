## react 源码阅读

怎么启动当前的项目，然后去改变 react 的代码，自动更新在我们的 example 当中

git clone 当前的项目到本地

```
npm install lerna -g
yarn
yarn watch
yarn link:react
yarn dev
```

按照上面的步骤就可以启动在 example 当中启动我们对应的 react-code 的代码了，现在我们就能在 react-code 当中去做对应的代码更改，然后体现在我们的 example 当中了。

目前只会看 react 和 react-dom 的代码，后面更多的会去看 react-loader 是怎么去做编译，然后一些 react 周边的工具到底做了哪些事情。

类似于 redux 的代码，比较简单，可以另外起一个项目，到时候讲解一下对应的代码，顺便基于 redux 实现一套数据流管理的框架
