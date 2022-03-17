export default (context) => {
    console.log('context', context);
    let tag = 'h' + context.props.level;

    let child = context.slots().default;

    return <tag>{child}</tag>;
};
