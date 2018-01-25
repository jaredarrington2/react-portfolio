import React, { Component } from 'react';
var Link = require("react-router-dom").Link;

//exporting this component to be used somewhere  else
export default class Gallery extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s12 m8">
            <div className="card blue darken-4">
              <div className="card-image">
                <img src="../../public/images/image.JPEG"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <Link to="/profile"><p>Profile Page</p></Link>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m8">
            <div className="card blue darken-4">
              <div className="card-image">
                <img src="./public/images/image.JPEG"></img>
                <span className="card-title">Card Title</span>
              </div>
              <div className="card-content">
                <p>View my portfolio, which showcases several fullstack applications.</p>
              </div>
              <div className="card-action">
                <a href="#">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
};
