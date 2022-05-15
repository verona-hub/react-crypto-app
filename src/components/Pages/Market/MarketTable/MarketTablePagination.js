import React, { useContext, useEffect } from 'react';
import { Icon, Menu, Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const MarketTablePagination = () => {

    // Import state from Context
    const { currentTablePage, setCurrentTablePage } = useContext(MyStateManagement);

    useEffect( () => {
        console.log(currentTablePage)
    });

    const onPageClick = e => {
        const pageNumber = e.target.innerText;
        setCurrentTablePage(parseInt(pageNumber));
    };

    const onChevronLeft = () => {
        currentTablePage > 1 ? setCurrentTablePage(prevState => prevState - 1) : setCurrentTablePage(1);
    };

    const onChevronRight = () => {
        currentTablePage < 10 && setCurrentTablePage(prevState => prevState + 1);
    };


    return (
        <Table.Footer>
            <Table.Row>
                <Table.HeaderCell colSpan='7'>
                    <Menu floated='right' pagination>

                        <Menu.Item as='a' icon onClick={onChevronLeft}>
                            <Icon name='chevron left'/>
                        </Menu.Item>

                        <Menu.Item as='a' onClick={onPageClick}> 1 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 2 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 3 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 4 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 5 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 6 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 7 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 8 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 9 </Menu.Item>
                        <Menu.Item as='a' onClick={onPageClick}> 10 </Menu.Item>

                        <Menu.Item as='a' icon onClick={onChevronRight}>
                            <Icon name='chevron right'/>
                        </Menu.Item>

                    </Menu>
                </Table.HeaderCell>
            </Table.Row>
        </Table.Footer>
    );
};


export default MarketTablePagination;
