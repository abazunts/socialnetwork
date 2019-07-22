import React from "react";
import s from './profileinfo.module.css';
import PropTypes from 'prop-types'
import {Redirect} from "react-router-dom";
import ProfileForm from "./ProfileForm";
import {reduxForm} from "redux-form";



const Profileinfo = (props) => {

    let {editMode, profilePage, isOwner} = props;
    let {status, profile} = profilePage;
    let {putPhotos, isAuth, setEditMode, putProfile, setChangeAboutMe} = props;

    let onPutProfile = (values) => {
        setEditMode(false);
        putProfile(values);
        let formData = new FormData();
        let imagefile = document.querySelector('#photo');
        formData.append('image', imagefile.files[0]);
        putPhotos(formData)
    }


    let onClickChange = (e) => {
        e.target.style.border = '1px solid'
    }

    let onChangeAboutMe = (e) => {
        setChangeAboutMe(e.target.value)
    }

    let onKeyUpEnter = (e) => {
        if (e.keyCode === 13) {
            e.target.style.border = 'none'
            putProfile()
        }
    };



    return (

        <div className={s.containerContent}>
            <div className={s.profile}>
                {
                    isOwner && <button className={s.settingsNav} onClick={() => setEditMode(true)}/>
                }
                <img src={profile.photos.small} className={s.yourPhoto} alt={'Avatar'}/>
                <span className={s.yourName}>{profile.fullName}</span>
                <span className={s.statusUser}>{status}</span>
                <button className={s.mail}/>
                <button className={s.follow}>Follow</button>
            </div>
            {!editMode ?
                <div className={s.status}>
                    <div className={s.stat}>
                        <div>
                            <span>About me:</span>
                        </div>
                        <div className={s.statusNew}>
                            <textarea className={s.aboutMe} onFocus={onClickChange} onKeyUp={onKeyUpEnter} onChange={onChangeAboutMe}
                                      value={profile.aboutMe}/>
                        </div>
                    </div>
                    <div className={s.titleFollowers}>
                        <span className={s.titleHed}>facebook:</span>
                        <span className={s.titleIntro}><a target={'_blank'}
                            href={profile.contacts.facebook}>{profile.contacts.facebook}</a></span>

                        <div>
                            <span className={s.titleHed}>vk:</span>
                            <span className={s.titleIntro}><a  target={'_blank'}
                                href={profile.contacts.vk} >{profile.contacts.vk}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>instagram:</span>
                            <span className={s.titleIntro}><a  target={'_blank'}
                                href={profile.contacts.instagram}>{profile.contacts.instagram}</a></span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a Job:</span>
                            <span className={s.titleIntro}>{profile.lookingForAJob ? <span>Yes</span> :
                                <span>No</span>}</span>
                        </div>
                        <div>
                            <span className={s.titleHed}>looking for a job description:</span>
                            <span className={s.titleIntro}>{profile.lookingForAJobDescription}</span>
                        </div>
                    </div>

                </div>
                :
                <ProfileEditForm onSubmit={onPutProfile} profile={profile} initialValues={profile}/>
            }
        </div>
    )
};

let ProfileEditForm = reduxForm({
    form: 'profileEditForm'
})(ProfileForm);

Profileinfo.propTypes = {
    profilePage: PropTypes.shape({
        myName: PropTypes.object.isRequired,
        myProfileData: PropTypes.shape({
            status: PropTypes.string.isRequired,
            videos: PropTypes.string.isRequired,
            reposts: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
        })
    }),
}

export default Profileinfo;