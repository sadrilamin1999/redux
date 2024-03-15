const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className="w-96 py-4 border">
      <h2 className="text-4xl text-center">{count}</h2>
      <div className="flex gap-5 justify-center">
        <button onClick={onIncrement} className="bg-sky-500 px-4 py-2">
          Increment
        </button>
        <button onClick={onDecrement} className="bg-rose-500 px-4 py-2">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
