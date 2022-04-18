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

            <div className="logo">
                <img src={ logo } alt='app logo'/>
            </div>

            <div className="links-wrapper">
                <div className="links">
                    <NavLink
                        to='/'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        ) }
                    >
                        Homepage
                    </NavLink>

                    <NavLink
                        to='coins'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        ) }
                    >
                        Coins
                    </NavLink>

                    <NavLink
                        to='exchanges'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        ) }
                    >
                        Exchanges
                    </NavLink>

                    <NavLink
                        to='wiki'
                        className={ ({ isActive }) => (
                            isActive ? 'active' : 'inactive'
                        ) }
                    >
                        Wiki
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};


export default Sidebar;