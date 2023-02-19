import { IMarketDetail } from "../types/MarketDataTypes";

export const findMaxSize = (list:IMarketDetail[]) : number => {
    let highestSize = 0;
    list.forEach((detail)=> highestSize = Math.max(highestSize, detail.size));
    return highestSize
}