import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(false);
  let timer = useRef();

  useEffect(() => {
    if (pause) {
      clearInterval(timer.current);
      return;
    }
    timer.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(timer.current);
  }, [pause]);

  function handleStart() {
    setPause((p) => !p);
  }

  function resetTimer() {
    setPause(true);
    setCount(0);
  }
  return (
    <>
      <div>{count}</div>
      <div>
        <button onClick={handleStart}>{pause ? "Start" : "Pause"}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </>
  );
}

export default App;
