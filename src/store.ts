/** @format */

import { AnyAction, applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { HEROES_FETCHED } from "./actions/heroes";
import { VILLAINS_FETCHED } from "./actions/villains";
import { Hero } from "./models/Hero";
import { Villain } from "./models/Villain";
import { rootSaga, sagaMiddleware } from "./sagas";

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
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
