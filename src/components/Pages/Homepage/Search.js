import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

// Context
import { MyStateManagement } from '../../Context/MyStateManagement';
// Components
import SearchForm from "./Search/SearchForm";


const Search = () => {

    // Import state from Context
    const { setCoin, searchedCoin, setLoading } = useContext(MyStateManagement);
    let navigate = useNavigate();

    const searchCoin = async () => {

        const config = {
            method: 'GET',
            url: `https://api.coingecko.com/api/v3/coins/${searchedCoin}`,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        };

        try {
            await axios(config)
                .then( response => {
                    setCoin(response.data);

                    // When data is fetched, remove the spinner
                    response && setTimeout(() => { setLoading(false)}, 2000);
                    console.log(response.data);
                    navigate('/market');
                })
        } catch (err) {
            console.log(err)
            // Remove the loading spinner with modal if the search is not successful
            setTimeout(() => { setLoading(false)},2000);
        }
    };

    return (
        <section className="Search">
            <SearchForm searchCoin={ searchCoin }/>
        </section>
    );
};


export default Search;
