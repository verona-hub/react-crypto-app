import React, { useContext } from 'react';
import searchIcon from "../../img/search.png";

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const SearchForm = ({ searchCoin }) => {

    // Import state from Context
    const {
        coin, setCoin
    } = useContext(MyStateManagement);

    const onFormSubmit = (e) => {
        console.log('Form submitted...');
        console.log(`Searched coin: ${coin}`);

        searchCoin(coin);
        setCoin('');
        e.preventDefault();
    };


    const onInputChange = e => {
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
                value={ coin }
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
