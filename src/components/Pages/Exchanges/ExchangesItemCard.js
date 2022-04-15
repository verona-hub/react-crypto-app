import React from 'react';

// Semantic-UI
import { Card, Image } from 'semantic-ui-react'
// Formatting function
import { formatNumberToLocale } from '../../utilities/Functions';


const ExchangesItemCard = ({ exchangeDataItem }) => {

    let { country, image, name, trade_volume_24h_btc,
        trust_score_rank, trust_score, url, year_established } = exchangeDataItem;

    // Format the numbers
    trade_volume_24h_btc = formatNumberToLocale(trade_volume_24h_btc);
    // If there is no country data, display "Unknown"
    const countryDetails = country ? `${country}` : 'Unknown';

    return (
        <Card className="ExchangesItemCard">
            <Image src={ image } wrapped ui={ false }/>
            <Card.Content>
                <Card.Header> { name } </Card.Header>
                <Card.Meta> { countryDetails } </Card.Meta>
                <Card.Description>
                    <a href={ url } target="_blank" rel="noopener noreferrer">
                        Website
                    </a>
                </Card.Description>
            </Card.Content>
            <Card.Content>
                <Card.Description className='exchange-details'>
                    <p> Year established: { year_established } </p>
                    <p> Trust rank: { trust_score_rank } </p>
                    <p> Trust score: { trust_score } </p>
                    <p> BTC trade volume &#40;24h&#41;: { trade_volume_24h_btc } BTC </p>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};


export default ExchangesItemCard;
