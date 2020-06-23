import React, { Component } from 'react'
import { Card, ListGroup, Badge,Row,Col} from 'react-bootstrap'
import { MdLocationOn,MdEdit } from "react-icons/md";
import './Styling.css'
export class Right extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem'}}>
  <Card.Header style={{backgroundColor:"bisque"}}>The Underflow Blog</Card.Header>
  <ListGroup variant="flush">
        <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} ><MdEdit />{' '}The Overflow #26: The next right thing</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} ><MdEdit />{' '}Navigation or forgetfulness? On finding purple links in your search</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"bisque"}} >Featured on Meta</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} >We're switching to CommonMark</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} >
Stack Overflow is migrating to CommonMark on Saturday, June 20, 2020</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} >
Feature test: Thank you reaction</ListGroup.Item>
    <ListGroup.Item style={{backgroundColor:"beige",fontSize:"small"}} >
What can we do to encourage downvoting?</ListGroup.Item>
    
    
  </ListGroup>
</Card>
<br></br>
<Card style={{ width: '18rem'}}>
  <Card.Header style={{background:"linear-gradient(40deg,orangered ,orange)", color:"white"}}><h6>Looking for a job ?</h6></Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item style={{border:"none"}}>
        <div className="title">Software Engineer III</div>
        <div className="company">J.B Hunt Transport&nbsp;&nbsp;<MdLocationOn /><span className="location">Lowell,AR</span></div>
        <span className="tags"><Badge variant="primary">java</Badge>{' '}<Badge variant="primary">angular</Badge></span>
        </ListGroup.Item>
        <ListGroup.Item style={{border:"none"}}>
        <div className="title">Java Tech Lead</div>
        <div className="company">Kite String TS&nbsp;&nbsp;<MdLocationOn /><span className="location">Bentoville,AR</span></div>
        <span className="tags"><Badge variant="primary">SQL</Badge>{' '}<Badge variant="primary">java</Badge></span>
        </ListGroup.Item>
        <ListGroup.Item style={{border:"none"}}>
        <div className="title">Software Engineer(Java)</div>
        <div className="company">Pinnacle 21&nbsp;&nbsp;<MdLocationOn /><span className="location">Bluebell,PA</span></div>
        <span className="tags"><Badge variant="primary">java</Badge>{' '}<Badge variant="primary">spring</Badge></span>
        </ListGroup.Item>
        <ListGroup.Item style={{border:"none"}}>
        <div className="title">React Engineer </div>
        <div className="company">Vicara&nbsp;&nbsp;<MdLocationOn /><span className="location">Remote</span></div>
        <span className="tags"><Badge variant="primary">react</Badge>{' '}<Badge variant="primary">js</Badge></span>
        </ListGroup.Item>
    
    
    
  </ListGroup>
</Card>
<br></br>
<Card style={{ width: '18rem', border:"none"}}>
  <Card.Header style={{border:"none"}}>Related</Card.Header>
  <ListGroup variant="flush">
        <ListGroup.Item style={{border:"none",fontSize:"small",color:" rgb(0,119,2014)"}} >
            <Row>
                <Col xs={2} md={2}>
                <Badge variant="success">4834</Badge>
                </Col>
                <Col xs={10} md={10}>
                How do i merge two dictionaries in a single expression in python?
                </Col>
            </Row>
            </ListGroup.Item>
            <ListGroup.Item style={{border:"none",fontSize:"small",color:" rgb(0,119,2014)"}} >
            <Row>
                <Col xs={2} md={2}>
                <Badge variant="success">2007</Badge>
                </Col>
                <Col xs={10} md={10}>
                How do i format a Microsoft JSON date?
                </Col>
            </Row>
            </ListGroup.Item><ListGroup.Item style={{border:"none",fontSize:"small",color:" rgb(0,119,2014)"}} >
            <Row>
                <Col xs={2} md={2}>
                <Badge variant="success">2919</Badge>
                </Col>
                <Col xs={10} md={10}>
                How do i get the current time in python?
                </Col>
            </Row>
            </ListGroup.Item><ListGroup.Item style={{border:"none",fontSize:"small",color:" rgb(0,119,2014)"}} >
            <Row>
                <Col xs={2} md={2}>
                <Badge variant="success">2639</Badge>
                </Col>
                <Col xs={10} md={10}>
               How can I add new key to a dictionary?
                </Col>
            </Row>
            </ListGroup.Item><ListGroup.Item style={{border:"none",fontSize:"small",color:" rgb(0,119,2014)"}} >
            <Row>
                <Col xs={2} md={2}>
                <Badge variant="success">2856</Badge>
                </Col>
                <Col xs={10} md={10}>
                How do i POST JSON data with Curl?
                </Col>
            </Row>
            </ListGroup.Item>
    
  </ListGroup>
</Card>
            </div>
        )
    }
}

export default Right
