import { Provider } from "react-redux";
import Counter from "./components/Counter";
import State from "./components/State";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="container w-screen h-screen flex justify-center items-center gap-10">
        <Counter />
        <State />
      </div>
    </Provider>
  );
};

export default App;
