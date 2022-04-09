import React from 'react';


const MarketItem = ({ initialCoin }) => {

    return (
        <div className='MarketItem'>
            <p> {initialCoin.id} </p>
            <img src={initialCoin.image} alt='coin logo'/>
            <p> {initialCoin.current_price} </p>
        </div>
    );
};


export default MarketItem;
