import Vue from 'vue';
// import Vuex from 'vuex';
import Vuex from '../vuex';

Vue.use(Vuex);

// 创建一个 store 实例
const store = new Vuex.Store({
    state: { age: 10 },
    getters: {
        addAge(state) {
            return 10 + state.age;
        }
    },
    mutations: {
        increment(state, payload) {
            state.age += payload.n;
        }
    },
    actions: {
        asyncIncrement({ commit }, payload) {
            setTimeout(() => {
                commit('increment', payload);
            }, 2000);
        }
    }
});

export default store;
