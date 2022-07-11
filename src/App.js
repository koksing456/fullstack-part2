import Note from "./components/Note";
import { useLayoutEffect, useState } from "react";

const App = ({ notes }) => {
  const [myNotes, setMyNotes] = useState(notes);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(false);

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
    </div>
  );
};

export default App;
