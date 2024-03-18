const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="border p-4 w-96 text-center">
      <h2 className="my-2 text-4xl">Count: {count}</h2>
      <button onClick={onIncrement} className="bg-green-500 px-4 py-2">
        Increment
      </button>
      <button onClick={onDecrement} className="ml-5 bg-rose-500 px-4 py-2">
        Decrement
      </button>
    </div>
  );
};

export default Counter;
