import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const handleLogin = () => {
        
    }
    const handleEmailBlur = e => {

    }
    const handlePassBlur = e => {

    }
    return ( 
        <div className='w-50 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" />
                </Form.Group>
                
                <p>{err || error?.message}</p>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default Login;