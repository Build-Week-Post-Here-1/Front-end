import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap'
import classnames from 'classnames';

import Login from './Login'
import Signup from './Signup'

const Auth = props => {

    const history = useHistory()
    const [activeTab, setActiveTab] = useState('1');
    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    if (localStorage.getItem('jwtToken')) {
        history.push('/')
    }

    useEffect(() => {
        if (props.username !== null) {
            history.push('/')
        }
    }, [props.username])

    return (
        <Container>
            <div className='spacer'></div>
            <Nav tabs>
                <NavItem className='half center'>
                    <NavLink
                        className={classnames({ active: activeTab === '1' }, 'bg-dark')}
                        onClick={() => { toggle('1'); }}
                    >
                        Log In
                    </NavLink>
                </NavItem>
                <NavItem className='half center'>
                    <NavLink
                        className={classnames({ active: activeTab === '2' }, 'bg-dark')}
                        onClick={() => { toggle('2'); }}
                    >
                        Sign Up
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <Jumbotron className='orange-bg'>
                                <Login />
                            </Jumbotron>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <Jumbotron className='orange-bg'>
                                <Signup />
                            </Jumbotron>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
  }
  
  export default connect(mapStateToProps, {})(Auth)