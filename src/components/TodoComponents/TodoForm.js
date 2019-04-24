import React from 'react';
import './Todo.css';
import Todo from './Todo';

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
    </form>
  )
}

export default TodoForm;