import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {

    const ring = useContext(RingContext)

    return (
        <div>
            <p>Friend</p>
            <h1>{ring}</h1>
        </div>
    );
};

export default Friend;