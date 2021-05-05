import {useState} from 'react'
import formatCurrency from '../utils'
import Fade from 'react-reveal/Fade'
import Modal from 'react-modal'
import Zoom from 'react-reveal/Zoom'

const Products = (props) => {
    
    const [state, setState] = useState(null)

    const openModal = (product) => {
        setState({product})
    }
    const closeModal = () => {
        setState(null)
    }
    let prod;
    state && (prod = state.product)

    return (
        <div>
        <Fade bottom cascade>
            <ul className="products">
                {props.products.map(product => { return ( 
                    <li key={product.id}>
                        <div className="product">
                            <a href={`#${product.id}`} onClick={()=> openModal(product)}>
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
            </Fade>
            { 
                prod && (
                    <Modal isOpen={true} onRequestClose={closeModal}>
                    <Zoom>
                    <button className='close-modal' onClick={closeModal}> x </button>
                    <div className='product-details'> 
                    <img src={prod.image} alt={prod.title}/>
                    <div className="product-details-description">
                        <p>
                            <strong>{prod.title}</strong>
                        </p>
                        <p>
                            {prod.description}
                        </p>
                        <p> Available Items: {" "}
                            {prod.availableSizes.map(x => (
                                <span> {" "} <button className='button'>{x}</button>
                                </span>
                            ))}
                        </p>
                        <div className="product-price">
                            <div>{formatCurrency(prod.price)}</div>
                                <button className='button primary' onClick={() => {
                                props.addToCart(prod)    
                                closeModal()}}> Add to Cart</button>
                            
                        </div>
                    </div>
                    
                    </div>
                    </Zoom>
                    </Modal>
                )
            }
        </div>
    )
}

export default Products
