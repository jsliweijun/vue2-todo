import Vue from 'vue';

// 没有个组件都会创建 一个 VueComponent 构造函数，当运行时会执行它的 init 方法初始化创建出组件实例
// 组件继承了 Vue 构造函数，拥有了它身上的方法
import App from './App.vue';
import store from './store';

Vue.config.productionTip = false;

// console.log('app VueComponent ', App);

// 由于脚手架进行 工程化 开发前端，在 cli 项目中的vue没有 编译模块，将模版编译成 虚拟dom 都功能交给了 vue-loader
// 运行时的 Vue 使用 render 方法将 VueComponent 渲染成真实dom 挂载到 dom 中。
const vm = new Vue({
    store,
    render: (h) => h(App) // render 函数是在 beforeMount 之后执行
}).$mount('#app');

// console.log('vm', vm.$store);
