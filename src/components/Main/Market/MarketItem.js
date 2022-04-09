import React from 'react';


const MarketItem = ({ item }) => {

    return (
        <div className='MarketItem'>
            <p> {item.market_cap_rank} </p>
            <img src={item.image} alt='coin logo'/>
            <p> {item.name} </p>
            <p> {item.symbol} </p>
            <p> &#36;{item.current_price} </p>
            <p> &#36;{item.market_cap} </p>
        </div>
    );
};


export default MarketItem;
