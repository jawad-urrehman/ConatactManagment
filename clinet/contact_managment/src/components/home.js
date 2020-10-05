import React, { Component } from "react";
import axios from 'axios';
import { withRouter ,useHistory , Route} from "react-router-dom";
class Home extends Component {
  constructor(props){
    super(props)

    this.state ={
      contacts :[] 
    }
  this.deleteContact = this.deleteContact.bind(this);
  this.getContacts = this.getContacts.bind(this);
  this.editContact = this.editContact.bind(this);
   this.showContact = this.showContact.bind(this);
  }
  
componentDidMount(){
  this.getContacts()
}
getContacts(){
  axios.get("http://localhost:5000/contacts").then(res=>{
    this.setState({contacts:res.data})
  })
}
deleteContact(id){
  axios.delete("http://localhost:5000/contact/"+id)
  .then(() => this.getContacts());
}
editContact(id){
  this.props.history.push("edit/"+id);
}

showContact(id){
  this.props.history.push("show/"+id);
}
  render() {
    const { contacts } = this.state
    return (
        <div>
        <table className="table table-bordered">
      <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Phone</td>
          <td width="275" align="center">Action</td>
        </tr>
      </thead>
          <tbody>
          {
          contacts.map(con => <tr >
                <td >{con.name}</td>
                <td>{con.email}</td>
                <td>{con.phone}</td>
                <td width="275"> 
                    <a className="btn btn-info" onClick={() => {this.showContact(con._id) }}>Detail</a> 
                    <a className="btn btn-success" onClick={() => {this.editContact(con._id) }}>Edit</a>
                    <a className="btn btn-danger" onClick={() => {this.deleteContact(con._id) }}>Delete</a>
                </td>
             </tr>)
          }
       
          </tbody>
          </table>  
      </div>
          );
  }
}
export default withRouter(Home)