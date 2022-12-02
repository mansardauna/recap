import { ReactDOM } from "react";
import React from "react";
import App from "../App";
function PropTest(props) {

  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )

}

export default PropTest
