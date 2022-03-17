# 使用

## 业务项目中看框架源码

将 vue-cli 的 webpack 配置 inspect 出来

```javascript
vue --inspect  >  config.js
// 能看到脚手架使用的 vue 的版本和具体文件 。 在这个文件中 debugger 能阅读源码
    alias: {
      '@': '/Users/liweijun/code/jsliweijun/vue2-todo/src',
      vue$: 'vue/dist/vue.runtime.esm.js' // node_modules
    },
```
