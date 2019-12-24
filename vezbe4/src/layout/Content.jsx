import React from 'react'
import {Switch,Route, Router} from 'react-router-dom'
import Profile from '../components/Profile'
import Login from '../components/Login'
import TopicList from '../components/TopicList'
import NewTopic from '../components/NewTopic'







const Content =({setUser,user})=>{

    return(
        <main className='main'>
         
               <Login setUser={setUser} user={user}/>
               <Profile setUser={setUser} user={user}/>
               <hr/>
               <TopicList setUser={setUser} user={user}/>
               <hr/>
               <NewTopic setUser={setUser} user={user}/>
          

            
        </main>
    )
}
export default Content