import React, { useState } from 'react';
import { Route } from 'react-router-dom'

import { UserContext } from './contexts/UserContext'

import Auth from './components/Auth'
import Home from './components/Home'
import Logout from './components/Logout'
import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Saved from './components/Saved'

function App() {
  
  const [user, updateUser] = useState({
    username: null,
    token: null
  })

  return (
    <div className='App'>
      <UserContext.Provider value={{ user, updateUser }}>
        <Navigation />
        <Route exact path='/auth' component={ Auth } />
        <Route exact path='/logout' component={ Logout } />
        <PrivateRoute path='/' component={ Home } />
        <PrivateRoute path='/' component={ Saved } />
        <PrivateRoute path='/profile' component={ Profile } />
      </UserContext.Provider>
    </div>
  );
}

export default App;
