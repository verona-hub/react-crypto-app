import React, { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';

// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Homepage from './components/Homepage';


const App = () => {

    // Initial State Management
    const [name, setName] = useState('initial state');

    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                name, setName
            }}>
                <div className='App'>
                    <Homepage/>
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

