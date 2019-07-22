import React from 'react';
import s from './friendsitem.module.css';
import {NavLink} from 'react-router-dom';
import PropTypes from "prop-types";
import FriendsPageItem from "../FriendsPage/FriendsPageItem/friendsPageItem";

const FriendsItem = (props) => {
    let path = "/" + props.id;
    return (
        <div>
            {props.status != "Offline" &&
                <div className={s.friends}>
                <img src={props.avatar}></img>
                <span className={s.name}> <NavLink to={path}> {props.name} </NavLink></span>
                <span className={s.status}>{props.status}</span>
            </div>
            }
        </div>
    )
}

FriendsPageItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired

}

export default FriendsItem;