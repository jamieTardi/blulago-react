import React, {useState, useEffect} from 'react'
import GlobalStyles from './GlobalStyles'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Switch, Route, useLocation } from 'react-router-dom'
import ShopHome from './pages/ShopHome'
import Cart from './components/Cart'
import Gallery from './pages/Gallery'
import {commerce} from './lib/commerce'
import Checkout from './components/Checkout/Checkout'
import Terms from './components/Terms'
import Confirmation from './components/Checkout/Confirmation'
import Footer from './components/Footer'
import styled from 'styled-components'
import Drawer from './components/Drawer'
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
  container: {
    display: 'flex',
  }

})

function App() {
  const [cart, setCart] = useState({})
  const [holidays, setHolidays] = useState([])
  const [order, setOrder] = useState({})
  const [errorMessage, setErrorMessage] = useState('')
  const location = useLocation();

  const classes = useStyles()

  const fetchHolidays = async() => {
    const {data} = await commerce
        .products
        .list()
        setHolidays(data)
}

const fetchCart = async() => {
  setCart(await commerce.cart.retrieve())
}


  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce
            .cart
            .add(productId, quantity)
        setCart(cart)
  }

  const handleEmptyCart = async() => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
}
const refreshCart = async() => {
  const newCart = await commerce.cart.refresh()

  setCart(newCart)
}

const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
try{
  const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)
  setOrder(incomingOrder)
  refreshCart()
}
catch(error){
  setErrorMessage(error.data.error.message)
}
}


  useEffect(() => {fetchHolidays()
                    fetchCart()},[])
  return (
    <StyledApp className="App">
      <GlobalStyles/>
      <NavBar cart={cart}/>
      <Drawer className={classes.container}/>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <Home/>
      </Route>
      <Route exact path="/shopHome">
        <ShopHome cart={cart} handleAddToCart={handleAddToCart} holidays={holidays}/>
      </Route>
      <Route exact path="/gallery">
        <Gallery />
      </Route>
      <Route exact path="/cart">
        <Cart  cart={cart} setCart={setCart} handleEmptyCart={handleEmptyCart}/>
      </Route>
      <Route exact path="/checkout">
        <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage}/>
      </Route>
    <Route exact path="/terms">
    <Terms/>
    </Route>
    <Route exact path="/confirmation">
      <Confirmation />
    </Route>
      </Switch>
      <Footer/>
    </StyledApp>
  );
}

const StyledApp = styled.div`
min-height: 100vh
`


export default App;
