import React, { useContext, useEffect } from 'react';
import { Icon, Menu, Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const MarketTableFooter = () => {

    // Import state from Context
    const { marketDataPage, setMarketDataPage } = useContext(MyStateManagement);

    useEffect( () => {
        console.log(marketDataPage)
    });

    const onClick1 = () => {
        setMarketDataPage(1);
    };

    const onClick2 = () => {
        setMarketDataPage(2);
    };

    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='7'>
                    <Menu floated='right' pagination>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron left'/>
                        </Menu.Item>
                        <Menu.Item as='a' onClick={onClick1}>1</Menu.Item>
                        <Menu.Item as='a' onClick={onClick2}>2</Menu.Item>
                        <Menu.Item as='a'>3</Menu.Item>
                        <Menu.Item as='a'>4</Menu.Item>
                        <Menu.Item as='a' icon>
                            <Icon name='chevron right'/>
                        </Menu.Item>
                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    );
};


export default MarketTableFooter;
