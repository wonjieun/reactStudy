import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {
  state = {
    list:[
      {
        id: 0,
        text: '안녕',
        delete: false,
        check: false
      },
      {
        id: 1,
        text: '테스트',
        delete: false,
        check: false
      },
      {}
    ]
  }

  render() {

    const { list } = this.state;
    const todolist = list.map(
      list => ( <Todo key={list.id} info={list.text} /> )
    );

    return (
      <div className="todo-list-template">
        <div className="title">
          오늘 할 일
        </div>
        <div className="form-wrapper">
          <div className="form">
            <input type="text" /><button>추가</button>
          </div>
        </div>
        <div className="todos-wrapper">
          
        </div>
    </div>
    );
  }
}

export default App;
