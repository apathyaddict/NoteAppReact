import { Button } from "react-bootstrap";

const Note = (props) => {
  const { note, id, deleteNote, openModal, ActivateArchive } = props;

  const handleDelete = () => {
    deleteNote(note.id);
  };

  const handleActivateArchive = () => {
    ActivateArchive(note.id);
  };

  return (
    <div className="">
      <li
        className={
          note.archived === true
            ? "archived border p-2 mb-2 rounded note shadow-sm"
            : "note border mx-auto shadow-sm p-2 mb-2 bg-body rounded"
        }
        id="noteLi"
        key={id}
      >
        <div className="noteTop">
          <div className="border-bottom">
            <span className="noteDate">Created : {note.date}</span>

            <p className="editDate">
              {note.editedDate ? "Edited: " + note.editedDate : ""}
            </p>
          </div>
          <span
            className="close"
            onClick={note.archived ? handleActivateArchive : handleDelete}
          >
            {note.archived === false ? "x" : "+"}
          </span>
        </div>
        <p className="noteTitle">{note.title}</p>
        <p className="noteText">{note.text}</p>
        <Button
          className="editbutton"
          variant="light"
          onClick={() => openModal(note)}
        >
          Edit
        </Button>
      </li>
    </div>
  );
};

export default Note;
