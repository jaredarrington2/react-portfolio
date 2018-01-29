import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Contactform extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      message: ''
    };
  }
  submitForm(e) {
    e.preventDefault();

    this.setState({
      first_name: this.refs.first_name.value,
      last_name: this.refs.last_name.value,
      email: this.refs.email.value,
      message: this.refs.message.value
    });

    this.refs.first_name.value = "";
    this.refs.last_name.value = "";
    this.refs.email.value = "";
    this.refs.message.value = "";

    console.log(this.state.first_name);
  }
  render() {
    return(
    <div className="container">
      <div className="container">
        <div className="row">
          <h1 className="blackh1">Drop a line!</h1>
        </div>
        <div className="row">
          <p>Looking for a wall to bounce some ideas off of? Need someone to convince you that you really ARE NOT CRAZY? Shoot me a message and we can figure out the best way to harness your energy into an amazing product for your user base.</p>
        </div>
      </div>
      <div className="row">
        <form onSubmit={this.submitForm} className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Placeholder" id="first_name" type="text" className="validate"/>
              <label>First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s6">
              <input id="last_name" type="text" className="validate"/>
              <label>Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate"/>
              <label>Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea id="message" className="materialize-textarea"></textarea>
              <label>Message</label>
            </div>
      </div>
      <button className="btn waves-effect waves-light" type="submit" name="action">
        Submit
        <i className="material-icons right"></i>
      </button>
    </form>
  </div>
  </div>
)}

}
