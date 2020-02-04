import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useInput } from '../hooks/useInput'

// This file wasn't so bad, aside from zero wiring
const Login = props => {
    const config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    const history = useHistory()
    const { value:user, bind:bindUser } = useInput('')
    const { value:pass, bind:bindPass } = useInput('')
    const [values, updateValues] = useState({
      username: '',
      password: ''
    })

    useEffect(() => {
      updateValues({
        username: user,
        password: pass
      })
    }, [user, pass])

    const handleLogin = e => {
      e.preventDefault()
      props.login(values)
      history.push('/')
    }
    return (
        <Form onSubmit={ handleLogin }>
        <FormGroup>
          <Label for="user">User Name</Label>
          <Input type="text" {...bindUser} />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" {...bindPass} />
        </FormGroup>
        <Button>Log In</Button>
        </Form>
    )
}

const mapStateToProps = state => {
  return {

  }
}

export default connect(mapStateToProps, { login })(Login)