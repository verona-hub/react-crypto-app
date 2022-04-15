import React, { useContext, useEffect }  from 'react';
import scrollToTopIcon from '../../img/scroll.png';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const ScrollToTop = () => {

    // Import State from Context
    const { showScrollButton, setShowScrollButton } = useContext(MyStateManagement);

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > window.innerHeight * 0.1) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        });
    }, []);

    const onScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="ScrollToTop" onClick={ onScroll }>
            {
                showScrollButton && (
                    <img src={ scrollToTopIcon } alt='scroll to top icon'/>
                )
            }
        </div>
    );
};


export default ScrollToTop;
