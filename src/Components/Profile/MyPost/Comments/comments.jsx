import React from 'react';
import s from "./comments.module.css"




const Comments = (props) => {
        return (
            props.idMessage === props.idpost &&
        <div className={s.comments}>

            <div className={s.commentBlock}>
                <img src={props.avatar} className={s.myPhoto}/>
                <div className={s.myName}>
                    {props.myName}
                </div>
                <div className={s.message}>
                    {props.message}
                </div>
                <div className={s.date}>
                    {props.nowDate}
                    <a href="#">reply</a>
                </div>
                <div className={s.buttons}>
                    {props.like}
                    <button className={s.like}>Like</button>
                </div>
            </div>

        </div>



    )
}

export default Comments;