import React from 'react';
import './App.css';
import Header from './main/Header.js';
import Aside from './main/Aside.js';
import Content from './main/Content.js';

function App() {
  return (
    <div>
        <Header/>
        <div className="Wrapper">
            <Aside/>
            <Content/>
        </div>
    </div>
  );
}


export default App;

