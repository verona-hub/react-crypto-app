import React from 'react';
import travolta404 from '../../../img/404-travolta.webp';


const PageNotFound404 = () => {
    return (
        <div className='PageNotFound404'>
            <h1> Page not found </h1>
            <div className= 'travolta-wrapper'>
                <img src={ travolta404 } alt='page not found - John Travolta confused gif'/>
            </div>
        </div>
    );
};


export default PageNotFound404;
