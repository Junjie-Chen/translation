import React, { Component } from 'react';

class LanguageSelector extends Component {
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
