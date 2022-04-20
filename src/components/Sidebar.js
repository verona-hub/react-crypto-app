import React, { useEffect }  from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../img/favicon.ico';
// Navigation Icons
import coin from '../img/coin.png';
import coin_inactive from '../img/coin-inactive.png';
import home from '../img/home.png';
import exchange from '../img/exchange.png';
import wiki from '../img/wiki.png';


const Sidebar = () => {

    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);

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
                        <img src={ home } alt='menu home icon'/>
                        Homepage
                    </NavLink>

                    <NavLink
                        to='coins'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        )}
                    >
                        {
                            <img
                                src={ location.pathname === '/coins' ? coin : coin_inactive }
                                alt='menu icon'
                            />


                        }

                        {/*<img src={ (window.location.pathname === '/coins')*/}
                        {/*    ? coin*/}
                        {/*    : coin_inactive}*/}
                        {/*     alt='menu coin icon'*/}
                        {/*/>*/}
                        {/*<img src={ isActive ? coin : coin_inactive } alt='menu coin icon'/>*/}
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
