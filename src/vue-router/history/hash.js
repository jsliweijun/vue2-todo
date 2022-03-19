import History from './base';

function ensureHash() {
    if (!window.location.hash) {
        window.location.hash = '/';
    }
}

function getHash() {
    return window.location.hash.slice(1);
}

export default class Hash extends History {
    constructor(router) {
        super(router);

        // hash 路由初始化
        ensureHash();
    }

    // 获取当前路由
    getCurrentLocation() {
        return getHash();
    }

    // 设置监听
    setUpListener() {
        window.addEventListener('hashchange', () => {
            // hash 变化时，切换组件去渲染
            this.transitionTo(getHash());
        });
    }
}
