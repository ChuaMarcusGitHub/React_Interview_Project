import { initMarketData } from "modules/feature/MarketList/actions/MarketActions";
import { call, fork, put, takeLatest } from "redux-saga/effects";
import { RoutesList } from "../store/routes";
import { RouteActionTypes } from "./routeActions";


function* initializeFeature(action: any){
    
    try{
        const newRoute = action?.payload ?? "";

    switch(newRoute){
        case RoutesList.MARKET_DATA:
            yield put(initMarketData());
            return;
        default:

            break;
    }
    }catch(e){
        console.error(`Unable to load feature! Payload: ${action?.payload}`);
    }
}
function* watchRouteSaga(){
    yield takeLatest(RouteActionTypes.INITIALIZE_FEATURE, initializeFeature);
}

const routerSaga = fork(watchRouteSaga);
export default routerSaga;