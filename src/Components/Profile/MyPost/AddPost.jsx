import React from 'react';
import s from "./myaddpost.module.css";
import {Route} from "react-router-dom";

const AddPost = (props) => {

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);

    }

    let addNews = () => {
        props.addNews();
    }

    let onNewsChange = (e) => {
        let text = e.target.value;
        props.updateNewNewsText(text);

    }

    return (
        <div className={s.addPostMain}>
            <Route exact path='/' render={() => {
                return (
                    <div className={s.postNews}>
                    <textarea onChange={onNewsChange} value={props.newsPage.newNewsText}
                              className={s.textarea} placeholder="What's new?"/>
                        <button className={s.buttonAdd}></button>
                        <button onClick={addNews} className={s.button}>Send</button>
                    </div>
                )
            }}/>
            <Route path='/profile' render={() => {
                return (
                    <div className={s.post}>
                <textarea onChange={onPostChange} value={props.newPostText}
                          className={s.textarea} placeholder="What's new?"/>
                        <button className={s.buttonAdd}></button>
                        <button onClick={addPost} className={s.button}>Send</button>
                    </div>
                )
            }}/>
        </div>
    )
}

export default AddPost;