import Vue from 'vue';
import Router from 'vue-router';
import Users from '@/components/Users';
import Hello from '@/components/Hello';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Users',
            component: Users
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        }
    ]
});
