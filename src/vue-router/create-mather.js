import { createRouteMap } from './create-route-map';

export default function createMatcher(routes) {
    // 创建映射表
    let { pathMap } = createRouteMap(routes);

    console.log('pathMap', pathMap);

    // 匹配
    function match(path) {
        return pathMap[path];
    }

    // 将新路由添加到已有的路由中
    function addRoutes(routes) {
        createRouteMap(routes, pathMap);
    }

    return {
        match,
        addRoutes
    };
}
