import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a Language:&nbsp;&nbsp;
        <i className="flag us" onClick={() => this.context.onLanguageChange('English')}></i>
        <i className="flag nl" onClick={() => this.context.onLanguageChange('Dutch')}></i>
      </div>
    );
  }
}

export default LanguageSelector;
