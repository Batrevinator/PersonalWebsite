import React from 'react';
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

class Projects extends React.Component{

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

    render(){
        return(
            <Card color = "light" className="text-center" id="projects">
                <CardTitle className='section-header'> 
                    Projects
                </CardTitle>
                <CardBody>
                    <Row style={{fontSize: "1.5rem"}}>
                        <Col xs={{size: 12}}>
                            <CardBody>
                                <Row style={{marginTop: 20}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>Vistara Rental Property Manager</Label>
                                </Row>
                                <Row style={{alignItems:"center"}} id = "vistaraDesc" xs = "2">
                                    <Col>
                                        <CardImg src={"./VistaraArch.png"}/>
                                    </Col>
                                    <Col>
                                        <CardText>
                                            Vistara is currently in development. I am working on it as a solo-developer for the time 
                                            being. I started the project in my free time during my Co-op at Keurig Dr Pepper in the hopes 
                                            of developing skills to become a more well rounded software engineer. I have done extensive work, 
                                            not just on the code but software architecture, planning, and more. Vistara is an automated 
                                            property management tool which helps landlords and renters manage their rental experiences. For 
                                            renters, Vistara provides automated rent payments and easy maintenance requests. Landlords enjoy 
                                            dashboards which display important unit information, tax assistance, and metric insights to help 
                                            business guide decision making. I hope to continue work on Vistara and one day bring it to market.
                                        </CardText>
                                    </Col>
                                </Row>
                                <hr/>
                                <Row style={{marginTop: 20}}>
                                    <Label style={{fontWeight:"bold"}} tag={"h2"}>EZNotate</Label>
                                </Row>
                                <Row style={{alignItems:"center"}} id = "chessDesc" xs = "2">
                                    <Col>
                                        <CardText>
                                            The Software Engineering degree at RIT culminates in the completion of our senior capstone. 
                                            This is a project that we work on as a team that is posed by a sponsor from outside of the 
                                            school. For me this was a project called EZNotate. EZNotate is a mobile application which 
                                            uses computer vision to scan a new kind of chess notation and automatically record games with a 
                                            simple scan. This new chess notation was created to make chess more accessible to those with 
                                            disabilities, or language barriers that make traditional chess notation difficult to learn 
                                            or use. My role on the team has been largely focused on our database and data engineering. 
                                            A major feature of this system is that users can save their previously played games for later 
                                            analysis. Additionally, users can pay to access the past games of other users to help when studying 
                                            for future competitions and games.
                                        </CardText>
                                    </Col>
                                    <Col>
                                        <CardImg src={"./chessPic.jpg"}/>
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

export default Projects;