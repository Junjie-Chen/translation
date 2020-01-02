import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
  renderSubmit(language) {
    return language === 'English' ? 'Submit' : 'Voorleggen';
  }

  renderButton() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }

  render() {
    return this.renderButton();
  }
}

export default Button;
