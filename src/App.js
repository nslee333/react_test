import './App.css';
import { useState } from 'react';


const init = [
  {task: "do stuff"}
];




function App() {
  const [t, setT] = useState(init);



  function inc() {
    console.log(typeof t)
    const task = {task: "stuff ++"}

    let arr = [...t];

    for (let i = 0; i < t.length; i++) {
      console.log(t[i])
      console.log(t.length)
      arr.push(t[i]);
    }

    const newArr = arr.push(task);
    
    setT(newArr)
    console.log(t)
    console.log(arr);
  }



  return (
    <div className="App">
      {t.task}
      <button onClick={inc}>increase count</button>
    </div>
  );
}

export default App;
