import React, { useState, ChangeEvent, FormEvent } from "react";

//  creating interface for AddTodoForm props
interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  //  setting up state to keep track of input
  const [newTodo, setNewTodo] = useState("");
  //  change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  //  submit handler
  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    //  prevents browser from refreshing on submit
    e.preventDefault();
    addTodo(newTodo);
    //  resetting the input text box to an empty string
    setNewTodo("");
  };

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange} />
      <button type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
