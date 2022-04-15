import React from 'react';

// Semantic-UI
import { Card, Image } from 'semantic-ui-react'
// Formatting function
import { formatNumberToLocale } from '../../utilities/Functions';


const WikiItemCard = ({ wikiItem }) => {

    let { name, market_cap, content, top_3_coins, volume_24h } = wikiItem;

    // Format the numbers
    market_cap = formatNumberToLocale(market_cap);
    volume_24h = formatNumberToLocale(volume_24h);

    // top_3_coins returns an array with the coin image
    // Loop through that array and display an image for each coin
    const topCoins = top_3_coins.map( item => <Image src={item} key={item} alt='top coins logo'/> );

    return (
        <Card className="WikiItemCard">
            <Card.Content className='wikiHeader'>
                <Card.Header> { name } </Card.Header>
            </Card.Content>
            <Card.Content className='Market'>
                <Card.Header> Market </Card.Header>
                <Card.Description> Market Cap: &#36;{ market_cap } </Card.Description>
                <Card.Description> Volume &#40;24h&#41;: &#36;{ volume_24h } </Card.Description>
            </Card.Content>
            {
                content && (
                    <Card.Content>
                        <Card.Header> Info </Card.Header>
                        <Card.Description> { content } </Card.Description>
                    </Card.Content> )
            }
            <Card.Content className="top-3-coins">
                <Card.Header> Top 3 Coins: </Card.Header>
                <Card.Meta className='top-coins-images'>  { topCoins } </Card.Meta>
            </Card.Content>
        </Card>
    );
};


export default WikiItemCard;
