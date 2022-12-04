import logo from './logo.svg';
import './App.css';
import './component/propTest'
import PropTest from './component/propTest';
import Testprops from './component/Testprops';
import { useState } from 'react'


const App = (props) => {
  const { course } = props
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
const Course = {
  id: 1,
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises: 10,
      id: 1
    },
    {
      name: 'Using props to pass data',
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component',
      exercises: 14,
      id: 3
    }
  ]
}


export default App


