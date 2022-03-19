import createMatcher from './create-mather';
import HTML5History from './history/h5';
import Hash from './history/hash';
import install, { Vue } from './install';

// 浏览器底层 路由变化的方式 ： hashchange 事件， history api 这两种API
class VueRouter {
    constructor(options = {}) {
        const routes = options.routes;

        this.mode = options.mode || 'hash';

        // 通过配置的 routes 创建一个路由对应记录
        // /  home
        // /about  About
        // /about/a  [About,AboutA]

        // 是一个对象，里面包含 路由映射表
        this.matcher = createMatcher(routes || []);

        // 通过不同模式初始化不同的路由系统
        switch (this.mode) {
            case 'hash':
                this.history = new Hash(this); // 当前管理的路由
                break;
            case 'history':
                this.history = new HTML5History(this);
                break;
        }
    }

    // hash, history 底层需要使用这个
    match(location) {
        return this.matcher.match(location);
    }

    init(app) {
        const history = this.history; //当前管理的路由，它提供路由跳转，返回等功能。

        const setUpListener = () => {
            history.setUpListener();
        };

        history.transitionTo(history.getCurrentLocation(), setUpListener);
    }
}

VueRouter.install = install;

export default VueRouter;
