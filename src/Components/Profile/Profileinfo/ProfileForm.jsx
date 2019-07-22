import React from 'react';
import s from "./profileinfo.module.css";
import {Field} from "redux-form";


let ProfileForm = ({profile, ...props}) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.status}>
                <div className={s.stat}>
                    <div className={s.statusNew}>
                        <span>{profile.aboutMe}</span>
                    </div>
                </div>
                <div className={s.titleFollowers}>
                    <div>
                        <span className={s.titleHed}>fullname:</span>
                        <Field component={Input} name='fullName' validate={fieldRequired}/>
                    </div>
                    <span className={s.titleHed}>facebook:</span>
                    <Field component={Input} name='contacts.facebook' validate={fieldRequired}/>

                    <div>
                        <span className={s.titleHed}>vk:</span>
                        <Field component={Input} name='contacts.vk' validate={fieldRequired}/>
                    </div>
                    <div>
                        <span className={s.titleHed}>email:</span>
                        <Field component={Input} name='contacts.mainLink' validate={fieldRequired}/>
                    </div>
                    <div>
                        <span className={s.titleHed}>instagram:</span>
                        <Field component={Input} name='contacts.instagram' validate={fieldRequired}/>
                    </div>
                    <div>
                        <span className={s.titleHed}>looking for a Job:</span>
                        <Field component={Input} name='lookingForAJob' type={'checkbox'} />
                    </div>
                    <div>
                        <span className={s.titleHed}>looking for a job description:</span>
                        <Field component={Input} name='lookingForAJobDescription' validate={fieldRequired}/>
                    </div>
                    <div>
                        <div>
                            <span>Load your photos</span>
                        </div>
                        <Field component={Input} type='file' id={'photo'} validate={fieldRequired}/>
                    </div>
                    <button type="submit">Save</button>
                </div>
            </div>
        </form>
    )
};

const Input = ({input, meta, ...props}) => {
    return <div>
        { meta.touched && meta.invalid && <div style={{color: 'red' }}>{meta.error}</div>}
        <input {...props} {...input}/>
    </div>
};

let fieldRequired = (value) => {
    if (!value) return "Field is Required"
};

export default ProfileForm;