import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';
import { formatNumberToLocale } from '../../../utilities/Functions';


const SearchedCoin = () => {

    // Import state from Context
    const { coin } = useContext(MyStateManagement);

    const { image, id, symbol, coingecko_rank, community_data, description, links } = coin;

    return (
        coin && (
            <div className="SearchedCoin">
                <img src={ image.small } alt='Coin Logo'/>
                <p className='coin-id'> Name: { id } </p>
                <p> Symbol: { symbol.toUpperCase() } </p>
                <p> Coingecko Rank: { coingecko_rank } </p>
                <p> Twitter Followers: { formatNumberToLocale(community_data.twitter_followers) } </p>
                <p> Blockchain websites: </p>
                {
                    links.blockchain_site.map( (item, index) => (
                        <p key={ index }>
                            <a href={ item } target='_blank' rel='noopener noreferrer'>
                                { item }
                            </a>
                        </p>
                    ))
                }

            </div>
        )
    );
};


export default SearchedCoin;
