import React from 'react';
import './Todo.css';

function TodoForm(props) {
  return (
    <form>
      <input 
        placeholder="todo..." 
        value={props.value}
        onChange={props.handleChanges}
        name={props.name}
      />
      <button type="submit" onClick={props.addTodo}>Add Todo</button>
      <button type="submit" onClick={props.clearTodos}>Clear Todos</button>
    </form>
  )
}

export default TodoForm;