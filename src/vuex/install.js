export let Vue;
// vuex 是一个插件，提供一个 install 方法
// 使用时，每个组件都会挂载一个 $store 对象，这个就是 根组件传入的 store，需要在这里进行给每个组件挂载上去。
export function install(_Vue) {
    Vue = _Vue;
    // 如何将 store 挂载到它们上面呢，每个组件实例都会的过程，生命周期钩子，通过 mixin 混入一个
    Vue.mixin({
        beforeCreate() {
            // this 是每个组件实例 ， 每个组件的option信息在 this.$options 上
            let options = this.$options;
            if (options.store) {
                // 根组件才配置了 store 属性
                this.$store = options.store;
            } else {
                if (this.$parent && this.$parent.$store) {
                    this.$store = this.$parent.$store;
                }
            }
        }
    });
}
