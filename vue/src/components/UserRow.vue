<template>
    <tr>
        <td>
            <input type="checkbox" name="">
        </td>
        <td>
            <avatar :path="user.picture" :helloHandler="handleHello"></avatar>
            {{user.firstName}}
        </td>
        <td>
            {{user.lastName}}
        </td>
        <td>
            {{user.email}}
        </td>
        <td>
            <img v-if="user.isActive" src="http://octoplusbox.com/images/msg-success.png" alt="active">
            <img v-else src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAJ1BMVEX/////AAD/8PD/Njb/5OT/AwP/+fn/Jyf/JCT/0tL/xMT/ra3/yspGm57oAAAASElEQVQYlWNgoAiwIZEQwMLOBSS52VkQIhyMrDwMnKyMHHAxJmZGRlagCCMzEwOyGCOKCFQMRQSLEKZGLMZjcQQWp2LzEDkAAOkjAVv/B0ZAAAAAAElFTkSuQmCC" alt="active">
        </td>
    </tr>
</template>

<script>
    import Avatar from '@/components/Avatar';

    export default {
        name: 'user-row',
        props: ['user', 'helloHandler'],
        components: {Avatar},
        data() {
            return {
                parentHelloHandler: this.helloHandler
            }
        },
        methods: {
            handleHello() {
                alert('"Hello!" from "UserRow" component!');
                this.parentHelloHandler();
            }
        }
    }
</script>

<style>

</style>
