import "./App.css";
import Counter from "./bases/Counter";
import CounterBy from "./bases/CounterBy";

function App() {
  return (
    <div className="App">
      <Counter initialValue={15} />
      <CounterBy/>
    </div>
  );
}

export default App;
