import styled from "styled-components";

export const DashboardContainer = styled.main`
  min-height: 100vh;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 0 30px;

  @media (max-width: 600px) {
    padding: 40px 0 30px;
  }
`;

export const SearchContainer = styled.div`
  max-width: 620px;
  margin: 0px auto 0px;
  animation: appearRight 1s;
  button {
    height: 50px;
    width: 180px;
    font-size: 16px;
    margin-left: 25px;
  }

  form {
    display: flex;
    align-items: center;
    align-items: flex-end;
    div {
      margin: 0 0;
      width: 400px;

      div {
        margin: 5px 0 0;
      }
    }
  }
  @media (max-width: 600px) {
    form {
      padding: 10px;
      flex-direction: column;
    }
    button {
      width: 100%;
      margin-left: 0px;
    }
    form > div {
      width: 100%;
      margin: 0 auto 20px;
      div {
        margin: 0 auto 0px;
        width: 100%;
      }
    }
  }
`;

export const Tasks = styled.div`
  color: var() --black;
  display: flex;
  flex-wrap: wrap;
  padding: 90px 10px 30px;
  button {
    width: 100%;
    font-size: 16px;
    height: 40px;
  }
  @media (max-width: 600px){
      padding: 20px 0 20px;
      justify-content: center;
  }
`;

export const LogOutDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--black);
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  transition: 0.5s;
  align-items: center;
  cursor: pointer;
  svg {
    color: var(--white);
  }
  :hover {
    background-color: var(--orange);
    transition: 0.5s;
  }
`;
