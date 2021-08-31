import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "=" ];
  const [total, setTotal] = useState("");

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
      <div id="buttonbox">
      {buttons.map((button, index) => {
        return (
          <div>
            <Button value={button} clickHandler={clickHandler}/>
            </div>
        )
      })}
      </div>
      <h2>{total}</h2>
    </div>
  );
}
const Button = ({value, clickHandler}) => {
  return (
    <div>
      <button onClick={() => clickHandler(value)}>{value}</button>
    </div>
  )
}


export default App;
