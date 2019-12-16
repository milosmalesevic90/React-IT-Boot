import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Highscore from './components/Highscore';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from './components/Login';


const App = () => {
  let scores = [
    {
      score_id: 0,
      user_id: 0,
      game: 0,
      score: 123
    },
    {
      score_id: 1,
      user_id: 0,
      game: 0,
      score: 150
    },
    {
      score_id: 2,
      user_id: 0,
      game: 0,
      score: 10
    }
  ];

  let user = 
    {
      user_id:1,
      name: "mirko",
      lastname: "miric",
      username: "mirkow123",
      email: "kahsdf@gmail.com",
      picture: null
    }
  
  return (
    <>
      <Header logedIn={true} />
      <hr />
      <Highscore scores={scores} />
      <hr />
      <Register />
      <hr />
      <Profile user={user} />
      <hr />
      <Login/>
      <hr/>
      <Footer />
      <hr></hr>

    </>
  );
}

export default App;
