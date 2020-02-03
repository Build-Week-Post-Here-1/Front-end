import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Signup = props => {
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
        <Button>Submit</Button>
      </Form>
    );
  }


export default Signup