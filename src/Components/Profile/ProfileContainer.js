import React from "react";
import Profile from "./profile";
import {connect} from "react-redux";
import {friendPageSelector, profilePageSelector} from "./profileSelector";
import {getProfileFull} from "../../redux/profile-reducer";

import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userIdFromUrl = this.props.match.params.userId;
        if (userIdFromUrl) {
            this.props.getProfileFull(userIdFromUrl)
        } else this.props.getProfileFull(this.props.userId)
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: profilePageSelector(state),
        friendPage: friendPageSelector(state),
        userId: state.auth.userInfo.userId,
    }
}


export default withRouter(connect(mapStateToProps, {getProfileFull})(ProfileContainer));