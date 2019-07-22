import React from "react";
import News from "./news";
import {setLikeNews, setNews, setNewNewsText} from "../../redux/news-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newsPage: state.newsPage
    }
};

const NewsContainer = connect(mapStateToProps, {setLikeNews, setNews, setNewNewsText} )(News)



export default NewsContainer;