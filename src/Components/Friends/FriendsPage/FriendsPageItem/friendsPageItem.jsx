import React from 'react';
import s from './FriendsPageItem.module.css';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types'

const FriendsPageItem = (props) => {

    let path = "/" + props.id;

        return (
            <div className={s.friends}>
                <img src={props.avatar}></img>
                <span className={s.name}> <NavLink to={path}> {props.name} </NavLink></span>
                <span className={s.status}>{props.status}</span>
            </div>
        )

}

FriendsPageItem.propTypes = {
    id: PropTypes.string.isRequired,
    avatar: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired

}


export default FriendsPageItem;