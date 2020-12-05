import React, { Component } from "react"; 

class TodoItem extends Component {
  render() {
    const{title,handleDelete,handleEdit}=this.props
    return (
      <div>
        <li className="list-group-item justify-content-between d-flex text-capitalize my-2">
    <h6>{title}</h6>
    <div className="todo=icon">
      <span className="mx-2 text-success" onClick={handleEdit}>
        <i className="fas fa-pen"></i>

      </span>
      <span className="mx-2 text-danger" onClick={handleDelete}>
        <i className="fas fa-trash"></i>

      </span>

    </div>

        </li>
      </div>
   
 
    
    );
  }
}

export default TodoItem;