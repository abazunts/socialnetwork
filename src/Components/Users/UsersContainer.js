import React from "react"
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    getUsers, setPageNumber, setPageSize,
    unfollow
} from "../../redux/users-reducer";
import {
    getCurrentPageSelector,
    getPageNumberSelector,
    getPageSizeSelector,
    getStatusSelector,
    getTotalCountSelector,
    getUserSelector
} from "../../redux/userSelector";

 class UsersContainer extends React.Component {
     componentDidMount() {
         this.props.getUsers(this.props.pageNumber)
     }

     render() {
         return <Users { ...this.props}/>
     }
 }

let mapStateToProps = (state) => {
    return ({
        users: getUserSelector(state),
        pageNumber: getPageNumberSelector(state),
        status: getStatusSelector(state),
        pageSize: getPageSizeSelector(state),
        totalCount: getTotalCountSelector(state),
        currentPage: getCurrentPageSelector(state),
    })
};


export default connect(mapStateToProps, {follow,unfollow,getUsers,setPageNumber,setPageSize})(UsersContainer);