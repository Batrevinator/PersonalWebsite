import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Row,
    Col,
    Card,
    CardTitle,
    Label,
    CardBody,
    } from 'reactstrap';
import WhereWhatWhenInjectable from './WhereWhatWhenInjectable';
import './index.css';


class Contact extends React.Component{

    render(){
        return(
            <Card color = "light" className="text-center" id="education">
                <CardTitle className='section-header'> 
                    Contact
                </CardTitle>   
                <CardBody>
                <Row style={{fontSize: "1.5vw"}}>
                    <Col xs = {{size: 4, offset: 2}}>
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
                    <Col xs = {{size: 4}}>
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
                </Row>
                </CardBody> 
            </Card>
        );
    }
}

export default Contact;