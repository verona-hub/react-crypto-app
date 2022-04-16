import React, { useContext, useEffect }  from 'react';
import scrollToTopIcon from '../../img/scroll.png';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const ScrollToTop = () => {

    // Import State from Context
    const { showScrollButton, setShowScrollButton } = useContext(MyStateManagement);

    // Add an event listener to detect the scroll
    // If scrolled to a certain point, the scroll to top button will appear/disappear
    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > window.innerHeight * 0.1) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        });
    }, [setShowScrollButton]);

    // If the scroll arrow is clicked, the window will scroll to the top
    const onClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return(
        <div className="ScrollToTop" onClick={ onClick }>
            {
                showScrollButton && (
                    <img src={ scrollToTopIcon } alt='scroll to top icon'/>
                )
            }
        </div>
    );
};


export default ScrollToTop;
