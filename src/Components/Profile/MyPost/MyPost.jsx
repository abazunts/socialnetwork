import React from 'react';
import Post from "./Post/Post";
import s from "./mypost.module.css";
import AddPost from "./AddPost";

const MyPost = (props) => {

    let newPostText=props.profilePage.newPostText;
    let postsElement = props.profilePage.posts.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate}
                                                              like={p.likeCount} comments={p.commentsCount}
                                                              share={p.shareCount} myName={props.profilePage.myName}
                                                              avatar={props.profilePage.profile.photos.small}
                                                              addLikePost={props.addLikePost}
                                                              addLikeNews={props.addLikeNews}
                                                              profilePage={props.profilePage}
                                                              commentsMessage={props.profilePage.comments}
    />)

    return (
        <div className={s.test}>
            <AddPost newNewsText={props.newsPage.newNewsText} newPostText={newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.onPostChange}
                     addNews={props.addNews}
                     updateNewNewsText={props.onNewsChange}
            />
            <div>

                {postsElement.reverse()}
            </div>
        </div>
    )
}

export default MyPost;