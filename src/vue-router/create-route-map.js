// 创建路由映射表 /a   {}

export function createRouteMap(routes, oldPathMap) {
    let pathMap = oldPathMap || {};

    routes.forEach((route) => {
        addRouteRecord(route, pathMap);
    });

    return {
        pathMap
    };
}

function addRouteRecord(route, pathMap, parent) {
    let path = parent ? `${parent.path}/${route.path}` : route.path;

    // 将 记录 和 路径 关联起来
    let record = {
        path,
        component: route.component,
        props: route.props || {},
        parent
    };
    pathMap[path] = record;

    // 递归处理 children
    route.children &&
        route.children.forEach((childRoute) => {
            addRouteRecord(childRoute, pathMap, record); // 在循环儿子路径时，将父节点也传入，拼接子路由时需要使用父路径进行拼接
        });
}
