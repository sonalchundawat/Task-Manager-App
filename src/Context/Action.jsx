import React from "react";
import { FaEdit, FaTrashAlt, FaArrowUp } from "react-icons/fa"; // Correct import of icons

const Action = (props) => {
  return (
    <div className="mt-2 space-x-2">
      {/* Edit Icon */}
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.handleEditTask(prompt("Edit task:", props.selectedTask.text))
        }
      >
        <FaEdit /> {/* Edit Icon */}
      </button>
      
      {/* Change Priority Icon */}
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.handleChangePriority(
            prompt("Enter new priority:", props.selectedTask.priority)
          )
        }
      >
        <FaArrowUp /> {/* Change Priority Icon */}
      </button>
      
      {/* Delete Icon */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          window.alert(
            `Press Sure Wan't Delete ${props.priority} Priority Task`
          );
          props.handleDeleteTask();
        }}
      >
        <FaTrashAlt /> {/* Delete Icon */}
      </button>
    </div>
  );
};

export default Action;
