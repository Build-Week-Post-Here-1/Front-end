import React from 'react'
import { Card, CardBody, CardText } from 'reactstrap'

const Smurf = props => {
    const { name, age, height } = props.smurf
    return (
        <Card>
            <CardBody>
                <CardText>Name: { name }</CardText>
                <CardText>Age: { age }</CardText>
                <CardText>Height: { height }</CardText>
            </CardBody>
        </Card>
    )
}

export default Smurf