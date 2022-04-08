import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Homepage from './components/Homepage';


const App = () => {

    // Initial State Management
    const [initialCoins, setInitialCoins] = useState({});
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');

    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                initialCoins, setInitialCoins,
                coin, setCoin,
                search, setSearch
            }}>

                <div className='App'>
                    <Homepage/>
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

