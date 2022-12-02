import React from "react";
import { ReactDOM } from "react-dom";
import App from '../App';


function Testprops(props) {
  props = {
    name: 'Arto Hellas',
    age: 35,
  }
  const { name, age } = props

  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default Testprops