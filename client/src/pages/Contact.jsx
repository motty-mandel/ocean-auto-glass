import React from "react";
import './contact.css';

export default function Contact() {

    const eraseNames = () => {
        document.getElementById('name').value = '';
        document.getElementById('number').value = '';
        document.getElementById('year').value = '';
        document.getElementById('make').value = '';
        document.getElementById('model').value = '';
        document.getElementById('message').value = '';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        setTimeout(() => {
            form.submit();
            eraseNames();
        }, 2000);
    }

    return (
        <div className='contact'>
            <div className="formDiv">
            <p>Call us at <a href="tel:732-677-8472">732-677-8472</a></p>
            <p>Or fill out the form below with the car's info and
                <br /> 
                we will get back to you as soon as possible.</p>
            <form action="https://getform.io/f/4cbf3c77-b4f1-4502-ac06-d26cafe10df8" method="POST" onSubmit={handleSubmit}>
                <input id="name" type="text" name="Name" placeholder="Name"/>
                <input id="number" type="text" name="Number" placeholder="Number"/>
                <input id="year" type="text" name="Year" placeholder="Year"/>
                <input id="make" type="text" name="Make" placeholder="Make"/>
                <input id="model" type="text" name="Model" placeholder="Model"/>
                <input id="message" type="text" name="Message" placeholder="Message"/>
                <button type="submit">Submit</button>
            </form>
            </div>
        </div>
    )};