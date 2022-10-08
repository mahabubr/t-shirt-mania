import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('Flower')


const Grandpa = () => {

    const [house, setHouse] = useState(1)

    const ring = 'diamond ring'


    return (
        <RingContext.Provider value={[house, setHouse]}>
            <div className='grandpa'>
                <p>Grandpa</p>
                <section className='flex'>
                    <Father ring={ring} house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </section>
            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;