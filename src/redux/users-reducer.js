import apiService from "../DAL/samuraiAPI";
import {statuses} from "../DAL/statuses";

const FOLLOW = 'SN/USERS/FOLLOW';
const UNFOLLOW = 'SN/USERS/UNFOLLOW';
const SET_USERS = 'SN/USERS/SET_USERS';
const SET_STATUS = 'SN/USERS/SET_STATUS';
const SET_TOTAL_COUNT = 'SN/USERS/SET_TOTAL_COUNT';
const SET_PAGE_NUMBER = 'SN/USERS/SET_PAGE_NUMBER';
const SET_PAGE_SIZE = 'SN/USERS/SET_PAGE_SIZE';

let initialState = {
    users: [],
    pageNumber: 1,
    pageSize: 10,
    totalCount: '',
    currentPage: 1,
    status: statuses.NOT_INITIALIZED

}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...action.users]}
        case SET_STATUS:
            return {...state, status: action.status}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.totalCount,};
        case SET_PAGE_NUMBER:
            return {...state, pageNumber: action.pageNumber, currentPage: action.pageNumber,};
        case SET_PAGE_SIZE:
            return {...state, pageSize: action.pageSize,};
        default: return state;
    }

}


export const setFollow = (userId) => ({type: FOLLOW, userId})
export const setUnfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setPageNumber = (pageNumber) => ({type: SET_PAGE_NUMBER, pageNumber})
export const setPageSize = (pageSize) => ({type: SET_PAGE_SIZE, pageSize})


export const getUsers = () => async (dispatch, getState) => {
    let state = getState().usersPage
    dispatch(setStatus(statuses.IN_PROGRESS))
    let response = await apiService.getUsers(state.pageSize, state.pageNumber)
    dispatch(setUsers(response.items));
    dispatch(setTotalCount(response.totalCount))
    dispatch(setStatus(statuses.SUCCESS))
};

export const follow = (userId) => async (dispatch) => {
    let data = await apiService.follow(userId)
    data.resultCode === 0 ? dispatch(setFollow(userId)) : alert(data.messages)
};

export const unfollow = (userId) => async (dispatch) => {
    await apiService.unfollow(userId);
        dispatch(setUnfollow(userId));
};

export default usersReducer;