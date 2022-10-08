import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <p>Cousin</p>
            <p><small>house : {house}</small></p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;