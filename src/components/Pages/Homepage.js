import React from 'react';

// Components
import Search from "./Homepage/Search";
import SearchedCoin from './Homepage/Search/SearchedCoin';
import News from './Homepage/News';


const Homepage = () => {

    return (
        <section className="Homepage">
            <h1> Portfolio Tracker </h1>
            <Search />
            <SearchedCoin />
            <News />
        </section>
    );
};


export default Homepage;
