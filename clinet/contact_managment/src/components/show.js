import React, { Component } from "react";
import { withRouter  } from "react-router-dom";

import axios from 'axios';

class Show extends Component {
  constructor(props){
    super(props);

this.OnNameChange = this.OnNameChange.bind(this);
this.home = this.home.bind(this);
this.OnEmailChange = this.OnEmailChange.bind(this);
this.OnPhoneChange = this.OnPhoneChange.bind(this);

    

this.state ={
        name :"",
        phone :"",
       email:""
      
    }
    this.id = props.match.params.id;    
  }

 home(){
    this.props.history.push("/"); }

  OnNameChange(e){
    this.setState({
        name:e.target.value 
    });
}
OnPhoneChange(e){
    this.setState({
        phone:e.target.value 
    });
}
OnEmailChange(e){
  this.setState({
      email:e.target.value 
  });
}



getContact(id){
    
    axios.get("http://localhost:5000/contact/"+id).
    then(res=>{
    this.setState({name:res.data.name,
    email:res.data.email,
     phone:res.data.phone})

  })
}

componentDidMount(){
    this.getContact(this.id)
  }

render() {
    const { con } = this.state
    return (
      <div>


        <div className="panel panel-default">
    <div className="panel-heading">Employee Entry Form : You can add an employee's detail information into this EMS Apps.</div>
    <div className="panel-body">
    <form className="form-horizontal" >
    <div className="form-group">
      <label  className="col-sm-2 control-label">Employee's Full Name : </label>
      <div className="col-sm-9">
      <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.OnNameChange} disabled />
      </div>
    </div>
    <div className="form-group">
      <label  className="col-sm-2 control-label">Phone : </label>
      <div className="col-sm-9">
      <input type="text" className="form-control" name="phone" value={this.state.phone} onChange={this.OnPhoneChange} disabled />
      </div>
    </div>
    <div className="form-group">
      <label  className="col-sm-2 control-label">Department Name : </label>
      <div className="col-sm-9">
      <input type="text" className="form-control" name="department" value={this.state.email} onChange={this.OnEmailChange} disabled />
      </div>
    </div>
     
  
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-8">
         <a className="btn btn-info" onClick={() => {this.home() }}>Cancel</a>
      </div>
     
    </div>
  </form>
  
    </div>
  </div>


      </div>
    );
  }
}
export default withRouter(Show)