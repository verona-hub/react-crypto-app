import React, { useContext } from 'react';
import searchIcon from "../../../../img/search.png";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const SearchForm = ({ searchCoin }) => {

    // Import state from Context
    const {
        coin, setCoin,
        search, setSearch
    } = useContext(MyStateManagement);

    const onFormSubmit = (e) => {
        console.log('Form submitted...');
        console.log(`Searched coin: ${coin}`);

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
        <form onSubmit={onFormSubmit} className='SearchForm'>
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
