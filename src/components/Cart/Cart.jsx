import React, { useState, useContext, useEffect } from 'react'
import "./Cart.css"
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartContext } from '../../context/cartContext';

export const Cart = () => {

    const { showCart, setShowCart, cart, removeFromCart, clearCart } = useContext(CartContext);

    const subTotal = () => {
        let total = 0;

        cart.forEach((item) => {
            total += item.quantity * item.price;
        });
        return total.toFixed(2);
    }



    return (
        <div className={`cart-container ${showCart ? 'visible' : 'hidden'}`} onClick={(e) => { setShowCart(false), e.stopPropagation() }}>
            <div className='cart' onClick={(e) => e.stopPropagation()}>

                <div className='cart__header'>
                    <span className='cart__close' onClick={() => setShowCart(false)}>
                        <CloseIcon />
                    </span>
                    <h2 className='cart__title'>Your cart</h2>
                </div>

                <div className='cart__body'>
                    {
                        cart.length < 1 ?
                            <div className='cart-list__empty'>
                                <h2 className='cart-list__empty-text'>Your cart is empty</h2>
                            </div>
                            :
                            <div className='cart-list__container'>
                                <ul className='cart-list'>
                                    {
                                        cart.map(item => (
                                            <li key={item.id} className='cart-list__item'>
                                                <img src={item.image} alt="" />
                                                <span>
                                                    <h3 className='cart-item__title'>{item.title}</h3>
                                                    <p className='cart-item__title'>${item.price}</p>
                                                    <p className='cart-item__qty'>Qty: {item.quantity}</p>
                                                </span>
                                                <button className='cart-item__button-delete' onClick={() => removeFromCart(item)}><DeleteIcon /></button>
                                            </li>
                                        ))
                                    }
                                </ul>
                                <p className='cart-subTotal'>Subtotal: ${subTotal()}</p>
                                <div className='cart-button__container'>
                                    <button className='cart-button__payment'>Proceed to payment</button>
                                    <button className='cart-button__clear' onClick={() => clearCart()}>Clear cart</button>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>

    )
}
