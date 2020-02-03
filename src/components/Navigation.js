import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

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
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Navigation
