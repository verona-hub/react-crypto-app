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
            per_page: 15,
            page: 1
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    // Fetch the Api data
    useEffect( () => {
        const fetchData = async () => {
            const response = await axios(config);

            // Save the data to exchangeData state
            setExchangeData(response.data);
            // Save the data to the local storage
            localStorage.setItem('exchangeData', JSON.stringify(response.data));
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        // fetchData().then();
    }, []);

    // If present, load the exchangeData from the local storage
    useEffect( () => {
        const data = localStorage.getItem('exchangeData');
        data && setExchangeData(JSON.parse(data));
    }, [setExchangeData]);


    return (
        <section className="Exchanges">
            <ExchangesItems />
        </section>
    );
};


export default Exchanges;
