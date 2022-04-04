import React from 'react';


const Search = () => {

    const onFormSubmit = (e) => {
      e.preventDefault();
        console.log('Form submitted...')
    };


    return (
        <section className="Search">
            <form onSubmit={ onFormSubmit }>
                <input type='text'/>
            </form>
        </section>
    );
};

export default Search;
