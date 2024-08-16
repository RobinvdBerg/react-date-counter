import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <button onClick={handleStepDecrease}>-</button>
        <span>Step: {step}</span>
        <button onClick={handleStepIncrease}>+</button>
      </div>
      <div>
        <button onClick={handleCountDecrease}>-</button>
        <span>Count: {count}</span>
        <button onClick={handleCountIncrease}>+</button>
      </div>
      {count === 0 && <div>Today is {new Date().toDateString()}</div>}
      {count > 0 && (
        <span>
          {count} days from now is {getNewDateString()}
        </span>
      )}
      {count < 0 && (
        <div>
          {Math.abs(count)} days ago was {getNewDateString()}
        </div>
      )}
    </div>
  );

  function getNewDateString() {
    const date = new Date();
    date.setDate(new Date().getDate() + count);
    return date.toDateString();
  }

  function handleStepIncrease() {
    setStep(() => step + 1);
  }

  function handleStepDecrease() {
    setStep(() => step - 1);
  }

  function handleCountIncrease() {
    setCount(() => count + step);
  }
  function handleCountDecrease() {
    setCount(() => count - step);
  }
}
