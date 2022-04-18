import React from 'react';
// Components
import Footer from "./Footer";
import Routing from "./Routing";
import ScrollToTop from "./utilities/ScrollToTop";


const Main = () => {
    return (
        <div className='Main'>
            <Routing />
            <ScrollToTop />
            <Footer />
        </div>
    );
};


export default Main;
