import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);



  return (
    <div className="App">
      {count}
      <button onClick={() => setCount(count + 1)}>increase count</button>
    </div>
  );
}

export default App;
