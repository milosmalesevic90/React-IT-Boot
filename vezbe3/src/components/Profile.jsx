import React from 'react';

const Profile = ({ user }) => {

    return(
        <>
            <p><strong>Име</strong>:   {user.name}</p>
            <p><strong>Презиме</strong>:   {user.surname}</p>
            <p><strong>Корисничко име</strong>:   {user.username}</p>
            <p><strong>E-mail</strong>:   {user.email}</p>
            <img src={user.picture ? user.picture : ''} alt="user-avatar" />
        </>
    )
}

export default Profile