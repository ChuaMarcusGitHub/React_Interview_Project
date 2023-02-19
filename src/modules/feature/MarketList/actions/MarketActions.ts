import { action } from "typesafe-actions";
import { IMarketDataResponse, IMaxSizesPayload } from "../types/MarketDataTypes";


export enum MarketActions {
    INITIALIZE_MARKET_DATA = "marketActions/INITIALIZE_MARKET_DATA",
    UPDATE_MARKET_DATA = "marketActions/UPDATE_MARKET_DATA",
    STORE_MARKET_DATA = "marketActions/STORE_MARKET_DATA",
    CLEAR_MARKET_DATA = "marketActions/CLEAR_MARKET_DAT",
    SET_MAX_SIZE = "marketActions/SET_MAX_SIZE",
}

export const initMarketData = () => action(MarketActions.INITIALIZE_MARKET_DATA);
export const updateMarketData = () => action(MarketActions.UPDATE_MARKET_DATA);
export const storeMarketData = (payload: IMarketDataResponse) => action(MarketActions.STORE_MARKET_DATA, payload);
export const clearMarketData = () => action(MarketActions.CLEAR_MARKET_DATA);
export const setMaxSizes = (payload: IMaxSizesPayload) => action (MarketActions.SET_MAX_SIZE, payload);
