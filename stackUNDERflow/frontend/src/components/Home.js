import React, { Component } from 'react'
import { Button, Col, Container, Form, FormControl, Nav, Navbar, Row } from 'react-bootstrap'
import Footer from '../data/Footer.json'
import Answers from './Answers'
import Right from './Right'
import Sidenav from './Sidenav'
import './Styling.css'
class Home extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="https://stackoverflow.com/"><img
        src="/logo192.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt=""
        />{' '}stack<span className="font-weight-bold">underflow</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Products</Nav.Link>
      <Form inline>
      <FormControl type="text" placeholder="Search"/>
      
    </Form>
    </Nav>
    <Nav>
      <Nav.Link >Customers</Nav.Link>
      <Nav.Link eventKey={2}>
        Level
      </Nav.Link>
    </Nav>
    <Nav className="sideMenu">
      <Nav.Link >Jobs</Nav.Link>
      <Nav.Link eventKey={2} >
        Tags
      </Nav.Link>
      <Nav.Link>Users</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>
<div className="sideNav">
    <Sidenav />
</div>
<div className="mainContainer">
    <Container fluid>
        <Row>
        <Col xs={12} md={12}>
           <br></br>
           <Row>
           <Col xs={12} md={10}>
           <h4>How to save data into JSON to specified keys? For Python 3.7</h4>
           <Row>
               <div className="d-flex">
               &nbsp;&nbsp;&nbsp;&nbsp;<span className="smallFonts">Asked</span>&nbsp;<span className="font-weight-bold smallFonts">today</span>&nbsp;&nbsp;
               <span className="smallFonts">Active</span>&nbsp;<span className="font-weight-bold smallFonts">today</span>&nbsp;&nbsp;
               <span className="smallFonts">Viewed</span>&nbsp;<span className="font-weight-bold smallFonts">114 times</span>&nbsp;&nbsp;
               </div>
           {/* <Col xs={4} md={2}>
            <small>Asked</small>{' '}<small className="font-weight-bold">today</small>
           </Col>
           <Col xs={4} md={2}>
            <small>Asked</small>{' '}<small className="font-weight-bold">today</small>
           </Col>
           <Col xs={4} md={2}>
            <small>Asked</small>{' '}<small className="font-weight-bold">today</small>
           </Col> */}
           </Row>
           </Col>
           <Col xs={{span:8, offest:4}} md={2}>
           <Button title="Answers almost everything" href='https://google.com'>Ask Question</Button>
           </Col>
           </Row>

        
        </Col> 
        </Row>
        <hr></hr>
        <Row>
            <Col xs={12} md={8}>
                <Answers />
            </Col>
            <Col xs={12} md={4}>
                <Right />
            </Col>
        </Row>
    </Container>
</div>
{/* <Container fluid>
  <Row>
    <Col xs={4} md={3} style={{background:"red"}}>
      xs=6 md=4
    </Col>
    <Col xs={8} md={6} style={{background:"blue"}}>
      xs=6 md=4
    </Col>
    <Col xs={12} md={3} style={{background:"green"}}>
      xs=6 md=4
    </Col>
  </Row>
</Container> */}
<br></br>
<footer className="foot">
<Container fluid>
      <Row>
      {Footer.map((foot)=>{
                    return <Col className="element" style={{fontWeight:"bold"}} xs={4} md={3}>
                            {foot.name}<br></br>
                            {foot.components.map((comp)=>{ 
                              return <div className="element" style={{fontWeight:400}}>
                                {comp}
                              </div>
                            })}
                    </Col>

                    
                })}
      </Row>
    </Container>
    <br></br>
    <Row>
      <Col xs={12} md={6}>
        <span>
          <small>Blog</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Facebook</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <small>Twitter</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>LinkedIn</small>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>Instagram</small>&nbsp;
        </span>
      </Col>

      <Col xs={12} md={6}>
        <span>
          <small>site design/logo &copy; stackunderflow; Just for fun, no licenses accquired</small>
        </span>
      </Col>
    </Row>
</footer>
    
            </div>
        )
    }
}

export default Home
