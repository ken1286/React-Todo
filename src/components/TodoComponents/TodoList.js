// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

TodoList = props => {
  return (
    <div>
      {props.todo.map( todo => {
        <Todo 
          todo={todo}
        />
      })}
    </div>
  )
}

export default TodoList;