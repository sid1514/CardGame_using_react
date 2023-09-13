import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Button, Form,Modal, Segment } from 'semantic-ui-react';
import React from 'react';
import Game from './Game';
import './login.css';

const Login=()=>{
    let [id,setId]=useState();
let[pass,setPass]=useState();
let nav=useNavigate();
let [flag,setFlag]=useState(true);
const [open, setOpen] = React.useState(false);
const signup=()=>{
  localStorage.setItem(id,pass);
  setOpen(false);
}
const signin=()=>{
  let p=localStorage.getItem(id);
  setFlag(false)
  if(pass==p){
    
    nav('/Game');

  }
}
 return(
  <>
  
  { flag?
  <div className='log'>
  <Form>
    <Form.Field>
      <label ><h2 style={{color:"white"}}> Name</h2></label>
      <input placeholder=' Name' onChange={(e)=>{setId(e.target.value)}}/>
    </Form.Field>
    <Form.Field>
      <label><h2 style={{color:"white"}}>Password</h2></label>
      <input placeholder='password' onChange={(e)=>{setPass(e.target.value)}}/>
    </Form.Field>
    <br></br>
    <br></br>
    <Segment inverted>

     <Button onClick={signin} Inverted color='red'> Sign In </Button> 
    < Modal  
    trigger={<Button  Inverted color='red'>Sign Up</Button>}
    onClose={() => setOpen(false)}
    onOpen={() => setOpen(true)}
    open={open}
    
    >
     
      <Modal.Header> Sign Up</Modal.Header>
      <Modal.Content>
        
        <Modal.Description>
          
        <label ><h2 style={{color:"white"}}> Name</h2></label>
      <input placeholder=' Name' onChange={(e)=>{setId(e.target.value)}}/>
      <label><h2 style={{color:"white"}}>Password</h2></label>
      <input placeholder='create password' onChange={(e)=>{setPass(e.target.value)}}/>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Confirm"
          labelPosition='right'
          icon='checkmark'
          onClick={signup}
          positive
          />
      </Modal.Actions>
    </Modal>
          </Segment>
   
  </Form>
  </div>:null
}
  </>
 )
 
}
export default Login;