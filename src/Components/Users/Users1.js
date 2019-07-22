import React from 'react'
import {connect} from "react-redux";



const Users1 = (props) => {
    debugger;
    const status = 'статус не присвоен';
    const imgSrc = 'https://www.xplit.ru/uploads/collections/agatha-25x25-pamesa/agatha_25x25_pamesa.jpg';
    // axios
    //     .get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then((response)=> {return
    //         console.log(response)})


    // let users = [{
    //      name: "dlbxqp",
    //      id: 1196,
    //      uniqueUrlName: null,
    //      photos: {
    //        small: null,
    //        large: null
    //      },
    //      status: null,
    //      followed: false
    //    },
    //    {
    //      name: "Danium",
    //      id: 1195,
    //      uniqueUrlName: null,
    //      photos: {
    //        small: null,
    //        large: null
    //      },
    //      status: null,
    //      followed: false
    //    }]


    return (
        <div>
            {/*{users.map(user =>*/}
            {/*    <div key={user.id}>*/}
            {/*    <img width="100px" height="100px" src={user.photos.small || imgSrc} alt=''/>*/}
            {/*    <div >{user.name}</div>*/}
            {/*    <div> {user.status || status }</div>*/}
            {/*    </div>)}*/}

        </div>
    )
};
// const mstp = (state) =>({
//     users: state.users
// });
// const mdtp = (dispatch) =>({
//     setUsers: (users) => dispatch(setUsersAC(users))
// });
export default connect()(Users1);
//export default Users;