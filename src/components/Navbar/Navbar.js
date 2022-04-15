import React, { useContext } from 'react'
import logo from '../../img/favicon.ico';
import { Link } from "react-router-dom";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Semantic-UI
import { Menu, Segment } from 'semantic-ui-react';



const Navbar = () => {

    const { activeNav, setActiveNav } = useContext(MyStateManagement);

    const handleClick = (e, { name }) => {
        setActiveNav(name);
    };

    return (
        <nav>
            <Segment inverted>
                <Menu inverted pointing secondary>
                    <img src={ logo } alt='app logo'/>
                    <Menu.Item
                        name='home'
                        as={ Link }
                        to='/'
                        active={ activeNav === 'home' }
                        onClick={ handleClick }
                    />
                    <Menu.Item
                        name='coins'
                        as={ Link }
                        to='/coins'
                        active={ activeNav === 'coins' }
                        onClick={ handleClick }
                    />
                    <Menu.Item
                        name='exchanges'
                        as={ Link }
                        to='/exchanges'
                        active={ activeNav === 'exchanges' }
                        onClick={ handleClick }
                    />
                    <Menu.Item
                        name='wiki'
                        as={ Link }
                        to='/wiki'
                        active={ activeNav === 'wiki' }
                        onClick={ handleClick }
                    />
                </Menu>
            </Segment>
        </nav>
    )
};


export default Navbar;
