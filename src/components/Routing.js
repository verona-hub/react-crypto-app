import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import Coins from "./Pages/Coins/Coins";
import Exchanges from "./Pages/Exchanges/Exchanges";
import Homepage from "./Pages/Homepage/Homepage";
import Wiki from "./Pages/Wiki/Wiki";


const Routing = () => {
    return (
        <Routes>
            <Route
                exact path='/'
                element={ <Homepage/> }
            />
            <Route
                path='coins'
                element={ <Coins/> }
            />
            <Route
                path='exchanges'
                element={ <Exchanges/> }
            />
            <Route
                path='wiki'
                element={ <Wiki/> }
            />
        </Routes>
    );
};


export default Routing;
