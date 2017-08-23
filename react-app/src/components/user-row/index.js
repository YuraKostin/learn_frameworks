import React, {Component} from 'react';
import Avatar from '../avatar';

export default function UserRow({user}) {
    const isActiveImg = user.isActive ?
        'http://octoplusbox.com/images/msg-success.png' :
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAMAAABhEH5lAAAAJ1BMVEX/////AAD/8PD/Njb/5OT/AwP/+fn/Jyf/JCT/0tL/xMT/ra3/yspGm57oAAAASElEQVQYlWNgoAiwIZEQwMLOBSS52VkQIhyMrDwMnKyMHHAxJmZGRlagCCMzEwOyGCOKCFQMRQSLEKZGLMZjcQQWp2LzEDkAAOkjAVv/B0ZAAAAAAElFTkSuQmCC';

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

};