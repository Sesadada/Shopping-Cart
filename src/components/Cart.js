import {useState} from 'react'
import formatCurrency from '../utils'

const Cart = (props) => {
const {cartItems} = props 
const [show, setShow] = useState(false)
const [data, setData] = useState({
    name: "",
    lastname: "",
    email: ""
})

const handleInput = (e) => {
  setData({...data, [e.target.name]: e.target.value})
}

const createOrder = (e) => {
e.preventDefault()
const order = {...data, cartItems: props.cartItems}
props.createOrder(order)
}
console.log(data)

    return (
        <div>
            {
            cartItems.length === 0? 
            (<div className='cart cart-header'> Cart is empty</div>)
            : 
            (<div className='cart cart-header'>You have {cartItems.length} items in the cart{' '}</div>
            )}
            <div>
            <div className="cart">
                <ul className="cart-items">
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <div>
                                <img src={item.image} alt={item.title}/>
                            </div>
                            <div>
                            <div>{item.title}</div>
                            <div className="right">
                            {formatCurrency(item.price)} x {item.count} {" "}
                            <button className='button' onClick={() => props.removeFromCart(item)}>
                            Remove
                            </button>
                            </div>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cartItems.length !== 0 && (
                <div>
                <div className="cart">
                <div className="total">
                    <div>
                    Total: {" "}
                        {formatCurrency(cartItems.reduce((a,b)=> a + b.price * b.count, 0)
                        )}
                    </div>
                    <button onClick={()=> setShow(true)} className="button primary">Proceed</button>
                </div>
            </div>
            {show && (
                    <div className="cart">
                        <form onSubmit={createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <label>Lastname</label>
                                    <input name="lastname" type="text" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <button className='button primary' type='submit'>Checkout</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                )}
                </div>
            )}
        </div>
     </div>
    )
}

export default Cart

/*
                {show && (
                    <div className="cart">
                        <form onSubmit={createOrder}>
                            <ul className="form-container">
                                <li>
                                    <label>Email</label>
                                    <input name="email" type="email" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <label>Name</label>
                                    <input name="name" type="text" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <label>Lastname</label>
                                    <input name="lastname" type="text" required onChange={handleInput}/>
                                </li>
                                <li>
                                    <button className='primary' type='submit'>Checkout</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                )}

*/