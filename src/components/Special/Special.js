import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {

    const [house, setHouse] = useContext(RingContext)

    return (
        <div>
            <p>Special</p>
            <p>gift : {ring}</p>
            <p><small>{house}</small></p>
            <button onClick={() => setHouse(house + 1)}>Increase</button>
        </div>
    );
};

export default Special;