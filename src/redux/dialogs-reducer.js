import dialogsAPI from "../DAL/dialogsAPI";

const SET_MESSAGE = 'SN/MESSAGE/SET_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'SN/MESSAGE/UPDATE-NEW-MESSAGE-TEXT';
const SET_DIALOGS = 'SN/MESSAGE/SET_DIALOGS';
const SET_MESSAGE_TEXT = 'SN/MESSAGE/SET_MESSAGE_TEXT';
const SET_USER_ID = 'SN/MESSAGE/SET_USER_ID';


let initialState = {
    dialogs: [
        {
            id: "0",
            name: "Richard Nyman",
            avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
            body: '',
            status: "Online"
        },
        {
            id: "1",
            name: "Isaiah Ayrton",
            avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
            body: '',
            status: "Offline"
        },
        {
            id: "2",
            name: "Destiny Higgins",
            avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
            body: '',
            status: "Online"
        },

    ],
    messages: [
        {
            id: "0",
            check: "0",
            message: "Hey dude! Wazzap!?"
        },
        {
            id: "1",
            check: "1",
            message: "This sounded a very good reason, and Alice was quite pleased to know..."
        },
        {
            id: "2",
            check: "1",
            message: "Ok man"
        },
    ],

    newMessage: '',

    userId: '',

}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessage: action.newText}
        case SET_MESSAGE:
            return {
                ...state,
                newMessage: "",
                messages: action.items
            };
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }

        case SET_MESSAGE_TEXT:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        case SET_USER_ID:
            return {
                ...state,
                userId: action.userId
            }
        default:
            return state
    }
}

export const setMessage = (items) => ({type: SET_MESSAGE, items});
export const setMessageText = (message) => ({type: SET_MESSAGE_TEXT, message});
export const setNewMessageText = newText => ({type: UPDATE_NEW_MESSAGE_TEXT, newText});
export const setDialogs = dialogs => ({type: SET_DIALOGS, dialogs});
export const setUserId = userId => ({type: SET_USER_ID, userId});


export const getDialogs = () => (dispatch) => {
    dialogsAPI.getDialogs().then(dialogs => {
        dispatch(setDialogs(dialogs));
    })
};

export const putUpDialogs = () => (dispatch, getState) => {
    let userId = 2;
    dialogsAPI.putUpDialogs(userId).then(res => {
        return res
    })
}

export const postDialogs = () => (dispatch, getState) => {
    let userId = getState().dialogsPage.userId;
    let bodyText = getState().dialogsPage.newMessage;
    dialogsAPI.postDialogs(userId, bodyText).then(res => {
        dispatch(setMessageText(res.message));

    })
};

export const getMessages = (userId) => (dispatch) => {
    dialogsAPI.getMessages(userId).then(res => {
        dispatch(setMessage(res.items));
        dispatch(setUserId(userId))
    })
};

export default dialogsReducer;