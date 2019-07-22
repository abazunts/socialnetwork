import React from "react";
import s from './mesage.module.css'
import PropTypes from 'prop-types'


const Message = (props) => {

    let addMessage = () => {

        if (props.senderId !== props.userId) {
            return (
                    <div className={s.messageLeft}>{props.message}</div>
            )
        } else
            return (
                    <div className={s.messageRight}>{props.message}</div>
            )
    }
    return (


        <div className={s.messages}>
            <div>
                {props.name}
            </div>
            {addMessage()}
        </div>
    )
}

Message.propTypes = {
    check: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
}

export default Message;