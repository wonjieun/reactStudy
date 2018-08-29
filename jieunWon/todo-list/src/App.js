import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  state = {
    value: '테스트',
    todo: []
  };

  updateState = (e) => {
    this.setState({value: e.target.value});
  }

  updateKey = (e) => {
    this.setState({value: e.target.value});
  }

  updateItem = (e) => {
    // console.log(this.state.todo.length);
    // const { value, todo } = this.state;
    this.setState({
      todo: this.state.todo.concat(this.state.value),
      value: ''
      // value: '',
      // todo: todo.concat({
      //   id: this.state.todo.length,
      //   text: value
      // })
    }); 
  }

  componentDidUpdate(){
    //console.log('DidUpdate: '+this.state.todo[this.state.todo.length-1].text);
  }

  render() {

    const todoList = this.state.todo.map(
      (value, id) => (<li key={id}>{value}</li>)
    );

    return (
      <div>
        <Form
          value={this.state.value}
          onChange={this.updateState}
          onCreate={this.updateItem}
          onKeyPress={this.updateKey}
        />
        <ul>
          { todoList }
        </ul>
      </div>
      // <TodoListTemplate form={<Form/>}>
      //    <TodoItemList />
      // </TodoListTemplate>
    );
  }
}

export default App;