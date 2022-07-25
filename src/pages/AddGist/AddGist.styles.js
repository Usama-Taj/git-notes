import styled from "styled-components";

export const AddGistForm = styled.form`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  row-gap: 15px;
  width: 70%;
  & * {
    border-radius: 5px;
    border: none;
    outline: 1px solid rgba(128, 128, 128, 0.5);
  }
  & input[type="text"] {
    padding-left: 10px;
    padding-right: 10px;
    height: 1.5rem;
  }
  & textarea {
    padding-left: 10px;
    padding-right: 10px;
  }
  & input[type="text"] ::placeholder {
    width: 100%;
  }

  & button {
    cursor: pointer;
    width: 10%;
    color: #fff;
    background-color: #5acba1;
    height: 1.2rem;
  }
  & button:active {
    border: 1px solid rgba(0, 0, 0, 0.4);
  }
`;
