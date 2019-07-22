import React from "react";
import s from "./rfriendsitem.module.css"
import PropTypes from 'prop-types'


const RFriendsItem = (props) => {
    return (
        <div className={s.rFriendsItem}>
            <div className={s.photo}>
                <img src={props.photo}/>
            </div>
            <div className={s.avatar}>
                <img src={props.avatar}/>
            </div>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.city}>
                {props.city}
            </div>
            <div className={s.count}>
                <div className={s.titles}> <a href="#" className={s.links}>Photos</a> </div>
                <div className={s.photoCount}>
                    {props.photoCount}
                </div>
                <div className={s.titles}> <a href="#" className={s.links}>Video</a> </div>
                <div className={s.videoCount}>
                    {props.videoCount}
                </div>
                <div className={s.titles}> <a href="#" className={s.links}>Song</a> </div>
                <div className={s.songCount}>
                    {props.songCount}
                </div>
            </div>
            <div className={s.status}>
                {props.status}
            </div>
            <button className={s.button}>Follow</button>
        </div>
    )
}

RFriendsItem.propTypes = {
    photo: PropTypes.object.isRequired,
    avatar: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    photoCount: PropTypes.number.isRequired,
    videoCount: PropTypes.number.isRequired,
    songCount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
}


export default RFriendsItem;