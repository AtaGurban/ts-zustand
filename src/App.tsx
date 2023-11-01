import React from 'react';
import { useStore } from './store/store';

const CounterComponent: React.FC = () => {
  const { counter, increment, decrement } = useStore();

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;