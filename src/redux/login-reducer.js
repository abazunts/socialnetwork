import React from 'react'
import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";
import {getAuthMe, setAuth} from "./auth-reducer";
import {putStatus} from "./profile-reducer";

const SET_USER_ID = 'SN/LOGIN/SET_USER_ID';
const SET_STATUS = 'SN/LOGIN/SET_STATUS';
const SET_EMAIL = 'SN/LOGIN/SET_EMAIL';
const SET_PASSWORD = 'SN/LOGIN/SET_PASSWORD';
const SET_CAPTCHA_URL = 'SN/LOGIN/SET_CAPTCHA_URL';
const SET_CAPTCHA_REQUIRED = 'SN/LOGIN/SET_CAPTCHA_REQUIRED';
const SET_CAPTCHA_TEXT = 'SN/LOGIN/SET_CAPTCHA_TEXT';
const SET_REMEMBER_ME = 'SN/LOGIN/SET_REMEMBER_ME';
const SET_MESSAGE = 'SN/LOGIN/SET_MESSAGE';

const initialState = {
    email: 'bazunc@gmail.com',
    password: 'asasda',
    rememberMe: false,
    captchaUrl: '',
    captchaText: '',
    captchaIsRequired: false,
    userId: '',
    status: '',
    message: '',
}

let loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_USER_ID:
            return {...state, userId: action.userId}
        case SET_EMAIL:
            return {...state, email: action.email}
        case SET_PASSWORD:
            return {...state, password: action.password}
        case SET_CAPTCHA_URL:
            return {...state, captchaUrl: action.captchaUrl}
        case SET_CAPTCHA_REQUIRED:
            return {...state, captchaIsRequired: action.captchaIsRequired}
        case SET_CAPTCHA_TEXT:
            return {...state, captchaText: action.captchaText}
        case SET_REMEMBER_ME:
            return {...state, rememberMe: action.rememberMe}
        case SET_MESSAGE:
            return {...state, message: action.message,}
        default:
            return state
    }
}

export const setUserId = (userId) => ({type: SET_USER_ID, userId});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setChangeEmail = (email) => ({type: SET_EMAIL, email})
export const setChangePassword = (password) => ({type: SET_PASSWORD, password})
export const setCaptchaUrl = (captchaUrl) => ({type: SET_CAPTCHA_URL, captchaUrl})
export const setCaptchaRequired = (captchaIsRequired) => ({type: SET_CAPTCHA_REQUIRED, captchaIsRequired})
export const setCaptchaText = (captchaText) => ({type: SET_CAPTCHA_TEXT, captchaText})
export const setRememberMe = (rememberMe) => ({type: SET_REMEMBER_ME, rememberMe})
export const setMessageError = (message) => ({type: SET_MESSAGE, message})


export const login = () => async (dispatch, getState) => {
    let {email, password, rememberMe, captchaText} = getState().loginPage;
    dispatch(setStatus(statuses.IN_PROGRESS));
    let response = await apiService.login(email, password, rememberMe, captchaText)

    if (response.resultCode === 0) {
        dispatch(setUserId(response.data.userId));
        dispatch(setCaptchaText(''));
        dispatch(setCaptchaRequired('false'));
        dispatch(setStatus(statuses.SUCCESS));
        dispatch(setAuth(true));
        dispatch(getAuthMe());
        dispatch(putStatus('Online'));
    }
    if (response.resultCode === 1) {
        dispatch(setMessageError(response.messages));
        dispatch(setStatus(statuses.ERROR));
    }
    if (response.resultCode === 10) {
        dispatch(setCaptchaRequired('true'));
        dispatch(getCaptcha());
        dispatch(setMessageError(response.messages));
        dispatch(setStatus(statuses.ERROR));
    }
}

export const getCaptcha = () => (dispatch) => {
    apiService.getCaptcha().then(response => {
        dispatch(setCaptchaUrl(response.url))
    })
}


export default loginReducer;