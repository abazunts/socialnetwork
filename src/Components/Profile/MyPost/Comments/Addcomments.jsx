import React from 'react';
import s from "./addcomments.module.css";


const Addcomments = (props) => {
    return (
        <div className={s.comments}>
            <div className={s.commentBlock}>
                <textarea className={s.textarea}/>
                <button className={s.button}>Send</button>
            </div>
        </div>
    )
}

export default Addcomments;