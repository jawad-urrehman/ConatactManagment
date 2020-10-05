import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import axios from 'axios';

class Add extends Component {
  constructor(props) {
    super(props);

    this.OnNameChange = this.OnNameChange.bind(this);
    this.home = this.home.bind(this);
    this.OnEmailChange = this.OnEmailChange.bind(this);
    this.OnPhoneChange = this.OnPhoneChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      phone: '',
      email: ''
    }
  }



  OnNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }
  OnPhoneChange(e) {
    this.setState({
      phone: e.target.value
    });
  }
  OnEmailChange(e) {
    this.setState({
      email: e.target.value
    });
  }

  home() {
    this.props.history.push("/");
  }


  onSubmit(e) {
    e.preventDefault();

    const con = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone

    }
    axios.post('http://localhost:5000/contact', con)
      .then(() => this.props.history.push('/'));


  }

  render() {
    return (
      <div>
        <div className="panel panel-default">
          <div className="panel-heading">Contact Entry Form : You can add contact detail information into this CMS Apps.</div>
          <div className="panel-body">
            <form className="form-horizontal" onSubmit={this.onSubmit} >
              <div className="form-group">
                <label className="col-sm-2 control-label">Name : </label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.OnNameChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Phone : </label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="position" value={this.state.phone} onChange={this.OnPhoneChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-2 control-label">Email : </label>
                <div className="col-sm-9">
                  <input type="text" className="form-control" name="department" value={this.state.email} onChange={this.OnEmailChange} />
                </div>
              </div>

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-8">
                  <button type="submit" className="btn btn-success" >Add</button>
                  <a className="btn btn-info" onClick={() => { this.home() }}>Cancel</a>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Add)