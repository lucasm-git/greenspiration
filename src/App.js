import React, { Component } from 'react';
import './App.css';
import { RecipeContainer } from './containers/RecipeContainer';
import './../node_modules/modern-normalize/modern-normalize.css';
import styled from 'styled-components';


export const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends Component {
  render() {
    return (
      <GlobalContainer>
        <RecipeContainer />
      </GlobalContainer>
  );
  }
}

export default App;
