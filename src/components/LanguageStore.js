import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageStore extends Component {
  render() {
    return (
      <LanguageContext.Provider>
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export default LanguageStore;
