import React, { useContext } from 'react';

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import WikiItemCard from './WikiItemCard';


const WikiItems = () => {

    // Import state from Context
    const { wikiData } = useContext(MyStateManagement);

    return (
        <div className="WikiItems">
            <h3> Wiki Items </h3>
            {
                wikiData.map( wikiItem => (
                    <WikiItemCard
                        wikiItem={ wikiItem }
                        key={ wikiItem.id }
                    />
                ))
            }
        </div>
    );
};


export default WikiItems;
