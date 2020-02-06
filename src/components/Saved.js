import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getSmurfs } from '../actions'
import { Container, Jumbotron } from 'reactstrap'

import Smurf from './Smurf'
const Saved = props => {

    useEffect(() => {
        props.getSmurfs()
    }, [])

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                { props.smurfs.map(smurf => <Smurf smurf={ smurf } />) }
            </Jumbotron>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
  }
  
  export default connect(mapStateToProps, { getSmurfs })(Saved)

