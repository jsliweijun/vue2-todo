class Module {
    constructor(rawModule) {
        this._raw = rawModule;
        this._children = {};
        this.state = rawModule.state;
    }
    getChild(childName) {
        return this._children[childName];
    }
    addChild(childName, module) {
        this._children[childName] = module;
    }
}

export default Module;
