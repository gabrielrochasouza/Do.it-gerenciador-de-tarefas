import styled from "styled-components";

export const FirstPage = styled.main`
  text-align: center;
  min-height: 100vh;
  height: 100%;
  background-color: var(--white-cream);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: scale(0.6);
  animation: fadeIn 1.5s;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h2 {
    font-size: 60px;
    line-height: 79px;
    max-width: 732px;
    margin: 23px auto 65px;
    font-weight: 400;
  }
  @media (max-width: 400px) {
    h2 {
    line-height: 39px;
      font-size: 40px;
    }
  }
  span {
    color: var(--orange);
  }
  button {
    font-family: var(--primaryText);
  }
  button:nth-child(1) {
    margin: 0 73px 20px;
  }
`;
