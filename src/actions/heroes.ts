/** @format */

import { Hero } from "../models/Hero";

export const HEROES_FETCHED = "fetched superHeroes";
export const HEROES_FETCH = "fetch superHeroes";

export const FETCH_HEROES_ACTION = () => ({
  type: HEROES_FETCH,
});
export const FETCHED_HEROES_ACTION = (heroes: Hero[]) => ({
  type: HEROES_FETCHED,
  payload: heroes,
});
