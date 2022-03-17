<script>
export default {
    name: 'LevelRenderFuntion',
    props: {
        level: String
    },
    render() {
        // h 是 createElement(tag,{},[]) 返回一个 vnode

        // 方式1 通过 h 函数创建vndoe ，实现模版内容
        // let vnode = h('h1', {}, ['123', '456']);
        // console.log('vnode', vnode);
        // return vnode;

        // 方式2 使用 jsx
        console.log('render', this);
        let tag = 'h' + this.$props.level;

        let child = this.$slots.default;

        let jsx = <tag>{child}</tag>;

        return jsx;
    }
};
</script>
