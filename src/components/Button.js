import React, { Component } from 'react';

class Button extends Component {
  renderButton() {
    return <button className="ui button primary">Submit</button>;
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
