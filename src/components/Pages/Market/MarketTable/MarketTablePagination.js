import React, { useContext, useEffect } from 'react';
import { Icon, Menu, Table } from "semantic-ui-react";

// Context
import { MyStateManagement } from '../../../Context/MyStateManagement';


const MarketTablePagination = () => {

    // Import state from Context
    const { currentTablePage, setCurrentTablePage } = useContext(MyStateManagement);

    useEffect( () => {
        const menu = document.querySelectorAll('.ui.menu');
        menu.forEach(item => {
            const children = item.childNodes;
            children.forEach(child => {
                // remove the active class from the links
                child.classList.remove('active');
                // add the active class to the selected link if the currentTablePage is matching
                currentTablePage == child.innerText && child.classList.add('active');
            });
        });

    }, [currentTablePage]);

    const onPageClick = e => {
        // set the current link page to be the currentTablePage state
        const pageNumber = e.target.innerText;
        setCurrentTablePage(parseInt(pageNumber));

        // remove the active class from the links
        const allElements = e.target.parentElement.childNodes;
        const removeActive = () => {
            allElements.forEach( element => {
                element.classList.contains('active') && element.classList.remove('active');
            });
        };

        // add the active class to the clicked link
        const addActive = () => {
            e.target.classList.add('active');
        };

        removeActive();
        addActive();
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

                        <Menu.Item as='a' onClick={onPageClick} active> 1 </Menu.Item>
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
