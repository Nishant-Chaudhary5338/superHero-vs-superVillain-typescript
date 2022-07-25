/** @format */

import { Villain } from "../models/Villain";

export const VILLAINS_FETCHED = "fetched superVillains";
export const VILLAINS_FETCH = "fetch superVillains";

export const FETCH_VILLAINS_ACTION = () => ({
  type: VILLAINS_FETCH,
});
export const FETCHED_VILLAINS_ACTION = (villains: Villain[]) => ({
  type: VILLAINS_FETCHED,
  payload: villains,
});
