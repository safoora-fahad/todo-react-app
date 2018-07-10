import React, { Component } from "react";
import "./App.css";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import FilterTodo from "./FilterTodo";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {data: [], filteredData: [], isFiltered: false}
  }

  recieveTodo = item => {
    this.state.data.push(item);
    this.setState({ data: this.state.data });
  };

  deleteItem = item => {
    let new_data = this.state.data.filter(obj => {
      return obj.id !== item.id;
    });
    this.setState({ data: new_data });
  };

  toggleItem = item => {
    let selectedItem = this.state.data.find(object => object.id === item.id);
    selectedItem.isChecked = !selectedItem.isChecked;
    this.setState({ data: this.state.data });
  };

  editItem = (item, value) => {
    let selectedItem = this.state.data.find(object => object.id === item.id);
    selectedItem.name = value;
    this.setState({ data: this.state.data });
  };

  filterTodos = (filterName) => {
    if(filterName === 'filter-complete') {
      this.setState((preState)=> {
        return {
          filteredData:  this.state.data.filter((obj) => {
          return obj.isChecked;
        })}
      })
      this.setState({isFiltered: true})
    } else if(filterName === 'filter-incomplete'){
      this.setState((preState)=> {
        return {
          filteredData:  this.state.data.filter((obj) => {
          return !obj.isChecked;
        })}
      })
      this.setState({isFiltered: true})
    } else {
      this.setState({isFiltered: false})
    } 
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo App</h1>
        </header>
        <div className="Todo">
        <div className="TodoHeader">
        <InputTodo recieveTodo={this.recieveTodo} />
        <FilterTodo filterTodo={this.filterTodos} />
        </div>
        <TodoList
          todosList={this.state.data}
          filteredTodoList = {this.state.filteredData} 
          isFiltered = {this.state.isFiltered}
          removeItem={this.deleteItem}
          selectItem={this.toggleItem}
          editItem={this.editItem}
        />
        </div>
      </div>
    );
  }
}

export default App;
