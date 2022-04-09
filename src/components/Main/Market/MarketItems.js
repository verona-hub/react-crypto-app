import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import MarketItem from "./MarketItem";


const MarketItems = () => {

    // Import state from Context
    const { marketData } = useContext(MyStateManagement);

    return (
        <div className='MarketItems'>
            {
                marketData.map(item => (
                    <MarketItem
                        item={item}
                        key={item.id}
                    />
                ))
            }
        </div>
    );
};


export default MarketItems;
