import React, { useState, useEffect } from "react";
import ContainerInput from "./components/ContainerInput";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const [archivedNotes, setArchiveNotes] = useState([]);

  const deleteNote = (noteId) => {
    const shouldDelete = window.confirm(
      "Are you sure you want to archive this note?"
    );

    if (shouldDelete) {
      const updateNotesList = notes.map((note) =>
        note.id === noteId ? { ...note, archived: true } : note
      );
      const archivedNote = updateNotesList.find((note) => note.id === noteId);
      const updatedNotesArchived = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotesArchived);
      setArchiveNotes([...archivedNotes, archivedNote]);
    }
  };

  const ActivateArchive = (noteId) => {
    const updatedArchiveNotesList = archivedNotes.map((note) =>
      note.id === noteId ? { ...note, archived: false } : note
    );
    const activateNote = updatedArchiveNotesList.find(
      (note) => note.id === noteId
    );
    const updatedNotes = archivedNotes.filter((note) => note.id !== noteId);
    setArchiveNotes(updatedNotes);
    setNotes([...notes, activateNote]);
    console.log(notes);
  };

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      const updatedNotes = savedNotes.map((note) => ({
        ...note,
        id: nanoid(), // generate new id for each note and not to cause a duplicate
      }));
      setNotes(updatedNotes);
    }
  }, [setNotes]);

  const handleReminder = (noteId) => {
    const remindedNotes = notes.map((note) =>
      note.id === noteId && note.reminder ? { ...note, reminded: true } : note
    );

    remindedNotes.forEach((remind) => {
      const reminderTimestamp = new Date(remind.dateRemind).getTime();

      if (reminderTimestamp <= Date.now()) {
        alert(`Reminder: ${remind.title}`);
      } else {
        const delay = reminderTimestamp - Date.now();
        const timeoutId = setTimeout(() => {
          alert(`Reminder: ${remind.title}`);
          clearTimeout(timeoutId);
        }, delay);
      }
    });
  };

  return (
    <>
      <h1 className="display-6 mx-auto text-center mt-3">
        Things To Remember...
      </h1>

      <ContainerInput
        addNote={addNote}
        notes={notes}
        setNotes={setNotes}
        handleReminder={handleReminder}
      />
      <NotesList
        notes={notes}
        deleteNote={deleteNote}
        archivedNotes={archivedNotes}
        ActivateArchive={ActivateArchive}
        setNotes={setNotes}
      />
    </>
  );
}

export default App;
