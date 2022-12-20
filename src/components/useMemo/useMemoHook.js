import React, { useState, useMemo } from "react";

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
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}
