export enum ACTION_TYPE {
  BID = "bid",
  ASK = "ask",
  NULL = "null"
}
export interface IMarketDataReducerState {
  bids?: IMarketDetail[];
  asks?: IMarketDetail[];
  maxBidSize?: number;
  maxAskSize?: number;
}
export interface IMarketDataResponse {
  bids: IMarketDetail[] | undefined;
  asks: IMarketDetail[] | undefined;
}
export interface IMarketDetail {
  price: number;
  size: number;
}
export interface IMaxSizesPayload {
  maxBidSize?: number;
  maxAskSize?: number;
}

export interface IOrderDetailComponentPros {
  detail?: IMarketDetail;
  maxSize?: number;
}
export interface IOrderBookLabels {
  asks: string;
  bids: string;
  price: string;
  size: string;
  total: string;
}
