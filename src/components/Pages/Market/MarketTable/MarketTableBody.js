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
        // Display 10 items in the table
        // the pagination will follow which page number was clicked or scrolled with the chevron
        switch (currentTablePage) {
            case 1:
                setPaginationStart(0);
                setPaginationFinish(10);
                break;
            case 2:
                setPaginationStart(10);
                setPaginationFinish(20);
                break;
            case 3:
                setPaginationStart(20);
                setPaginationFinish(30);
                break;
            case 4:
                setPaginationStart(30);
                setPaginationFinish(40);
                break;
            case 5:
                setPaginationStart(40);
                setPaginationFinish(50);
                break;
            case 6:
                setPaginationStart(50);
                setPaginationFinish(60);
                break;
            case 7:
                setPaginationStart(60);
                setPaginationFinish(70);
                break;
            case 8:
                setPaginationStart(70);
                setPaginationFinish(80);
                break;
            case 9:
                setPaginationStart(80);
                setPaginationFinish(90);
                break;
            case 10:
                setPaginationStart(90);
                setPaginationFinish(100);
                break;
            default:
                setPaginationStart(0);
                setPaginationFinish(10);
        }
    }, [currentTablePage, paginationStart, setPaginationStart, paginationFinish, setPaginationFinish]);

    // Take the marketData from the API
    const table = marketData
        // Set its start and finish
        .slice(paginationStart, paginationFinish)
        // loop through and for each fetched item display a row inside the table
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
