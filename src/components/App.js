import React, { Component } from 'react';
import LanguageStore from './LanguageStore';
import LanguageSelector from './LanguageSelector';
import Form from './Form';
import ColorContext from '../contexts/ColorContext';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider>
            <Form />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
