import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import DarkLight from "./components/DarkLight";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const randomId = () => "_" + Math.random().toString(36).substr(2, 9);

  const addTodo = (title) => {
    const newTodos = [...todos, { title, status: false, id: { randomId } }];
    setTodos(newTodos);
  };

  const markTodo = (id) => {
    const newTodos = [...todos];

    newTodos.filter((value) => {
      if (value.id === id) {
        value.status = !value.status;
      }
    });
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
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
                        index={index}
                        key={index}
                        removeTodo={removeTodo}
                        markTodo={markTodo}
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
