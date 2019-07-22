import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";


let mapState = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
};

export let withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) { return <Redirect to={'/login'}/>}
        return <Component {...props}/>
    };
    return connect(mapState)(RedirectComponent)
};

