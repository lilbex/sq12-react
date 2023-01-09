import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Count from "./callbackcom/Counts";
import Button from "./callbackcom/Buttons";
import Title from "./callbackcom/Title";

const ParentComponent = () => {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <Container>
      <Title />
      <div>
        <Count text="Age" count={age} />
        <Button handClick={incrementAge}>Increment Age</Button>
      </div>
      <div>
        <Count text="Salary" count={salary} />
        <Button handClick={incrementSalary}>Increment Salary</Button>
      </div>
    </Container>
  );
};

export default ParentComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  gap: 50px;
`;
