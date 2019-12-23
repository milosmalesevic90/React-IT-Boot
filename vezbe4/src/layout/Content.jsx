import React from 'react'
import {Switch,Route, Router} from 'react-router-dom'
import Profile from '../components/Profile'
import Login from '../components/Login'







const Content =(setUser,user)=>{
    return(
        <main className='main'>
         
               <Login setUser={setUser}/>
               <Profile user={user}/>
          

            
        </main>
    )
}
export default Content