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
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value,
        id: Date.now(),
        completed: false
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
  };

  clearComplete = event => {
    // event.preventDefault();
    // let checkComplete = this.state.todoOnState.filter( todo => {
    //   if(todo.completed === false) {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // })
    // this.setState({ 
    //   checkComplete
    // })
    this.setState({
      todoOnState: this.state.todoOnState.filter( todo => {
           if(todo.completed === false) {
             return true;
           } else {
             return false;
        }
         })
    })
  }

  clearTodos = event => {
    event.preventDefault();
    this.setState({ todoOnState: [] });
  };

  toggleTodo = id => {
    let updateTodos = this.state.todoOnState;
    updateTodos = updateTodos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
        }

      return todo;
    })
    this.setState({
      updateTodos
    })
  }


  render() {

    return (
      <div className="app-wrapper">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
          todos={this.state.todoOnState} 
          toggleTodo={this.toggleTodo}
        />
        <TodoForm 
          value={this.state.todo.task}
          handleChanges={this.handleChanges}
          name="task"
          addTodo={this.addTodo}
          clearComplete={this.clearComplete}
          clearTodos={this.clearTodos}
        />
        {console.log(this.state.todoOnState)}
      </div>
    );
  }
}

export default App;
