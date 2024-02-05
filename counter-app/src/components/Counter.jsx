import Button from "./Button";
import Count from "./Count";

const Counter = () => {
  return (
    <div className="container w-96 h-48 bg-rose-200 p-8">
      <Count count={0} />
      <div className="flex gap-5">
        <Button label="Increment" />
        <Button label="Decrement" />
      </div>
    </div>
  );
};

export default Counter;
