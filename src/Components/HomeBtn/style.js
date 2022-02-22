import styled from "styled-components";

export const HomeCircle = styled.div`
  background-color: var(--black);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  cursor: pointer;
  border: 1px solid var(--orange);
  svg {
    color: white;
    width: 30px;
    height: 30px;
    
  }
  :hover {
    transition: 0.5s;
    background-color: var(--orange);
  }
  animation: appearRight 0.5s;
`;
