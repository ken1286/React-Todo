import React from 'react';
// import Todo from './components/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todoOnState: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    };
  }

  handleChanges = event => {
    console.log(event.target.value);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value,
        id: Date.now(),
        completed: false
      }
    })
    console.log(this.state.todo.id)
  }

  addTodo = event => {
    event.preventDefault();
    this.setState({
      todoOnState: [...this.state.todoOnState, this.state.todo],
      todo: {
        task: '',
        id: '',
        completed: ''
      }
    })
    console.log(event.target.id)
  };

  clearTodos = event => {
    event.preventDefault();
    this.setState({ todoOnState: [] });
  };


  render() {

    return (
      <div className="app-wrapper">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoOnState} />
        <TodoForm 
          value={this.state.todo.task}
          handleChanges={this.handleChanges}
          name="task"
          addTodo={this.addTodo}
          clearTodos={this.clearTodos}
        />
        {console.log(this.state.todoOnState)}
      </div>
    );
  }
}

export default App;
