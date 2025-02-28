import "./CustomNav.css"
import {HashLink} from "react-router-hash-link"
import {
    Col,
    CardText,
    Label,
    CardImg,
    Row,
} from 'reactstrap';
import React from 'react';

class WhereWhatWhenInjectable extends React.Component{
    constructor(props) {
        super(props);
    }
  render(){
    return (
        <Row style={{marginBottom: 70}} xs = "3">
        <Col>
            <Label tag = {'h2'}>Where</Label>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 2
                }}
            />
            <Row style = {{alignItems:"center"}}>
                {this.props.where}
            </Row>
        </Col>
        <Col>
            <Label tag = {'h2'}>What</Label>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 2
                }}
            />
            <CardText>
                {this.props.what}
            </CardText>
        </Col>
        <Col>
            <Label tag = {'h2'}>When</Label>
            <hr
                style={{
                    color: 'black',
                    backgroundColor: 'black',
                    height: 2
                }}
            />
            <CardText>
                {this.props.when}
            </CardText>
        </Col>
    </Row>
    );
  }
};

export default WhereWhatWhenInjectable;

