import React, { Component } from 'react';

class Button extends Component {
  renderSubmit(language) {
    return language === 'English' ? 'Submit' : 'Voorleggen';
  }

  renderButton() {
    return <button className="ui button primary">{this.renderSubmit('English')}</button>;
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
