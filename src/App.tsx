import "./App.css";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";
import CounterReducerComponent from "./bases/CounterReducer";
import CounterReducer from "./bases/CounterReducer";

function App() {
  return (
    <div className="App">
      <Counter initialValue={15} />
      <CounterBy/>
      <CounterEffect/>
      <CounterReducerComponent/>
    </div>
  );
}

export default App;
