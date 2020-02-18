import React from 'react'
import FollowerInfo from './FollowerInfo';

export default function FollowerCard(props) {
    return (
        <div>
            <div>
                {props.followers.map(following => {
                    return <FollowerInfo key={following.id} followerInfo={following} />
                })}
            </div>
        </div>
    )
}
