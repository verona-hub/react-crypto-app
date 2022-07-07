import React from 'react';
// Confused John Travolta gif
import travolta404 from "../../../img/404-travolta.webp";


const ConfusedTravolta = () => {
    return (
        <section className='ConfusedTravolta'>
            <div className='travolta-wrapper'>
                <img src={ travolta404 } alt='page not found - John Travolta confused gif'/>
            </div>
            <div className='text'>
                <h1> Oops! The page you requested cannot be found. </h1>
                <p> It seems that the page you were trying to reach does not exist or it
                    was moved. We suggest you to choose wisely.
                </p>
            </div>
        </section>
    );
};

export default ConfusedTravolta;
