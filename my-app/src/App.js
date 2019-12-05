import React from 'react';
import FirstReactComponent from './components/FirstReactComponent';
import './App.css';
import SecondRC from './components/SecondRC';
import Content from './layout/content';
import Header from './layout/header'

const App=() => {
  return (
    <div className="App">
      <FirstReactComponent></FirstReactComponent>
      <SecondRC firstName="Pile" lastName="Moje"></SecondRC>
      <Header></Header>
      <Content></Content>
      
        
        
    </div>
  );
}

export default App;
