import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Contactform from './contact-form'

//exporting this component to be used somewhere  else
export default class Contact extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <Navigation/>
        </div>
        <div className="row">
          <Contactform/>
        </div>
      </div>
    );
  };
};
