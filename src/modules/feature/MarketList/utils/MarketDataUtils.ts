import { IMarketDetail } from "../types/MarketDataTypes";

export const findMaxSize = (list: IMarketDetail[]): number => {
  let highestSize = 0;
  list.forEach((detail) => (highestSize = Math.max(highestSize, detail.size)));
  return highestSize;
};
export const getWidthPercentage = (
  orderSize: number,
  maxSize: number
): number => {
  return (orderSize / maxSize) * 100;
};
