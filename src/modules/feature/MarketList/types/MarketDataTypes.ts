export interface IMarketDataReducerState{
    bids?: IMarketDetail[];
    asks?: IMarketDetail[];
    maxBidSize?: number;
    maxAskSize?: number;
}
export interface IMarketDataResponse{
    bids: IMarketDetail[];
    asks: IMarketDetail[];
}
export interface IMarketDetail{
    price: number;
    size: number;
}
export interface IMaxSizesPayload{
    maxBidSize?: number;
    maxAskSize?: number;
}