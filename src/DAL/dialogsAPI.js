
import {samuraiAPI} from "./samuraiAPI";


const dialogsAPI ={
    getDialogs() {
        return samuraiAPI.get('dialogs').then(res => {
            return res.data
        })
    },

    putUpDialogs(userId) {
        return samuraiAPI.put(`dialogs/${userId}`).then(response => {
            return response.data
        })
    },

    postDialogs(userId, body) {
        return samuraiAPI.post(`dialogs/${userId}/messages`, {body}).then(response => {
            return response.data
        })
    },

    getMessages(userId) {
        return samuraiAPI.get(`dialogs/${userId}/messages`).then(response => {
            return response.data
        })
    },





};


export default dialogsAPI;

