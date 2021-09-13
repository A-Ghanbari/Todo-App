import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function AddTodo({ addLi }) {
  const [newTodo, setNewTodo] = useState("");

  return (
    <div className="add-items d-flex">
      <input
        value={newTodo}
        // name="firstName"
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        type="text"
        className="form-control newTodo-list-input"
        placeholder="What do you need to do today?"
      />
      <button
        className="add btn btn-primary font-weight-bold newTodo-list-add-btn"
        onClick={() => {
          if (!newTodo) return;
          addLi(newTodo);
          setNewTodo("");
        }}
      >
        Add
      </button>
    </div>
  );
}
