import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 创建一个 store 实例
const store = new Vuex.Store({
    state: { age: 10 },
    getters: {},
    mutations: {},
    actions: {}
});

export default store;
