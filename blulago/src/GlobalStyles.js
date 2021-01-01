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
      background: #eeeeee;
      width: 100vw;
      overflow-x: hidden;
      min-height: 100vh;
  }



  p, li {
      color: #595959
  }

  h1{
      font-size: 4rem;
      
  }

  h2{
        font-size: 3rem;
        color: white;
        font-family: 'Lobster Two', cursive;
  }
  h3{
      color: white;
  }

  
  h6{
      font-size: 0.6rem;
      color: #595959
  }

  a{
      text-decoration: none;
      color: black;
  }
  li{
      list-style-type: none;
  }
  button{
    padding: 0.5rem 1rem;
margin-top: 1rem;
background: transparent;
color: #18DDEB;
font-size: 1.5rem;
border: 2px solid #18DDEB;
transition: all 0.75s ease;
&:hover{
background: #18DDEB;
cursor: pointer;
color: white;
}
  }

`


export default GlobalStyle