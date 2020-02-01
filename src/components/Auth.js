import React, { useState } from 'react'
import { Container, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap'
import classnames from 'classnames';

import Login from './Login'
import Signup from './Signup'

const Auth = props => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if(activeTab !== tab) setActiveTab(tab);
    }

    return (
        <Container>
            <div className='spacer'></div>
            <Nav tabs>
                <NavItem className='half'>
                    <NavLink
                        className={classnames({ active: activeTab === '1' }, 'bg-dark')}
                        onClick={() => { toggle('1'); }}
                    >
                        Log In
                    </NavLink>
                </NavItem>
                <NavItem className='half'>
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
                            <Jumbotron className='bg-primary'>
                                <Login />
                            </Jumbotron>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId="2">
                    <Row>
                        <Col sm="12">
                            <Jumbotron className='bg-primary'>
                                <Signup />
                            </Jumbotron>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </Container>
    )
}

export default Auth