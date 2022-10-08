import React from 'react';
import './TShirt.css'

const TShirt = ({ tShirt, handleAddToCart }) => {

    const { name, picture, price } = tShirt

    return (
        <div className='t-shirts'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tShirt)}>Buy This</button>
        </div>
    );
};

export default TShirt;