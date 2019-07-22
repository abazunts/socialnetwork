import React from "react";
import s from "./friendspage.module.css";
import FriendsPageItem from "./FriendsPageItem/friendsPageItem";
import PropTypes from 'prop-types'




const FriendsPage = (props) => {
    let friendsElement = props.friendPage.friends.map(d => <FriendsPageItem name={d.name} id={d.id} avatar={d.avatar}
                                                                            status={d.status}/>)
    return (
        <div className={s.friends}>
            <div className={s.title}>My friends</div>
            <div className={s.friend}>{friendsElement[0]}</div>
            <div className={s.friend}>{friendsElement[1]}</div>
            <div className={s.friend}>{friendsElement[2]}</div>
            <div className={s.friend}>{friendsElement[3]}</div>
            <div className={s.friend}>{friendsElement[4]}</div>
            <div className={s.friend}>{friendsElement[5]}</div>
            <div className={s.friend}>{friendsElement[6]}</div>
            <div className={s.friend}>{friendsElement[7]}</div>
        </div>
    )
}

FriendsPage.propTypes = {
    friendPage: PropTypes.shape({
        friends: PropTypes.object.isRequired
        }
    )
}

export default FriendsPage;