import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <div className='container'>
            <div className="row">
            <nav className='navbar navbar-expand-xl navbar-light bg-light'>
                <a className='navbar-brand' href="/">Ocean Auto Glass</a>
            </nav>
            </div>
        </div>
    );
}