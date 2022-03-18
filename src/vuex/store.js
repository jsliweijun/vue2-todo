import { Vue } from './install';
import ModuleCollection from './module/module-collection';
// 具体需要 Vue 实例，从 Vue.use() 中传递进来的进行使用。

export class Store {
    constructor(options) {
        let r = new ModuleCollection(options);
        console.log(r);
    }
}
