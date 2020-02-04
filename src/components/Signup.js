import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useInput } from '../hooks/useInput'
import { apiUrl } from '../config'

const Signup = props => {
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
          <Label for='user'>User Name</Label>
          <Input type='text' minLength='3' maxLength='20' required='true' {...bindUser}/>
        </FormGroup>
        <FormGroup>
          <Label for='pass'>Password</Label>
          <Input type='password' minLength='4' required='true' {...bindPass} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }


export default Signup
