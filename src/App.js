import React, { useState } from "react";
import "./style.css";
import Button from "./components/Button";
import Input from "./components/input";
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [number, setNumber] = useState(0);
  const onChangeHandler = (e, n) => {
    console.log(n);
    const { name, value } = e.target;
  };

  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    if (number === 0) {
      toast.error("Number cannot be less than 0");
      return;
    }
    setNumber(number - 1);
  };

  return (
    <div className="center">
       <ToastContainer />
      <DivWrapper>
        <Button title="decrement" onClick={decrement} />
        <h2>{number}</h2>
        <Button title="Increment" onClick={increment} />
      </DivWrapper>
    </div>
  );
}

const DivWrapper = styled.div`
  display: flex;
  width: 50%;
  gap: 10px;
`;

export default App;
