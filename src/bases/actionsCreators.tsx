
export type counterAction =
| { type: "increaseByOne"; payload: { value: number } }
| { type: "increaseByFive"; payload: { value: number } }
| { type: "reset" };


export const doIncreaseByOne = (value: number):counterAction => ({
    type: 'increaseByOne',
    payload: {value}
})
