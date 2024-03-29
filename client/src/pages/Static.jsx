import '../index.css'
import './static.css';

export default function Static() {
    return (
        <div className='main'>

            <div className="insurance">
                <h2>Insurance</h2>
                <p>We handle insurance claims directly.</p>
            </div>

            <div className="mobile">
                <h2>Mobile</h2>
                <p>We come to your location, or you can come to our shop.</p>
            </div>

            <div className="recalibrate">
                <h2>Recalibration</h2>
                <p>We recalibrate the cameras on your windshield.</p>
            </div>

        </div>
    );
}