import { WebServiceURLs } from "modules/root/webservice/WebserviceURLs";
import { fetchURL } from "modules/root/webservice/WebserviceUtils";
import { call, fork, put, takeLeading } from "redux-saga/effects";
import { MarketActions, setMaxSizes, storeMarketData } from "../actions/MarketActions";
import { IMarketDataResponse } from "../types/MarketDataTypes";
import { findMaxSize } from "../utils/MarketDataUtils";

function* fetchMarketData() {
  try {
    const indexAmt = 137;
    const query = `/SOL?marketIndexes[]=${indexAmt}`;
    const response: IMarketDataResponse[] = yield call(fetchURL, WebServiceURLs.FETCH_MARKET_DATA, query);
    return response[0] || {
        asks: [],
        bids: [],
    };

  } catch (e) {
    console.error(`Error at fetchMarketData`);
  }
}

function* initMarketData() {
  try {
    const marketData: IMarketDataResponse = yield call(fetchMarketData);
    if (marketData) {
      if( !marketData?.asks?.length || !marketData?.bids?.length) throw Error(`Market Data bid/ask size error!`);
      
      const {bids, asks} = marketData;
      // Size is not zero
      const maxBidSize = findMaxSize(bids);
      const maxAskSize = findMaxSize(asks);

      yield put(setMaxSizes({maxAskSize, maxBidSize}));
      yield put(storeMarketData(marketData));

    } else throw Error(`Unable to fetch response = ${marketData}`);
  } catch (e) {
    console.error(`Failure in initMarketData:${e}`);
  }
}


/* 
    Code is similiar to the previous with exception of error thrown.
    created this method to ensure each flow has uses it's own methods to prevent
    conditional cluttering as the component develops
 */
function* updateMarketData() {
    try{
      const marketData: IMarketDataResponse = yield call(fetchMarketData);

      if (marketData) {
        if( !marketData?.asks?.length || !marketData?.bids?.length) throw Error(`No New Market Data error`);
        
        const {bids, asks} = marketData;
        // Size is not zero
        const maxBidSize = findMaxSize(bids);
        const maxAskSize = findMaxSize(asks);
  
        yield put(setMaxSizes({maxAskSize, maxBidSize}));
        yield put(storeMarketData(marketData));
  
      } else throw Error(`Unable to fetch response = ${marketData}`);
    }catch(e){
      console.error(`Error Encountered in updateMarketData : ${e}`);
    }
}

function* watchMarketSaga() {
  yield takeLeading(MarketActions.INITIALIZE_MARKET_DATA, initMarketData);
  yield takeLeading(MarketActions.UPDATE_MARKET_DATA, updateMarketData);
}

const marketSaga = fork(watchMarketSaga);
export default marketSaga;
