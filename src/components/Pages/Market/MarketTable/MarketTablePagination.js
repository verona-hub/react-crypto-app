import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Icon, Menu, Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const MarketTablePagination = () => {

    // Import state from Context
    const { marketDataPage, setMarketDataPage } = useContext(MyStateManagement);

    useEffect( () => {
        console.log(marketDataPage)
    });

    const changePage = e => {
        const pageNumber = e.target.innerText;
        setMarketDataPage(parseInt(pageNumber));
    };


    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='7'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron left'/>
                        </Menu.Item>
                        <Menu.Item as='a' onClick={changePage}> 1 </Menu.Item>
                        <Menu.Item as='a' onClick={changePage}> 2 </Menu.Item>
                        <Menu.Item as='a' onClick={changePage}> 3 </Menu.Item>
                        <Menu.Item as='a' onClick={changePage}> 4 </Menu.Item>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron right'/>
                        </Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    );
};


export default MarketTablePagination;
