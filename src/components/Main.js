import React, { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';

// Context
import { MyStateManagement } from './Context/MyStateManagement';
// Components
import Footer from "./Footer";
import Routing from "./Routing";
import ScrollToTop from "./utilities/ScrollToTop";


const Main = () => {

    // Import state from Context
    const {currentPath, setCurrentPath} = useContext(MyStateManagement);

    const location = useLocation();
    useEffect( () => {
        setCurrentPath(location.pathname);
        console.log(`Path is: ${currentPath}`)
    });

    return (
        <div className='Main'>
            <Routing />
            <ScrollToTop />
            <Footer />
        </div>
    );
};


export default Main;
