import React from 'react';
import { Link } from "react-router-dom";
// Morpheus Pills image
import morpheus_pills from "../../../img/morpheus-pills.jpg";


const MorpheusPills = () => {
    return (
        <section className='MorpheusPills'>
            <img src={ morpheus_pills } alt='Morpheus from Matrix offering pills'/>
            <Link to='/'>
                <button> Back to Homepage </button>
            </Link>
        </section>
    );
};


export default MorpheusPills;
