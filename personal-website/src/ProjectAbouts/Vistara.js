import React from 'react';
import {
    Row,
    Col,
    Card,
    CardBody,
    CardText,
    CardImg,
    Container,
    CardHeader,
    Label,
    Button
    } from 'reactstrap';
import '../index.css';


class Vistara extends React.Component{

    render(){
        return(
            <div>
                <Card style={{position: 'fixed', width: '100vw', height: '100vh'}} className="text-center" id="vistara">
                    <Row style={{backgroundColor: "#03233a", height:10}}>
                    </Row>
                        <Row style={{height: 60, alignContent:"center", alignItems: "center"}}>
                            <Col xs = {{size: 2}}>
                                <Label style={{fontSize: 48, fontWeight: 'bold'}}>
                                    Vistara
                                </Label>
                            </Col>
                            <Col style={{marginTop:10}} xs = {{size: 1, offset:5}}>
                                <Label style={{opacity: .8, fontSize: 19}}>
                                    About
                                </Label>
                            </Col>
                            <Col style={{marginTop:10}} xs = {{size: 1}}>
                                <Label style={{opacity: .5, fontSize: 19}}>
                                    Products
                                </Label>
                            </Col>
                            <Col style={{marginTop:10}} xs = {{size: 1}}>
                                <Label style={{ opacity: .5, fontSize: 19}}>
                                    Login
                                </Label>
                            </Col>
                            <Col xs = {{size: 1, alignContent:'center'}}>
                                <Button style={{backgroundColor: "#df7e5d", borderRadius: 20, width:100, borderColor:"#df7e5d"}}>
                                    <p1 style={{fontSize: 19}}>
                                        Sign Up
                                    </p1>
                                </Button>
                            </Col>
                        </Row>
                        <Row style={{maxHeight: 200}}>
                            <CardImg src='./Homes.jpeg'/>
                        </Row>
                </Card>
            </div>
        );
    }
}

export default Vistara;