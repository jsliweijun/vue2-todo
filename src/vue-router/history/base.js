function createRoute(record, location) {
    const matched = [];

    // 进行父级查找
    if (record) {
        while (record) {
            matched.unshift(record);
            record = record.parent;
        }
    }

    return {
        ...location,
        matched
    };
}

export default class History {
    constructor(router) {
        this.router = router;

        // 当前路径, 查找
        this.current = createRoute(null, {
            path: '/'
        });
    }

    transitionTo(path, cb) {
        let record = this.router.match(path);

        console.log('record', record);

        this.current = createRoute(record, { path });

        console.log('current ', this.current); // 匹配到了两个 组件

        cb && cb();
    }
}
