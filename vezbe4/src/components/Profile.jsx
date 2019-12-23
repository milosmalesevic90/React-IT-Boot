import React from 'react'
import { withRouter } from 'react-router-dom'


const Profile = ({user}) => {

    return (
        <>
            <p><strong>Name</strong>: {user.name}</p>
            <p><strong>Surname</strong>: {user.surname}</p>
            <p><strong>Username</strong>: {user.username}</p>
            <p><strong>E-mail</strong>: {user.email}</p>
            <img src={user.picture ? user.picture:''} alt="user-avatar"/>
        </>

    )
}

export default Profile 