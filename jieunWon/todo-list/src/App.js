import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  state = {
    value: '테스트',
    todo: []
  }

  updateState = (e) => {
    // console.log(e.target);
    this.setState({value: e.target.value});
  }

  updateKey = (e) => {
    // console.log(e.target);
    this.setState({value: e.target.value});
  }

  updateItem = (e) => {
    // console.log(this.state.todo.length);
    const { value, todo } = this.state;
    this.setState({
      value: '',
      todo: todo.concat({
        id: this.state.todo.length,
        text: value
      })
    });
  }

  componentDidUpdate(){
    console.log(this.state.todo[this.state.todo.length-1].text);
  }

  render() {
    return (
      <Form
        value={this.state.value}
        onChange={this.updateState}
        onKeyPress={this.updateKey}
        onCreate={this.updateItem}
      />
      // <TodoListTemplate form={<Form/>}>
      //    <TodoItemList />
      // </TodoListTemplate>
    );
  }
}

export default App;
