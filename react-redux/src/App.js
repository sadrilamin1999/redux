import { useState } from "react";
import Counter from "./components/Counter";
import TotalCounter from "./components/TotalCounter";
const initialState = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
const App = () => {
  const [counters, setCounters] = useState(initialState);

  const handleIncrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const handleDecrement = (counterId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === counterId) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });

    setCounters(updatedCounters);
  };

  const totalCount = counters.reduce((total, count) => total + count.value, 0);

  return (
    <>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          onIncrement={() => handleIncrement(counter.id)}
          onDecrement={() => handleDecrement(counter.id)}
        />
      ))}
      <TotalCounter totalCount={totalCount} />
    </>
  );
};

export default App;
