import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export default function Home() {
    return (
        <div className="container">
            <div className="one">
                <ul>
                    <li>Home</li>
                    <li>Notifications</li>
                    <li>Part Number Lookup</li>
                    <li>Inventory</li>
                    <li>Something Else</li>
                </ul>
            </div>
        </div>
    );
}