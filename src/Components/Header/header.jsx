import React from "react";
import s from './header.module.css';
import logo from "./../../img/UI8Logo.png"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    let {isAuth, logOut, avatar } = props
    return (
        <header className={s.header}>
            <div className={s.imgLogo}>
                <img className={s.logo} src={avatar ? avatar : logo}/>
            </div>
            <div className={s.search}>
                <input className={s.searchText} wrap="off" placeholder="Find"/>
            </div>
            {!isAuth &&
            <div className={s.signIn}>
                <NavLink to="/login" activeClassName={s.active}>Sign In</NavLink>
            </div>
            }
            {isAuth &&
            <div className={s.signIn}>
                <NavLink to="/login" onClick={logOut} activeClassName={s.active}>Log Out</NavLink>
            </div>
            }
        </header>
    )
}

export default Header;



