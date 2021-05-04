
import {useState} from 'react'
import data from "./data.json"
import Product from "./components/Products"
import Filter from "./components/Filter"
const App = ()=> {

  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: ""
  })
  const sortProducts = (e) => {
   console.log(e.target.value)
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
      console.log(state)
      setState({products: data.products, size: "", sort: ""})
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
    <Product products={state.products}/>
    </div>
    <div className="sidebar">Cart Items</div>
    </div>
      
    </main>
<footer>All Rights reserved</footer>
    </div>
  );
}

export default App;
