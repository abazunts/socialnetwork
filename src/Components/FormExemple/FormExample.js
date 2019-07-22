import React from 'react';
import {Field} from "redux-form";


let FormExample = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <span>First Name</span>
            <Field component={Input} name='firstName'/>
            <span>Last Name</span>
            <Field component={Input} name='lastName'/>
            <button type="submit">Send</button>
        </form>

    </div>
};

let Input = (input, meta, ...props) => {
    return <div>
        <input  {...props} {...input}/>
    </div>
}

export default FormExample;