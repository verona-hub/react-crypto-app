import React from 'react';


const ExchangesItem = ({ item }) => {

    console.log(item)

    const { image, name, url, country, trade_volume_24h_btc,
        trust_score, trust_score_rank, year_established} = item;

    return (
        <div className="ExchangesItem">
            <img src={ image } alt='exchange logo'/>
            <p> { name } </p>
            <p>
                <a href={ url }> Website </a>
            </p>
            <p> { country } </p>
            <p> BTC trade volume: { trade_volume_24h_btc.toFixed(2)} </p>
            <p> Trust score: { trust_score } </p>
            <p> Trust rank: { trust_score_rank } </p>
            <p> Year established: { year_established } </p>
        </div>
    );
};


export default ExchangesItem;
