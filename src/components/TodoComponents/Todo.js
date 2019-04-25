import React from 'react';
import './Todo.css';


function Todo(props) {
  let classTodo = "todo";
  if(props.todo.completed) {
    classTodo += "-complete"
  }

  function updateTodo() {
    props.toggleTodo(props.todo.id)
  }

  return (
    <div className={classTodo} onClick={updateTodo}>
      {props.todo.task}
    </div>
     );
}

export default Todo;