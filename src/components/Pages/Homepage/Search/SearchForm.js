import React, { useContext } from 'react';
import searchIcon from "../../../../img/search.png";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const SearchForm = ({ searchCoin }) => {

    // Import state from Context
    const { searchedCoin, setSearchedCoin, setLoading } = useContext(MyStateManagement);

    const onFormSubmit = (e) => {
        console.log('Form submitted...');
        console.log(`Searched coin: ${searchedCoin}`);

        // Send the input coin to the CoinGecko API
        searchCoin(searchedCoin);
        setLoading(true);
        // Set the input to the initial value
        setSearchedCoin('');
        e.preventDefault();
    };

    const onInputChange = e => {
        // Save the input text
        setSearchedCoin(e.target.value);
    };

    return (
        <form onSubmit={onFormSubmit} className='SearchForm'>
            <img src={ searchIcon } alt='Searching icon'/>
            <input
                id='search'
                onChange={ onInputChange }
                placeholder='Search a currency here'
                type='text'
                value={ searchedCoin }
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
