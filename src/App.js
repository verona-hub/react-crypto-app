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
import Spinner from './components/utilities/Spinner';


const App = () => {

    /// Initial State Management
    // API Data
    const [marketData, setMarketData] = useState([]);
    const [coinsData, setCoinsData] = useState([]);
    const [exchangeData, setExchangeData] = useState([]);
    const [wikiData, setWikiData] = useState([]);
    // Market Table pagination
    const [currentTablePage, setCurrentTablePage] = useState(1);
    const [paginationStart, setPaginationStart] = useState(0);
    const [paginationFinish, setPaginationFinish] = useState(10);
    // Other states
    const [coin, setCoin] = useState('');
    const [searchedCoin, setSearchedCoin] = useState('');
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [loading, setLoading] = useState(false);
    const [currentPath, setCurrentPath] = useState('/');


    return (
        <BrowserRouter>
            <MyStateManagement.Provider value={{
                marketData, setMarketData,
                coinsData, setCoinsData,
                exchangeData, setExchangeData,
                wikiData, setWikiData,
                currentTablePage, setCurrentTablePage,
                paginationStart, setPaginationStart,
                paginationFinish, setPaginationFinish,
                coin, setCoin,
                searchedCoin, setSearchedCoin,
                showScrollButton, setShowScrollButton,
                loading, setLoading,
                currentPath, setCurrentPath
            }}>

                <div className='App'>
                    <Sidebar />
                    <Main />
                    <Spinner />
                </div>

            </MyStateManagement.Provider>
        </BrowserRouter>
    );
};


export default App;

