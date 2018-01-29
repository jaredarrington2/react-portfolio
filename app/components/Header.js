import React, { Component } from 'react';
// import Headshot from '../public/images';

//exporting this component to be used somewhere  else
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }



render() {
  const jumbotronStyle = {
    paddingBottom: '5%',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
    // height: '550px'
  }
  return (
    <div className="row">
        <div className="container col s5 z-depth-5 offset-s1">
          <div className="card-panel blue darken-4" style={jumbotronStyle}>
            <div className="container blue darken-4">
              <h1>Jared Arrington</h1>
              <h2>Web Breaker  Noise Maker  Earth Shaker</h2>
            </div>
           </div>
         </div>
         <div className="container col s5 z-depth-5 offset-s1">
          <div className="card-panel blue darken-4" style={jumbotronStyle}>
           <img src="./images/Headshot.jpeg"/>
          </div>
         </div>
        </div>
        
  );
}
}
