import React from "react";
import Modal from "react-modal";

Modal.setAppElement(document.getElementById("root"));

const TaskModal = (props) => (
  <Modal
    isOpen={!!props.chosenTask}
    onRequestClose={props.handleClodeModal}
    contentLabel="Selected Task"
  >
    <h3>Chosen Task</h3>
    {props.chosenTask && <p>{props.chosenTask}</p>}
    <button onClick={props.handleClodeModal}>Close</button>
  </Modal>
);

export default TaskModal;
