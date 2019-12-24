import React, { useEffect } from 'react';
import { allTopic } from '../utility/forum-services';
import { useState } from 'react';



const TopicList=()=>{
    const[topics,setTopics]=useState([])

    useEffect(()=>{
        allTopic()
        .then(data=>{
            setTopics(data.topics)
        })
    },[]) 
    return (
        <>
        <h2>Topics List</h2>
        <ul>
            {topics.map(topic => <li>{topic.title}</li> )}

        </ul>
        </>
    )
}

export default TopicList