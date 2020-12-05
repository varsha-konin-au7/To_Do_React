import React, { Component } from 'react';
import {v4 as uuid} from "uuid"
import ToDoInput from './component/ToDoInput';
import ToDoList from './component/ToDoList';

class App extends Component {
  state ={
    items:[],
    id:uuid(),
    editItem:false,
    item:""
  }

  handleChange = (e) => {
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }

    const updatedItems = [...this.state.items,newItem]
    this.setState({
      items:updatedItems,
      id :uuid(),
      item : "",
      editItem : false
     
    })
  }
  clearList = () =>{this.setState({
    items:[]
  })}
  handleDelete = id =>{
   const filteredItems = this.state.items.filter(item =>
     item.id !== id)
     this.setState({
       items:filteredItems})
     
  }
  handleEdit = id => {
    const filteredItems = this.state.items.filter(item => item.id !== id)
    const selectedItems = this.state.items.find(item => item.id === id)
    this.setState({
      items:filteredItems,
      item:selectedItems.title,
      id:id,
      editItem:true
    })
    
  }
	render() {
    
		return (
			<div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md mt-5">
            <h3 className="text-capitalize text-center">
              Todo Input
            </h3>
            <ToDoInput item = {this.state.item} handleChange={this.handleChange} handleSubmit = {this.handleSubmit} editItem = {this.state.editItem}/>
            <ToDoList items={this.state.items} clearList={this.clearList}  handleDelete={this.handleDelete} handleEdit={this.handleEdit} /> 
            
          </div>
        </div>
        

      </div>
		);
	}
}

export default App;
