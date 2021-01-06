import React from "react";
import "./TodoListItem.css";

//  assigning type Todo from types.d.ts to TodoListItemProps interface
interface TodoListItemProps {
  todo: Todo;
  //  we now expect to get a toggleTodo prop
  toggleTodo: ToggleTodo;
}

//  passing in the props
//  setting up text decorations for items depending on complete status
export const TodoListItem: React.FC<TodoListItemProps> = ({
  //  destructure and define props
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          //  add an onChange handler for toggleTodos function
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
    </li>
  );
};
