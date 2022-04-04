import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { StateManagement } from './components/Context/StateManagement';
// Components
import Homepage from './components/Homepage';


const App = () => {

    // Initial State Management
    const [name, setName] = useState('');

    return (
        <BrowserRouter>
            <StateManagement.Provider value={{
                name, setName
            }}>
                <div className='App'>
                    <Homepage/>
                </div>

            </StateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

