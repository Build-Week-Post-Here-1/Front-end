import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useInput } from '../hooks/useInput'
import { apiUrl } from '../config'

// This file wasn't so bad, aside from zero wiring
const Login = props => {
    const append = ''
    const history = useHistory()
    const { value:user, bind:bindUser } = useInput('')
    const { value:pass, bind:bindPass } = useInput('')
    const [values, updateValues] = useState({
      user: '',
      pass: ''
    })

    useEffect(() => {
      updateValues({
        user: user,
        pass: pass
      })
    }, [user, pass])

    const handleSubmit = e => {
      e.preventDefault()
      axios
        .get(`${apiUrl}${append}`, values)
        .then(res => {
          console.log(res.data)
          // We'll store the token here
          history.push('/')
        })
        .catch(err => console.log(err))
    }
    return (
        <Form onSubmit={ handleSubmit }>
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