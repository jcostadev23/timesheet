
import './App.css';
import { Input } from './components /input';
import { InputField } from './components /inputField'
import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState('')

  const handleInput = (newValue)=> {
    setValue(newValue)
  }

  return (
    <div className="App">
      <header className="header">Timesheet</header>
        <Input label='Testing' value={value} onChange={handleInput}/>
        <p>Result: {value}</p>
        <InputField/>
      
    </div>
  );
}

export default App;
