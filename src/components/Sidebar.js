import React  from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../img/favicon.ico';
// Navigation Icons
import coin from '../img/coin.png';
import home from '../img/home.png';
import exchange from '../img/exchange.png';
import wiki from '../img/wiki.png';


const Sidebar = () => {

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
                        <img src={ coin } alt='menu coin icon'/>
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
