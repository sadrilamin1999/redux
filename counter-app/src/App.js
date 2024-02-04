import { useState } from "react";
import Counter from "./components/Counter";
import State from "./components/State";

const initaialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];
const App = () => {
  const [state, setState] = useState(initaialState);

  const incrementHandler = (id) => {
    let updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      } else return { ...counter };
    });
    return setState(updatedState);
  };
  const decrementHandler = (id) => {
    let updatedState = state.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          count: counter.count - 1,
        };
      } else return { ...counter };
    });
    return setState(updatedState);
  };

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };
  return (
    <div className="container w-screen h-screen flex justify-center items-center gap-10">
      {state.map((counter) => (
        <Counter
          key={counter.id}
          id={counter.id}
          count={counter.count}
          onIncrement={incrementHandler}
          onDecrement={decrementHandler}
        />
      ))}

      <State total={totalCount()} />
    </div>
  );
};

export default App;
