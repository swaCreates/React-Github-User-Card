import React from 'react'
import {Card, CardTitle} from 'reactstrap';

export default function FollowerInfo(props) {

    
    return (
        <div className='follower-container'>
            <Card className='card'>
                <div>
                    <img width='200' src={props.followerInfo.avatar_url} alt={`${props.followerInfo.login}`}/>
                </div>
                <div className='info-div'>
                    <CardTitle className='title'><span className='label'>Username:</span> <span>{props.followerInfo.login}</span></CardTitle>
                </div>
            </Card>
        </div>
    )
}
