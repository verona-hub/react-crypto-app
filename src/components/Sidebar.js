import React, { useEffect }  from 'react';
import { NavLink, useLocation } from 'react-router-dom';
// Navigation Icons
import coin from '../img/coin.png';
import exchange from '../img/exchange.png';
import home from '../img/home.png';
import logo from '../img/favicon.ico';
import market from '../img/market.png';
import wiki from '../img/wiki.png';


const Sidebar = () => {

    // the useLocation hook will detect the current url
    // let location = useLocation();
    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location.pathname]);


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
                        <img src={ home } alt='menu homepage icon'/>
                        Homepage
                    </NavLink>

                    <NavLink
                        to='/market'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ market } alt='menu homepage icon'/>
                        Market
                    </NavLink>

                    <NavLink
                        to='coins'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ coin } alt='menu coins icon'/>
                        Coins
                    </NavLink>

                    <NavLink
                        to='exchanges'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ exchange } alt='menu exchanges icon'/>
                        Exchanges
                    </NavLink>

                    <NavLink
                        to='wiki'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        <img src={ wiki } alt='menu wiki icon'/>
                        Wiki
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};


export default Sidebar;
