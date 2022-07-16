import Note from "./components/Note";
import { useLayoutEffect, useState, useEffect } from "react";
import Button from "./components/Button";
import axios from "axios";

const App = () => {
  const [myNotes, setMyNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    console.log('effect')
    axios.get("http://localhost:3001/notes").then((res) => {
      const notes = res.data;
      console.log(notes);
      setMyNotes(notes);
    });
  }, []);
  console.log('render', myNotes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault();

    let noteObj = {
      id: myNotes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    setMyNotes(myNotes.concat(noteObj));
    console.log(myNotes);
    setNewNote("");
  };

  const handleInputOnChange = (event) => {
    setNewNote(event.target.value);
    console.log(newNote);
  };

  const notesToShow = showAll
    ? myNotes
    : myNotes.filter((n) => n.important === true);

  const handleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((n) => (
          <Note key={n.id} notes={n} />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleInputOnChange} />
        <button type="submit">add note</button>
      </form>
      <Button label={showAll ? "important" : "all"} onClick={handleShowAll} />
    </div>
  );
};

export default App;
