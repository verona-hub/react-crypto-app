import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../Context/MyStateManagement';

const Search = () => {

    const {
        name, setName
    } = useContext(MyStateManagement)

    // const onFormSubmit = (e) => {
    //     e.preventDefault();
    //
    //     console.log('Form submitted...')
    //     setName(e.target.value);
    //     console.log(name)
    // };

    const onInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    };


    return (
        <section className="Search">
            <form>
                <input
                    id='coin'
                    onChange={onInputChange}
                    placeholder='Search a cryptocurrency here...'
                    type='text'
                    value={name}
                />
            </form>
        </section>
    );
};

export default Search;
