import styled from "styled-components";

export const Card = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr 1fr;
  row-gap: 10px;
  border-radius: 10px;
  padding: 10px;
  border: 1px solid rgb(107, 102, 102, 0.5);
  border-radius: 15px;
  box-shadow: -0px 0px 8px #d9d9d9, 0px -0px 8px #e7e7e7;
`;
export const CardContent = styled.div`
  font-size: 0.6rem;
  font-family: "Courier New", Courier, monospace;
`;
export const CardInfo = styled.div`
  font-size: 0.7rem;
  color: #58a6ff;
`;
export const CardFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  align-items: center;
`;
export const History = styled.div`
  font-size: 0.5rem;
  color: #6b6666;
`;

export const UserImage = styled.img`
  border-radius: 50%;
  width: 40px;
`;
