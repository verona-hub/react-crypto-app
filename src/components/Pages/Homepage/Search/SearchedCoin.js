import React, { useContext } from 'react';
import { MyStateManagement } from '../../../Context/MyStateManagement';


const SearchedCoin = () => {

    const { coin } = useContext(MyStateManagement);

    return (
        coin && (
            <div>
                searched coin goes here
            </div>
        )
    );
};


export default SearchedCoin;
