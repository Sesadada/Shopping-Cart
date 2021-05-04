
import {useState} from 'react'
import data from "./data.json"
import Product from "./components/Products"
import Filter from "./components/Filter"
import Cart from './components/Cart'


const App = () => {

  const [state, setState] = useState({
    cartItems: [],
    products: data.products,
    size: "",
    sort: ""
  })

  const removeFromCart = (product) => {
    const cartItems = state.cartItems.slice()
    setState({...state, cartItems: cartItems.filter(item => item.id !== product.id)})
    
  }
console.log(state)
  const addToCart = (product) => {
    const cartItems = state.cartItems.slice()
    let alreadyIn = false
    cartItems.forEach(item => {
      if(item.id === product.id){
        item.count++
        alreadyIn = true
      }
    })
    if(!alreadyIn){
      cartItems.push({...product, count: 1})
    }
    setState({...state, cartItems})
  }
  console.log(state)

  const sortProducts = (e) => {
   const sorted = e.target.value
   setState((state) => ({
     sort: sorted,
     products: state.products.slice().sort((a,b) => 
       sorted === 'lowest'? a.price > b.price ? 1: -1 : 
       sorted === 'highest'?  a.price < b.price ? 1: -1:
       a.id < b.id ? 1: -1
     )

   }))
  }

  const filterProducts = (e) => {
    if(e.target.value === "all"){
      setState({...state, products: data.products})
    } else {
    setState({
      ...state, size: e.target.value, products: data.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0)
    })
  }}

  return (
    <div className="grid-container">
    <header>
      <a href="/">React Shopping Cart</a>
    </header>
    <main>
    <div className="content">
    <div className="main">Products
    <Filter count={state.products.length} size={state.size} sorted={state.sort}
    filterProducts={filterProducts} sortProducts={sortProducts}

    />
    <Product  addToCart={addToCart} products={state.products}/>
    </div>
    <div className="sidebar">
    <Cart removeFromCart={removeFromCart} cartItems={state.cartItems}/>
    </div>
    </div>
      
    </main>
<footer>All Rights reserved</footer>
    </div>
  );
}

export default App;
