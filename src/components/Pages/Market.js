import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Semantic-UI
import { Container } from 'semantic-ui-react'
// Components
import MarketTable from "./Market/MarketTable";


const Market = () => {

    // Import state from Context
    const { setMarketData } = useContext(MyStateManagement);

    // Api request params: get market data from CoinGecko
    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets',
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 100,
            page: 1
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    // Fetch the Api data
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(config);

            // Save the data to marketData state
            setMarketData(response.data);
            // Save the data to the local storage
            localStorage.setItem('marketData', JSON.stringify(response.data));
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);

    // If present, load the marketData from the local storage
    useEffect( () => {
        const data = localStorage.getItem('marketData');
        data && setMarketData(JSON.parse(data));
    }, [setMarketData]);


    return (
        <main>
            <Container className='Market'>
                <h1> Today's Cryptocurrency Prices by Market Cap </h1>
                <MarketTable/>
            </Container>
        </main>
    );
};


export default Market;
