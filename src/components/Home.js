import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useInput } from '../hooks/useInput'
import { connect } from 'react-redux'
import { searchAPI } from '../actions'

import Post from './Post'

const Home = props => {

    const [searchTerm, updateSearchTerm] = useState('')

    const { value:search, bind:bindSearch } = useInput('')
    
    useEffect(() => {
        updateSearchTerm(search)
    }, [search, props.results])

    const handleSubmit = searchTerm => {
        const object = {
            body: searchTerm
        }
        props.searchAPI(object)
        /*
        props.searchAPI({
            'id': props.id,
            'name': searchTerm
        })
        */
    }

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <Form>
                    <FormGroup>
                        <Label for='search'>Search by entering the full text of your post</Label>
                        <Input type='text' {...bindSearch} />
                    </FormGroup>
                    <Button onClick={() => handleSubmit(searchTerm)} className='orange-bg'>Search</Button>
                </Form>
                { props.results.map(result => <Post post={ result } />) }
            </Jumbotron>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        results: state.results,
        id: state.id
    }
  }
  
  export default connect(mapStateToProps, { searchAPI })(Home)