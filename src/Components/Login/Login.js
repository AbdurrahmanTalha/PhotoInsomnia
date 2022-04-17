import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const [signInWithGoogle, user1, loading2, error2] = useSignInWithGoogle(auth);
    const handleEmailBlur = e => {
        setEmail(e.target.value)
    }
    const handlePassBlur = e => {
        setPass(e.target.value)
    }
    if (loading || loading2) {
        return <h2>Loading...</h2>
    }
    const handleLogin = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, pass)
        navigate("/")
    }
    const handleSignInWithGoogle = e => {
        signInWithGoogle()
        navigate("/")
    }
    return ( 
        <div className='w-50 mx-auto my-5'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePassBlur} type="password" placeholder="Password" />
                </Form.Group>
                
                <p>{error?.message || error2?.message}</p>
                <p>New to travel Insomnia? <Link to="/signup">Join now</Link></p>
                <Button variant="primary" className="w-100" type="submit">
                    Login
                </Button>
                <div className="d-flex justify-content-center align-items-center my-3">
                    <div className="or-border mr-3"></div>
                    <h2 className="or-text">OR</h2>
                    <div className="or-border ml-3"></div>
                </div>

                <button className="signUp-btn" onClick={handleSignInWithGoogle}><img className="sign-img" src="google.png" alt="googleimg" />Sign In With Google</button>
            </Form>
        </div>
    );
};

export default Login;