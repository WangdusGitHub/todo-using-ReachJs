import { useState } from "react";

export default function ToDoInput(props) {
    const { todoValue, setTodoValue, handleAddTodos } = props;

    return (
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Enter todos..."
        />
        <button 
        onClick={() => {handleAddTodos(todoValue)
            setTodoValue('')
        }}
        >Add</button>
      </header>
    );
}