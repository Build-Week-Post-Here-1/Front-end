import React from 'react';
import { Route } from 'react-router-dom'


import Auth from './components/Auth'
import Home from './components/Home'
import Logout from './components/Logout'
import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'
import Saved from './components/Saved'

function App() {
  

  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/auth' component={ Auth } />
      <Route exact path='/logout' component={ Logout } />
      <PrivateRoute exact path='/' component={ Home } />
      <PrivateRoute exact path='/saved' component={ Saved } />
      <PrivateRoute exact path='/profile' component={ Profile } />
    </div>
  );
}

export default App;
