import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import UsersTable from '../users-table/index';
import axios from 'axios';
import Paginator from "../paginator/index";

const sortText = (fieldName, isAsc) => {
    if (isAsc) {
        return (a, b) => a[fieldName].localeCompare(b[fieldName]);
    }

    return (a, b) => b[fieldName].localeCompare(a[fieldName]);
};

const sortIsActive = (isAsc) => {
    if (isAsc) {
        return (a, b) => a.isActive - b.isActive;
    }

    return (a, b) => b.isActive - a.isActive;
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            paginatedUsers: [],
            itemsPerPage: 5,
            currentPage: 1,
            pages: 0,
            sortBy: 'firstName',
            isAsc: true
        };

        this.sortTable = this.sortTable.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);

        this.getUsers();
    }

    getUsers() {
        const that = this;
        (async function () {
            const response = await axios.get('http://localhost:3123/users');

            that.setState(prevState => {
                return Object.assign({}, prevState, {
                    users: response.data.users
                });
            });

            that.updatePagesNumber();

            that.setState(prevState => {
                return Object.assign({}, prevState, {
                    paginatedUsers: that.getPaginatedUsers(prevState.currentPage)
                });
            });
        })();
    }

    sortTable(fieldName) {
        let sortBy = this.state.sortBy;
        let isAsc = this.state.isAsc;
        let sortedUsers = [];

        if (fieldName === sortBy) {
            isAsc = !isAsc;
        }

        sortBy = fieldName;

        if (['firstName', 'lastName', 'email'].includes(fieldName)) {
            sortedUsers = [...this.state.users.sort(sortText(fieldName, isAsc))];
        } else if (fieldName === 'isActive') {
            sortedUsers = [...this.state.users.sort(sortIsActive(isAsc))];
        }

        this.setState(prevState => {
            return Object.assign({}, prevState, {
                sortBy,
                isAsc,
                users: sortedUsers
            });
        });

        this.setState(prevState => {
            return Object.assign({}, prevState, {
                paginatedUsers: this.getPaginatedUsers(prevState.currentPage)
            });
        });
    }

    updatePagesNumber() {
        this.setState(prevState => {
            return Object.assign({}, prevState, {
                pages: Math.ceil(this.state.users.length / this.state.itemsPerPage)
            });
        });
    }

    getPaginatedUsers(page) {
        const itemsPerPage = this.state.itemsPerPage;
        const start = (page - 1) * itemsPerPage;

        return this.state.users.slice(start, start + itemsPerPage);
    }

    handlePageChange(number) {
        const paginatedUsers = this.getPaginatedUsers(number);

        this.setState(prevState => {
            return Object.assign({}, prevState, {
                currentPage: number,
                paginatedUsers
            });
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>

                <div className="table-container">
                    <UsersTable users={this.state.paginatedUsers} handleSort={this.sortTable}/>
                </div>

                <Paginator
                    pagesNumber={this.state.pages}
                    handlePageChange={this.handlePageChange}
                    currentPageNumber={this.state.currentPage}
                />
            </div>
        );
    }
}

export default App;
