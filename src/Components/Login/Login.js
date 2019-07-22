import React from "react"
import s from './login.module.css'
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";
import {reduxForm} from "redux-form";

let Login = (props) => {

    let onSubmit = (value) => {

    };

    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div className={s.login}>
            Please become authorized
            <LoginReduxForm {...props} onSubmit={onSubmit} />
        </div>
    )
};

let LoginReduxForm = reduxForm({
    form: 'login-form'
})(LoginForm);

export default Login;