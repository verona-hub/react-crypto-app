import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Table
import { Table } from '@codbear/reactable';


const MarketTable = () => {

    // Import state from Context
    const { marketData } = useContext(MyStateManagement);

    // Table Data
    const Data = [

    ];

    const Columns = [
        {
            header: '#',
            dataField: 'market_cap_rank',
        },
        {
            header: 'Name',
            dataField: 'name',
        },
        {
            header: 'Symbol',
            dataField: 'symbol',
        },
        {
            header: 'Price',
            dataField: 'current_price',
        },
        {
            header: 'Market Cap',
            dataField: 'market_cap',
        },
        {
            header: '24h',
            dataField: 'price_change_percentage_24h',
        },
        {
            header: 'Circulating Supply',
            dataField: 'circulating_supply',
        }

    ];

    return (
        <div>
            <Table
                data={marketData}
                columns={Columns}
            />
            {
                marketData.map( item => (
                    console.log(item)
                ))
            }
        </div>
    );
};

export default MarketTable;
