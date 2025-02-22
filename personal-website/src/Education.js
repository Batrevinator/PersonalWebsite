import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Row,
    Col,
    Container,
    Card,
    CardTitle,
    CardBody,
    CardHeader,
    CardText,
    CardImg,
    CardImgOverlay,
    Label
    } from 'reactstrap';
import './index.css';

class Education extends React.Component{

    educationCardText = "Rochester Institute of Technology"

    render(){
        return(
            <Card  color= "light" className="text-center" id="education">
                <CardTitle className='section-header'> 
                    Education
                </CardTitle>    
                    <Row style={{fontSize: "1.5vw"}}>
                        <Col xs={{size: 10, offset:1}}>
                            <CardBody>
                                <Row xs = "3">
                                    <Col>
                                        <Label tag = {'h2'}>Where</Label>
                                        <hr
                                            style={{
                                                color: 'black',
                                                backgroundColor: 'black',
                                                height: 2
                                            }}
                                        />
                                        <Row style = {{alignItems:"center"}}>
                                            <Col xs = {{size:3}}>
                                                <CardImg src='./RITSeal.png'/>
                                            </Col>
                                            <Col >
                                                <CardText>
                                                    Rochester Institute of Technology
                                                </CardText>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Label tag = {'h2'}>What</Label>
                                        <hr
                                            style={{
                                                color: 'black',
                                                backgroundColor: 'black',
                                                height: 2
                                            }}
                                        />
                                        <CardText>
                                            Bachelors of Science in Software Engineering
                                        </CardText>
                                        <CardText>
                                            Minor in Economics
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <Label tag = {'h2'}>When</Label>
                                        <hr
                                            style={{
                                                color: 'black',
                                                backgroundColor: 'black',
                                                height: 2
                                            }}
                                        />
                                        <CardText>
                                            August 2021 - June 2025
                                        </CardText>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Col>
                </Row>
            </Card>
        );
    }
}

export default Education;