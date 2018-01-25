import React, { Component } from 'react';

//exporting this component to be used somewhere  else
export default class Footer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <div className="text-center">
        <footer>
          <p>Too close for missles; Im swtiching to guns.</p>
        </footer>
      </div>

    );
  }
};
