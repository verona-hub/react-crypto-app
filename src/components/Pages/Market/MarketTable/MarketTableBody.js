import React, { useContext, useEffect, useRef } from 'react';
import { Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';
// Components
import MarketTableItem from "./MarketTableItem";


const MarketTableBody = () => {

    const test = useRef(1);
    console.log(window.location)


    // Import state from Context
    const {
        marketData, marketDataPage,
        paginationStart, setPaginationStart,
        paginationFinish, setPaginationFinish
    } = useContext(MyStateManagement);

    useEffect( () => {
        if(marketDataPage === 1) {
            setPaginationStart(0);
            setPaginationFinish(10);
        }
        if(marketDataPage === 2) {
            setPaginationStart(10);
            setPaginationFinish(20);
        }
        if(marketDataPage === 3) {
            setPaginationStart(20);
            setPaginationFinish(30);
        }
        if(marketDataPage === 4) {
            setPaginationStart(30);
            setPaginationFinish(40);
        }
    }, [marketDataPage, paginationStart, setPaginationStart, paginationFinish, setPaginationFinish]);

    const table = marketData
        .slice(paginationStart, paginationFinish)
        .map(item => (
            <MarketTableItem
                key={ item.id }
                item={ item }
            />
        ))


    return (
        <Table.Body className='MarketTableBody'>
            { table }
        </Table.Body>
    );
};


export default MarketTableBody;
