import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketItems from "./MarketItems";


const Market = () => {

    // Import state from Context
    const { marketData, setMarketData } = useContext(MyStateManagement);

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

    // useEffect( () => {
    //     try {
    //          axios(config)
    //             .then( response => {
    //                 console.log(response.data[0]);
    //                 setMarketData(response.data);
    //             })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, []);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            const response = await axios(config);
            console.log(response.data)
            setMarketData(response.data);
        }
        fetchData();
    }, []);


    return (
        <section className='Market'>
            <MarketItems />
        </section>
    );
};


export default Market;
