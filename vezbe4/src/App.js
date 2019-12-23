import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Content from './layout/Content';
import { Router } from 'react-router-dom';

function App() {
  const[user,setUser]=useState()
  return (
    <>
      
     <Login/><hr/>
     <Register></Register>
     <hr/>
     <Content setUser={setUser} user={user}/>
     
    </>
  )
}

export default App;
