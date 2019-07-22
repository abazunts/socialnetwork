import React from "react"
import Login from "./Login";
import {connect} from "react-redux";
import {
    getCaptcha,
    login,
    setCaptchaText,
    setChangeEmail,
    setChangePassword, setRememberMe
} from "../../redux/login-reducer";
import {loginSelector} from "../../redux/loginSelector";


let mapStateToProps = (state) => {
    return ({
        loginPage: loginSelector(state),
        isAuth: state.auth.isAuth
    })
};


export default connect(mapStateToProps, {login,setChangeEmail,setChangePassword,setCaptchaText,setRememberMe, getCaptcha })(Login);