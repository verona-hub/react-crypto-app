import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import ExchangesItem from "./ExchangesItem";


const ExchangesItems = () => {

    // Import state from Context
    const { exchangeData } = useContext(MyStateManagement);


    return (
        <section className="ExchangesItems">
            {
                exchangeData.map( item => (
                    <ExchangesItem
                        item={ item }
                        key={ item.id }
                    />
                ))
            }
        </section>
    );
};

export default ExchangesItems;
