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
                <Col style={{zIndex: "1"}} xs={{size: 6, offset: 0}}>
                    <Row xs={"1"}>
                        <CardBody style={{marginLeft: "3%"}}>
                            <Row style={{marginTop: "26%"}}>
                                <CardTitle className="section-header" style={{fontSize: "55px", opacity: .75}}>
                                    Hi, I am <span className='letter-t'>T</span>revor!
                                </CardTitle>  
                            </Row>
                            <Row>
                                <CardText style={{fontSize: "45px", opacity: .65}}>
                                    I am a sof<span className='letter-t'>t</span>ware engineer with a love for designing and implemen<span className='letter-t'>t</span>ing elegan<span className='letter-t'>t</span> solu<span className='letter-t'>t</span>ions.
                                </CardText>  
                            </Row>
                        </CardBody>
                    </Row>
                </Col>
                <Col xs={{size: 6}}>
                    <img style={{minHeight: '91vh', objectFit: 'cover'}} className='img-fluid left-faded' src={'./IMG_9931.CR2.jpg'}/>
                </Col>
            </Row>
        );
    }
}

export default HomePage;