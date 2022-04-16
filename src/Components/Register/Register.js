import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Register = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const handleEmailBlur = () => {

    }
    const handlePassBlur = () => {

    }
    const handleRegister = () => {

    }
    return (
        <div>
            <h2>Please Register</h2>
            <div className='w-50'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Register;