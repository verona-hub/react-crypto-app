import React from 'react';


const WikiItemCard = ({ wikiItem }) => {

    const { name, market_cap, content, top_3_coins, volume_24h } = wikiItem;

    return (
        <div className="WikiItemCard">
            <p> { name }</p>
            <p> { market_cap }</p>
            <p> { content }</p>
            <p> { volume_24h }</p>
        </div>
    );
};


export default WikiItemCard;
