import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Gallery from './Gallery';

export default class Home extends Component {
  render() {
  	/*
		Html within this render method every time
  	*/
    return (

      <div className="container">
      <Header/>
        <div className="container">
          <h1>Jared Arrington</h1>
        </div>
        <div className="container">
          <div className="row">
            <Gallery/>
          </div>
        </div>
        {// <div>
        //   <Footer/>
        // </div>
      }
      </div>
    );
  }
};
