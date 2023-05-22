import React, { useState } from "react";
import MyModal from "./Modal.jsx";
import Note from "./Note.jsx";

const NotesList = (props) => {
  const { notes, deleteNote, archivedNotes, ActivateArchive, setnote } = props;

  const [show, setShow] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const openModal = (selected) => {
    setShow(true);
    setSelectedNote(selected);
  };

  return (
    <>
      <MyModal
        show={show}
        setnote={setnote}
        setShow={setShow}
        selectedNote={selectedNote}
        notes={notes}
        //handleClose={handleHideModal}

        //showModal={showModal}
      />
      <div className="notesContainer mx-auto m-3">
        <ul>
          {notes.map((note) => (
            <Note
              openModal={openModal}
              key={note.id}
              note={note}
              notes={notes}
              deleteNote={deleteNote}
            />
          ))}
        </ul>
      </div>
      <div className="border-top">
        {archivedNotes.length === 0 ? (
          ""
        ) : (
          <div className="notesContainer bg-light  mx-auto  m-3">
            <h2 className="text-center display-6 mx-auto bg-light">
              Archived notes
            </h2>
            <ul className="bg-light">
              {archivedNotes.map((archivedNote) => (
                <Note
                  openModal={openModal}
                  key={archivedNote.id}
                  note={archivedNote}
                  deleteNote={deleteNote}
                  ActivateArchive={ActivateArchive}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NotesList;
