import React, { useContext } from 'react';
import 'semantic-ui-css/semantic.min.css';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Semantic-UI Table
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import MarketTableItem from "./MarketTableItem";



const MarketTable = () => {

    // Import state from Context
    const { marketData } = useContext(MyStateManagement);



    return (
        <Table celled>
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

            <Table.Body>
                {
                    marketData.map(item => (
                        <MarketTableItem
                            key={item.id}
                            item={item}
                        />
                    ))
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='7'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>
    );
};

export default MarketTable;
