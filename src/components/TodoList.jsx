import React from "react";
import PropTypes from "prop-types";

export default function TodoList({ todo, index, removeTodo, markTodo }) {
  return (
    <li id={todo.id} className={todo.status ? "completed " : ""}>
      <div className="form-check">
        <label className="form-check-label li">
          <input
            defaultChecked={todo.status}
            className="checkbox"
            type="checkbox"
            onClick={() => markTodo(todo.id)}
          />
          {todo.title}
          <i className="input-helper" />
        </label>
      </div>

      <i
        className=" remove mdi mdi-close-circle-outline"
        onClick={() => removeTodo(index)}
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
        id: PropTypes.object.isRequired,
      },
    ])
  ),
  index: PropTypes.number,
  removeTodo: PropTypes.func,
  markTodo: PropTypes.func,
};
