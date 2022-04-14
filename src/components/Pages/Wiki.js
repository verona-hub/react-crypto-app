import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import WikiItems from './Wiki/WikiItems';


const Wiki = () => {

    const { setWikiData } = useContext(MyStateManagement);

    // Api request params: get market data from CoinGecko
    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/categories',
        params: {
            order: 'market_cap_desc'
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios(config);
            setWikiData(response.data);
        };
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        fetchData().then();
    }, []);

    return (
        <section className="Wiki">
            <WikiItems />
        </section>
    );
};


export default Wiki;
