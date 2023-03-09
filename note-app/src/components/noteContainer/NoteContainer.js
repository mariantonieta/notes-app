import React from "react";
import Note from "../note/Note";
import "./NoteContainer.css";
const NoteContainer = (props) => {
  const reverArray = (arr) => {
    const array = [];
    for (let i = arr.length - 1; i >= 0; --i) {
      array.push(arr[i]);
    }
    return array;
  };
  const notes = reverArray(props.notes);

  return (
    <div className="note-container">
      <h2>Notes</h2>
      <div className="notes custom-scroll">
        {notes?.length > 0 ? (
          notes.map((item) => (
            <Note key={item.id} note={item} deleteNote={props.deleteNote} />
          ))
        ) : (
          <div className="text">You don't have any notes</div>
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
