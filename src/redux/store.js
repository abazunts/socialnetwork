import React from 'react';
import dialogsReducer from './dialogs-reducer'
import profileReducer from "./profile-reducer";
import friendReducer from "./friend-reducer";


let store = {
    _state: {

        dialogsPage: {
            dialogs: [
                {
                    id: "0",
                    name: "Richard Nyman",
                    avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
                    status: "Online"
                },
                {
                    id: "1",
                    name: "Isaiah Ayrton",
                    avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
                    status: "Offline"
                },
                {
                    id: "2",
                    name: "Destiny Higgins",
                    avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
                    status: "Online"
                },

            ],
            messages: [
                {id: "0", check: "0", message: "Hey dude! Wazzap!?"},
                {
                    id: "1",
                    check: "1",
                    message: "This sounded a very good reason, and Alice was quite pleased to know..."
                },
                {id: "2", check: "1", message: "Ok man"},
            ],

            newMessage: '',
        },

        profilePage: {
            posts: [
                {
                    id: "0",
                    message: "She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.",
                    likeCount: "11",
                    commentsCount: "5",
                    shareCount: "2",
                    nowDate: "24.2.2019, 11:46"
                },
                {
                    id: "1",
                    message: "He was justified by the event; for the footpath soon after appeared a little wider and more worn, and the tinkle of a small bell gave the knight to understand that he was in the vicinity of some chapel or hermitage.",
                    likeCount: "15",
                    commentsCount: "9",
                    shareCount: "3",
                    nowDate: "26.2.2019, 9:15"
                }
            ],

            comments: [
                {
                    id: "0",
                    idpost: "1",
                    message: "he gave my mother such a turn",
                    likeCount: "15",
                    commentsCount: "5",
                    shareCount: "2",
                    nowDate: "24.2.2019, 11:46"

                },

                {
                    id: "1",
                    idpost: "1",
                    message: "he gave",
                    likeCount: "15",
                    commentsCount: "5",
                    shareCount: "2",
                    nowDate: "24.2.2019, 11:46"

                }
            ],
            newPostText: '',

            image: <img src="../img/myphoto.png"></img>,

            myName: "Katherine Faber"
        },

        friendPage: {
            friends: [
                {
                    id: "0",
                    name: "Richard Nyman",
                    avatar: "https://ns328286.ip-37-187-113.eu/ew/wallpapers/800x480/11016_800x480.jpg",
                    status: "Online"
                },
                {
                    id: "1",
                    name: "Isaiah Ayrton",
                    avatar: "https://static.wallpapers-anime.com/upload/20170603/684/M/d/H/p=160x200/MdHGEF.jpg",
                    status: "Online"
                },
                {
                    id: "2",
                    name: "Destiny Higgins",
                    avatar: "http://static.hdw.eweb4.com/media/thumbs/1/68/679674.jpg",
                    status: "Online"
                }
            ]
        }


    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subsсribe(observer) {
        this._callSubscriber = observer;
    },


    // dispatch(action) {
    //
    //     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    //     this._state.profilePage = profileReducer(this._state.profilePage, action);
    //     this._state.friendPage = friendReducer(this._state.friendPage, action);
    //
    //     this._callSubscriber(this._state);
    //
    //
    // }


}


export default store;
window.store = store;


