import React from "react";
import { useState } from "react";

const UseState = () => {
  const [state, setstate] = useState("Mohamed");

  let handeleClick = () => {
    setstate("Naveen");
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={handeleClick}>click</button>
    </div>
  );
};
export default UseState;
