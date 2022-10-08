import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>Please Buy One</p>
    }
    else if (cart.length === 1) {
        message = <p>Buy For Me One</p>
    }
    else {
        message = <p>Thanks For Buying</p>
    }

    return (
        <div>
            <h3 className={cart.length === 4 ? 'orange' : 'purple'}>Orders Summary</h3>
            <h5 className={`bold ${cart.length === 4 ? 'blue' : 'orange'}`}>Order Quantity : {cart.length}</h5>
            {
                cart.map(tShirt => <p key={tShirt._id}>
                    {tShirt.name}
                    <button onClick={() => handleRemoveItem(tShirt)}>X</button>
                </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>you will be gift 3 person</p> : <p>Buy Buy</p>
            }
            {
                cart.length === 2 && <h2>Double item</h2>
            }
            {
                cart.length === 4 || <p>not 4 items</p>
            }
        </div>
    );
};

export default Cart;