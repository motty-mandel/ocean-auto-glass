import './static.css';

export default function Static() {
    return (
        <div className='main'>
            <div className="static1">
                <div className="box1">
                    <h3>Done at your home or at work - wherever you are!</h3>
                </div>
                <div className="image">
                    <img src="google-review.png" alt="google-review" />
                </div>
            </div>
            <div className="static2">
            <div className='review1'>
                    <img src="review-1.png" alt="review1" />
                </div>
                <div className="motty">
                    <img src="motty-at-work.jpg" alt="motty" />
                </div>
            </div>
        </div>
    );
}