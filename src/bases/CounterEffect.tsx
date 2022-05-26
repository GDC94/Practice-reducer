import { useEffect, useState } from "react";


const MAXIMUN_COUNT = 10;

export default function CounterEffect() {
  const [valor, setValor] = useState(1);

  const increase = () => {
    if(valor >= MAXIMUN_COUNT) return;
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
