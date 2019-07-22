import React from 'react';
import MyPost from "./MyPost";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newsPage: state.newsPage,
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLikePost: (id) => {
            dispatch(addLikeActionCreator(id))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;