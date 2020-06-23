import axios from "axios";
import React, { Component } from "react";
import { Redirect } from 'react-router';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      password:'',
      redirect:false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEvents = this.handleChangeEvents.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick = (event) => {
    
   this.handleSubmit(event);
    
  }
  handleChangeEvents(event) {
    this.setState({
      [event.target.name]: event.target.value
    });

    
  }

  handleSubmit(event) {
    var user= {
      "email": this.state.username,
      "password": this.state.password
    }

    axios
      .post(
        "/login/"+this.state.username+"/"+this.state.password)
      .then(response => {
        console.log(response)
        if(response.data=='allowed'){
          this.setState({redirect: true});
        }else{
          alert("User correct credentials")
        }
        
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {

    if (this.state.redirect) {
        return <Redirect push to="/home" />;
      }
    const loginForm = {
        width:"100%",
        maxWidth:"330px",
        padding:"15px",
        margin:"auto"

      };

     
    return (
        
      <Form style={loginForm}>
          <h1>
              <span className="font-weight-bold">STACKUNDERFLOW</span>.com
          </h1>
          <h2 className="text-center">Welcome! </h2>
          
          <FormGroup>
              <Label>Username</Label>
              <Input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChangeEvents}></Input>
             
              <Label>Password</Label>
              <Input type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChangeEvents}></Input>
          </FormGroup>
          <Button className="btn-lg btn-dark btn-block" onClick={this.handleOnClick}>Login</Button>
          
      </Form>
     
    );
  }
}

export default Login
