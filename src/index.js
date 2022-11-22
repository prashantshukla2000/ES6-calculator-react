//imort the ad,sub,mul,divide functions from a file calculator.js
//if successfull website should look like 3,6,5,2.5 in bullet points
//Use export inport functionality of es6

import React from "react";
import ReactDOM from "react-dom";
import { add, multiply, subtract, divide } from "./calculator";
ReactDOM.render(
  <div>
    <ul>
      <li>{add(1, 2)}</li>
      <li>{multiply(2, 3)}</li>
      <li>{subtract(7, 2)}</li>
      <li>{divide(5, 2)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
