import React, {Component} from 'react';
import Avatar from '../avatar';

export default function UserRow({user}) {
    const isActiveImg = user.isActive ?
        'img1' : 'img2';


    return <tr>
        <td>
            <input type="checkbox" name="" id=""/>
        </td>
        <td>
            <Avatar path={user.picture} /> {user.firstName}
        </td>
        <td>
            {user.lastName}
        </td>
        <td>
            {user.email}
        </td>
        <td>
            <img src={isActiveImg} alt="" />
        </td>
    </tr>;
}