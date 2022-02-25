import styled from "styled-components";

export const DashboardContainer = styled.main`
  min-height: 100vh;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px 0 30px;

  @media (max-width: 600px) {
    padding: 10px 0 30px;
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
  padding: 50px 10px 30px;

  button {
    width: 100%;
    font-size: 16px;
    height: 40px;
  }
  >svg{
    width: 100px;
    height: 100px;
    margin: 0 auto;
    text-align: center;
    animation: rotate infinite 5s linear;
    color: var(--orange);
  }
  >svg::before{
  content: "Adicione uma tarefa";
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
export const HelloUser = styled.div`
  max-width: 1000px;
  margin: 0 0 40px;
  padding: 0 0 0 20px;
  font-size: 20px;
  color: var(--orange);
  cursor: pointer;
  @media (max-width:700px){
    font-size: 13px;
  }

`

export const FilterTask = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  max-width: 250px;
  color: var(--black);
  margin: 30px auto 0px;
  font-size: 15px;
  animation: appearRight 0.5s;
  p{
    cursor: pointer;
    padding: 10px 15px;
    border: 2px solid var(--black);
    background-color: #f4f4f4;
    border-radius: 5px;
    transition: 0.5s;
    :hover{
      border: 2px solid var(--orange);
      transition: 0.5s;
      background-color: #f8f8f8;

    }
  }
  .selected{
    background-color: #fff;
    border: 2px solid var(--orange);
    color: var(--orange);

  }
`