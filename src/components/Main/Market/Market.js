import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketItems from "./MarketItems";
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
            console.log(response.data[0])
            setMarketData(response.data);
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);


    return (
        <section className='Market'>
            <MarketTable />
            <MarketItems />
        </section>
    );
};


export default Market;
