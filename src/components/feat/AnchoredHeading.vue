<template>
    <div class="container">
        <h1 v-if="level == '1'">
            <slot></slot>
        </h1>
        <h2 v-if="level == '2'">
            <slot></slot>
        </h2>
        <h3 v-if="level == '3'">
            <slot></slot>
        </h3>
    </div>
</template>

<script>
export default {
    name: 'AnchoredHeading',
    props: {
        level: String
    }
};
</script>
