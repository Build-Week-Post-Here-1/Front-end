import React, { useState, useContext } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap'

import { UserContext } from '../contexts/UserContext'

const AuthLinks = () => {
    return (
        <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/saved'>Saved</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='/profile'>Profile</NavLink>
            </NavItem>
        </Nav>
    )
}

const GuestLinks = () => {
    return (
        <Nav className='mr-auto' navbar>
            <NavItem>
              <NavLink href='/login'>Login / Sign Up</NavLink>
            </NavItem>
        </Nav>
    )
}

const Navigation = props => {
  
  const { user } = useContext(UserContext)

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color='orange-bg' dark expand='md' className='orange-bg'>
        <NavbarBrand href='/'>Post Here!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {
            localStorage.getItem('token') ?
            <AuthLinks /> :
            <GuestLinks />
          }
          <NavbarText>{ user.username === null ? null : `Welcome, ${user.username}` }</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
