import React, { useContext } from 'react';
import logo from '../../img/favicon.ico';
import { NavLink } from 'react-router-dom';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const Sidebar = () => {

    // Import State from Context
    const { activeNav, setActiveNav } = useContext(MyStateManagement);

    return (
        <nav className="Sidebar">
            <img src={ logo } alt='app logo'/>
            <NavLink
                to='/'
                className={ ({ isActive }) => (
                    isActive ? 'active' : 'inactive'
                )}
            >
                Homepage
            </NavLink>

            <NavLink
                to='coins'
                className={ ({ isActive }) => (
                    isActive ? 'active' : 'inactive'
                )}
            >
                Coins
            </NavLink>

            <NavLink
                to='exchanges'
                className={ ({ isActive }) => (
                    isActive ? 'active' : 'inactive'
                )}
            >
                Exchanges
            </NavLink>

            <NavLink
                to='wiki'
                className={ ({ isActive }) => (
                    isActive ? 'active' : 'inactive'
                )}
            >
                Wiki
            </NavLink>
        </nav>
    );
};


export default Sidebar;
