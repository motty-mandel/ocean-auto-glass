import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className='header'>
            <h1>Ocean Auto Glass</h1>


            <Link to="/contact">
            <h5>Contact us</h5>
            </Link>
                {/* <button id='signUpBtn'>Sign Up</button>
                <button id='loginBtn'>Login</button> */}


        </div>
    );
}