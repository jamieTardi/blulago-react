import React, {useState} from 'react'
import GlobalStyles from './GlobalStyles'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Switch, Route, useLocation } from 'react-router-dom'
import ShopHome from './pages/ShopHome'
import Cart from './components/Cart'
import Gallery from './pages/Gallery'

function App() {
  const [cart, setCart] = useState([])
  const location = useLocation();


  const handleAddToCart = (productId, quantity, arrival, departure) => {
    setCart([...cart, {name: productId, quantity, arrival, departure}])
  }
  return (
    <div className="App">
      <GlobalStyles/>
      <NavBar cart={cart}/>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route exact path="/shopHome">
        <ShopHome cart={cart} handleAddToCart={handleAddToCart}/>
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/cart">
        <Cart  />
      </Route>
    
      </Switch>
    </div>
  );
}

export default App;
