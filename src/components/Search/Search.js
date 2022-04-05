import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const Search = () => {

    // Import state from Context
    const {
        coin, setCoin
    } = useContext(MyStateManagement)

    const onFormSubmit = e => {
        console.log('Form submitted...')
        console.log(coin)

        setCoin('');
        e.preventDefault();
    };

    const onInputChange = e => {
        setCoin(e.target.value);
        e.preventDefault();
    };


    return (
        <section className="Search">
            <form onSubmit={onFormSubmit}>
                <input
                    id='coin'
                    onChange={onInputChange}
                    placeholder='Search here...'
                    type='text'
                    value={coin}
                />
                <input
                    className='button'
                    type='submit'
                    value='Search'
                />
            </form>
        </section>
    );
};


export default Search;
