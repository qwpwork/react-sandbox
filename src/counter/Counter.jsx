import React, { useState } from 'react';
import './counter.scss';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(prevState => prevState - 1);
  }

  const increment = () => {
    setCounter(prevState => prevState + 1);
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="counter">
      <p className="counter__number">{counter}</p>
      <button className="counter__btn" onClick={decrement}>-</button>
      <button className="counter__btn" onClick={increment}>+</button>
      <button className="counter__btn" onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter;