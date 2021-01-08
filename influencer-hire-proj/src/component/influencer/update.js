import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


class updateForm extends Component{
    render(){
        return(
            <div className="container-fluid">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Niche</Form.Label>
                        <Form.Control type="text" placeholder="Enter niche" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="city" placeholder="Enter Your city" />
                    </Form.Group>
                </Form><br/>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Facebook">
                        <p>Facebook</p>
                    </Tab>
                    <Tab eventKey="profile" title="Instagram">
                        <p>Instagram</p>
                    </Tab>
                    <Tab eventKey="contact" title="YouTube" >
                        <p>Youtube.......</p>
                    </Tab>
                </Tabs><br/>

                <Form>
                    <Form.Group as={Row} controlId="formPlaintextUrl">
                        <Form.Label column sm="2">
                        URL
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="url" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPlaintextLives">
                        <Form.Label column sm="2">
                            Lives
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="lives" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextSubscribe">
                        <Form.Label column sm="2">
                            Subscriber/Follower
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="text" placeholder="follower" />
                        </Col>
                    </Form.Group>
                    <Button variant="success" type="submit" style={{float:"right"}}>
                        Update
                    </Button>
                </Form>
            </div>


        )
    }
}

export default updateForm;