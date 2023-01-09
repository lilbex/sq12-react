import React from "react";
import Button from "./callbackcom/Buttons";

const PracticeUseCallBack = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  const increment = () => {
    console.log("increment1")
    setCount((c) => c + 1);
  };

  const increment2 = () => {
    console.log("increment2")
    setCount2((c) => c + 1);
  };

  return (
    <div>
      <Button >Rendering this button</Button>
      <button onClick={increment}>Count {count}</button>
      <br/>
      <button onClick={increment2}>Count2 {count2}</button>
    </div>
  );
}

export default PracticeUseCallBack
  