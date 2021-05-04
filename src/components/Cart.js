import React from 'react'
import formatCurrency from '../utils'
const Cart = (props) => {
const {cartItems} = props 

    return (
        <div>
            {
            cartItems.length === 0? 
            (<div className='cart cart-header'> Cart is empty</div>)
            : 
            (<div className='cart cart-header'>You have {cartItems.length} items in the cart{' '}</div>)
            }
            <div>
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>{item.title}</div>
                            <div className="right">
                            {formatCurrency(item.price)} x {item.count} {" "}
                            <button className='button' onClick={() => props.removeFromCart(item)}>
                            Remove
                            </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && 
                <div className="cart">
                <div className="total">
                    <div>
                    Total: {" "}
                        {formatCurrency(cartItems.reduce((a,b)=> a + b.price * b.count, 0))}
                    </div>
                    <button className="primary">Proceed</button>
                </div>
            </div>}

            </div>
        </div>
    )
}

export default Cart
