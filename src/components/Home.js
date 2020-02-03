import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import { useInput } from '../hooks/useInput'
import { searchUrl } from '../config'
import axios from 'axios'

import Post from './Post'

const Home = props => {

    const [searchTerm, updateSearchTerm] = useState('')
    const [posts, updatePosts] = useState([])

    const { value:search, bind:bindSearch } = useInput('')
    
    useEffect(() => {
        updateSearchTerm(search)
    }, [search])

    const handleSubmit = e => {
        e.preventDefault()
        axios
        .get(searchUrl, searchTerm)
        .then(res => {
            updatePosts(res.data)
        })
        .catch(err => console.log(err))
    }
    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                <Form onSubmit={ handleSubmit }>
                    <FormGroup>
                        <Label for='search'>Search by entering the full text of your post</Label>
                        <Input type='text' {...bindSearch} />
                    </FormGroup>
                    <Button type='submit'>Search</Button>
                </Form>
                { posts.map(post => <Post post={ post } />) }
            </Jumbotron>
        </Container>
    )
}

export default Home