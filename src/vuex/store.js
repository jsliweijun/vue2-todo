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

        // getters 在配置的 store 文件中是一个 函数，需要在获取 getters 时调用里面的函数
        // 将 getters 转为 _vm 的计算属性和 Store的实例属性，获取时通过代理道 _vm 获取值。
        this.getters = {};
        let computed = {}; // 调用计算属性时，需要传入state
        let keys = Object.keys(getters);
        keys.forEach((key) => {
            computed[key] = () => {
                return getters[key](this.state);
            };
        });
        // 增加代理
        keys.forEach((key) => {
            Object.defineProperty(this.getters, key, {
                get: () => {
                    return this._vm[key];
                }
            });
        });

        // this.state = state; // 如果直接赋值给它，它不是响应式的。通过下面使用 Vue 实例实现响应式。
        // 使用一个 Vue 实例进行响应式管理 state
        this._vm = new Vue({
            data: {
                $$state: state // 重新命名，前面加 _ $ 这些变量不会被代理到 _vm实例(this)上
            },
            computed
        });

        // console.log(this._vm);
    }

    // 代理操作，到响应式的 vue 实例中获取数据，当调用了 get 方法，就会进行依赖收集
    // 所以下次属性变化后，_vm 会通过组件更新
    get state() {
        // 使用实例时，用 $xxx 命名格式的变量
        console.log('获取 vuex 值');
        return this._vm.$data.$$state;
    }
}
