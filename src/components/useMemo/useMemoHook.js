import React, { useState, useMemo } from "react";
import styled from "styled-components";

export default function PracticeUseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  // const doubleNumber = slowFunction(number)
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <InputWrapper>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </InputWrapper>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

const InputWrapper = styled.div`
margin-top: 20px;
`;
