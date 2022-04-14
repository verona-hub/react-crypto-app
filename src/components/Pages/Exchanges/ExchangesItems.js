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
        <div className="ExchangesItems">
            <Grid container>
                {
                    exchangeData.map(exchangeDataItem => (
                        <ExchangesItemCard
                            exchangeDataItem={ exchangeDataItem }
                            key={ exchangeDataItem.id }
                        />
                    ))
                }
            </Grid>
        </div>
    );
};

export default ExchangesItems;
