import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Login = props => {
    return (
        <Form>
        <FormGroup>
          <Label for="username">User Name</Label>
          <Input type="name" name="name" id="username" placeholder="Insert User Name" />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="redditpw" placeholder="Type your password here" />
        </FormGroup>
        <Button>Log In</Button>
        </Form>
    )
}

export default Login