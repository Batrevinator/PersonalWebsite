import React from 'react';
import { Row, Col, CardBody, CardTitle, CardText } from 'reactstrap';
import './index.css';
import './HomePage.css';

class HomePage extends React.Component {
    render() {
        return (
            <Row id="home" className="home-row">
                {/* Text Column */}
                <Col xs={12} md={6} className="intro-col overlay-text">
                    <CardBody className="intro-card">
                        <CardTitle className="section-header">
                            Hi, I am <span className='letter-t'>T</span>revor!
                        </CardTitle>
                        <CardText className="intro-text">
                            I am a sof<span className='letter-t'>t</span>ware engineer with a love for designing and implemen<span className='letter-t'>t</span>ing elegan<span className='letter-t'>t</span> solu<span className='letter-t'>t</span>ions.
                        </CardText>
                    </CardBody>
                </Col>

                {/* Image Column */}
                <Col xs={12} md={6} className="img-col">
                    <img
                        src={'./IMG_9931.CR2.jpg'}
                        alt="Trevor"
                        className='home-img'
                    />
                </Col>
            </Row>
        );
    }
}

export default HomePage;
