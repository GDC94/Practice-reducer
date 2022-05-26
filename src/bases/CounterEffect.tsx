import { useEffect, useState } from "react";


export default function CounterEffect() {
  const [valor, setValor] = useState(5);

  const increase = () => {
    setValor(prev => prev + 1);
  };

  useEffect(() => {
    if(valor >= 10){
      console.log('%cSe llegó al valor maáximo', 'color: green; background: black;');
      
    }
  }, [valor])
  


 

  return (
    <>
      <h1>Esto es un contador</h1>
      <p>{valor}</p>
      <button onClick={increase}> + </button>
    
    </>
  );
}
