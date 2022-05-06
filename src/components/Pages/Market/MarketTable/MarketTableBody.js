import React, { useContext, useEffect, useRef } from 'react';
import { Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';
// Components
import MarketTableItem from "./MarketTableItem";


const MarketTableBody = () => {

    const test = useRef(0);

    // Import state from Context
    const {
        marketData, marketDataPage, setMarketDataPage,
        paginationStart, setPaginationStart,
        paginationFinish, setPaginationFinish
    } = useContext(MyStateManagement);

    useEffect( () => {
        if(marketDataPage === 2) {
            setPaginationStart(10);
            setPaginationFinish(20);
        }

        console.log(`Start: ${paginationStart}`)
        console.log(`Finish: ${paginationFinish}`)
    }, [marketDataPage, paginationStart, setPaginationStart, paginationFinish, setPaginationFinish]);

    let mapped = marketData
        .slice(paginationStart, paginationFinish)
        .map(item => (
            <MarketTableItem
                key={ item.id }
                item={ item }
            />
        ))


    return (

        <Table.Body className='MarketTableBody'>
            {
                mapped
            }
        </Table.Body>
    );
};


export default MarketTableBody;
