import styled from "styled-components";

export const InputContainer = styled.div`
  text-align: start;
  margin: 24px 0 25px;
  label {
    font-size: 20px;
    line-height: 20px;
    font-family: 'PT Serif',serif;
    span{
        color: red;
        font-size: 13px;
    }
    
  }
  div {
    background-color: var(--white);
    border-radius: 10px;
    border: 1px solid ${({errors})=> errors ? "red" : "#0C0D0D"};
    width: 100%;
    height: 50px;
    padding: 0 20px 0 5px;
    margin: 2px 0 4px;
    display: flex;
    align-items: center;
    :focus-within{
      border: 1px solid var(--orange);

    }
    svg{
        height: 30px;
        width: 30px;
        margin: 0 10px 0 10px;
        color:${({errors})=> errors ? "red" : "#0C0D0D"};
    }
    input {
      border: 0;
      background-color: transparent;
      height: 100%;
      width: 100%;
      font-size: 16px;
      line-height: 33px;
    }
    input:autofill{
        background-color: var(--white);
    }
    input:-webkit-autofill {
        background-color: var(--white);
    }

    :hover {
      border: 1px solid var(--orange);
    }
  }


`;
