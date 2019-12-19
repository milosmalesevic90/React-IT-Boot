import React from 'react';

const Profile = ({ user }) => {
    

    return(
        <>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <img src={user.picture ? user.picture : ''} alt="user-avatar" />
        </>
    )
}

export default Profile