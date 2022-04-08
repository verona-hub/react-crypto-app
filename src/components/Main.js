import React, { useEffect, useContext } from 'react';
import axios from "axios";

// Context
import { MyStateManagement } from './Context/MyStateManagement';

const Main = () => {

    // Import state from Context
    const {
        initialCoins, setInitialCoins,
        coin, setCoin,
        search, setSearch
    } = useContext(MyStateManagement);

    const config = {
        method: 'GET',
        url: 'https://api.coingecko.com/api/v3/coins/markets',
        params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 5,
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
                    console.log(response.data);
                    setInitialCoins(response.data);
                })
        } catch (err) {
            console.log(err)
        }
    }, []);


    return (
        <div>
            <h3> This is Main component </h3>
            {
                initialCoins.map(initialCoin => (
                    <div key={initialCoin.id}>
                        <img src={initialCoin.image} alt='coin logo'/>
                    </div>
                ))

            }
        </div>
    );
};

export default Main;
