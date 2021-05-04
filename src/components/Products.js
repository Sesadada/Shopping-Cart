import React from 'react'
import formatCurrency from '../utils'
const Products = (props) => {
    return (
        <div>
            <ul className="products">
                {props.products.map(product => { return ( 
                    <li key={product.id}>
                        <div className="product">
                            <a href={`#${product.id}`}>
                                <img src={product.image} alt={product.title}/>
                                <p>{product.title}</p>
                            </a>
                            <div className="product-price">
                                <div>{formatCurrency(product.price)}</div>
                                <button onClick={() => props.addToCart(product)} className='button primary'>Add to cart</button>
                            </div>
                        </div>
                    </li>
                )
                })}
            </ul>
        </div>
    )
}

export default Products
