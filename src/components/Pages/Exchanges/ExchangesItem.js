import React from 'react';

// Semantic-UI
import { Card, Image } from 'semantic-ui-react'

const ExchangesItem = ({ item }) => {

    const { country, image, name, trade_volume_24h_btc,
        trust_score_rank, trust_score, url, year_established } = item;

    const countryDetails = country ? `${country}` : 'Unknown';

    return (
        <Card className="ExchangesItem">
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
                <p> Year established: { year_established } </p>
                <p> Trust rank: { trust_score_rank } </p>
                <p> Trust score: { trust_score } </p>
                <p> BTC trade volume: { trade_volume_24h_btc.toFixed(2) } </p>
            </Card.Content>
        </Card>
    );
};


export default ExchangesItem;
