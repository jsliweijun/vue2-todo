<template>
    <div id="app">
        <router-link to="/">首页</router-link>
        <router-link to="/about">关于</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
// import Form from './components/form.vue';
import Test from './components/test.vue';
export default {
    name: 'App',
    components: { Test },
    mounted() {
        //  this.$router = 10; // "TypeError: Cannot set property $router of #<Vue> which has only a getter"
        console.log(this);
    }
};
</script>

<style></style>
