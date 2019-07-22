import React from "react";
import s from './navbar.module.css'
import {NavLink} from "react-router-dom";
import MusicIcon from './../../img/music.png'
import DialogIcon from './../../img/dialog.png'
import NewsIcon from './../../img/news.png'
import SettingsIcon from './../../img/Settings.png'
import FriendsIcon from './../../img/friends.png'
import ProfileIcon from './../../img/profile.png'


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.items}>
                <img className={s.image} src={NewsIcon}/>
                <div className={s.item}>
                    <NavLink exact to='/' activeClassName={s.active}>News</NavLink>
                </div>
                <img className={s.image} src={ProfileIcon}/>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
                </div>
                <img className={s.image} src={DialogIcon}/>
                <div className={s.item}>
                    <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
                </div>
                <img className={s.image} src={MusicIcon}/>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Music</NavLink>
                </div>
                <img className={s.image} src={FriendsIcon}/>
                <div className={s.item}>
                    <NavLink to="/friendsPage" activeClassName={s.active}>Friends</NavLink>
                </div>
                <img className={s.image} src={SettingsIcon}/>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>Settings</NavLink>
                </div>
                <div className={s.item}></div>
                <div className={s.item}></div>
                <img className={s.image} src={FriendsIcon}/>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>Find Users</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;