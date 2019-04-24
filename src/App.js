import React from 'react';
// import Todo from './components/Todo';
import TodoForm from './components/TodoComponents/TodoForm';

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
    }
  }

  handleChanges = event => {
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    })
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
  }


  render() {

    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          value={this.state.todo.task}
          handleChanges={this.handleChanges}
          name="todoname"
        />
      </div>
    );
  }
}

export default App;
