import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todoList = [
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
  ];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      task: todoList, 
      inputValue: ''     
    }
  }
//this is the callback function for the input text
  onInputChange = e => {
    e.preventDefault();
    
    const newList = {
      task: this.state.task,
      id: this.state.id,
      completed: this.state.completed
    };
    this.setState({      
      inputValue: e.target.value
      
    })
  }
//this is the callback function for the form submission
  handleChanges = event => {
    event.preventDefault();
    const newObj = {
      task: this.state.inputValue,
      id: 1528817084360,
      completed: false
    }
    this.setState({
      task: [...this.state.task, newObj],
      inputValue: '',
    });
  };
//step1: declare callback function
//2: pass it to components prop, <component prop = {something} />
//3: now use the prop in component
  render() {
    console.log(this.state.name);
    return (
      <div>
        <h1>Task List</h1>
        <div className = 'todo-list'>
          <TodoList List={this.state.task} />

          <TodoForm onInputChange={this.onInputChange} handleChanges={this.handleChanges} identity={this.state.inputValue}/>
        </div>

        
      </div>
    );
  }
}

export default App;
