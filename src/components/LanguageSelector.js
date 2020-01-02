import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a Language:&nbsp;&nbsp;
        <i className="flag us"></i>
        <i className="flag nl"></i>
      </div>
    );
  }
}

export default LanguageSelector;
