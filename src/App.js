import logo from './logo.svg';
import './App.css';
import './component/propTest'
import PropTest from './component/propTest';
import Note from './component/Note';
import { useState } from 'react'

const App = () => {
  const course = {
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

  return <Note course={course} />
}

export default App

