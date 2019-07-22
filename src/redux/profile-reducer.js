import React from "react";
import Myphoto from '../img/myphoto.png';
import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_LIKE = 'ADD-LIKE';
const SET_PROFILE_FULL = 'SN/PROFILEINFO/SET-PROFILE-FULL'
const SET_USER_ID = 'SN/PROFILEINFO/SET_USER_ID'
const SET_STATUS = 'SN/PROFILEINFO/SET_STATUS'
const SET_ABOUT_ME = 'SN/PROFILEINFO/SET_ABOUT_ME'
const SET_EDIT_MODE = 'SN/PROFILEINFO/SET_EDIT_MODE'
const SET_CHANGE_DESC = 'SN/PROFILEINFO/SET_CHANGE_DESC'
const SET_CHANGE_ABOUTME = 'SN/PROFILEINFO/SET_CHANGE_ABOUTME'
const SET_STATUS_PAGE = 'SN/PROFILEINFO/SET_STATUS_PAGE'
const SET_IS_OWNER = 'SN/PROFILEINFO/SET_IS_OWNER'

let initialState = {

    posts: [
        {
            id: "0",
            message: "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.",
            likeCount: "11",
            commentsCount: "5",
            myName: "Katherine Faber",
            avatar: Myphoto,
            shareCount: "2",
            nowDate: "24.02.2019, 11:46"
        },
        {
            id: "1",
            message: "He was justified by the event; for the footpath soon after appeared a little wider and more worn, and the tinkle of a small bell gave the knight to understand that he was in the vicinity of some chapel or hermitage.",
            likeCount: "15",
            commentsCount: "9",
            myName: "Katherine Faber",
            avatar: Myphoto,
            shareCount: "3",
            nowDate: "26.02.2019, 9:15"
        }
    ],

    comments: [
        {
            id: "0",
            idpost: "0",
            name: "Grace Hilton",
            avatar: "https://im0-tub-kz.yandex.net/i?id=e7f19129ffee0a57e6f121db68d01476&n=13&exp=1",
            message: "he gave my mother such a turn",
            likeCount: "15",
            nowDate: "28.02.2019, 11:46"

        },

        {
            id: "1",
            idpost: "0",
            name: "Richard Nyman",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            message: "he gave",
            likeCount: "15",
            nowDate: "01.03.2019, 11:46"

        },

        {
            id: "2",
            idpost: "1",
            name: "Anna Sven",
            avatar: "https://im0-tub-kz.yandex.net/i?id=cd1cffb02de7a1fb75c8c631caf2283f&n=13&exp=1",
            message: "Then she usually reads a book or just watches TV. My father is a doctor. He is tall and handsome. He has short dark hair and gray eyes.",
            likeCount: "15",
            nowDate: "05.03.2019, 11:46"

        }
    ],
    newPostText: '',
    statusPage: statuses.NOT_INITIALIZED,
    status: null,

    profile: {
        aboutMe: '',
        contacts: {
            facebook: "sd",
            website: "",
            vk: "dcd",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: ""
        },

        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: null,
        photos: {
            small: null,
            large: null
        },
    },


    editMode: false,
    isOwner: false,


}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            if (state.newPostText !== "") {
                let date = new Date();

                let nowDay = date.getDate();
                let nowMonth = date.getMonth() + 1;
                const nowYear = date.getFullYear();
                const nowHours = date.getHours();
                let nowMinutes = date.getMinutes();

                if (nowMonth < 10) {
                    nowMonth = '0' + nowMonth
                }
                ;

                if (nowDay < 10) {
                    nowDay = '0' + nowDay;
                }

                if (nowMinutes < 10) {
                    nowMinutes = '0' + nowMinutes;
                }

                let newPost = {
                    id: state.posts.length,
                    message: state.newPostText,
                    likeCount: 0,
                    avatar: Myphoto,
                    commentsCount: 0,
                    shareCount: 0,
                    nowDate: nowDay + "." + nowMonth + "." + nowYear + ", " + nowHours + ":" + nowMinutes
                }
                return {...state, posts: [...state.posts, newPost], newPostText: ""}
            } else alert("Необходимо добавить пост");
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case ADD_LIKE:
            return {...state, likeCount: {...state.posts[action.id].likeCount++}};
        case SET_PROFILE_FULL:
            return {
                ...state,
                profile: action.data,
                statusPage: action.statusPage,
            };
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId,
                fullName: action.login
            };
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_ABOUT_ME:
            return {...state, aboutMe: action.aboutMe};
        case SET_EDIT_MODE:
            return {...state, editMode: action.editMode,};
        case SET_CHANGE_DESC:
            return {
                ...state,
                profile: {
                    ...state.profile,
                    lookingForAJobDescription: action.desc
                }
            };
        case SET_CHANGE_ABOUTME:
            return {...state, aboutMe: action.aboutMe};
        case SET_STATUS_PAGE:
            return {...state, statusPage: action.statusPage};
        case SET_IS_OWNER:
            return {...state, isOwner: action.isOwner};
        default:
            return state

    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addLikeActionCreator = (id) => ({type: ADD_LIKE, id: id});

export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode});
export const setChangeAboutMe = (aboutMe) => ({type: SET_CHANGE_ABOUTME, aboutMe});


export const setProfileFull = (data, statusPage) => ({type: SET_PROFILE_FULL, data, statusPage});
export const setUserId = (userId, login) => ({type: SET_USER_ID, userId, login});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const setStatusPage = (statusPage) => ({type: SET_STATUS_PAGE, statusPage});
export const setAboutMe = (aboutMe) => ({type: SET_ABOUT_ME, aboutMe});
export const setIsOwner = (isOwner) => ({type: SET_IS_OWNER, isOwner});


export const getProfileFull = (userIdFromUrl) => (dispatch, getState) => {
    dispatch(setStatusPage(statuses.IN_PROGRESS))
    apiService.getProfileFull(userIdFromUrl).then((response) => {
        let userId = getState().auth.userInfo.userId;
        if (userId === response.userId) {
            dispatch(setIsOwner(true));
        } else dispatch(setIsOwner(false));
        dispatch(setProfileFull(response, statuses.SUCCESS));
    })
};

export const putStatus = (status) => () => {
    apiService.putStatus(status)
}

export const putProfile = (profile) => async (dispatch) => {
    let response = await apiService.putProfile(profile);
    dispatch(setEditMode(false))
}


export const getStatus = (userId) => (dispatch) => {
    apiService.getStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
};

export const putPhotos = (formData) => async () => {
    let response = await apiService.putPhotos(formData);
}


export default profileReducer;