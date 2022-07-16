/** @format */

import { State } from "./store";

export const herotypesSelector = (s: State) => s.heroes;
export const villaintypeSelector = (s: State) => s.villains;
