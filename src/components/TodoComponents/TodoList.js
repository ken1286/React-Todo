// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import './Todo.css';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {props.todos.map( todo => {
        return (
        <Todo 
          todo={todo}
          key={todo.id}
          toggleTodo={props.toggleTodo}
        />
        );
      })}
    </div>
  )
}

export default TodoList;