import React from 'react';
import {
    Row,
    Col, 
    Card, 
    CardImg, 
    CardImgOverlay, 
    CardTitle, 
    CardText, 
    CardBody
} from 'reactstrap';
import './index.css';
import './HomePage.css';

class HomePage extends React.Component{
    render(){
        return(
            <Row id="home">
                <Card>
                    <CardImg src={'./OutsidePic.jpg'}/>
                    <CardImgOverlay>
                        <Row xs={"3"}>
                            <Col xs={{offset:2}}>
                                <CardBody>
                                    <Row style={{marginTop: "12%"}}>
                                        <CardTitle className="section-header" style={{ color:'#f3e8ee', fontSize: "3vw"}}>
                                            Hello, I'm Trevor!
                                        </CardTitle>  
                                    </Row>
                                    <Row>
                                        <CardText style={{color:'#f3e8ee', fontSize: "2vw"}}>
                                            I am a software engineer with a love for designing and implementing elegant solutions.
                                        </CardText>  
                                    </Row>
                                </CardBody>
                            </Col>
                        </Row>
                    </CardImgOverlay>
                </Card>
            </Row>
        );
    }
}

export default HomePage;