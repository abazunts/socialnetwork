import React from "react";
import s from './friends.module.css';
import FriendsItem from "./Friendsitem/friendsitem";
import PropTypes from 'prop-types'


const Friends = ({friendPage: {friends}}) => {

    let friendsElement = friends.map(d => <FriendsItem name={d.name} id={d.id} avatar={d.avatar} status={d.status}/>)

    return (
        <div className={s.friends}>
            <div className={s.status}> Friends online</div>
            <div className={s.friend}>{friendsElement}</div>
        </div>
    )
}

Friends.propTypes = {
    friendPage: PropTypes.shape({
        friends: PropTypes.object.isRequired
    })
}


export default Friends;