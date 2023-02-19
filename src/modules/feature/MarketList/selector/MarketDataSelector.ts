import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "modules/root/rootReducer";

const getMarketData = (state: AppState) => state.marketData;

export const getAllMarketData = createSelector(getMarketData, (data)=> data);
export const getOrders = createSelector(getMarketData, (data) => {
  return { asks: data.asks, bids: data.bids };
});
export const getAsks = createSelector(getMarketData, (data) => data.asks);
export const getBids = createSelector(getMarketData, (data) => data.bids);
