import React from 'react'
import { useState } from 'react'
import { newTopic } from '../utility/forum-services'
import { topicMessage } from '../utility/forum-services'


const NewTopic = ({user})=>{
    const[topic,setTopic]=useState('')
    const[message,setMessage]=useState('')

    function topicAdd(){
        newTopic(user.user_id,topic)
        .then(data=>{
            if(data.success){
                console.log(data)
                topicMessage(user.username,data.topic.topic_id,message)
            }
            
        }
        
        )
    }

    

    return(
        <form>
            <input type="text" placeholder="New Topic" required onInput={e=>{
                setTopic(e.target.value)
            }}/>
            <br/>
            <input type="text" placeholder="First Message for Topic" required onInput={e=>{
                setMessage(e.target.value)
            }}/>
            <br/>
            <input type="submit" value="New Topic" onClick={(e) => {
                e.preventDefault()
                topicAdd()
            }} />


        </form>
    )
}

export default NewTopic