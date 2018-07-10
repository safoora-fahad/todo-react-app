import React from 'react';
import { Checkbox, Button } from 'react-bootstrap';
import './TodoItem.css';


class TodoItem extends React.Component {
    render() {
        return (
            <div>
               <Checkbox className="checkmark" type="checkbox" checked ={this.props.todoItem.isChecked ? "checked" : ""} onChange ={() => this.props.selectItem(this.props.todoItem)}>
               <p className= "label">{this.props.todoItem.name}</p>
               <Button onClick = {() => this.props.removeItem(this.props.todoItem)}>X</Button>
               </Checkbox>
           </div>
        )
    } 
}

export default TodoItem;