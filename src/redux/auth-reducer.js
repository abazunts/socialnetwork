import React from 'react'
import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";
import {getStatus, putStatus, setUserId} from "./profile-reducer";

const SET_AUTH = 'SN/AUTH/SET_AUTH';
const SET_STATUS = 'SN/AUTH/SET_STATUS';
const SET_USER_INFO = 'SN/AUTH/SET_USER_INFO';
const SET_EDIT_MODE = 'SN/AUTH/SET_EDIT_MODE';

const initialState = {
    isAuth: false,
    userInfo: {
        userId: null,
        email: null,
        login: null,
    },
    status: statuses.NOT_INITIALIZED,

    editMode: false,
}

let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_AUTH:
            return {...state, isAuth: action.isAuth}
        case SET_USER_INFO:
            return {
                ...state,
                userInfo: {
                    ...state.userInfo,
                    userId: action.userId,
                    login: action.login,
                }
            }
        case SET_EDIT_MODE:
            return {...state, editMode: action.editMode}
        default:
            return state
    }
}

export const setAuth = (isAuth) => ({type: SET_AUTH, isAuth});
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserInfo = (userId, login) => ({type: SET_USER_INFO, userId, login})
export const setEditMode = (editMode) => ({type: SET_EDIT_MODE, editMode})


export const getAuthMe = () => async (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS));
    let response = await apiService.getAuthMe();

    if (response.resultCode === 0) {
        dispatch(setUserInfo(response.data.id, response.data.login))
        dispatch(setUserId(response.data.id, response.data.login))
        dispatch(setAuth(true))
        dispatch(getStatus(response.data.id))
        dispatch(setStatus(statuses.SUCCESS))
    }
}

export const logOut = () => (dispatch) => {
    dispatch(setStatus(statuses.IN_PROGRESS))
    dispatch(putStatus('Offline'))
    apiService.logOut().then(response => {
        if (response.resultCode === 0) {
            dispatch(setAuth(false))
            dispatch(setStatus(statuses.SUCCESS))
        } else {
            dispatch(putStatus('Online'))
        }
    })
}


export default AuthReducer;