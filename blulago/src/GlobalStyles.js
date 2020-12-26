import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }

  html{
      font-size: 120%;
      font-family: 'Roboto', sans-serif;
  }

  p, li {
      color: #595959
  }

  h1{
      font-size: 4rem;
  }

  h2{
        font-size: 3rem;
        color: white
  }
  h3{
      color: white;
  }

  a{
      text-decoration: none;
      color: black;
  }
  li{
      list-style-type: none;
  }
 

`


export default GlobalStyle