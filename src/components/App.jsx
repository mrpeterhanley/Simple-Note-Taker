import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([
    { title: "Test Note 1", content: "Some content here" },
    { title: "Test Note 2", content: "Some content here" },
    { title: "Test Note 3", content: "Some content here" },
  ]);

  function addNote(noteTitle, noteContent) {
    setNoteList((existingNotes) => [
      ...existingNotes,
      { title: noteTitle, content: noteContent },
    ]);
  }

  function deleteNote(deleteId) {
    setNoteList((existingNotes) => {
      return existingNotes.filter(function (note, index) {
        return index !== deleteId;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-wrapper">
        {noteList.map((note, index) => (
          <Note
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
