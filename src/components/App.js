import React, { Component } from 'react';
import LanguageStore from './LanguageStore';
import LanguageSelector from './LanguageSelector';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <Form />
        </LanguageStore>
      </div>
    );
  }
}

export default App;
