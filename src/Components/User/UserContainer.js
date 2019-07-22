import React from 'react'
import {connect} from "react-redux";
import User from "./User";
import {withRouter} from "react-router-dom";
import apiService from "../../DAL/samuraiAPI";



class UserContainer extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            profile: null,
            me: null,
            isOwner: false,
        }
    }

    componentDidMount() {
        let userIdFromUrl = this.props.match.params.userId;
        let profilePromise = apiService.getProfileFull(userIdFromUrl)
            .then((profile) => {
                this.setState({profile});
            });
        let mePromise = apiService.getAuthMe()
            .then((res) => {
                this.setState({me: res.data});
            });

        Promise.all([profilePromise, mePromise] ).then(() => {
            let {profile, me} = this.state;

            if (!!me && !!profile && me.id === profile.userId) {
                this.setState({isOwner: true})
            }
        })
    }

    render() {
        if (this.state.profile) {
            return <User {...this.state}/>
        } else {
            return <div>Loading...</div>
        }
    }
}


export default withRouter(connect(null, null)(UserContainer));