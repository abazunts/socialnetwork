import React from 'react';
import {reduxForm} from "redux-form";
import FormExample from "./FormExample";


let FormExampleContainer = (props) => {
    let user = {
        firstName: 'Artem',
        lastName: 'Bazunts'
    };
        return <div>
               <ExampleForm initialValues={user}/>
            </div>
};

let ExampleForm = reduxForm({
    form: 'form-example'
})(FormExample);

export default FormExampleContainer;



