import React, { useState } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Highscore from './components/Highscore';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';
import MemoryGame from './games/MemoryGame';

import { BrowserRouter as Router } from 'react-router-dom'
import Content from './layout/Content';




const App = () => {
  let user2 = {
    user_id: 1,
    name: "Pera",
    surname: "Peric",
    username: "Peraperic",
    email: "peric@yahoo.com",
    picture: null
  }


  const [user,setUser] = useState()

  
  
  


  return (
    <>
    <Router>
      <Header logedIn={user} setUser={setUser}/>
      <Content setUser={setUser} user={user}/>
      <Footer />
    </Router>
    </>
  )
}

export default App;
