import GlobalStyles from './GlobalStyles'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import {Switch, Route, useLocation } from 'react-router-dom'

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyles/>
      <NavBar />
      <Switch location={location} key={location.pathname}>
      <Route path="/" exact>
      <Home/>
      </Route>
      </Switch>
    </div>
  );
}

export default App;
