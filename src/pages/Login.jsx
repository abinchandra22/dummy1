import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='container mt-5 border'>
        <h1>Login</h1>
        <Link  to={'/'}>home</Link>

<div className='container p-5'>
            <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
    
          <FloatingLabel
            controlId="floatingInput"
            className="mb-3"
            label="username"
          >
            <Form.Control type="username" placeholder="username" />
          </FloatingLabel>
    
    
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
          </FloatingLabel>
          <button className='bg-danger'>login</button>
    
</div>   
 </div>
  )
}

export default Login