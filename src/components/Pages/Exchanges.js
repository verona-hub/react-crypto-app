import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import ExchangesItems from "./Exchanges/ExchangesItems";


const Exchanges = () => {

    // Import state from Context
    const { setExchangeData } = useContext(MyStateManagement);

    // Api request params: get market data from CoinGecko
    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/exchanges',
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect( () => {
        async function fetchData() {
            const response = await axios(config);
            setExchangeData(response.data);
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);


    return (
        <div className="Exchanges">
            <h1> This is Exchanges page </h1>
            <ExchangesItems />
        </div>
    );
};


export default Exchanges;
