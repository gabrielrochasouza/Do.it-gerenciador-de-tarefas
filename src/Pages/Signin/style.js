import styled from "styled-components";
import IconSide from "../../assets/sapiens2.svg";

export const SubmitScreen = styled.main`

  min-height: 100vh;
  height: 100%;
  display: flex;
  align-items: stretch;
  @media (max-width:1000px) {
      justify-content: center;
  }

`;

export const SideIcon = styled.div`
  background-color: var(--black);
  flex-basis: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:1000px) {
      display: none;
      flex-basis: 100%;
  }
  svg {
    background: url(${IconSide}) no-repeat center;
    width: 100%;
    height: 100%;
    background-size: contain;
    animation: appearLeft 0.5s;
  }
`;

export const SideFormContainer = styled.div`
  flex-basis: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  button {
    margin: 10px 0 0;
    height: 48px;
    width: 428px;
  }
  div {
    font-family: var(--primaryText);
    font-size: 15px;
    line-height: 33px;
    margin: 0px 0 10px;
  }
  h1{
      font-size: 50px;
  }
  animation: appearRight 0.5s;


`;

export const LoginForm = styled.form`
width:360px;
button{
    max-width: 320px;
    text-align: center;
    font-size: 17px;
}
input{
      width: 100%;
  }
@media (max-width:360px){
    width: 100%;

  }

`;
