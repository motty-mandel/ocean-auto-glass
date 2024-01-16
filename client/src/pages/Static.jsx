import './static.css';

export default function Static() {
    return (
        <div className='main'>

            <div className="static1">
                <div className="box1">
                    <h3>Done at your location or at our shop - whichever suits you better!</h3>
                </div>
            </div>

            <div className="static2">
                <div className="reviews">
                    <img src="google-review.png" alt="google-review" />
                </div>
                <div className='review1'>
                    <img src="review-1.png" alt="review1" />
                </div>
                <div className="review-2">
                    <img src="review-2.png" alt="motty" />
                </div>
            </div>


            <div className="static3">
                <div className="motty">
                    <img src="motty-at-work.jpg" alt="motty" />
                </div>
            </div>
        </div>
    );
}