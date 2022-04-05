import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Homepage from './components/Homepage';


const App = () => {

    // Initial State Management
    const [coin, setCoin] = useState('');

    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                coin, setCoin
            }}>

                <div className='App'>
                    <Homepage/>
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

