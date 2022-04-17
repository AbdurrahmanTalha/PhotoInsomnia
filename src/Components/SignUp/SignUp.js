import { createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from "../../firebase.init";
import "./SignUp.css"
import { ToastContainer, toast } from 'react-toastify';
const SignUp = () => {
    const [signInWithGoogle, googleUser, loading, error] = useSignInWithGoogle(auth);

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate()

    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePassBlur = e => {
        setPass(e.target.value)
    }
    const handleConfirmPassBlur = e => {
        setConfirmPass(e.target.value)
    }
    const handleSignup = e => {
        e.preventDefault()
        if (pass !== confirmPass) {
            setErr("Confirm Password doesnt Match Password ")
        } else {
            createUserWithEmailAndPassword(auth, email, pass)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    verifyEmail()
                    console.log(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErr(errorMessage)
                });
        }

    }
    const handleSignUpWithGoogle = e => {
        signInWithGoogle()
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert("sended verifaction email")
            })
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
                <p className='text-danger'>{err}</p>

                <p>Already have a account <Link to="/login">Login</Link></p>
                <Button variant="primary" type="submit" className="w-100">
                    Sign Up
                </Button>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <div className="or-border mr-3"></div>
                    <h2 className="or-text">OR</h2>
                    <div className="or-border ml-3"></div>
                </div>

                <button className="signUp-btn" onClick={handleSignUpWithGoogle}><img className="sign-img" src="google.png" alt="googleimg" />Sign Up With Google</button>

            </Form>
        </div>
    );
};

export default SignUp;