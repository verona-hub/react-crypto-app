import React from 'react';

// Components
import Search from "./Search/Search";
import Main from "./Main/Main";


const Homepage = () => {

    return (
        <section className="Homepage">

            <h1> Portfolio Tracker </h1>
            <h3> This is homepage component </h3>

            <Search />
            <Main />

        </section>
    );
};

export default Homepage;
