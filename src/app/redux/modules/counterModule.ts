import {ICounter, ICounterAction} from "models/counterModel";

/** Action Types */
export const INCREMENT: string = "counter/INCREMENT";
export const DECREMENT: string = "counter/DECREMENT";

/** Counter: Initial State */
const initialState: ICounter = {
  count: 0
};

/** Reducer: CounterReducer */
export function counterReducer(state: ICounter = initialState, action?: ICounterAction): ICounter {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };

    case DECREMENT:
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0)
      };

    default:
      return state;
  }
}

/** Action Creator: Increments the Counter */
export function increment(): ICounterAction {
  return {
    type: INCREMENT
  };
}

/** Action Creator: Decrements the Counter */
export function decrement(): ICounterAction {
  return {
    type: DECREMENT
  };
}
