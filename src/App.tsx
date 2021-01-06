import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { AddTodoForm } from "./AddTodoForm";

//  assigning type Todo from types.d.ts to const todos
const initialTodos: Array<Todo> = [
  { text: "Walk the dog", complete: true },
  { text: "Write app", complete: false },
];

const App: React.FC = () => {
  //  setting up state for our app
  const [todos, setTodos] = useState(initialTodos);
  // a new function to toggle todo completed state
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    //  new todos array by mapping todos array
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          //  return a new element that is the spread of the todo item
          ...todo,
          complete: !todo.complete,
        };
      }
      //  if condition is not met, return todo as it was
      return todo;
    });
    setTodos(newTodos);
  };
  //  reusing setTodos, new addTodo handler
  const addTodo: AddTodo = (newTodo) => {
    //  spread existing todos and add our new todo which has to be an object that has text of newTodo and our default complete value is false
    //  also making sure we cant add empty new todos
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  return (
    <React.Fragment>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </React.Fragment>
  );
};

export default App;
