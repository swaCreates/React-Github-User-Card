import React from 'react';
import UserInfo from './UserInfo';
import './UserCard.scss';


export default function UserCard(props) {


    return (
        <div className='userCard-container'>
            <div>
                {props.user.map(info=> {
                    return <UserInfo key={info.id} info={info} />
                })}
            </div>
        </div>
    )
}
