<template>
    <div class="container">
        年龄： {{ this.$store.state.age }} <br />
        <div>getters: {{ this.$store.getters.addAge }}</div>
        <button @click="add">加1</button>
        <button @click="increment">commit 加1</button>
        <button @click="dispatch">dispatch 加1</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            // 可以直接修改 state ，但是不推荐
            this.$store.state.age++;
        },
        increment() {
            this.$store.commit('increment', { n: 10 });
        },
        dispatch() {
            this.$store.dispatch('asyncIncrement', { n: 11 });
        }
    },
    mounted() {
        console.log('son', this.$store);
    }
};
</script>

<style scoped lang="scss"></style>
