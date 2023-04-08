import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { toast } from 'react-hot-toast';

const Home = () => {
    const tshirt = useLoaderData();
    // console.log(tshirt)
    const [cart , setCart] = useState([])

    const handleAddToCart = tshirt=>{
        // console.log(tshirt)
        const exists = cart.find(ts => ts._id === tshirt._id)
        if(exists){
            toast('Here is your toast.');
        } 
        else{

            const newCart = [...cart, tshirt]
        setCart(newCart);
        }
        
    }
    const handleRemoveFromCart = id =>{
        // console.log(id)
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            {/* <p>HOme {tshirt.length}</p> */}
            <div className='tshirts-container'>
            {
                tshirt.map(tshirt=> <Tshirt key={tshirt._id} tshirt={tshirt} handleAddToCart={handleAddToCart}></Tshirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
        </div>
    );
};

export default Home;