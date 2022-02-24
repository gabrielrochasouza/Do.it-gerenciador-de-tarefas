import styled from "styled-components";

export const TaskContainerDiv = styled.div`
  width: 299px;
  height: 299px;
  background-color: var(--white);
  color: var(--black);
  animation: appearLeft 0.5s;
  border: 2px solid #000000;
  border-radius: 10px;
  padding: 15px;
  font-size: 20px;
  font-family: var(--secundaryText);
  text-align: center;
  margin: 0 10px 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s;
  @media (max-width: 600px) {
    margin: 0 0 20px;
  }
  @media (max-width:420px){
    width: 93%;
  }
  div {
    .calendar,
    .task {
      text-align: start;
      display: flex;
      align-items: center;
      font-weight: 400;
      svg {
        color: var(--orange);
        margin: 0 10px 0 5px;
        width: 26px;
        height: 28px;
      }
    }
    .task {
      align-items: start;
    }
  }
  .linha {
    height: 1px;
    width: 80%;
    background-color: var(--black);
    margin: 20px auto;
  }
  :hover {
    transition: 0.5s;
    border: 2px solid var(--orange);
  }
  button {
    width: 100%;
  }
`;
