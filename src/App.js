import React from 'react';
import './App.css';
import  {BrowserRouter } from 'react-router-dom';
import MainContainer from './components/structural/mainContainer';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainContainer></MainContainer>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
