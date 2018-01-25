import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }



render() {
  const jumbotronStyle = {
    paddingBottom: '150px',
    boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)"
  }
  return (
    <div className="container z-depth-5">
      <div className="card-panel blue darken-4" style={jumbotronStyle}>
        <div className="container blue darken-4">
          <h1>Jared Arrington</h1>
          <h2>Web Breaker  Noise Maker  Earth Shaker</h2>
        </div>
       </div>
     </div>
  );
}
}
