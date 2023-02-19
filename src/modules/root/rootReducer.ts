/*
    File that will combine all the reducers into a single application
*/

import { combineReducers } from "redux";

//import reducers here
import routeReducer from "modules/root/history/routeReducer";
import sandboxReducer from "modules/feature/Sandbox/reducer/SandboxReducer";
import MarketDataReducer from "modules/feature/MarketList/reducer/MarketReducer";

const rootReducer = combineReducers({
    marketData: MarketDataReducer,
    routes: routeReducer,
    sandbox: sandboxReducer,
})

export type AppState = ReturnType<typeof rootReducer>;
export default rootReducer;
