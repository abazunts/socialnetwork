import React from "react";
import s from "./profile.module.css"
import Friends from "../Friends/friends";

import MyPostContainer from "./MyPost/MyPostContainer";
import PropTypes from 'prop-types'
import ProfileInfoContainer from "./Profileinfo/ProfileInfoContainer";
import ProfilesmallContainer from "../Profilesmall/ProfilesmallContainer";
import {statuses} from "../../DAL/statuses";
import Preloader from "../Preloader/Preloader";


const Profile = (props) => {

    let {friendPage} = props;
    let {statusPage} = props.profilePage;


    return (<>
        {statusPage === statuses.IN_PROGRESS && <Preloader/> }

        <div className={s.containerContent}>
            <>
                <div className={s.gridLeft}>
                    {statusPage === statuses.SUCCESS && <>
                    <ProfilesmallContainer/>
                    <Friends friendPage={friendPage}/>
                    </> }
                </div>

                <ProfileInfoContainer />
                < div className={s.mypost}>
                    {statusPage === statuses.SUCCESS &&
                    <MyPostContainer/>
                    }
                </div>
            </>
        </div>

        </>
    )




}

Profile.propTypes = {
    profilePage: PropTypes.object.isRequired,
    friendPage: PropTypes.object.isRequired,
}

export default Profile;