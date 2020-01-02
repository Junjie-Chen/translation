import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageSelector />
        <Form />
      </div>
    );
  }
}

export default App;
