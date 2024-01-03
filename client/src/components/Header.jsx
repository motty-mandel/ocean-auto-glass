import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className='header'>
            <h1>Ocean Auto Glass</h1>

            <div className='buttons'>
                <h3>Report Bugs</h3>
                <button id='signUpBtn'>Sign Up</button>
                <button id='loginBtn'>Login</button>
            </div>

        </div>
    );
}