<template>
    <div id="app">
        <Test></Test>
    </div>
</template>

<script>
// import Form from './components/form.vue';
import Test from './components/test.vue';
export default {
    name: 'App',
    components: { Test },
    mounted() {
        console.log('app', this.$store);
    }
};
</script>

<style></style>
