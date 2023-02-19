import styles from "./Orderbook.module.scss";
import React, { useEffect, useMemo, useState } from "react";
import {
    ACTION_TYPE,
  IMarketDataReducerState,
  IMarketDetail,
} from "modules/feature/MarketList/types/MarketDataTypes";
import classNames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { getAllMarketData } from "modules/feature/MarketList/selector/MarketDataSelector";
import {
  initMarketData,
  updateMarketData,
  clearMarketData,
} from "modules/feature/MarketList/actions/MarketActions";
import { OrderTable } from "./OrderTable";

const cx = classNames.bind({ ...styles });

// these values usually should come from config file/CDN
const REFRESH_INTERVAL = 5000; // 5 sec



const OrderBook: React.FC = () => {
  const dispatch = useDispatch();

  const [intervalID, setIntervalID] = useState<NodeJS.Timer>();
  const marketData: IMarketDataReducerState = useSelector(getAllMarketData);
  const { bids, asks, maxBidSize, maxAskSize } = marketData;

  const askOrders: IMarketDetail[] = useMemo(() => asks || [], [asks]);
  const bidOrders: IMarketDetail[] = useMemo(() => bids || [], [bids]);


  // Load Effect
  useEffect(() => {
    dispatch(initMarketData());
    let _intervalId: NodeJS.Timer = setInterval(
      () => dispatch(updateMarketData()),
      REFRESH_INTERVAL
    );
    setIntervalID(_intervalId);

    // unmount
    return () => {
      dispatch(clearMarketData());
      clearInterval(intervalID);
    };
  }, []);

  const renderComponent = () => {
    return (
      <div id="order-book-container" className={cx("orderbook-container")}>
        {/* Render Bid Order Table */}
        {OrderTable(bidOrders, maxBidSize, ACTION_TYPE.BID)}
        {OrderTable(askOrders, maxAskSize, ACTION_TYPE.ASK)}
      </div>
    );
  };
  return renderComponent();
};

export default OrderBook;
