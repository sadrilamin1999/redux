import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};
export const dectement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};
