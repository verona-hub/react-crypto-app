import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketItems from "./MarketItems";


const Market = () => {

    // Import state from Context
    const { setInitialCoins } = useContext(MyStateManagement);

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
        try {
            axios(config)
                .then( response => {
                    console.log(response.data[0]);
                    setInitialCoins(response.data);
                })
        } catch (err) {
            console.log(err)
        }
    }, []);


    return (
        <section className='Market'>
            <MarketItems />
        </section>
    );
};


export default Market;
