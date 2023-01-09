import React, {memo} from "react";

const Title = () => {
  console.log("rendering title");
  return <h2>useCallBack Hook</h2>;
}

export default memo(Title);