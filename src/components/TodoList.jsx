import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ todo, removeTodo, markTodo, editTodo }) {
  return (
    <li id={todo.id} className={todo.status ? "completed " : ""}>
      <div className="form-check">
        <label id={todo.id} className="form-check-label li">
          <input
            checked={todo.status ? "checked" : null}
            className="checkbox"
            type="checkbox"
            onClick={() => markTodo(todo.id)}
          />
          <i className="input-helper" />
          {todo.title}
        </label>
      </div>

      <i
        className=" remove mdi mdi-close-circle-outline"
        onClick={() => removeTodo(todo.id)}
      />
      <i
        className="ed edit mdi-close-circle-outline"
        onClick={() => editTodo(todo.id)}
      />
    </li>
  );
}
TodoList.prototype = {
  todo: PropTypes.arrayOf(
    PropTypes.shape([
      {
        title: PropTypes.string.isRequired,
        status: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      },
    ])
  ),

  removeTodo: PropTypes.func,
  markTodo: PropTypes.func,
  editTodo: PropTypes.func,
};
