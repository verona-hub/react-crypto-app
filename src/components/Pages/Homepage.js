import React from 'react';

// Components
import Market from "./Homepage/Market";
import Search from "./Homepage/Search";


const Homepage = () => {

    return (
        <section className="Homepage">

            <h1> Portfolio Tracker </h1>
            <Search />
            <Market />

        </section>
    );
};


export default Homepage;
