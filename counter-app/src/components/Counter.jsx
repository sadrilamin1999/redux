const Counter = ({ id, count, onIncrement, onDecrement }) => {
  return (
    <div className="container w-96 h-48 bg-rose-200 p-8">
      <h2 className="text-6xl text-center mb-10">{count}</h2>
      <div className="flex gap-5">
        <button
          onClick={() => onIncrement(id)}
          className="btn border border-gray-500 px-6 py-2 bg-sky-600 text-sky-50"
        >
          Increment
        </button>
        <button
          onClick={() => onDecrement(id)}
          className="btn border border-gray-500 px-6 py-2 bg-sky-600 text-sky-50"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
