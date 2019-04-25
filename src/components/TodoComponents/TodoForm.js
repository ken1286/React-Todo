import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <form onSubmit={props.addTodo}>
      <input 
        placeholder="todo..." 
        value={props.value}
        onChange={props.handleChanges}
        name={props.name}
      />
      <button type="submit" onClick={props.addTodo}>Add Todo</button>
      <button type="submit" onClick={props.clearComplete}>Clear Completed Todos</button>
      <button type="submit" onClick={props.clearTodos}>Clear All Todos</button>
    </form>
  )
}

export default TodoForm;