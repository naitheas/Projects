import React from 'react';
import characters from './characters';
import PokeDex from './PokeDex';
import './App.css';

function App() {
  return (
    <div>
      <PokeDex characters={characters}/>
    </div>
  );
}  

export default App;
