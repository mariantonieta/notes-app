import React from "react";
import "./Note.css";
import { MdDeleteOutline } from "react-icons/md";
let timer = 500,
  timeout;
const Note = (props) => {
  const formatDate = (value) => {
    if (!value) return "";
    const date = new Date(value);
    const monthNames = [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
    ];
    let hour = date.getHours();
    let amPm = hour > 12 ? "PM" : "AM";
    hour = hour ? hour : "12";
    hour = hour > 12 ? (hour = 24 - hour) : hour;
    let min = date.getMinutes();
    min = min < 10 ? "0" + min : min;
    let day = date.getDate();
    const month = monthNames[date.getMonth()];

    return `${hour}:${min} ${amPm} ${day} ${month}`;
  };
  const debounce = (func) => {
    clearTimeout(timeout);
    timeout = setTimeout(func, timer);
  };

  const updateText = (text, id) => {
    debounce(() => props.updateText(text, id));
  };

  return (
    <div className="note" style={{ backgroundColor: props.note.color }}>
      <textarea
        className="note_text"
        defaultValue={props.note.text}
        onChange={(event) => updateText(event.target.value, props.note.id)}
      />

      <p>{formatDate(props.note.time)}</p>
      <div className="note_footer">
        <MdDeleteOutline
          className="icon"
          onClick={() => props.deleteNote(props.note.id)}
        />
      </div>
    </div>
  );
};

export default Note;
