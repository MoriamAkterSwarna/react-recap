import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message ;
    if (cart.length === 0){
        message=<p>Please Add sum Products</p>
    }
    else{
        message = <div>
            <h3>Boroloxxx</h3>
            <p>Thanks</p>
        </div>
    }
    return (
        <div>
            <h1 className={cart.length === 1 ? 'blue' : 'red'}>Cart: {cart.length}</h1>
            <p className={`bold bordered ${cart.length==3 ? 'yellow' :'purple'}`}>Something</p>
            {cart.length > 2 ? 
            <span className='purple'>Aro kino</span> 
            : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }

            {
                cart.length === 2 && <p>Double bonanza</p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3>
            }
        </div>
    );
};

export default Cart;


/*

conditional rendering 
1. use if or if else to set a variable that will contain an element, components
2. Ternary: condition ? 'true' : 'false'
3. logical && : (if the condition is true then the next thing will be displayed)
4. logical || : if the  condition is false then the next thing will be displayed



==-==conditional css class 
1. use ternary
2. ternary inside template string


*/


