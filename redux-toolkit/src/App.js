import Counter from "./components/Counter";
import TotalCounter from "./components/TotalCounter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/counterSlice";

const App = () => {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch();

  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
  };

  const handleDecrement = (counterId) => {
    dispatch(decrement(counterId));
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
