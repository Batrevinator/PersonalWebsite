import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Row,
    Col,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardImg,
    Label,
    } from 'reactstrap';
import './index.css';
import WhereWhatWhenInjectable from './WhereWhatWhenInjectable';

class Experience extends React.Component{

    kdpInjectedWhere(){
        return(
        <Row>
        <Col xs = {{size:3}}>
            <CardImg src='./KDPLogo.png'/>
        </Col>
        <Col >
            <CardText>
                Keurig Dr Pepper
            </CardText>
        </Col>
        </Row>
        )
    }
    kdpInjectedWhen(){
        return(
        <Row>
        <Col >
            <CardText>
            January 2023 - June 2023
            </CardText>
        </Col>
        </Row>
        )
    }
    kdpInjectedWhat(){
        return(
        <Row>
        <Col >
            <CardText>
                Co-op Embedded Software Engineer
            </CardText>
            <CardText>
                New Product Development Team
            </CardText>
        </Col>
        </Row>
        )
    }

    gfInjectedWhere(){
        return(
        <Row>
        <Col xs = {{size:3}}>
            <CardImg src='./GFLogo.png'/>
        </Col>
        <Col >
            <CardText>
                GlobalFoundries
            </CardText>
        </Col>
        </Row>
        )
    }
    gfInjectedWhen(){
        return(
        <Row>
        <Col >
            <CardText>
            June 2022 - August 2022
            </CardText>
        </Col>
        </Row>
        )
    }
    gfInjectedWhat(){
        return(
        <Row>
        <Col >
            <CardText>
                Co-op Full Stack Software Engineer
            </CardText>
            <CardText>
                Fault Detection Team
            </CardText>
        </Col>
        </Row>
        )
    }

    tsInjectedWhere(){
        return(
        <Row>
        <Col xs = {{size:3}}>
            <CardImg src='./TransonicLogo.jpg'/>
        </Col>
        <Col >
            <CardText>
                Transonic Systems Inc.
            </CardText>
        </Col>
        </Row>
        )
    }
    tsInjectedWhen(){
        return(
        <Row>
        <Col >
            <CardText>
            January 2022 - June 2022
            </CardText>
        </Col>
        </Row>
        )
    }
    tsInjectedWhat(){
        return(
        <Row>
        <Col >
            <CardText>
                Co-op Embedded Software Engineer
            </CardText>
            <CardText>
                Platform Team
            </CardText>
        </Col>
        </Row>
        )
    }

    render(){
        return(
            <Card className="text-center" id="experience">
                <CardTitle className='section-header'> 
                    Experience
                </CardTitle>
                <CardBody>
                    <Row style={{fontSize: "1.5vw"}}>
                        <Col xs={{size: 10, offset:1}}>
                            <CardBody>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.kdpInjectedWhere()} when={this.kdpInjectedWhen()} what={this.kdpInjectedWhat()}/>
                                </Row>
                                <Label tag = "h1" for="kdpDesc">Description</Label>
                                <Row id = "kdpDesc" xs = "2">
                                    <Col>
                                        <CardText>
                                            Put a description of KDP here aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                                        </CardText>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.gfInjectedWhere()} when={this.gfInjectedWhen()} what={this.gfInjectedWhat()}/>
                                </Row>
                                <hr/>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.tsInjectedWhere()} when={this.tsInjectedWhen()} what={this.tsInjectedWhat()}/>
                                </Row>
                            </CardBody>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        );
    }
}

export default Experience;