import React from 'react';
import { Table } from "semantic-ui-react";


const MarketTableHeader = () => {
    return (
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell> # </Table.HeaderCell>
                <Table.HeaderCell> Name </Table.HeaderCell>
                <Table.HeaderCell> Symbol </Table.HeaderCell>
                <Table.HeaderCell> Price </Table.HeaderCell>
                <Table.HeaderCell> Market Cap </Table.HeaderCell>
                <Table.HeaderCell> 24h &#37; </Table.HeaderCell>
                <Table.HeaderCell> Circulating Supply </Table.HeaderCell>
            </Table.Row>
        </Table.Header>
    );
};

export default MarketTableHeader;
