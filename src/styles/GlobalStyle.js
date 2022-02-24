import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }
    body{
        font-family: var(--secondaryText);
        color:var(--black);
        background-color: var(--white-cream);
    }
    button{
        cursor: pointer;
        font-family: var(--secondaryText);
    }
    input{
        font-family: var(--secondaryText);
    }
    :root{
        --white:#F5F5F5;
        --white-cream:#E5E5E5;
        --black: #0C0D0D;
        --orange:#C85311;
        --primaryText:'Roboto Mono';
        --secondaryText:'PT Serif',serif;
    }
    a{
        text-decoration: none;
        color: var(--orange);
    }
    h1{
        font-family: var(--primaryText);
        font-size: 80px;
        font-weight: 400;
    }
    @keyframes appearRight {
  from {
    transform: translateX(-100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}
@keyframes appearLeft {
    from {
      transform: translateX(100px);
      opacity: 0;
    }
    to {
      transform: translateX(0px);
      opacity: 1;
    }
  }
  @keyframes fadeIn{
      from{
        opacity: 0;
      }
      to{
        opacity: 1;
      }
  }
  @keyframes rotate{
      from{
        transform: rotate(0);
      }
      to{
        transform: rotate(360deg);
        
      }
  }
`;

export const white = "#F5F5F5";
export const whiteCream = "#E5E5E5";
export const black = "#0C0D0D";
export const orange = "#C85311";
