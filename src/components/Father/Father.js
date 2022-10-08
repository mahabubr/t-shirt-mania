import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';

const Father = ({ house, ring }) => {
    return (
        <div>
            <p>Father</p>
            <p>House: {house}</p>
            <section className='flex'>
                <MySelf ring={ring} house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;