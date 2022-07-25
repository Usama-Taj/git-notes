import styled from "styled-components";

export const HeaderArea = styled.header`
  position: fixed;
  z-index: 10;
  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #5acba1;
`;

export const NavBarLogo = styled.img`
  width: 70%;
`;

export const NavBarControls = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  & * {
    border-radius: 5px;
    color: #fff;
  }
  & input[type="text"] {
    border: 1px solid #fff;
    height: 40%;
    width: 70%;
    background-color: #5acba1;
    padding: 0 10px 0 10px;
  }

  & input[type="text"]::placeholder {
    color: #fff;
  }
  & input[type="text"]:focus {
    outline: none;
    border: 2px solid #fff;
  }

  & button {
    background-color: #fff;
    height: 45%;
    outline: none;
    border-color: #fff;
    color: #5acba1;
    width: 20%;
    cursor: pointer;
  }
  & button:active {
    border-color: 2px solid #fff;
  }
`;
