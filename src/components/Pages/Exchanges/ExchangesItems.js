import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import ExchangesItemCard from "./ExchangesItemCard";
// Semantic-UI
import { Grid } from 'semantic-ui-react';


const ExchangesItems = () => {

    // Import state from Context
    const { exchangeData } = useContext(MyStateManagement);

    return (
        <section className="ExchangesItems">
            <Grid container>
                {
                    exchangeData.map(item => (
                        <ExchangesItemCard
                            item={ item }
                            key={ item.id }
                        />
                    ))
                }
            </Grid>
        </section>
    );
};

export default ExchangesItems;
