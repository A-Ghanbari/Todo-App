import React from "react";
// import PropTypes from "prop-types";

export default function TodoList({ id, todo, index, removeTodo, markTodo }) {
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = () => {
  //   setChecked(!checked);
  // };
  return (
    <li id={todo.id} className={todo.status ? "completed li" : "li"}>
      <div className="form-check">
        <label className="form-check-label li">
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => markTodo(todo.id)}

            // onChecked={todo.status ? true : false}
          />
          {todo.title}
          <i className="input-helper"></i>
        </label>
      </div>

      <i
        className=" remove mdi mdi-close-circle-outline"
        onClick={() => removeTodo(index)}
      ></i>
    </li>
  );
}
