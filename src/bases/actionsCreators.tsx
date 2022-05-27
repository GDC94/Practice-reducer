export type counterAction =
  | { type: "increaseByOne"; payload: { value: number } }
  | { type: "increaseByFive"; payload: { value: number } }
  | { type: "reset" };

export const doIncreaseByOne = (value: number): counterAction => ({
  type: "increaseByOne",
  payload: { value },
});

//Esto es lo mismo que arriba pero con distinto formato.

export const doIncreaseByFive = (value: number): counterAction => {
  return {
    type: "increaseByFive",
    payload: { value },
  };
};
