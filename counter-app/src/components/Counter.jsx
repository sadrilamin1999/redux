import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const Counter = () => {
  const count = useSelector((state) => state.value);
  const disptch = useDispatch();

  const handleIncrement = (value) => {
    disptch(increment(value));
  };
  const handleDecrement = (value) => {
    disptch(decrement(value));
  };
  return (
    <div className="container w-96 bg-rose-200 p-8 flex flex-col justify-center items-center">
      <h2 className="text-6xl text-center mb-10">{count}</h2>;
      <div className="flex gap-5">
        <button
          onClick={() => handleIncrement(2)}
          className="btn border border-gray-500 px-6 py-2 bg-sky-600 text-sky-50"
        >
          Increment
        </button>
        <button
          onClick={() => handleDecrement(2)}
          className="btn border border-gray-500 px-6 py-2 bg-sky-600 text-sky-50"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
