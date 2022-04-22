import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import WikiItems from './Wiki/WikiItems';


const Wiki = () => {

    // Import State from Context
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

            // Save the data to wikiData state
            setWikiData(response.data);
            // Save the data to the local storage
            localStorage.setItem('wikiData', JSON.stringify(response.data));
        };
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        // fetchData().then();
    }, []);

    // If present, load the wikiData from the local storage
    useEffect( () => {
        const data = localStorage.getItem('wikiData');
        data && setWikiData(JSON.parse(data));
    }, [setWikiData]);


    return (
        <section className="Wiki">
            <WikiItems />
        </section>
    );
};


export default Wiki;
