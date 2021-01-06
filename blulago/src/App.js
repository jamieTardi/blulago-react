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
import Rules from './pages/Rules'
import Facilities from './pages/Facilities'
import Contact from './pages/Contact'


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
  const [sidebar, setSidebar] = useState(false)
  const [hideModal, setHideModal] = useState(false)
  const location = useLocation();
  const classes = useStyles()



  const showSidebar = () => {
    setSidebar(prev => !prev)
}




  const fetchHolidays = () => {
        const url = new URL(
          "https://api.chec.io/v1/products"
      );
      
      let params = {
        "limit": "35",
      };
      
      Object.keys(params)
          .forEach(key => url.searchParams.append(key, params[key]));
      
          let headers = {
            "X-Authorization": process.env.REACT_APP_COMMERCE_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => setHolidays(json.data));
}



const fetchCart = async() => {
  setCart(await commerce.cart.retrieve())
}


  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce
            .cart
            .add(productId, quantity)
        setCart(cart)
        addToCartAlert()
  }

  const addToCartAlert = () => {
   setHideModal(true)
  }

  const handleEmptyCart = async() => {
    const { cart } = await commerce.cart.empty();

    setCart(cart)
}
const refreshCart = async() => {
  const newCart = await commerce.cart.refresh()

  setCart(newCart)
}

const closeMenu = () => {
  setSidebar(false)
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
                    fetchCart()
                    },[])
  return (
    <StyledApp className="App">
      <GlobalStyles/>
      <Drawer className={classes.container} showSidebar={showSidebar} sidebar={sidebar} setSidebar={setSidebar}/>
      <NavBar cart={cart} showSidebar={showSidebar} sidebar={sidebar}/>
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <Home sidebar={sidebar} setSidebar={setSidebar} closeMenu={closeMenu}/>
      </Route>
      <Route exact path="/shopHome">
        <ShopHome cart={cart} handleAddToCart={handleAddToCart} holidays={holidays} hideModal={hideModal} setHideModal={setHideModal} closeMenu={closeMenu}/> 
      </Route>
      <Route exact path="/gallery">
        <Gallery closeMenu={closeMenu} />
      </Route>
      <Route exact path="/cart">
        <Cart  cart={cart} setCart={setCart} handleEmptyCart={handleEmptyCart} closeMenu={closeMenu}/>
      </Route>
      <Route exact path="/checkout">
        <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} closeMenu={closeMenu}/>
      </Route>
    <Route exact path="/terms">
    <Terms/>
    </Route>
    <Route exact path="/confirmation">
      <Confirmation />
    </Route>
    <Route exact path="/rules">
    <Rules closeMenu={closeMenu}/>
    </Route>
    <Route exact path="/facilities">
      <Facilities closeMenu={closeMenu}/>
    </Route>
    <Route exact path="/contact">
    <Contact closeMenu={closeMenu}/>
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
