import React from "react";
import Modal from "react-bootstrap/Modal";
import ContainerInput from "./ContainerInput.jsx";

function MyModal(props) {
  const { show, setShow, selectedNote} = props;

  return (
    <>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton onClick={() => setShow(false)}> </Modal.Header>
        <Modal.Body>
          <div className="modalcontainer">
            <ContainerInput {...props} />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <p className="modalDate">Created: {selectedNote.date}</p>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;
