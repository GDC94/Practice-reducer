import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const MAXIMUN_COUNT = 10;

export default function CounterEffect() {
  const [valor, setValor] = useState(1);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const increase = () => {
    if (valor >= MAXIMUN_COUNT) return;
    setValor((prev) => prev + 1);
  };

  useEffect(() => {
    if (valor >= 10) {
      console.log(
        "%cSe llegó al valor maáximo",
        "color: green; background: black;"
      );
    }

    const tl = gsap.timeline();

    tl.to(counterElement.current, {
      y: -10,
      duration: 0.2,
      ease: "ease-out",
    }).to(counterElement.current, { y: 0, duration: 0.5, ease: "bounce-out" });
  }, [valor]);

  return (
    <>
      <h1>Esto es un contador</h1>
      <h2 ref={counterElement}>{valor}</h2>
      <button onClick={increase}> + </button>
    </>
  );
}
