import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardImg
    } from 'reactstrap';
import WhereWhatWhenInjectable from './WhereWhatWhenInjectable';
import './index.css';


class Education extends React.Component{

    injectedWhere(){
        return(
        <Row>
        <Col xs = {{size:3}}>
            <CardImg src='./RITSeal.png'/>
        </Col>
        <Col >
            <CardText>
                Rochester Institute of Technology
            </CardText>
            <CardText>
                Rochester, New York
            </CardText>
        </Col>
        </Row>
        )
    }
    injectedWhen(){
        return(
        <Row>
        <Col >
            <CardText>
            August 2021 - June 2025
            </CardText>
        </Col>
        </Row>
        )
    }
    injectedWhat(){
        return(
        <Row>
        <Col >
            <CardText>
                Bachelors of Science in Software Engineering
            </CardText>
            <CardText>
                Minor in Economics
            </CardText>
        </Col>
        </Row>
        )
    }

    educationCardText = "Rochester Institute of Technology"

    render(){
        return(
            <Card className="text-center" id="education">
                <CardTitle className='section-header'> 
                    Education
                </CardTitle>    
                    <Row style={{fontSize: "1.5vw"}}>
                        <Col xs={{size: 12}}>
                            <CardBody>
                            <WhereWhatWhenInjectable where={this.injectedWhere()} when={this.injectedWhen()} what={this.injectedWhat()}/>
                            </CardBody>
                        </Col>
                </Row>
            </Card>
        );
    }
}

export default Education;