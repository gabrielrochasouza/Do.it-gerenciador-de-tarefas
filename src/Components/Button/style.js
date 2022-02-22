import styled from "styled-components";
import { white, black } from "../../styles/GlobalStyle.js";

export const StyledBtn = styled.button`
  border: 2px solid var(--black);
  border-radius: 10px;
  width: 403px;
  height: 73px;
  text-align: center;
  font-size: 30px;
  background-color: ${(props) => (props.isBlack ? black : white)};
  color: ${({ isBlack }) => (isBlack ? white : black)};
  transition: 0.5s;
  :hover {
    transition: 0.5s;
    background-color: var(--orange);
    color: var(--white);
    border: 2px solid var(--orange);
  }
`;
