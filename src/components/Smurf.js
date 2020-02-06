import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { updateSmurf, deleteSmurf } from '../actions'
import { useInput } from '../hooks/useInput'
import { Row, Col, Card, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'

const Smurf = props => {
    const { name, age, height, id } = props.smurf
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)
    const [smurf, updateSmurf] = useState({
        name: name,
        age: age,
        height: height,
        id: id
    })
    const { value:smurfName, bind:bindName } = useInput(name)
    const { value:smurfAge, bind:bindAge } = useInput(age)
    const { value:smurfHeight, bind:bindHeight } = useInput(height)
    
    useEffect(() => {
        updateSmurf({
            name: smurfName,
            age: smurfAge,
            height: smurfHeight,
            id: id
        })

    }, [smurfName, smurfAge, smurfHeight, id])

    const handleSubmit = smurf => {
        props.updateSmurf(smurf)
        toggle()
    }
    return (
        <Card>
            <CardBody>
                <CardText>Name: { name }</CardText>
                <CardText>Age: { age }</CardText>
                <CardText>Height: { height }</CardText>
                <Button onClick={() => props.deleteSmurf(id)}>They Died!</Button><Button onClick={toggle}>Edit</Button>
            </CardBody>
            <Modal isOpen={modal} toggle={toggle} className='alert alert-dissmissible alert-warning'>
                <ModalHeader toggle={toggle}>Edit {name}</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <Col xs='6'>
                                <FormGroup>
                                    <Label for='name'>Name</Label>
                                    <Input
                                        type='text'
                                        {...bindName}
                                    />
                                  
                                </FormGroup>
                            </Col>
                            <Col xs='6'>
                                <FormGroup>
                                    <Label for='age'>Age</Label>
                                    <Input
                                        type='text'
                                        {...bindAge}
                                        
                                    />
                                    
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs='6'>
                                <FormGroup>
                                    <Label for='height'>Height (cm)</Label>
                                    <Input
                                        type='text'
                                        {...bindHeight}
                                    />
                                </FormGroup>
                            </Col>
                            <Col xs='6'>
                            <Label for='submit'>&nbsp;</Label>
                                <Button onClick={() => handleSubmit(smurf)} style={{width: '100%'}} className='btn-info'>Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Card>
    )
}

const mapStateToProps = state => {
    return {
 
    }
  }
  
  export default connect(mapStateToProps, { updateSmurf, deleteSmurf })(Smurf)