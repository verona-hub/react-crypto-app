import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const Search = () => {

    // Import state from Context
    const {
        coin, setCoin,
        search, setSearch
    } = useContext(MyStateManagement)

    const onFormSubmit = e => {
        console.log('Form submitted...')
        console.log(`Search: ${search}`)
        console.log(`coin: ${coin}`)

        setSearch('');
        // e.preventDefault();
    };

    const onInputChange = e => {
        setSearch(e.target.value);
        setCoin(e.target.value);
        e.preventDefault();
    };


    return (
        <section className="Search">
            <form onSubmit={onFormSubmit}>
                <input
                    id='search'
                    onChange={onInputChange}
                    placeholder='Search a currency here...'
                    type='text'
                    value={search}
                />
                <input
                    className='button'
                    type='submit'
                    value='Search'
                />
            </form>

            { coin }

        </section>
    );
};


export default Search;
