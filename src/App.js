import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);


  function inc() {
    setCount(count + 1)
  }



  return (
    <div className="App">
      {count}
      <button onClick={inc}>increase count</button>
    </div>
  );
}

export default App;
