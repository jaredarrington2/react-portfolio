import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div>
      <nav className="blue darken-4">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo right">Jared A. Arrington</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="sass.html">Product</a></li>
              <li><a href="badges.html">Marketing</a></li>
              <li><a href="collapsible.html">Web Development</a></li>
              <li><a href="/Blog">Blog</a></li>
              <li><a href="/Contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        </div>
      );
      }
    };
