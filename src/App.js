
import {useState} from 'react'
import data from "./data.json"
import Product from "./components/Products"
const App = ()=> {

  const [state, setState] = useState({
    products: data.products,
    size: "",
    sort: ""
  })

  return (
    <div className="grid-container">
    <header>
      <a href="/">React Shopping Cart</a>
    </header>
    <main>
    <div className="content">
    <div className="main">Products
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
