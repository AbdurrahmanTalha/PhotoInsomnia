// imports
import React, { useState } from 'react';
import { Button, Form, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    // variables and states
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')

    const navigate = useNavigate()
    const [signInWithGoogle,loading, error2] = useSignInWithGoogle(auth);
    if (loading) {
        return <Spinner animation="grow" className="d-flex justify-content-center align-items-center" variant="dark" />
    }
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePassBlur = e => {
        setPass(e.target.value)
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate("/checkout")
                setErr("")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErr(errorMessage)
            });


    }
    const handleSignInWithGoogle = e => {
        signInWithGoogle()
        navigate("/checkout")

    }
    const handleForgotPass = e => {

        sendPasswordResetEmail(auth, email)

            .then(() => {
                toast("Sended Password reset Email.")
            })
            .catch((error) => {
                const errorMessage = error.message;
                setErr(errorMessage)
            });


    }
    // Component
    return (
        <div className='w-50 mx-auto my-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} required type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassBlur} required type="password" placeholder="Password" />
                    <p>Forgot your <button onClick={handleForgotPass}>password</button></p>
                </Form.Group>

                <p className="text-danger">{error2?.message || err }</p>
                <p>New to Photo Insomnia? <Link to="/signup">Join now</Link></p>
                <Button variant="primary" className="w-100" type="submit">
                    Login
                </Button>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <div className="or-border mr-3"></div>
                    <h2 className="or-text">OR</h2>
                    <div className="or-border ml-3"></div>
                </div>

                <button className="signUp-btn" onClick={handleSignInWithGoogle}><img className="sign-img" src="google.png" alt="google-img" />Sign In With Google</button>
            </Form>
            <ToastContainer />
        </div>
    );
};

export default Login;