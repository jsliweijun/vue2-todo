export let Vue;

import link from './components/link';
import view from './components/view';

export default function install(_Vue) {
    // 用户决定插件中的Vue 版本
    Vue = _Vue;

    // 执行 router 实例中的方法，实现路由信息处理
    Vue.mixin({
        beforeCreate() {
            // 这个钩子在每个组件中都执行

            // Vue实例
            if (this.$options.router) {
                this._router = this.$options.router;
                this._router.init(this); // 初始化路由的逻辑，只初始化一次

                this._routerRoot = this; // 表示 根组件上有唯一一个标识 _routerRoot 执行自己
            } else {
                // 子，孙组件
                this._routerRoot = this.$parent && this.$parent._routerRoot;
            }
        }
    });

    // 给每个组件都增加 $router ,$route 这个两个对象，进行访问路由信息，使用路由。
    // 直接定义在Vue 的原型上，每个组件都能访问到了， 防止 $router $route 被覆盖，只给它们定义 get 方法
    // 代理
    Object.defineProperty(Vue.prototype, '$router', {
        get() {
            return {};
        }
    });
    Object.defineProperty(Vue.prototype, '$route', {
        get() {
            return {};
        }
    });

    // 注册两个核心的全局组件
    Vue.component('router-link', link);
    Vue.component('router-view', view);
}
