import React from 'react';
import {
    Row,
    Col,
    Card,
    CardTitle,
    Label,
    CardBody,
    } from 'reactstrap';
import './index.css';


class Contact extends React.Component{

    render(){
        return(
            <Card color = "light" className="text-center" id="contact">
                <CardTitle className='section-header'> 
                    Contact
                </CardTitle>   
                <CardBody>
                <Row style={{fontSize: "1.5vw"}} xs = {3}>
                    <Col>
                        <Label tag = {'h2'}>Phone</Label>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: 2
                            }}
                        />
                        <Row style = {{justifyContent:"center", alignItems:"center"}}>
                            (518)222-9800
                        </Row>
                    </Col>
                    <Col>
                        <Label tag = {'h2'}>Email</Label>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: 2
                            }}
                        />
                        <Row style = {{justifyContent:"center", alignItems:"center"}}>
                            tmb7852@rit.edu
                        </Row>
                    </Col>
                    <Col>
                        <Label tag = {'h2'}>Github</Label>
                        <hr
                            style={{
                                color: 'black',
                                backgroundColor: 'black',
                                height: 2
                            }}
                        />
                        <Row style = {{justifyContent:"center", alignItems:"center"}}>
                        github.com/Batrevinator
                        </Row>
                    </Col>
                </Row>
                </CardBody> 
            </Card>
        );
    }
}

export default Contact;