import "./styles.css";
import { useState } from "react";

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
  function HandlePrevStep() {
    step >= 2 && setStep((s) => s - 1);
  }
  function HandleReset() {
    setStep(1);
    setCount(0);
  }
  return (
    <>
      <div className="line">
        <button onClick={HandlePrevStep}>-</button>
        <p> Step: {step} </p>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="line">
        <button onClick={() => setCount((c) => c - 1)}>-</button>
        <p> Count: {count} </p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>Today is x </p>
      {(step >= 2 || count !== 0) && (
        <button onClick={HandleReset}>Reset</button>
      )}
    </>
  );
}
