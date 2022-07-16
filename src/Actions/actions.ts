/** @format */

import { Hero } from "../models/Hero";
import { Villain } from "../models/Villain";

export const HEROES_FETCHED = "fetch superHeroes";
export const VILLAINS_FETCHED = "fetch superVillains";

export const FETCHED_HEROES_ACTION = (heroes: Hero[]) => ({
  type: HEROES_FETCHED,
  payload: heroes,
});
export const FETCHED_VILLAINS_ACTION = (villains: Villain[]) => ({
  type: VILLAINS_FETCHED,
  payload: villains,
});
