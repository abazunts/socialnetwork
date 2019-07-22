import React from 'react';
import s from "./post.module.css"
import rePostIcon from "../../../../img/RepostIcon.png"
import Comments from "../Comments/comments";
import Addcomments from "../Comments/Addcomments";


const Post = (props) => {

    let profilePage = props.profilePage;

    let comments;
    let commentsMessage = profilePage.comments;


    if(commentsMessage !== undefined)
    {
        comments = commentsMessage.map(c => <Comments id={c.id}
                                                              idpost={c.idpost}
                                                              message={c.message}
                                                              likeCount={c.likeCount}
                                                              nowDate={c.nowDate}
                                                              idMessage={props.id}
                                                              myName={c.name}
                                                              avatar={c.avatar}
        />)
    }
    else {comments = null;}

    let likeComponent = null;
    let attachmentVideo = props.attachmentVideo;
    let attachmentPhoto = props.attachmentPhoto;


    let addLikePost = () => {
        props.addLikePost(props.id);
    }
    let addLikeNews = () => {
        props.addLikeNews(props.id);
    }



    let caseData;
    props.news !== undefined ? caseData = 1 : caseData = 0;
    switch (caseData) {
        case 1:
            likeComponent = addLikeNews;
            break;
        case 0:
            likeComponent = addLikePost;
            break;
        default:
            likeComponent = null;
            break;
    }
    return (
        <div>
            <div className={s.mainPost}>
                <img src={props.avatar} className={s.myPhoto}/>
                <div className={s.myName}>
                    {props.myName}
                    {props.rePostTo !== "" && props.rePostTo !== undefined &&
                    <span className={s.rePostTo}>
                    <img src={rePostIcon}/>
                        {props.rePostTo}
                </span>
                    }
                </div>
                <div className={s.date}>
                    {props.nowDate}
                </div>
                <div  className={s.message}>
                    {props.message}
                </div>
                <div className={s.attachment}>
                    {attachmentVideo !== "" && attachmentVideo !== undefined &&
                    <div className={s.attachmentContent}>
                        <iframe className={s.frame} src={attachmentVideo}
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                    </div>
                    }
                    {attachmentPhoto !== "" && attachmentPhoto !== undefined &&
                    <div className={s.attachmentContent}>
                        <img src={attachmentPhoto}/>
                    </div>
                    }
                </div>
                <div className={s.buttons}>
                    {props.like}
                    <button onClick={likeComponent} className={s.like}>Like</button>
                    {props.comments}
                    <button  className={s.comments}>Comments</button>
                    {props.share}
                    <button className={s.share}>Share</button>
                </div>
            </div>
            <div className={s.commentsBlock}>
                {comments}
                <Addcomments/>

            </div>
        </div>
    )
}

export default Post;