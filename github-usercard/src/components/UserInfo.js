import React from 'react';
import {Card, CardTitle, CardText} from 'reactstrap';
import './UserInfo.scss';

export default function UserInfo(props) {


    return (
        <div className='userInfo-container'>
            <Card className='card'>
                <div>
                    <img width='200' src={props.info.avatar_url} alt={`${props.info.login} image`}/>
                </div>
                <div className='info-div'>
                    <h1>{props.info.name}</h1>
                    <CardTitle className='title'>Username: <span>{props.info.login}</span></CardTitle>
                    <CardText className='text'>Location: {props.info.location}</CardText>
                    <CardText className='text'>School: {props.info.company}</CardText>
                    <CardText className='text'>Bio: {props.info.bio}</CardText>
                    <CardText className='text'>Followers: {props.info.followers}</CardText>
                    <CardText className='text'>Following: {props.info.following}</CardText>
                </div>
            </Card>
        </div>
    )
}
