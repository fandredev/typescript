import React from 'react'
import Contador from './components/Contador'
import './App.css'
import './components/Contador.css'
function App() {
  return (
    <div className="App">
        <Contador />
        <Contador valorInicial={12} />
    </div>
  );
}

export default App;
