import React from "react";
import { ReactDOM } from "react-dom";
import App from '../App';

const Note = ({ note }) => {
  return (
    note.map(notes =>
      <li key={notes.id}>{notes.content}</li>
    )
  )
}

export default Note