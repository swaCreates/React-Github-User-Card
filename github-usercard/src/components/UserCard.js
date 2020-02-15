import React from 'react';
import UserInfo from './UserInfo';
import './UserCard.scss';


export default function UserCard(props) {


    return (
        <div className='userCard-container'>
            <h1>{props.user.map(name => {
                return name.name;
            })}</h1>
            <div>
                {props.user.map(info=> {
                    return <UserInfo key={info.id} info={info} />
                })}
            </div>
        </div>
    )
}
