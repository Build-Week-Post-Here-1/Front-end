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
        <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for='user'>User Name</Label>
          <Input type='text' {...bindUser}/>
        </FormGroup>
        <FormGroup>
          <Label for='pass'>Password</Label>
          <Input type='password' {...bindPass} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }


export default Signup

// Added by Gunnar without wiring or state

/*
        <FormGroup>
          <Label for="Select">I am a:</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>JavaScript Developer</option>
            <option>Data Scientist</option>
            <option>UI/UX Designer</option>
            <option>HTML/CSS connoisseur</option>
            <option>Full Stack Web Developer</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="opinionText">Please express your displeasure of this form here:</Label>
          <Input type="textarea" name="text" id="opinionText" />
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>My favorite food is:</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Pizza
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Hamburger
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Steak
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="I THINK NOT" disabled />{' '}
              Some other food
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            I Accept the Terms and Conditions
          </Label>
        </FormGroup>
        */