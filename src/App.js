import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Homepage from './components/Homepage';
import Navbar from "./components/Navbar/Navbar";


const App = () => {

    // Initial State Management
    const [marketData, setMarketData] = useState([]);
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');
    const [activeNav, setActiveNav] = useState('home');

    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                marketData, setMarketData,
                coin, setCoin,
                search, setSearch,
                activeNav, setActiveNav
            }}>

                <div className='App'>
                    <Navbar />
                    <Homepage/>
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

