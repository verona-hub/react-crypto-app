import React  from 'react';

// Semantic-UI Table
import { Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

// Components
import MarketTableHeader from "./MarketTable/MarketTableHeader";
import MarketTableBody from "./MarketTable/MarketTableBody";
import MarketTablePagination from "./MarketTable/MarketTablePagination";


const MarketTable = () => {
    return (
        <div className='MarketTable'>
            <Table>
                <MarketTableHeader />
                <MarketTableBody />
                <MarketTablePagination />
            </Table>
        </div>
    );
};


export default MarketTable;
