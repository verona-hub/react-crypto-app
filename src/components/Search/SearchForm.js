import React, { useContext } from 'react';
import searchIcon from "../../img/search.png";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';
import axios from "axios";


const SearchForm = () => {

    // Import state from Context
    const {
        coin, setCoin,
        search, setSearch
    } = useContext(MyStateManagement);

    const onFormSubmit = async (e) => {
        console.log('Form submitted...');
        console.log(`Searched coin: ${coin}`);

        const config = {
            method: 'get',
            url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map',
            headers: {
                "Access-Control-Allow-Headers": "*",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*",
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': process.env.CMC_PRO_API_KEY,
                'mode':'cors'
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

        // Send the input coin to the CoinMarketCap API
        // searchCoin(coin);
        // Set the input to the initial value
        setSearch('');
        e.preventDefault();
    };

    const onInputChange = e => {
        // Save the input text
        setSearch(e.target.value);
        setCoin(e.target.value);
    };

    return (
        <form onSubmit={onFormSubmit}>
            <img src={ searchIcon } alt='Searching icon'/>
            <input
                id='search'
                onChange={ onInputChange }
                placeholder='Search a currency here'
                type='text'
                value={ search }
            />
            <input
                className='button'
                type='submit'
                value='Search'
            />
        </form>
    );
};


export default SearchForm;
