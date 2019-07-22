import React from "react"
import s from './login.module.css'
import {statuses} from "../../DAL/statuses";
import {Field} from "redux-form";

let LoginForm = (props) => {
    let {email, password, captchaUrl, captchaText, message, status, captchaIsRequired} = props.loginPage;
    let {login, getCaptcha, setChangeEmail,setChangePassword,setCaptchaText,setRememberMe} = props;



    let onChangeEmail = (e) => {
        setChangeEmail(e.target.value)
    }
    let onChangePassword = (e) => {
        setChangePassword(e.target.value)
    }

    let onChangeCaptcha = (e) => {
        setCaptchaText(e.target.value)
    }

    let onChangeRememberMe = (e) => {
        setRememberMe(e.target.checked)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.input}>
                <div className={s.inputName}>
                    <Field component={Input} name='login' placeholder={'Enter you login'} onChange={onChangeEmail} value={email}
                    validate={[fieldRequired]}
                    />
                </div>
                <div className={s.inputPassword}>
                    <Field component={Input} name='password' placeholder={'Enter you password'} onChange={onChangePassword} type={'password'}
                           value={password}
                    validate={[fieldRequired]}
                    />
                </div>
                <div>
                    <Field component={Input} name='rememberMe' type='checkbox' onChange={onChangeRememberMe}/>rememberMe
                </div>
                {captchaIsRequired &&
                <div>
                    <div>
                        <img className={s.captcha} src={captchaUrl}/>
                    </div>
                    <div>
                        <button onClick={() => getCaptcha()}>Update</button>
                    </div>
                    <div>
                        <Field component={Input} name='captcha' type='text' onChange={onChangeCaptcha} value={captchaText}/>
                    </div>
                </div>
                }
            </div>
            <div>
                <button onClick={() => login()}
                        disabled={status === statuses.IN_PROGRESS} className={s.buttonLogin}>Login
                </button>
            </div>
            <div className={s.errorMessage}>
                {message}
            </div>
        </form>
    )
};

const Input = ({input, meta, ...props} ) => {
    return <div>
        { meta.active && meta.invalid && <div style={{color: 'red' }}>{meta.error}</div>}
        <input {...props} {...input}/>
    </div>

};

let fieldRequired = (value) => {
    if(!value) return "Field is Required"
};

export default LoginForm;