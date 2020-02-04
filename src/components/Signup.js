import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { register } from '../actions'
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useInput } from '../hooks/useInput'

const Signup = props => {
    
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

    const handleSignup = e => {
      e.preventDefault()
      props.register(values)
      history.push('/')
    }

    return (
        <Form onSubmit={ handleSignup }>
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


  const mapStateToProps = state => {
    return {
    }
  }
  
  export default connect(mapStateToProps, { register })(Signup)

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