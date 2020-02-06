import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useHistory } from 'react-router-dom'
import { useInput } from '../hooks/useInput'
import { connect } from 'react-redux'
import { searchAPI, addSmurf } from '../actions'

import Post from './Post'

const Home = props => {

    let history = useHistory()

    const [smurf, updateSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const { value:name, bind:bindName } = useInput('')
    const { value:age, bind:bindAge } = useInput('')
    const { value:height, bind:bindHeight } = useInput('')
    
    useEffect(() => {
        updateSmurf({
            name: name,
            age: age,
            height: height
        })
    }, [name, age, height])
    /*
    const handleSubmit = searchTerm => {
        const object = {
            id: props.id,
            name: searchTerm
        }
        props.add(object)
        //props.searchAPI(searchTerm)
    }
    */

    const handleSubmit = smurf => {
        props.addSmurf(smurf)
        history.push('/saved')
    }
    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <Form>
                    <FormGroup>
                        <Label for='search'>Name</Label>
                        <Input type='text' {...bindName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='search'>Age</Label>
                        <Input type='text' {...bindAge} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='search'>Height</Label>
                        <Input type='text' {...bindHeight} />
                    </FormGroup>
                    <Button onClick={() => handleSubmit(smurf)} className='orange-bg'>Save</Button>
                </Form>
            </Jumbotron>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        id: state.id
    }
  }
  
  export default connect(mapStateToProps, { searchAPI, addSmurf })(Home)