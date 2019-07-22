import React from "react";
import s from './footer.module.css'


const Footer = (props) => {
    return (
        <footer className={s.footer}>
            <div className={s.social}>
                    <div className={s.facebook}></div>
                    <div className={s.twitter}></div>
                    <div className={s.google}></div>
            </div>
            <div className={s.reserved}>
                © 2019 – All Right Reserved
            </div>
        </footer>
    )
}

export default Footer;