import { useReducer, useState } from "react";
/*import { counterAction, doIncreaseByFive, doIncreaseByOne } from "./actionsCreators";*/
//o bien podemos hacer la importacion de la siguiente manera
import * as ActionsCreators from "./actionsCreators";

interface CounterState {
  counter: number;
  changes: number;
  previous: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  changes: 0,
  previous: 0,
};

const counterReducer = (
  state: CounterState,
  action: ActionsCreators.counterAction
): CounterState => {
  switch (action.type) {
    case "reset":
      return {
        counter: 0,
        changes: 0,
        previous: 0,
      };
    case "increaseByOne":
      return {
        ...state,
        counter: state.counter + action.payload.value,
        changes: state.counter + 1,
        previous: state.counter,
      };
    case "increaseByFive":
      return {
        ...state,
        counter: state.counter + action.payload.value,
        changes: state.counter + 1,
        previous: state.counter,
      };
    default:
      return state;
  }
};

export default function CounterReducerComponent() {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const onReset = () => {
    dispatch({ type: "reset" });
  };

  const increaseByOne = (value: number) => {
    dispatch(ActionsCreators.doIncreaseByOne(value));
  };

  const increaseByFive = (value: number) => {
    dispatch(ActionsCreators.doIncreaseByFive(value));
  };

  return (
    <div>
      <h1>Esto es un counter con un reducer</h1>
      <pre>{JSON.stringify(counterState, null, 2)}</pre>
      
      <button onClick={onReset}> Reset </button>
      <button onClick={() => increaseByOne(1)}> + 1 </button>
      <button onClick={() => increaseByFive(5)}> + 5 </button>

    </div>
  );
}
