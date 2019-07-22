import React from "react";
import Header from "./header";
import {connect} from "react-redux";
import {getAuthMe, logOut} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return ({
        isAuth: state.auth.isAuth,
        userInfo: state.auth.userInfo,
        avatar: state.profilePage.profile.photos.small,
    })
}


export default connect(mapStateToProps, {getAuthMe, logOut})(HeaderContainer);



