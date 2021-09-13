import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

let i = 1;
function App() {
  const [todos, setTodos] = useState([
    {
      title: "Berim Kan",
      status: false,
      id: "0",
    },
  ]);

  const addLi = (title) => {
    const newTodos = [...todos, { title, status: false, id: i }];
    setTodos(newTodos);
    i++;
  };

  const markTodo = (id) => {
    const newTodos = [...todos];

    newTodos.filter((value) => {
      if (value.id === id) {
        value.status = !value.status;
      }
    });

    console.log(newTodos);
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">Awesome Todo list</h4>
                <AddTodo addLi={addLi} />
                <div className="list-wrapper">
                  <ul className="d-flex flex-column-reverse todo-list">
                    {todos.map((todo, index) => (
                      <TodoList
                        todo={todo}
                        index={index}
                        id={todo}
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
