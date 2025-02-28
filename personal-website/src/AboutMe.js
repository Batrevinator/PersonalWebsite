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
    CardImgOverlay
    } from 'reactstrap';
import './index.css';

class AboutMe extends React.Component{

    introCardText = "Currently, I am a student at the Rochester Institute of Technology set to graduate with a \
    bachelors degree in software engineering at the end of this semester (June 2025). My previous development \
    experience has been that of a backend engineer with a focus on embedded software and data engineering. \
    However, I am always looking for opportunites to learn new skills and have started to branch into full \
    stack development."

    introCardExperience = "I have completed three Co-ops with three separate companies. Namely, Transonic \
    Systems, GlobalFoundries, and Keurig Dr Pepper. Outside of these activities I have also gained experience \
    through clubs and personal projects. I will go into more detail on my experience in that section if you are \
    interested.\
    "

    render(){
        return(
            <Card color= "light" className="text-center" id="about-me">
                <CardTitle className='section-header'> 
                    About Me
                </CardTitle>
                <Row style={{fontSize: "1.5rem", justifyContent: "center"}}>
                    <Col xs={{size: 8, offset:0}}>
                        <CardBody>
                                <CardText>
                                    {this.introCardText}
                                </CardText>
                                <CardText>
                                    {this.introCardExperience}
                                </CardText>
                        </CardBody>
                    </Col>
                </Row>
            </Card>
        );
    }
}

export default AboutMe;