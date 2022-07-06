import React from 'react';
// Routes
import { Route, Routes } from "react-router-dom";
// Components
import Coins from "./Pages/Coins";
import Exchanges from "./Pages/Exchanges";
import Homepage from "./Pages/Homepage";
import Market from './Pages/Market';
import PageNotFound404 from './Pages/404/PageNotFound404';
import Wiki from "./Pages/Wiki";


const Routing = () => {
    return (
        <Routes>
            <Route
                exact path='/'
                element={ <Homepage/> }
            />
            <Route
                path='market'
                element={ <Market/> }
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
            <Route
                path='*'
                element={ <PageNotFound404 /> }
            />
        </Routes>
    );
};


export default Routing;
