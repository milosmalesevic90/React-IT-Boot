import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Highscore from '../components/Highscore';
import Register from '../components/Register';
import Login from '../components/Login';
import Profile from '../components/Profile';
import MemoryGame from '../games/MemoryGame';

const Content = ({ setUser, user }) => {
    return (
        <Switch>
            <Route exact path='/' component={Highscore} />
            <Route path='/register' component={Register} />
            <Route path='/login' component={(props) => <Login setUser={setUser} {...props} />} />
            <Route path='/profile' component={() => <Profile user={user} />} />
            <Route path='/memory-game' component={MemoryGame} />
        </Switch>
    )
}

export default Content
