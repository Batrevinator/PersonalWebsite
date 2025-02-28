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
                Boston, Massachusetts
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
                Malta, New York
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
                Ithaca, New York
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
    evtInjectedWhere(){
        return(
        <Row>
        <Col xs = {{size:3}}>
            <CardImg src='./EVTPic.png'/>
        </Col>
        <Col >
            <CardText>
                RIT Electric Vehicle Team
            </CardText>
            <CardText>
                Rochester, New York
            </CardText>
        </Col>
        </Row>
        )
    }
    evtInjectedWhen(){
        return(
        <Row>
        <Col >
            <CardText>
            January 2022 - Present
            </CardText>
        </Col>
        </Row>
        )
    }
    evtInjectedWhat(){
        return(
        <Row>
        <Col >
            <CardText>
                Lead Database Engineer
            </CardText>
            <CardText>
                Database Team
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
                    <Row style={{fontSize: "1.5rem"}}>
                        <Col xs={{size: 12}}>
                            <CardBody>
                                <Row style={{marginTop: 20}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>Keurig Dr Pepper</Label>
                                </Row>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.kdpInjectedWhere()} when={this.kdpInjectedWhen()} what={this.kdpInjectedWhat()}/>
                                </Row>
                                <Label style={{marginBottom: 30}}tag = "h1" for="kdpDesc">Description</Label>
                                <Row style={{alignItems:"center"}} id = "kdpDesc" xs = "2">
                                    <Col>
                                        <CardText>
                                            At Keurig Dr Pepper (KDP) I worked on the development of brewer software, 
                                            specifically for the New Product Development Team. At the time, the team 
                                            was focused on developing new software platforms to make their code more 
                                            portable. I worked on multiple aspects of this effort. While at KDP I 
                                            created a new connectivity library that acted as the interface between 
                                            the brewer software and our remote servers. I also provided a new suite 
                                            of CLI developer tools to be used for brewer testing, increasing developer 
                                            productivity and speed. My final major contribution during my Co-op was to 
                                            the unit testing processes at KDP. Previously, they had not implemented 
                                            such testing and as I had experience in previous Co-ops and classes I volunteered to 
                                            help on the project. I really enjoyed my time at KDP and the freedom it provided me to 
                                            explore many facets of software development.
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardImg src={"./coffee.png"}/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop: 30}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>GlobalFoundries</Label>
                                </Row>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.gfInjectedWhere()} when={this.gfInjectedWhen()} what={this.gfInjectedWhat()}/>
                                </Row>
                                <Label style={{marginBottom: 30}}tag = "h1" for="gfDesc">Description</Label>
                                <Row style={{alignItems:"center"}} id = "gfDesc" xs = "2">
                                    <Col>
                                        <CardImg src={"./waferpic.jpg"}/>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            My Co-op at GlobalFoundries (GF) was a major learning experience for me. The company is 
                                            truly massive and having come from a much smaller company it was a big culture change. 
                                            I faced many challenges at GF the biggest of which was being self reliant and self confident. 
                                            For most of my work I did not have any other experienced developers to turn to for help. 
                                            My mentor was located in the California while I sat in New York. The resulting time disparity 
                                            resulted in me needing to learn how to "figure it out." At the time I was still fairly new to 
                                            team development, especially in a professional setting, which made this new environment very difficult. 
                                            By the end of my Co-op I had overcome this challenge. I delivered three different projects including 
                                            one which I proposed myself and brought to completion. GF provided a unique opportunity for personal 
                                            and professional growth for me.
                                        </CardText>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop: 30}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>Transonic Systems Inc.</Label>
                                </Row>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.tsInjectedWhere()} when={this.tsInjectedWhen()} what={this.tsInjectedWhat()}/>
                                </Row>
                                <Label style={{marginBottom: 30}}tag = "h1" for="tsDesc">Description</Label>
                                <Row style={{alignItems:"center"}} id = "tsDesc" xs = "2">
                                    <Col>
                                        <CardText>
                                            Transonic Systems (TS) was my first Co-op experience and my first time working in a corporate 
                                            setting. TS is a small company which produces medical recording equipment for measuring blood 
                                            flow during open surgeries. I was a member of the Embedded Platform Team which was working to 
                                            refactor their existing code to a more manageable platform. I worked on many different parts 
                                            of the system including system architecture development, and UI elements but my largest impacts 
                                            were on the System Logger and Serialization/Data Persistance modules. TS was a great opportunity 
                                            to learn how software development worked in the real world which I rapidly realized looks a lot 
                                            different than a classroom. I credit TS for sparking my interest in embedded system development.
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardImg src={"./EKGmachine.jpg"}/>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop: 30}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>Electric Vehicle Team</Label>
                                </Row>
                                <Row>
                                    <WhereWhatWhenInjectable where={this.evtInjectedWhere()} when={this.evtInjectedWhen()} what={this.evtInjectedWhat()}/>
                                </Row>
                                <Label style={{marginBottom: 30}}tag = "h1" for="evtDesc">Description</Label>
                                <Row style={{alignItems:"center"}} id = "evtsDesc" xs = "2">
                                    <Col>
                                        <CardImg src={"./PrimaryEvtPic.png"}/>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            I have been a member of the Electric Vehicle Team (EVT) since my softmore year at RIT.
                                            EVT is a student run organization that designs and builds electric racing vehicles 
                                            (primarily electric motorcycles). My current role on the team is as the Lead Database 
                                            Engineer on the database team. I started this team and the database project on the team 
                                            and as such have worn many hats. While in this role I have designed DB schemas, stood up 
                                            data input streams, and handled a migration from an SQL to a new NoSQL database. Most recently, 
                                            I have been able to take on a more managerial role as the team has grown. I am proud to say 
                                            that since the team's inception at the beginning of the 2024 - 2025 academic year we have 
                                            completed a full stack application which allows for the uploading of bike telemetry data to 
                                            our NoSQL DB. With this data we are researching methods to improve bike performace in races.
                                        </CardText>
                                    </Col>
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