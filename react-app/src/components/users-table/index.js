import React, {Component} from 'react';
import UserRow from '../user-row';
import './users-table.css';

export default function UsersTable({users, handleSort}) {
    const sortTable = (fieldName) => {
        return () => handleSort(fieldName);
    };

    return <table className="users-table">
        <thead>
            <tr>
                <th>
                    <input type="checkbox" name="" id=""/>
                </th>
                <th onClick={sortTable('firstName')}>Fist name</th>
                <th onClick={sortTable('lastName')}>Last name</th>
                <th onClick={sortTable('email')}>Email</th>
                <th onClick={sortTable('isActive')}>Is active</th>
            </tr>
        </thead>
        <tbody>
            {users.map(item => {
                return <UserRow key={item._id} user={item} />;
            })}
        </tbody>
    </table>
}