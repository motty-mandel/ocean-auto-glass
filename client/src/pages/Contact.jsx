import React from "react";
import './contact.css';

export default function Contact() {
    return (
        <div className='contact'>
            <div className="formDiv">
            <h2>Contact Us</h2>
            <p>Call us at <a href="tel:732-677-8472">732-677-8472</a></p>
            <p>Or fill out the form below with the cars info and
                <br /> 
                we will get back to you as soon as possible.</p>
            <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Number" />
                <input type="text" placeholder="Year" />
                <input type="text" placeholder="Make" />
                <input type="text" placeholder="Model" />
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )};