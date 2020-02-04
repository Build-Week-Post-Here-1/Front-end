import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText } from 'reactstrap'
import { connect } from 'react-redux'

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
            <NavItem>
              <NavLink href='/logout'>Log Out</NavLink>
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
            localStorage.getItem('jwtToken') ?
            <AuthLinks /> :
            <GuestLinks />
          }
          <NavbarText>{ props.username === null ? null : `Welcome, ${props.username}` }</NavbarText>
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
