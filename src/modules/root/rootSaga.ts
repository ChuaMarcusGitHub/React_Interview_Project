/*
    File that will combine all the sagas into a single application
*/
import { all } from "redux-saga/effects";

//Importing the saga here
import sandboxSaga from "modules/feature/Sandbox/saga/SandboxSaga";
import marketSaga from "modules/feature/MarketList/saga/MarketSaga";
import routerSaga from "./history/routeSaga";

export default function* rootSaga() {
  yield all([marketSaga, routerSaga, sandboxSaga]);
}
