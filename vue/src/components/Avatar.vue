<template>
    <img :src="path" alt="" @click="handleClick()"/>
</template>

<script>
    export default {
        name: 'avatar',
        props: ['path', 'helloHandler'],
        data() {
            return {
                parentHelloHandler: this.helloHandler
            }
        },
        methods: {
            handleClick() {
                alert('"Hello!" from "Avatar" component!');
                this.parentHelloHandler();
            }
        }
    };
</script>
