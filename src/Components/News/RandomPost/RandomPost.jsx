import React from "react";
import s from "./randompost.module.css";
import PropTypes from 'prop-types'


const random = (news) => {
    let min = 0;
    let max = news.length;
    let rand = min - 0.5 + Math.random() * max;
    rand = Math.round(rand);
    return rand;
}

const RandomPost = ({newsPage: {news}}) => {
    let rand = random(news)
    return (
        <div>
            <div className={s.headerPost}>
                <div className={s.avatar}>
                    <img src={news[rand].avatar}/>
                </div>
                <div className={s.name}>
                    {news[rand].name}
                </div>
                <div className={s.date}>
                    {news[rand].nowDate}
                </div>
            </div>
            <div className={s.randomPost}>
                <div className={s.attachmentPhoto}>
                    <img src={news[rand].attachmentPhoto}/>
                </div>
                {news[rand].attachmentVideo !== "" &&
                <div className={s.attachmentVideo}>
                    <iframe src={news[rand].attachmentVideo}/>
                </div>
                }
                <div className={s.message}>
                    {news[rand].message}
                </div>
                <div className={s.likeCount}>
                    {news[rand].likeCount} likes
                </div>
                <div className={s.commentsCount}>
                    {news[rand].commentsCount} comments
                </div>
                <button className={s.like}>Like</button>
                <button className={s.comment}>Comment</button>
            </div>
        </div>
    )
}

RandomPost.propTypes = {
    newsPage: PropTypes.shape({
        news: PropTypes.array.isRequired,
    })
}



export default RandomPost;