import { useState } from "react";

interface Props {
  initialValue?: number;
}

interface CounterState {
  counter: number;
  clicks: number;
}

export default function CounterBy({ initialValue = 5 }: Props) {
  const [valor, setValor] = useState<CounterState>({
    counter: initialValue,
    clicks: 0,
  });

  const increase = (value: number) => {
    setValor(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Esto es un contador</h1>
      <p>{valor.counter}</p>
      <p>Clicks: {valor.clicks}</p>
      <button onClick={() => increase(1)}> + 1 </button>
      <button onClick={() => increase(5)}> + 5</button>
    </>
  );
}
