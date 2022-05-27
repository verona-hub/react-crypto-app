import React, { useContext }  from 'react';
// Spinner
import PacmanLoader from "react-spinners/PacmanLoader";
// Context
import { MyStateManagement } from '../Context/MyStateManagement';


const Spinner = () => {
    // import state from Context
    const { loading, setLoading } = useContext(MyStateManagement);

    const closeModal = () => {
        setLoading(false);
    };

    return (
        <section>
            { loading && (
                <div className="Modal">
                    <div className="Spinner">
                        <PacmanLoader
                            color={ '#fff' }
                            size={ 80 }
                        />
                    </div>
                    <div className="x-modal" onClick={ closeModal }> X</div>
                </div>
            )}
        </section>
    );
};


export default Spinner;
