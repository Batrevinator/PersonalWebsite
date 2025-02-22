import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    Row,
    Col,
    Container,
    Card,
    CardTitle,
    CardBody,
    CarouselItem,
    CarouselCaption,
    Carousel
    } from 'reactstrap';
import './index.css';
import CustomCarousel from './Carousel';

class Experience extends React.Component{
    render(){
        return(
            <Card className="text-center" id="experience">
                <CardTitle className='section-header'> 
                    Experience
                </CardTitle>
                <Col xs={{size: 8, offset:2}}>
                    <CardBody>
                        <CustomCarousel/>
                    </CardBody>
                </Col>
            </Card>
        );
    }
}

export default Experience;