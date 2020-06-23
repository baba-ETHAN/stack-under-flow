import React, { Component } from 'react';
import { Badge, Col, Container, Row, ButtonGroup,Button } from 'react-bootstrap';
import { BsClockHistory } from "react-icons/bs";
import { FaCaretDown, FaCaretUp,FaCheck,FaHandRock } from "react-icons/fa";
import { GoBookmark } from "react-icons/go";
import Comments from '../data/Comments.json'
import AnsComments from '../data/AnsComments.json'
import { Editor } from '@tinymce/tinymce-react';
class Answers extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0,
             answerCount:2
        }
        this.increment=this.increment.bind(this)
        this.decrement=this.decrement.bind(this)
        this.incrementAns=this.incrementAns.bind(this)
        this.decrementAns=this.decrementAns.bind(this)
    }
    increment = () => {
        this.setState({count:this.state.count+1});
      }

      decrement = () => {
        this.setState({count:this.state.count-1});
      }

      incrementAns = () => {
        this.setState({answerCount:this.state.answerCount+1});
      }

      decrementAns = () => {
        this.setState({answerCount:this.state.answerCount-1});
      }
    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col xs={2} md={2} >
                            <div style={{opacity:"0.6"}} onClick={this.increment}><FaCaretUp size="2rem"/></div>
                            <div style={{marginLeft:"10px",fontSize:"large"}}>{this.state.count}</div>
                            <div style={{opacity:"0.6"}} onClick={this.decrement}><FaCaretDown size="2rem" /></div>
                            <div style={{marginLeft:"8px",opacity:"0.6"}}><GoBookmark size="1rem"/></div>
                            <div style={{marginLeft:"8px",opacity:"0.6"}}><BsClockHistory size="1rem"/></div>
                        </Col>
                        <Col xs={10} md={10} >
                        <div>I have little script on python and I want receive results into JSON file.</div>
                <div>I prepared already JSON keys with names of tests.</div>
                <div>It looks like this one:</div><br></br>
                <div style={{backgroundColor:"rgb(239,240,241)",padding:"10px 10px 10px 20px",fontSize:"13px"}}>
                    <div>{'{'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"key1" : ""'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"key2" : ""'}</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'"key3" : ""'}</div>
                    <div>{'}'}</div>
                   
                </div>
                <br></br>
                <div>And now I want to save results (usual str (after if else tests)) as value into specified key.</div>
                <div>How can I perform it?</div>
                <div>Thank you!</div><br></br>
                <span><Badge variant="primary">python</Badge>{' '}<Badge variant="primary">json</Badge></span><br></br><br></br>
                <Row>
                <Col xs={2} md={1} className="listMenu">
                   <small> share</small>
                </Col>
                <Col xs={8} md={4} className="listMenu" >
                <small>  improve this question</small>
                </Col>
                <Col xs={2} md={1} className="listMenu">
                <small> follow</small>
                </Col>
                <Col xs={12} md={2} >
                    {' '}
                </Col>
                <Col xs={12} md={4} >
                <div style={{backgroundColor:"rgb(239,240,241)",padding:"10px 10px 10px 20px"}}>
                    <div style={{color:"#6A737C"}}><small>asked 13 mins ago</small></div>
                    <div style={{color:"#0077CC"}}>ABD17</div>
                </div>
                </Col>
                </Row>
                <hr></hr>
                {Comments.map((comment)=>{
                    return <div style={{fontSize:"14px"}}><span>{comment.comment}</span>&nbsp;- &nbsp;
                    <span style={{color:"#0077CC"}}>{comment.name}</span>&nbsp;&nbsp;<small style={{color:"#6A737C"}}>{comment.time}</small><hr></hr></div>
                })}
                <small style={{color:"darkgrey"}}>add a comment</small><br></br>
                   </Col>
                    </Row>
                    <Row>
                <Col xs={6} md={{span:4}} >
                   <h5>1 Answer</h5>
                </Col>
                <Col xs={6} md={{span:4, offset:4}}>
                <ButtonGroup aria-label="Basic example">
  <Button href="https://brainly.in/question/607265#:~:text=Lithium%20is%20the%20most%20active%20element%20in%20the%20periodic%20table." variant="outline-secondary">Active</Button>
  <Button href="https://www.bbc.com/news/science-environment-40224991#:~:text=However%2C%20the%20oldest%2C%20precisely%20measured,Great%20Basin%20Bristlecone%20pine%20tree." variant="outline-secondary">Oldest</Button>
  <Button href="https://twitter.com/BJP4India" variant="outline-secondary">Votes</Button>
</ButtonGroup>
                </Col>
                </Row><br></br>
                <Row>
                        <Col xs={2} md={2} >
                            <div style={{opacity:"0.6"}} onClick={this.incrementAns}><FaCaretUp size="2rem"/></div>
                            <div style={{marginLeft:"10px",fontSize:"large"}}>{this.state.answerCount}</div>
                            <div style={{opacity:"0.6"}} onClick={this.decrementAns}><FaCaretDown size="2rem" /></div>
                            <div style={{marginLeft:"5px",color:"green",opacity:"0.8"}}><FaCheck size="2rem"/></div>
                            <div style={{marginLeft:"8px",opacity:"0.6"}}><FaHandRock size="1rem"/></div>
                            <div style={{marginLeft:"8px",opacity:"0.6"}}><BsClockHistory size="1rem"/></div>
                        </Col>
                        <Col xs={10} md={10} >
                        <div>to save dictionary into a json format you should use json lib which allows you to dump a dictionary in a json file and convert convert a .json into a python dictionary</div>
                            <br></br>
                <div style={{backgroundColor:"rgb(239,240,241)",padding:"10px 10px 10px 20px",fontSize:"13px"}}>
                    <div>import json</div><br></br>
                    <div>my_dict = {"{'key1':'', 'key2':'', 'key3':''}"}</div><br></br>
                    <div>def dump_data(data):</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with open('file.json', 'w') as file:</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;json.dump(data, file)</div>
                    <br></br>
                    <div>def read_data(file_name):</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;with open(file_name, 'r') as file:</div>
                    <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return json.load(file)</div><br></br>
                    <div>dump_data(my_dict)</div>
                    <div>my_dict2 = read_data('file.json')</div>                 
                    
                   
                </div>
                <br></br>
                
                <Row>
                <Col xs={2} md={1} className="listMenu">
                   <small> share</small>
                </Col>
                
                <Col xs={2} md={1} className="listMenu">
                <small> follow</small>
                </Col>
                <Col xs={12} md={6} >
                    {' '}
                </Col>
                <Col xs={12} md={4} >
                <div style={{backgroundColor:"rgb(239,240,241)",padding:"10px 10px 10px 20px"}}>
                    <div style={{color:"#6A737C"}}><small>answered 5 mins ago</small></div>
                    <div style={{color:"#0077CC"}}>un random</div>
                </div>
                </Col>
                </Row>
                <hr></hr>
                {AnsComments.map((comment)=>{
                    return <div style={{fontSize:"14px"}}><span>{comment.comment}</span>&nbsp;- &nbsp;
                    <span style={{color:"#0077CC"}}>{comment.name}</span>&nbsp;&nbsp;<small style={{color:"#6A737C"}}>{comment.time}</small><hr></hr></div>
                })}
                <small style={{color:"darkgrey"}}>add a comment</small><br></br>
                   </Col>
                    </Row><br></br>
                <h5>Your Answer</h5><br></br>
                <div>
                <Editor
         initialValue="Your answer here..."
         init={{
           height: 250,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar:
             'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help'
         }}
         onEditorChange={this.handleEditorChange}
       />
                </div>
                </Container>
                
            </div>
        )
    }
}

export default Answers
