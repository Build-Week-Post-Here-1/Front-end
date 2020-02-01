import React from 'react';
import { Route } from 'react-router-dom'

import Auth from './components/Auth'
import Home from './components/Home'
import Navigation from './components/Navigation'
import PrivateRoute from './components/PrivateRoute'
import Profile from './components/Profile'

function App() {
  
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/auth' component={ Auth } />
      <PrivateRoute path='/' component={ Home } />
      <PrivateRoute path='/profile' component={ Profile } />
    </div>
  );
}

export default App;
