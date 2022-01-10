import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import DarkLight from "./components/DarkLight";

// function reducer(state, { type, payload }) {
//   switch (type) {
//     case "inc":
//       return state + 1;
//     case "min":
//       return state - 1;
//     case "set":
//       return payload;
//     case "res":
//       return 0;
//     default:
//       return state;
//   }
// }

function App() {
  // const [state, dispatch] = useReducer(reducer, 0);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // const randomId = () => "_" + Math.random().toString(36).substr(2, 9);

  const addTodo = (title) => {
    const newTodos = [
      ...todos,
      { title, status: false, id: Math.random() * 1258745632 },
    ];
    setTodos(newTodos);
  };

  const markTodo = (id) => {
    const newTodos = [...todos];

    newTodos.filter((value) => {
      if (value.id === id) {
        return (value.status = !value.status);
      }
    });
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const temp = newTodos.filter((value) => {
      return value.id !== id;
    });
    setTodos(temp);
  };

  const editTodo = (id) => {
    const newTodos = [...todos];
    newTodos.filter((value) => {
      if (value.id === id) {
        const title = prompt("Enter new Title", "");
        value.title = title;
      }
    });
    setTodos(newTodos);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <DarkLight />
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-10">
            <div className="card px-3">
              <div className="card-body">
                <h2 className="card-title">Awesome Todo list</h2>
                <AddTodo addTodo={addTodo} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {todos.map((todo, index) => (
                      <TodoList
                        todo={todo}
                        key={todo.id}
                        removeTodo={removeTodo}
                        markTodo={markTodo}
                        editeTodo={editTodo}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
