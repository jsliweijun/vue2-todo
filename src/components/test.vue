<template>
    <div class="container">
        {{ this.$store.state.age }}
        <button @click="add">加1</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            // 可以直接修改 state ，但是不推荐
            this.$store.state.age++;
        }
    },
    mounted() {
        console.log('son', this.$store);
    }
};
</script>

<style scoped lang="scss"></style>
