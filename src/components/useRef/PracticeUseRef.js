import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const PracticeUseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const countRef = useRef(0);

  useEffect(() => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef.current.value = "hello world";
  }, []);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const clearRef = () => {
    countRef.current = 0;
    setInputValue("");
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <br/>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={{
          width: "200px",
          height: "40px",
          fontSize: "20px",
          padding: "10px",
        }}
      />
      <p>the DOM updated {countRef.current} </p>
      <button onClick={clearRef}  >clearRef</button>
      <Link to="/table">Go to table</Link>
    </div>
  );
};

export default PracticeUseRef;
