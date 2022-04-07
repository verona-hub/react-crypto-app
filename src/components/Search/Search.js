import React  from 'react';
import axios from 'axios';


// Components
import SearchForm from "./SearchForm";


const Search = () => {

    const searchCoin = async () => {

        const config = {
            method: 'get',
            url: 'sandbox-api.coinmarketcap.com',
            headers: {
                "Access-Control-Allow-Origin": "*",
                'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
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
