import React from 'react'

const User = (props) => {
debugger
    let {profile, isOwner} = props;
    return (
        <div>
            <h2>{profile.fullName}</h2>
            {isOwner && <span>Edit</span>}
            <div>
                {
                    Object.keys(profile.contacts).map(key => {
                        return <div><b>{key}: </b> {profile.contacts[key]}</div>
                    })
                }
            </div>
        </div>
    )
}

export default User;