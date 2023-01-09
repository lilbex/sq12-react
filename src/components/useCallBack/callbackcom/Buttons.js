import React, { memo } from "react";
import styled from "styled-components";

const Buttons = ({handClick,children}) => {
  console.log("rendering button - ", children);
  return (
        <Button onClick={handClick}>
          {children}
        </Button>
    
  );
};

export default memo(Buttons);

const Button = styled.button`
  button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    padding: 10px;
    margin: 10px;
  }
`;
