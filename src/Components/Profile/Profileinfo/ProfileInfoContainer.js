import React from "react"
import Profileinfo from "./profileinfo";
import {connect} from "react-redux";
import {
    putProfile,
    setAboutMe,
    getProfileFull,
    setChangeAboutMe, putPhotos
} from "../../../redux/profile-reducer";
import {setEditMode} from "../../../redux/auth-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
        userInfo: state.auth.userInfo,
        editMode: state.auth.editMode,
        userId: state.auth.userInfo.userId,
        isOwner: state.profilePage.isOwner
    })

};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {putPhotos, setChangeAboutMe, setAboutMe, putProfile, getProfileFull, setEditMode})
)(Profileinfo);

