import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RecipeContainer } from './containers/RecipeContainer';
import './../node_modules/modern-normalize/modern-normalize.css';

class App extends Component {
  render() {
    return <RecipeContainer />;
  }
}

export default App;
