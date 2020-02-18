import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';
import './UserInfo.scss';

export default function UserInfo(props) {


    return (
        <div className='userInfo-container'>
            <Card className='card'>
                <div>
                    <img width='200' src={props.info.avatar_url} alt={`${props.info.login}`}/>
                </div>
                <div className='info-div'>
                    <h1>{props.info.name}</h1>
                    <CardTitle className='title'><span className='label'>Username:</span> <span>{props.info.login}</span></CardTitle>
                    <CardText className='text'><span className='label'>Location:</span> {props.info.location}</CardText>
                    <CardText className='text'><span className='label'>School:</span> {props.info.company}</CardText>
                    <CardText className='text'><span className='label'>Bio:</span> {props.info.bio}</CardText>
                    <CardText className='text'><span className='label'>Followers:</span> {props.info.followers}</CardText>
                    <CardText className='text'><span className='label'>Following:</span> {props.info.following}</CardText>
                </div>
            </Card>
        </div>
    )
}
