import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Register() {

    const [unameValid,setUnameValid]=useState(false)
    const [emailValid,setEmailValid]=useState(false)
    const [passwordValid,setPasswordValid]=useState(false)
    

const setData = (e)=>{
const {name,value}=e.target

if (name=='email') {
    if (value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
        setEmailValid(false)
        
    }else{
        setEmailValid(true)
    }
}
if(name=='username'){
    if(value.match(/^[a-zA-Z ]+$/)){
      setUnameValid(false)
    }
    else{
      setUnameValid(true)
    }
  }
  if(name=='password'){
    if(value.match(/^[a-zA-Z0-9!@#$%^&*]{6,16}$/)){
      setPasswordValid(false)
    }
    else{
      setPasswordValid(true)
    }
  }
  setregData({...regData,[name]:value})
}






    const [regData,setregData]=useState({
        email:"",username:"",password:""
    })
    console.log(regData);

    const handleregister = async (e) =>{
        e.preventDefault()
        const {email,username,password}= regData
        if (!email || !username || !password )  {
            
                alert("fill form")
            
            
        }else{
            alert("sucess")
        }
    }

  return (
    <div className='container mt-5 border'>
        <h1>Register</h1>
        <Link  to={'/'}>home</Link>

<div className='container p-5'>
            <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com"  onChange={(e)=>setData(e)} name='email'/>
          </FloatingLabel>
          {
        emailValid &&
        <div>
          <p className='text-danger'>invalid email</p>
        </div>
      }
    
          <FloatingLabel
            controlId="floatingInput"
            className="mb-3"
            label="username"
          >
            <Form.Control type="username" placeholder="username"   onChange={(e)=>setData(e)} name='username'/>
          </FloatingLabel>
          {
        unameValid &&
        <div>
          <p className='text-danger'>invalid username</p>
        </div>
      }

    
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password"  onChange={(e)=>setData(e)} name='password'/>
          </FloatingLabel>
          {
        passwordValid &&
        <div>
          <p className='text-danger'>invalid password</p>
        </div>
      }

          <button onClick={handleregister} className='bg-danger'>egister</button>
    
</div>   
 </div>
  )
}

export default Register