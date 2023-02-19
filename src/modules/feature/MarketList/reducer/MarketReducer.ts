import { ActionType, Reducer } from "typesafe-actions";
import {
  clearMarketData,
  MarketActions,
  setMaxSizes,
  storeMarketData,
} from "../actions/MarketActions";
import { IMarketDataReducerState } from "../types/MarketDataTypes";

const initialState: IMarketDataReducerState = {
  bids: [],
  asks: [],
  maxBidSize: 0,
  maxAskSize: 0,
};

type MarketDataType = typeof storeMarketData | typeof clearMarketData | typeof setMaxSizes;

const MarketDataReducer: Reducer<
  IMarketDataReducerState,
  ActionType<MarketDataType>
> = (state = initialState, action: ActionType<MarketDataType>) => {
  switch (action.type) {
    case MarketActions.STORE_MARKET_DATA:
      return {
        ...state,
        bids: action.payload.bids,
        asks: action.payload.asks,
      };
    case MarketActions.CLEAR_MARKET_DATA:
      return {
        ...state,
        bids: [],
        asks: [],
      };
    case MarketActions.SET_MAX_SIZE:
      return {
        ...state,
        maxAskSize: action.payload.maxAskSize || state.maxAskSize,
        maxBidSize: action.payload.maxBidSize || state.maxBidSize
      }
    default:
      return state;
  }
};

export default MarketDataReducer;
