import { Vue } from './install';
// 具体需要 Vue 实例，从 Vue.use() 中传递进来的进行使用。

// 创建 store 实例，需要有一个 Store 类
// 对里面上数据实现 相应式，时通过 Vue 实例完成，里面需要 new 一个Vue 实例
// 使用 install 时传入的

// 要给这个类的实例提高 state ，getters  属性对象 this.$store.state.age
export class Store {
    constructor(options) {
        console.log('new Vuex.Store()', options);
        let { state, getters, actions, mutations } = options;

        // this.state = state; // 如果直接赋值给它，它不是响应式的。通过下面使用 Vue 实例实现响应式。

        // 使用一个 Vue 实例进行响应式管理这些 state
        this._vm = new Vue({
            data: {
                $$state: state // 重新命名，前面加 _ $ 这些变量不会被代理到 _vm实例(this)上
            }
        });

        console.log(this._vm);
    }

    // 代理操作，到响应式的 vue 实例中获取数据，当调用了 get 方法，就会进行依赖收集
    // 所以下次属性变化后，_vm 会通过组件更新
    get state() {
        return this._vm.$data.$$state;
    }
}
