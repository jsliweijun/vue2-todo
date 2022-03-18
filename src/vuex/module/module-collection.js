import { forEach } from '../utils';
import Module from './module';

class ModuleCollection {
    constructor(options) {
        // 根模块
        this.root = null;
        this.register([], options); // [] 用于处理 记录父子关系。
    }

    register(path, rawModule) {
        let newModule = new Module(rawModule);
        // let newModule = {
        //     _raw: rootModule,
        //     _children: {},
        //     state: rootModule.state
        // };

        if (path.length == 0) {
            this.root = newModule;
        } else {
            // 转化成嵌套方式，树结构
            // [a] 它的父亲时 root
            // [a,c]  c 的父亲是 a ，要放在 a的 children 中

            // reduce 的数组是空时，需要有初始值，并且会返回初始值。
            // slice() 返回新数组，slice(begin,end) ,不包括end ，第 end 个
            let parent = path.slice(0, -1).reduce((pre, current) => {
                console.log('pre', current);
                // return pre._children[current];
                return pre.getChild(current);
            }, this.root);
            // parent._children[path[path.length - 1]] = newModule;
            parent.addChild(path[path.length - 1], newModule);
        }

        // 注册完根模块，继续注册 modules 里面的模块
        if (rawModule.modules) {
            forEach(rawModule.modules, (module, key) => {
                //console.log(module, key); // {state:{},getters:{}}  a
                this.register(path.concat(key), module); // [a]  {state:{}, modules:{aa:{}}}
            });
        }
    }
}

// 将配置的 options 结构处理成 tree 结构，处理过程使用 stack 记录父子关系

export default ModuleCollection;
