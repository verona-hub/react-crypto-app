import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
// Components
import SearchForm from "./SearchForm";


const Search = () => {

    // Import state from Context
    const {
        initialCoins, setInitialCoins,
        coin, setCoin,
        search, setSearch
    } = useContext(MyStateManagement);

    const searchCoin = async () => {
        console.log('Coin searched')
        // const config = {
        //     method: 'GET',
        //     url: 'https://api.coingecko.com/api/v3/coins/markets',
        //     params: {
        //         vs_currency: 'usd',
        //         order: 'market_cap_desc',
        //         per_page: 5,
        //         page: 1
        //     },
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     }
        // };
        //
        // try {
        //     await axios(config)
        //         .then( response => {
        //             console.log(response.data);
        //         })
        //
        // } catch (err) {
        //     console.log(err)
        // }
    };

    return (
        <section className="Search">
            <SearchForm searchCoin={searchCoin }/>
        </section>
    );
};


export default Search;
