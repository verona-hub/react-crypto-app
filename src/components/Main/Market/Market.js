import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketTable from "./MarketTable";


const Market = () => {

    // Import state from Context
    const { setMarketData } = useContext(MyStateManagement);

    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets',
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

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios(config);
            console.log(response.data[0])
            setMarketData(response.data);
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);


    return (
        <section className='Market'>
            <h2> Today's Cryptocurrency Prices by Market Cap </h2>
            <MarketTable />
        </section>
    );
};


export default Market;
