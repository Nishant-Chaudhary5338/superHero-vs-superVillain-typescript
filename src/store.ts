/** @format */

import { AnyAction, createStore } from "redux";
import { HEROES_FETCHED, VILLAINS_FETCHED } from "./Actions/actions";
import { Hero } from "./models/Hero";
import { Villain } from "./models/Villain";

export type State = {
  heroes: Hero[];
  villains: Villain[];
};
const initialState: State = {
  heroes: [],
  villains: [],
};
export const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HEROES_FETCHED: {
      return { ...state, heroes: action.payload };
    }
    case VILLAINS_FETCHED: {
      return { ...state, villains: action.payload };
    }
    default:
      return state;
  }
};

export const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
