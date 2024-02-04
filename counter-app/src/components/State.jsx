import React from "react";

const State = ({ total }) => {
  return (
    <div className="container w-96 h-48 bg-rose-200 p-8">
      <h2 className="text-6xl text-center mb-10">{total}</h2>
      <h3 className="text-4xl text-center font-semibold">Total</h3>
    </div>
  );
};

export default State;
