import { useContext } from "react";
import { ContextStore } from "../../context/contextStore";

const Component2 = () => {
    const { user } = useContext(ContextStore);
  return (
    <div>
      {user}
    </div>
  );
}

export default Component2;