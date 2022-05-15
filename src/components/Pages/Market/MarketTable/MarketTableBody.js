import React, { useContext, useEffect } from 'react';
import { Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';
// Components
import MarketTableItem from "./MarketTableItem";


const MarketTableBody = () => {

    // Import state from Context
    const {
        marketData, currentTablePage,
        paginationStart, setPaginationStart,
        paginationFinish, setPaginationFinish
    } = useContext(MyStateManagement);

    useEffect( () => {
        if(currentTablePage === 1) {
            setPaginationStart(0);
            setPaginationFinish(10);
        }
        if(currentTablePage === 2) {
            setPaginationStart(10);
            setPaginationFinish(20);
        }
        if(currentTablePage === 3) {
            setPaginationStart(20);
            setPaginationFinish(30);
        }
        if(currentTablePage === 4) {
            setPaginationStart(30);
            setPaginationFinish(40);
        }
        if(currentTablePage === 5) {
            setPaginationStart(40);
            setPaginationFinish(50);
        }
        if(currentTablePage === 6) {
            setPaginationStart(50);
            setPaginationFinish(60);
        }
        if(currentTablePage === 7) {
            setPaginationStart(60);
            setPaginationFinish(70);
        }
        if(currentTablePage === 8) {
            setPaginationStart(70);
            setPaginationFinish(80);
        }
        if(currentTablePage === 9) {
            setPaginationStart(80);
            setPaginationFinish(90);
        }
        if(currentTablePage === 10) {
            setPaginationStart(90);
            setPaginationFinish(100);
        }
    }, [currentTablePage, paginationStart, setPaginationStart, paginationFinish, setPaginationFinish]);

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
