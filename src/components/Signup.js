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
        <Input type='text' minLength='3' maxLength='20' required={true} {...bindUser}/>
      </FormGroup>
      <FormGroup>
        <Label for='pass'>Password</Label>
        <Input type='password' minLength='4' required={true} {...bindPass} />
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
