import React, { useContext, useEffect } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import CoinsItems from "./Coins/CoinsItems";


const Coins = () => {

    // Import state from Context
    const { setCoinsData } = useContext(MyStateManagement);

    // Api request params: get market data from CoinGecko
    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/list',
        params: {},
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    useEffect( () => {
        const fetchData = async () => {
            const response = await axios(config);
            setCoinsData(response.data);
        }
        // added empty .then() because of Idea bug: "Promise returned from fetchData is ignored"
        // fetchData().then();
    }, []);


    return (
        <div>
            <h1> This is Coins component </h1>
            <CoinsItems />
        </div>
    );
};


export default Coins;
