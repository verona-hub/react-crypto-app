import React from 'react';


const MarketItem = ({ item }) => {

    const {
        market_cap_rank,
        image, name,
        symbol, current_price,
        market_cap, price_change_percentage_24h,
        circulating_supply
    } = item;

    return (
        <div className='MarketItem'>
            <p> {market_cap_rank} </p>
            <img src={image} alt='coin logo'/>
            <p> {name} </p>
            <p> {symbol.toUpperCase()} </p>
            <p> Price: &#36;{current_price} </p>
            <p> Market Cap: &#36;{market_cap} </p>
            <p> 24h &#37; {price_change_percentage_24h.toFixed(2)} </p>
            <p> Circulating Supply: {circulating_supply} {item.symbol.toUpperCase()} </p>
        </div>
    );
};


export default MarketItem;
