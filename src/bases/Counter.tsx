import { useState } from "react";


interface Props {
    initialValue? : number
}

export default function Counter( {initialValue = 0 } : Props) {
  const [valor, setValor] = useState(initialValue);

  const increase = () => {
    setValor((valor) => valor + 1);
  };
  const decrease = () => {
    if (valor <= 0) return;
    setValor((valor) => valor - 1);
  };

  return (
    <>
      <h1>Esto es un contador</h1>
      <p>{valor}</p>
      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>
    </>
  );
}
