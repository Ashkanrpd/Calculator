import React, { useState } from "react";
import "./App.css";

function App() {
  const [result, setResult] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [action, setAction] = useState("");
  const [history, setHistory] = useState([]);

  function clear() {
    setResult("");
    setSecondNum("");
    setAction("");
    setHistory([]);
  }

  function assign(num) {
    if (!action) {
      setResult(result + "" + num);
    } else setSecondNum(secondNum + "" + num);
  }

  function doMath() {
    if (!secondNum) return;
    setHistory([...history, result]);
    switch (action) {
      case "+":
        setResult(Number(result) + Number(secondNum));
        break;
      case "-":
        setResult(Number(result) - Number(secondNum));
        break;
      case "*":
        setResult(Number(result) * Number(secondNum));
        break;
      case "/":
        setResult(Number(result) / Number(secondNum));
        break;
    }
    setSecondNum("");
    setHistory([secondNum, action, result, "---", ...history]);
  }

  return (
    <div className="App">
      <div className="keysAndResult">
        <p className="result">{secondNum ? secondNum : result}</p>
        <div className="keys">
          <button onClick={() => assign(1)}>1</button>
          <button onClick={() => assign(2)}>2</button>
          <button onClick={() => assign(3)}>3</button>
          <button onClick={() => setAction("+")}>+</button>
        </div>
        <div className="keys">
          <button onClick={() => assign(4)}>4</button>
          <button onClick={() => assign(5)}>5</button>
          <button onClick={() => assign(6)}>6</button>
          <button onClick={() => setAction("-")}>-</button>
        </div>
        <div className="keys">
          <button onClick={() => assign(7)}>7</button>
          <button onClick={() => assign(8)}>8</button>
          <button onClick={() => assign(9)}>9</button>
          <button onClick={() => setAction("*")}>*</button>
        </div>
        <div className="keys">
          <button onClick={() => assign(".")}>.</button>
          <button onClick={() => assign(0)}>0</button>
          <button onClick={() => setAction("/")}>/</button>
          <button onClick={() => doMath()}>=</button>
        </div>
        <div>
          <button className="clear" onClick={() => clear()}>
            Clear
          </button>
        </div>
      </div>
      <div className="history">
        <div>History</div>
        {history.map((x) => (
          <div>{x}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
