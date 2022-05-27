import React, { useContext } from 'react';
import axios from 'axios';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import SearchForm from "./Search/SearchForm";


const Search = () => {

    // Import state from Context
    const { coin, setCoin, search, setSearch, loading, setLoading } = useContext(MyStateManagement);

    const searchCoin = async () => {

        console.log('Coin searched');

        const config = {
            method: 'GET',
            url: `https://api.coingecko.com/api/v3/coins/`,
            params: {
                id: `${coin}`
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        try {
            await axios(config)
                .then( response => {
                    setCoin(coin);

                    // When data is fetched, remove the spinner
                    response && setTimeout(() => { setLoading(false)}, 2000);
                    console.log(response.data[0]);
                })

        } catch (err) {
            console.log(err)
        }
    };

    return (
        <section className="Search">
            <SearchForm searchCoin={ searchCoin }/>
        </section>
    );
};


export default Search;
