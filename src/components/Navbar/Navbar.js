import React, { useContext, useEffect } from 'react'
import logo from '../../img/favicon.ico';
import { Link } from "react-router-dom";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Semantic-UI
import { Menu, Segment } from 'semantic-ui-react';



const Navbar = () => {

    // Import State from Context
    const { activeNav, setActiveNav } = useContext(MyStateManagement);

    // Set the navigation state to be the item name
    const handleClick = (e, { name }) => {
        setActiveNav(name);
    };

    // Load the navigation state from the local storage
    useEffect( () => {
        const data = localStorage.getItem('activeNav');
        data && setActiveNav(JSON.parse(data));
    }, [setActiveNav]);

    // Save the navigation state to the local storage
    useEffect( () => {
        localStorage.setItem('activeNav', JSON.stringify(activeNav));
    }, [activeNav]);


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
