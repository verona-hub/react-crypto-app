import React, { useContext } from 'react';

// Base Table
import BaseTable, { Column } from 'react-base-table'
import 'react-base-table/styles.css'
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
