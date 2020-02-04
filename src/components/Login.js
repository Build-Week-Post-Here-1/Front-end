import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useInput } from '../hooks/useInput'
import { apiUrl } from '../config'
import { UserContext } from '../contexts/UserContext'

// This file wasn't so bad, aside from zero wiring
const Login = props => {
    const config = {
    headers: {
      "Content-Type": "application/json",
      'Access-Control-Allow-Origin': '*',
      }
    }
    const { updateUser } = useContext(UserContext)
    const append = '/auth'
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
      axios
        .post('http://localhost:5000/api/auth/login', values, config)
        .then(res => {
          console.log(res.data)
          localStorage.setItem('jwtToken', res.data.token)
          updateUser(res.data.user)
          history.push('/')
        })
        .catch(err => console.log(err))
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

export default Login