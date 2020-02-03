import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useInput } from '../hooks/useInput'

const Home = props => {

    const [search, updateSearch] = useState('')
    
    useEffect(() => {
        updateSearch(search)
    }, [search])
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup>
                        <Label for='search'>Search by entering the full text of your post</Label>
                        <Input type='text' name='search' id='search' value={ search } />
                    </FormGroup>
                </Form>
            </Jumbotron>
        </Container>
    )
}

export default Home