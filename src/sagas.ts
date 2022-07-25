/** @format */

import createSagaMiddleware from "@redux-saga/core";
import { FETCHED_VILLAINS_ACTION, VILLAINS_FETCH } from "./actions/villains";
import { takeLeading, call, put } from "@redux-saga/core/effects";
import { getHero, getVillain } from "./api";
import { FETCHED_HEROES_ACTION, HEROES_FETCH } from "./actions/heroes";

export const sagaMiddleware = createSagaMiddleware();

export function* fetchVillainSaga(): Generator<any, any, any> {
  const data = yield call(getVillain);
  const action = yield call(FETCHED_VILLAINS_ACTION, data);
  yield put(action);
}
export function* fetchHeroSaga(): Generator<any, any, any> {
  const data = yield call(getHero);
  const action = yield call(FETCHED_HEROES_ACTION, data);
  yield put(action);
}
export function* rootSaga() {
  yield takeLeading(VILLAINS_FETCH, fetchVillainSaga);
  yield takeLeading(HEROES_FETCH, fetchHeroSaga);
}
