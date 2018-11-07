import React, { Component } from 'react';
import { Provider } from 'react-redux'; //it yields whenever there is a change in the state 
import store from './store';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
        <div className="App">
        <Provider store={store}> 
          <TodoList />
         </Provider>
        </div>
    );
  }
}

export default App;
