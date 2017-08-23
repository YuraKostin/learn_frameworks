import React, {Component} from 'react';
import UserRow from '../user-row';
import './users-table.css';

export default function UsersTable({users}) {
    return <table className="users-table">
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="" id=""/>
                </th>
                <th>Fist name</th>
                <th>Last name</th>
                <th>Email</th>
                <th>Is active</th>
            </tr>
        </thead>
        <tbody>
            {users.map(item => {
                return <UserRow key={item._id} user={item} />;
            })}
        </tbody>
    </table>
}