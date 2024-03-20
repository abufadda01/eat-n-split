import React from 'react'
import Friend from './Friend'

const FriendList = ({friends}) => {
    
  return (
    <ul>{friends && friends.map((friend) => (
            <Friend key={friend.id} {...friend} friend={friend} />
        ))}
    </ul>
  )
}

export default FriendList