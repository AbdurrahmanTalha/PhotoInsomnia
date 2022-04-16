import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (
        <div>
            <nav className="nav">
                <div className="logo">
                    <h2>Travel Insomnia</h2>
                </div>
                <div className="ul-container">
                    <ul className="items">
                        <li><Link to="/" className="nav-item">Home</Link></li>
                        <li><Link to="#" className="nav-item">Services</Link></li>
                        <li><Link to="/login" className="nav-item">Login</Link></li>
                        {/* <li><Link to="#" className="nav-item">Sign Up</Link></li> */}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;