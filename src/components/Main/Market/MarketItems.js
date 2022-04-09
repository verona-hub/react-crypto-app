import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketItem from "./MarketItem";


const MarketItems = () => {

    // Import state from Context
    const { initialCoins } = useContext(MyStateManagement);

    return (
        <div className='MarketItems'>
            {
                initialCoins.map(initialCoin => (
                    <MarketItem
                        initialCoin={ initialCoin }
                        key={ initialCoin.id }
                    />
                ))
            }
        </div>
    );
};


export default MarketItems;
