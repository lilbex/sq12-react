import React from "react";
import styled from "styled-components";

function Button({title, onClick, backgroundColor, white, blue, green, type, height}) {

  return (
    <ButtonStyle height={height} type={type} white={white} blue={blue} green={green} backgroundColor={backgroundColor} onClick={onClick} >
      {title}
    </ButtonStyle>
  );
}

export default Button;

const ButtonStyle = styled.button`
  background-color: ${({backgroundColor}) => backgroundColor || "blue"};
  border: none;
  color: ${({white, blue, green}) => white ? "white" : blue ? "blue" : green ? "green" : "white"};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  width: 100%;
  height: ${({height}) => height || "50px"};
`;
