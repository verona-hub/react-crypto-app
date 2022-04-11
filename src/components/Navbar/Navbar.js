import React, { useContext } from 'react'
import logo from '../../img/favicon.ico';

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
                        active={ activeNav === 'home' }
                        onClick={ handleClick }
                    />
                    <Menu.Item
                        name='coins'
                        active={ activeNav === 'coins' }
                        onClick={ handleClick }
                    />
                    <Menu.Item
                        name='exchanges'
                        active={ activeNav === 'exchanges' }
                        onClick={ handleClick }
                    />
                </Menu>
            </Segment>
        </nav>
    )
};

export default Navbar;
