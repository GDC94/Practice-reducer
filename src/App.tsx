import "./App.css";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";
import CounterEffect from "./bases/CounterEffect";

function App() {
  return (
    <div className="App">
      <Counter initialValue={15} />
      <CounterBy/>
      <CounterEffect/>
    </div>
  );
}

export default App;
