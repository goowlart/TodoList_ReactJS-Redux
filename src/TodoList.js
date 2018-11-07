import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActios from './actions/todos';


class TodoList extends Component {
    constructor(props) {
      super (props);

      console.log(props);
    }

    state = {
    addNewTodoText: '',
    };

    addNewTodo = () => {
       this.props.addTodo( this.state.addNewTodoText);

       this.setState({addNewTodoText: ''});
    };

    render() { //View
        return (
            <div>  
                <ul>
                  { this.props.todos.map(todo => (
                      <li key={todo.id}>{todo.text}</li>
                  )) }
                </ul>   
         
             <input type='text' 
             value={this.state.addNewTodoText}
             onChange={(e) => this.setState({ addNewTodoText: e.target.value })}
             /> 

             <button onClick={this.addNewTodo}>Novo Todo</button>
             </div>
        );
    }
}

const mapStateToProps = state => ({ //Stats
 todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(todoActios, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);