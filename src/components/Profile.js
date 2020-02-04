import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useInput } from '../hooks/useInput'
import { update } from '../actions'
import { Container, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
const Profile = props => {

    const {
        buttonLabel,
        className
      } = props;
    const history = useHistory()
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const { value:user, bind:bindUser } = useInput('')
    const { value:pass, bind:bindPass } = useInput('')
    const [values, updateValues] = useState({
      username: '',
      password: '',
      id: props.id
    })

    useEffect(() => {
      updateValues({
        username: user,
        password: pass
      })
    }, [user, pass])

    const handleUpdate = e => {
      e.preventDefault()
      props.update(values)
      history.push('/')
    }

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron className='orange-bg'>
                <h3>User { props.username }</h3>
                <h4><Link className='text-muted' to='/saved'>{props.saved.length}</Link> &nbsp;Posts saved</h4>
                <Button color='danger' onClick={toggle}>Edit</Button>
            </Jumbotron>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Edit username/password</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleUpdate}>
                        <FormGroup>
                            <Label for='user'>Username</Label>
                            <Input type='text' {...bindUser} />
                        </FormGroup>
                        <FormGroup>
                            <Label for='pass'>Password</Label>
                            <Input type='text' {...bindPass} />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                <Button color='primary' type='submit' onClick={toggle}>Update</Button>{' '}
                <Button color='secondary' onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username,
        id: state.id,
        saved: state.saved
    }
  }
  
  export default connect(mapStateToProps, { update })(Profile)