import React, { useContext } from 'react';
import { Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../../Context/MyStateManagement';
// Components
import MarketTableItem from "./MarketTableItem";


const MarketTableBody = () => {

    // Import state from Context
    const { marketData } = useContext(MyStateManagement);

    return (
        <Table.Body>
            {
                marketData.map(item => (
                    <MarketTableItem
                        key={ item.id }
                        item={ item }
                    />
                ))
            }
        </Table.Body>
    );
};


export default MarketTableBody;
