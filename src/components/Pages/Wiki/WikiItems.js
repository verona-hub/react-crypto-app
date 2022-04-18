import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import WikiItemCard from './WikiItemCard';
// Semantic-UI
import { Grid } from 'semantic-ui-react';


const WikiItems = () => {

    // Import state from Context
    const { wikiData } = useContext(MyStateManagement);

    return (
        <main className="WikiItems">
            <Grid container>
                {
                    wikiData.map(wikiItem => (
                        <WikiItemCard
                            wikiItem={ wikiItem }
                            key={ wikiItem.id }
                        />
                    ))
                }
            </Grid>
        </main>
    );
};


export default WikiItems;
