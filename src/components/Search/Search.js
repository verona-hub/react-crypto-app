import React  from 'react';
import axios from 'axios';

// Components
import SearchForm from "./SearchForm";


const Search = () => {

    const searchCoin = () => {

        // const config = {
        //     method: 'get',
        //     url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
        //     headers: {
        //         "Access-Control-Allow-Headers": "*",
        //         "Access-Control-Allow-Origin": "*",
        //         "Access-Control-Allow-Methods": "*",
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
        //         'mode':'cors'
        //     }
        // };
        //
        // try {
        //     await axios(config)
        //         .then( response => {
        //             console.log(response);
        //         })
        //
        // } catch (err) {
        //     console.log(err)
        // }
    };

    return (
        <section className="Search">
            <SearchForm />
        </section>
    );
};


export default Search;
