import React from "react";
// import PropTypes from "prop-types";

export default function TodoList({ id, todo, index, removeTodo, markTodo }) {
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  return (
    <li id={id.id} className={todo.status ? "completed" : ""}>
      <div className="form-check">
        <label className="form-check-label">
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => markTodo(id.id)}

            // onChecked={todo.status ? true : false}
          />
          <i className="input-helper"></i>
        </label>
      </div>
      {todo.title}
      <i
        className="remove mdi mdi-close-circle-outline"
        onClick={() => removeTodo(index)}
      ></i>
    </li>
  );
}
