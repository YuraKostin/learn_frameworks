import React, {Component} from 'react';
import logo from '../../logo.svg';
import './App.css';
import UsersTable from '../users-table/index';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [],
            itemsPerPage: 5,
            currentPage: 1,
            pages: 0
        };

        this.getUsers();
    }

    getUsers() {
        (async function () {
            const response = await axios.get('http://localhost:3123/users');

            this.setState((props) => {
                return Object.assign({}, props, {
                    users: response.data.users
                });
            });
        })();
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <UsersTable users={this.state.users}/>
            </div>
        );
    }
}

export default App;
