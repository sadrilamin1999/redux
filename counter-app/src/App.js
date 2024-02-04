import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="container w-screen h-screen flex justify-center items-center gap-10">
      <Counter
        count={count}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
      <Counter
        count={count}
        onIncrement={incrementHandler}
        onDecrement={decrementHandler}
      />
    </div>
  );
};

export default App;
