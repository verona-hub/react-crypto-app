import React, { useEffect }  from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../img/favicon.ico';
// Navigation Icons
import home from '../img/home.png';
import home_inactive from '../img/home_inactive.png';
import coin from '../img/coin.png';
import coin_inactive from '../img/coin_inactive.png';
import exchange from '../img/exchange.png';
import exchange_inactive from '../img/exchange_inactive.png';
import wiki from '../img/wiki.png';
import wiki_inactive from '../img/wiki_inactive.png';


const Sidebar = () => {

    // the useLocation hook will detect the current url
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);

    // The navigation icons will change depending if active or not
    const homeIcon = location.pathname === '/' ? home : home_inactive;
    const coinsIcon = location.pathname === '/coins' ? coin : coin_inactive;
    const exchangesIcon = location.pathname === '/exchanges' ? exchange : exchange_inactive;
    const wikiIcon = location.pathname === '/wiki' ? wiki : wiki_inactive;

    return (
        <nav className="Sidebar">

            <div className="logo">
                <img src={ logo } alt='app logo'/>
            </div>

            <div className="links-wrapper">
                <div className="links">
                    <NavLink
                        to='/'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ homeIcon } alt='menu homepage icon'/>
                        Homepage
                    </NavLink>

                    <NavLink
                        to='coins'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ coinsIcon } alt='menu coins icon'/>
                        Coins
                    </NavLink>

                    <NavLink
                        to='exchanges'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ exchangesIcon } alt='menu exchanges icon'/>
                        Exchanges
                    </NavLink>

                    <NavLink
                        to='wiki'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ wikiIcon } alt='menu wiki icon'/>
                        Wiki
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};


export default Sidebar;
