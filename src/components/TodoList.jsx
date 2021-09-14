import React from "react";

export default function TodoList({ todo, index, removeTodo, markTodo }) {
  return (
    <li id={todo.id} className={todo.status ? "completed " : ""}>
      <div className="form-check">
        <label className="form-check-label li">
          <input
            checked={todo.status}
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
