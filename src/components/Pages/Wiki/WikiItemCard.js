import React from 'react';

// Semantic-UI
import { Card, Image } from 'semantic-ui-react'


const WikiItemCard = ({ wikiItem }) => {

    const { name, market_cap, content, top_3_coins, volume_24h } = wikiItem;

    // Format the numbers
    const marketCapFormatted = Math.round(market_cap).toLocaleString('en-US');
    const volumeFormatted = Math.round(volume_24h).toLocaleString('en-US');

    // top_3_coins returns an array with the coin image
    // Loop through that array and display an image for each coin
    const topCoins = top_3_coins.map( item => <Image src={item} key={item} alt='top coins logo'/> );

    return (
        <Card className="WikiItemCard">
            <Card.Content className='wikiHeader'>
                <Card.Header> { name } </Card.Header>
            </Card.Content>
            {
                content && (
                    <Card.Content>
                        <Card.Header> Info </Card.Header>
                        <Card.Description> { content } </Card.Description>
                    </Card.Content> )
            }
            <Card.Content>
                <Card.Header> Market </Card.Header>
                <Card.Description> Market Cap: &#36;{ marketCapFormatted } </Card.Description>
                <Card.Description> Volume &#40;24h&#41;: &#36;{ volumeFormatted } </Card.Description>
            </Card.Content>
            <Card.Content>
                <Card.Header> Top 3 Coins: </Card.Header>
                <Card.Meta>  { topCoins } </Card.Meta>
            </Card.Content>
        </Card>
    );
};


export default WikiItemCard;
