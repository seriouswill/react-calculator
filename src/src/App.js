import { useState } from 'react';
import { evaluate } from 'mathjs';
import React from 'react';
import './App.css';

function App() {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "=" ];
  const [total, setTotal] = useState("");
  React.useEffect(() => {
    window.addEventListener('keydown', (event, value) => {
      if (event.key === value) {
        setTotal(total)
      }
    });
  }, []);
  const [state, setState] = useState("");

  const keyHandler = (e) => {
    setState(e.key)
  }

  const clickHandler = (value) => {
    if (value === "=") {
      setTotal(evaluate(total))
    } else if (value === "c") {
      setTotal("")
    } else {
      setTotal(total + value)
    }
  }
  return (
    <div className="App">
      <h1>calculator v3</h1>
      <h2>{total}</h2>
      <div id="buttonbox">
      {buttons.map((button, index) => {
        return (
          <div>
            <Button value={button} clickHandler={clickHandler} keyHandler={keyHandler}/>
            </div>
        )
      })}
      </div>
      
    </div>
  );
}
const Button = ({value, clickHandler, keyHandler}) => {
  return (
    <div>
      <button onClick={() => clickHandler(value)} onKeyPress={(e)=>keyHandler(e)}>{value}</button>
    </div>
  )
}


export default App;
