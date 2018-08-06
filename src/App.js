import React, { Component } from 'react';
import './App.css';
import { RecipeContainer } from './containers/RecipeContainer';
import './../node_modules/modern-normalize/modern-normalize.css';

class App extends Component {
  render() {
    return <RecipeContainer />;
  }
}

export default App;
