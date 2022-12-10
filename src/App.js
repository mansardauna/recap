import logo from './logo.svg';
import './App.css';
import './component/propTest'
import PropTest from './component/propTest';
import Note from './component/Note';
import { useState, useEffect } from 'react'
import axios from 'axios';

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost/3001/notes')
      .then(response => {
        setNotes(response.data)
      })
  }, [])

  const noteToShow = showAll
    ? notes
    : notes.filter(note => note.important === true)



  const handleNoteChange = (event) => {
    event.preventDefault()
    setNewNote(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObj = {
      content: newNote,
      id: notes.lenght,

    }
    setNotes(notes.concat(noteObj))
    setNewNote('')
  }


  return (<div>
    <h1>Notes</h1>
    <ul>
      {noteToShow.map(note =>
        <Note key={note.id} note={note} />
      )}
    </ul>
    <form onSubmit={addNote}>
      <input value={newNote}
        onChange={handleNoteChange} />
      <button type="submit">save</button>
    </form>
    <button onClick={() => setShowAll(!showAll)}>
      show {showAll ? 'important' : 'all'}
    </button>
  </div>
  )
}

export default App

