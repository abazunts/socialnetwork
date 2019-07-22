import React from "react";
import s from './profilesmall.module.css'

const Profilesmall = (props) => {
    let {fullName, photos} = props;

    return (

        <div className={s.containerProfile}>
            <div className={s.profileSmall}>
                {/*<div className={s.button}>Edit</div>*/}
                <div className={s.myPhoto}>
                    <img className={s.myPhoto} src={photos.large}/>
                </div>
                <span className={s.profileName}>{fullName}</span>
                <div className={s.titlePhotos}>
                    <div className={s.titles}> <a href="#" className={s.links}>Photos</a> </div>
                    <div className={s.title}></div>
                </div>
                <div className={s.titleFollowers}>
                    <div className={s.titles}><a href="#" className={s.links}>Followers</a></div>
                    <div className={s.title}></div>
                </div>
                <div className={s.titleFollowing}>
                    <div className={s.titles}><a href="#" className={s.links}>Following</a></div>
                    <div className={s.title}></div>
                </div>

            </div>
        </div>

    )
}

export default Profilesmall;