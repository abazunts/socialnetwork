import React from "react";
import {
    getDialogs,
    getMessages,
    postDialogs,
    putUpDialogs,
    setMessage,
    setNewMessageText
} from "../../redux/dialogs-reducer";
import Messages from "./messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        userId: state.auth.userInfo.userId
    }
};

const MessagesContainer = connect(mapStateToProps, {setMessage, setNewMessageText, getDialogs, postDialogs, putUpDialogs, getMessages})(Messages)


export default MessagesContainer;