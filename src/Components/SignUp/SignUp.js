import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
const SignUp = () => {
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // const [sendEmailVerification, sending, emailErr] = useSendEmailVerification(
    //     auth
    // );

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [err, setErr] = useState('')
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePassBlur = e => {
        setPass(e.target.value)
    }
    const handleConfirmPassBlur = e => {
        setConfirmPass(e.target.value)
    }
    const handleSignup = async e => {
        e.preventDefault()
        if (pass !== confirmPass) {
            setErr("Password Doesnt match Confirm pass")
            return
        } else {
            createUserWithEmailAndPassword(email, pass)
        }
        // await sendEmailVerification();
        // alert('Sent email');

    }
   


    if (loading) {
        return <p>Loading...</p>;
    }
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Please SignUp</h2>
            <Form onSubmit={handleSignup}>
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassBlur} type="password" placeholder="Password" />
                </Form.Group>
                <p>{err || error?.message}</p>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;