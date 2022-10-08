import React from 'react';
import Special from '../Special/Special';

const MySelf = ({ house, ring }) => {
    return (
        <div>
            <p>MySelf</p>
            <p><small>{house}</small></p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default MySelf;