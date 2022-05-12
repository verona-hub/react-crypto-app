import React, { useState } from 'react';
// Router
import { BrowserRouter } from "react-router-dom";
// CSS
import './App.css';
// Context
import { MyStateManagement } from './components/Context/MyStateManagement';
// Components
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";


const App = () => {

    /// Initial State Management
    // Components Data
    const [marketData, setMarketData] = useState([]);
    const [marketDataPage, setMarketDataPage] = useState(1);
    const [paginationStart, setPaginationStart] = useState(0);
    const [paginationFinish, setPaginationFinish] = useState(10);

    const [coinsData, setCoinsData] = useState([]);
    const [exchangeData, setExchangeData] = useState([]);
    const [wikiData, setWikiData] = useState([]);
    // Other states
    const [coin, setCoin] = useState('');
    const [search, setSearch] = useState('');
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loading, setLoading] = useState(false);


    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                marketData, setMarketData,
                marketDataPage, setMarketDataPage,
                paginationStart, setPaginationStart,
                paginationFinish, setPaginationFinish,
                coinsData, setCoinsData,
                exchangeData, setExchangeData,
                wikiData, setWikiData,
                coin, setCoin,
                search, setSearch,
                showScrollButton, setShowScrollButton,
                loading, setLoading
            }}>

                <div className='App'>
                    <Sidebar />
                    <Main />
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

