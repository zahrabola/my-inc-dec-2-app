import React, { useState, useCallback } from "react";
import './App.css';
const functionsCounter = new Set();

const howManyFunctionCalled = ( incrementOtherCounter) => {
  //functionsCounter.add(increment);
  ///functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
    howManyFunctionCalled(increment);
    console.log("Inc");
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
    howManyFunctionCalled(decrement);
    console.log("Inc");
  }, [counter]);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter - 1);
    howManyFunctionCalled( incrementOtherCounter);
    console.log("Inc");
  }, [otherCounter]);

  return (
    <div className="App">
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>Counter Value:{counter}</h3>
      <h3>Other CounterValue:{otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  );
}

export default App;
/*
import React, { useState, useCallback } from "react";
import "./styles.css";

//// Instructions 
//////Currently when a user clicks on inc and dec the unnecessary functions are called there by performance is getting effected. See if you can fix the uncessary function calls 

const functionsCounter = new Set();

const howManyFunctionCalled = (increment, decrement, incrementOtherCounter) => {
  functionsCounter.add(increment);
  functionsCounter.add(decrement);
  functionsCounter.add(incrementOtherCounter);
  console.log(functionsCounter.size);
};

export default function App() {
  const [counter, setCounter] = useState(0);
  const [otherCounter, setOtherCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter(counter + 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Inc");
  }, [counter]);

  const decrement = useCallback(() => {
    setCounter(counter - 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Inc");
  }, [counter]);

  const incrementOtherCounter = useCallback(() => {
    setOtherCounter(otherCounter - 1);
    howManyFunctionCalled(increment, decrement, incrementOtherCounter);
    console.log("Inc");
  }, [otherCounter]);

  return (
    <div className="App">
      <h1>
        <code>useCallback()</code>
      </h1>
      <h3>Counter Value:{counter}</h3>
      <h3>Other CounterValue:{otherCounter}</h3>
      <h3>{`No of function calls: ${functionsCounter.size}`}</h3>
      <button onClick={decrement}>Decrement -</button>
      <button onClick={increment}>Increment +</button>
      <button onClick={incrementOtherCounter}>IncrementOtherCounter +</button>
    </div>
  );
}
*/