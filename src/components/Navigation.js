import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const AuthLinks = () => {
    return (
        <NavbarText>
            
              <Link to='/'>HOME</Link>
            
            
              <Link to='/saved'>SAVED</Link>
            
            
              <Link to='/profile'>PROFILE</Link>
            
            
              <Link to='/logout'>LOG OUT</Link>
            
            </NavbarText>

    )
}

const GuestLinks = () => {
    return (
        <NavbarText>
            
              <Link to='/auth'>LOGIN / SIGNUP</Link>
            
        </NavbarText>
    )
}

const Navigation = props => {
  
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  //const [lightMode, setLightMode] = useState(getInitialMode());
  //useEffect(() => {
  //  localStorage.setItem('dark', JSON.stringify(lightMode));
  //
  //}, [lightMode]);

  //function getInitialMode() {
    //const isReturningUser = "dark" in localStorage;
    //const savedMode = JSON.parse(localStorage.getItem('dark'));
    //const userPrefersDark = getPrefColorScheme();
    //if (isReturningUser) {
    //  return savedMode;
    //} else if (userPrefersDark) { 
    //  return true;
    //} else {
    // return false;
   //}
   //}
   
   //function getPrefColorScheme() {
    // if (!window.matchMedia) return;
   
    //return window.matchMedia("(prefers-color-scheme: dark)").matches;
   //}

  return (
    <div>
      <Navbar color='orange-bg' dark expand='md' className='orange-bg'>
        <NavbarBrand><Link to='/'>Preddict</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        <Nav className='mr-auto' navbar>
          <NavItem>
            <Link to='/profile'>{ props.username === null ? null : `Welcome, ${props.username}` }</Link>
          </NavItem>
        </Nav>
          {
            localStorage.getItem('jwtToken') ?
            <AuthLinks /> :
            <GuestLinks />
          }
          


          
        </Collapse>
      </Navbar>
    </div>
  )
}

const mapStateToProps = state => {
  return {
      username: state.username,
  }
}

export default connect(mapStateToProps, {})(Navigation)

/*
<div className='toggle-container'>
          <span>☽</span>
<span className='toggle'>
  <input
  checked={lightMode}
  onChange={() => setLightMode(prevMode => !prevMode)}
  type="checkbox" 
  className="checkbox" 
  id="checkbox" />
<label htmlFor="checkbox" />
</span>
<span>🌞</span>
</div>

<NavbarText></NavbarText>
*/

