import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    // console.log(tshirt);
    const {picture, name, price} = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="T-shirt" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>

            <button onClick={() =>handleAddToCart(tshirt)}>Buy now</button>
        </div>
    );
};

export default Tshirt;