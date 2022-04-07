import React  from 'react';
import axios from 'axios';

// Components
import SearchForm from "./SearchForm";


const Search = () => {

    const searchCoin = async () => {

        const config = {
            method: 'get',
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5000&convert=USD',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY
            }
        };

        try {
            await axios(config)
                .then( response => {
                    console.log(response);
                })

        } catch (err) {
            console.log(err)
        }
    };

    return (
        <section className="Search">
            <SearchForm searchCoin={ searchCoin } />
        </section>
    );
};


export default Search;
