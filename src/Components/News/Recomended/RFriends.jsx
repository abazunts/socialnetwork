import React from "react";
import RFriendsItem from "./RFriendsItem/RFriendsItem";
import s from "./rfriends.module.css"
import PropTypes from 'prop-types'


const RFriends = (props) => {
    let rFriends = props.rFriends;

    let rFriendsElement = rFriends.map(f => <RFriendsItem
        avatar={f.avatar}
        photo={f.photo}
        name={f.name} f
        city={f.city}
        photoCount={f.photoCount}
        videoCount={f.videoCount}
        songCount={f.songCount}
        status={f.status}
    />)
    return (
        <div className={s.rFriends}>
            {rFriendsElement}
        </div>
    )
}

RFriends.propTypes = {
    rFriends: PropTypes.array.isRequired,
}

export default RFriends;