<template>
    <div class="table-container">
        <table class="users-table">
            <tr class="users-table__header">
                <th><input type="checkbox" name="" id=""></th>
                <th @click="sort('firstName')">First Name</th>
                <th @click="sort('lastName')">Last Name</th>
                <th @click="sort('email')">Email</th>
                <th @click="sort('isActive')">Is active</th>
            </tr>
            <user-row v-for="user in paginatedUsers"
                      :key="user._id"
                      :user="user"
                      :helloHandler="usersHelloHandler"></user-row>
        </table>

        <ul class="paginator">
            <li v-for="item in pages" @click="handlePageChange(item)"
                class="paginator__item" v-bind:class="[currentPage == item ? 'paginator__item_active': '']">{{item}}</li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserRow from '@/components/UserRow';

    const sortText = (fieldName, isAcs) => {
        if (isAcs) {
            return (a, b) => a[fieldName].localeCompare(b[fieldName]);
        }

        return (a, b) => b[fieldName].localeCompare(a[fieldName]);
    };

    const sortActiveState = (isAcs) => {
        if (isAcs) {
            return (a, b) => a.isActive - b.isActive;
        }

        return (a, b) => b.isActive - a.isActive;
    };

    const getSortedUsers = (array, sortBy, isAcs) => {
        switch (sortBy) {
            case 'firstName':
                return array.sort(sortText('firstName', isAcs));
            case 'lastName':
                return array.sort(sortText('lastName', isAcs));
            case 'email':
                return array.sort(sortText('email', isAcs));
            case 'isActive':
                return array.sort(sortActiveState(isAcs));
        }
    };

    export default {
        name: 'users',

        data() {
            return {
                users: [],
                sortBy: 'firstName',
                isAcs: true,
                currentPage: 1,
                itemsPerPage: 5,
            }
        },

        components: {UserRow},

        computed: {
            paginatedUsers() {
                const users = getSortedUsers(this.users, this.sortBy, this.isAcs);
                const itemsPerPage = this.itemsPerPage;
                const start = (this.currentPage - 1) * itemsPerPage;

                return users.slice(start, start + itemsPerPage);
            },

            pages() {
                return Math.ceil(this.users.length / this.itemsPerPage);
            }
        },

        created() {
            this.getUsers();
        },

        methods: {
            async getUsers() {
                const response = await axios.get('http://localhost:8000/users');

                if (response.data.users.length) {
                    this.users = response.data.users;
                }
            },

            sort(fieldName) {
                if (this.sortBy === fieldName) {
                    this.isAcs = !this.isAcs;
                }

                this.sortBy = fieldName;
            },

            handlePageChange(number) {
                this.currentPage = number;
            },

            usersHelloHandler() {
                alert('"Hello!" from "Users" component!');
            }
        }
    }
</script>

<style>
    .table-container {
        width: 60%;
        margin: 0 auto;
    }

    .users-table {
        width: 100%;
    }

    .users-table__header {
        text-align: left;
    }

    .users-table__header th:not(:first-of-type) {
        cursor: pointer;
    }

    .paginator {
        display: flex;
        justify-content: center;
        list-style-type: none;
    }

    .paginator__item {
        width: 20px;
        padding: 5px;
        background: #35495e;
        margin: 0 10px;
        text-align: center;
        color: #fff;
        font-weight: bold;
        cursor: pointer;
        border-radius: 5px;

        -webkit-transition: background .3s;
        -moz-transition: background .3s;
        -ms-transition: background .3s;
        -o-transition: background .3s;
        transition: background .3s;
    }

    .paginator__item_active {
        background: #41b883;
    }
</style>
