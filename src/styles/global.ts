import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --light: #FFFFFF;
    --light-900: #D2D2D2;

    --yellow: #FFE600;
    
    --green-dark: #174127;
    --green-900: #83BF1D;
    --green-600: #009C3B;

    --gradient: linear-gradient(99.67deg, #FFDF00 -4.24%, #83BF1D 48.32%, #009C3B 104.26%);;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body {
    background-color: var(--green-dark);
  }

  body, input, textarea, button{
    font: 400 1rem 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
    transition: filter .2s ease;
    &:hover:not(:disabled) {
      filter: brightness(0.9);
    }
  }
  
  button, input, textarea {
    border: none;
    outline: 0;
  }
  button, a, input[type="submit"] {
    cursor: pointer;
  }
  a{
    color: inherit;
    text-decoration: none;
  }
  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
`;