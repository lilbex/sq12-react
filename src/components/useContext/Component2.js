import { useContext } from "react";
import Componenet1 from "./Component1";
import { ContextStore } from "../../context/contextStore";

const Component2 = () => {
    const { user, setUser } = useContext(ContextStore);
  return (
    <div>
      {user}
    </div>
  );
}

export default Component2;