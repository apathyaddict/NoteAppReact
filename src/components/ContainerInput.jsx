import React, { useState, useEffect } from "react";
import fecha from "fecha";
import TextareaAutosize from "react-textarea-autosize";
import { nanoid } from "nanoid";
import Reminder from "./Reminder";

function ContainerInput(props) {
  const { addNote, selectedNote, setShow, handleReminder } = props;
  const [isChecked, setIsChecked] = useState(false);

  const [time, onTimeChange] = useState(null);
  const timeToRemind = time ? time.$d : null;

  const [text, setText] = useState(selectedNote ? selectedNote.text : "");
  const [title, setValuetitle] = useState(
    selectedNote ? selectedNote.title : ""
  );

  const handleChangeInput = (event) => {
    setText(event.target.value);
  };

  const handleChangeTitle = (event) => {
    setValuetitle(event.target.value);
  };

  const now = new Date();
  const formattedDate = fecha.format(now, "MMM D, hh:mm A");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text) {
      alert("You cannot insert a note with only a title");
      return;
    }

    const newNote = {
      id: selectedNote ? selectedNote.id : nanoid(),
      title: title,
      text: text,
      date: formattedDate,
      editedDate: "",
      archived: false,
      reminder: isChecked ? true : false,
      dateRemind: isChecked ? timeToRemind : "",
    };

    if (!selectedNote) {
      addNote(newNote);
      setText("");
      setValuetitle("");
      handleReminder();
    } else {
      selectedNote.title = title;
      selectedNote.text = text;
      selectedNote.editedDate = fecha.format(now, "MMM D, hh:mm A");
      setShow(false);
    }
  };

  return (
    <div id="maindiv" className="container-md mx-auto m-3 ">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Note title"
          className="form-control m-1 mx-auto"
          value={title}
          onChange={handleChangeTitle}
        ></input>
        <TextareaAutosize
          id="textarea"
          type="submit"
          value={text}
          className="form-control m-1 mx-auto "
          onChange={handleChangeInput}
          placeholder="Type your note here"
          minRows={3}
          required
          aria-required="true"
        />
        {selectedNote ? (
          ""
        ) : (
          <div>
            <Reminder
              isChecked={isChecked}
              setIsChecked={setIsChecked}
              time={time}
              onTimeChange={onTimeChange}
            />
          </div>
        )}
        <div>
          <button onClick={handleSubmit} className="buttonSubmit btn btn-dark">
            {!selectedNote ? "Add Note" : "Update Note"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContainerInput;
