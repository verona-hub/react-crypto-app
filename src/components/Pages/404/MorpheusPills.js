import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
// Morpheus Pills image
import morpheus_pills from "../../../img/morpheus-pills.jpg";


const MorpheusPills = () => {

    const navigate = useNavigate();

    return (
        <section className='MorpheusPills'>

            <div className='image-wrapper'>
                <img src={ morpheus_pills } alt='Morpheus from Matrix offering pills'/>
            </div>

            <div className='buttons-wrapper'>
                <div className='go-back'>
                    <button onClick={() => navigate(-1)}> Go back </button>
                </div>
                <div className='go-home'>
                    <Link to='/'>
                        <button> Go Home </button>
                    </Link>
                </div>
            </div>

        </section>
    );
};


export default MorpheusPills;
