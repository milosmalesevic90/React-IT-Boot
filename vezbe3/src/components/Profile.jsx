import React from 'react'



const Profile =({user})=>{
    return(
        <>
        <p>{user.name}</p>
        <p>{user.lastname}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <img src={user.picture ? user.picture:''} alt="user_avatar"/>
        </>

    )
}
export default Profile