import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Navbar.css"
import { signOut } from "firebase/auth"
const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <h2>Loading...</h2>
    }
    const signOutBtn = () => {
        signOut(auth)
    }
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <h2>Travel Insomnia</h2>
                </div>
                <div className="ul-container">
                    <ul className="items d-flex justify-content-center">
                        <li><Link to="/" className="nav-item">Home</Link></li>                        
                        <li><Link to="/blogs" className="nav-item">Blogs</Link></li>
                        <li><Link to="/about" className="nav-item">About</Link></li>
                        {
                            user ? <li><button onClick={signOutBtn} className="nav-item">Sign Out</button ></li>  : <li><Link to="/login" className="nav-item">Login</Link></li>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;