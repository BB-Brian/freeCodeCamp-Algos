import React from 'react';
import { BodySC } from "./BodySC";
import  useBodyHook from "./bodyHook";

const Body = () => {
  console.log("body")
  return (
  <div>
    <div className="left-panel"><h2>Challenge</h2></div>
    <div className="right-panel"><h2>Code</h2></div>
  </div>
  );
}

export default Body;
