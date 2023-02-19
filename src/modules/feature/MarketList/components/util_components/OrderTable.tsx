import styles from "./Orderbook.module.scss";
import {
  ACTION_TYPE,
  IMarketDetail,
  IOrderBookLabels,
} from "modules/feature/MarketList/types/MarketDataTypes";
import { getWidthPercentage } from "modules/feature/MarketList/utils/MarketDataUtils";
import classNames from "classnames/bind";
import componentLabels from "../assets/OrderbookLabels.json";

const cx = classNames.bind({ ...styles });
export const OrderTable = (
  orders: IMarketDetail[],
  maxSize = 0,
  action = ACTION_TYPE.BID
) => {
  const actionId = action.toLocaleLowerCase();
  // Labels normally fetched from CDN and passed in as a prop
  const labels:IOrderBookLabels = JSON.parse(JSON.stringify(componentLabels))

  return (
    <div className={cx("order-container")}>
      <div id={`${actionId}-title`} className={cx("order-title")}>
        {action === ACTION_TYPE.BID ? labels.bids : labels.asks}
      </div>
      <div id={`${actionId}-table-wrapper`} className={cx("table-wrapper")}>
        <table id={`${actionId}-table`} className={cx("table-container")}>
          <thead>
            <tr id={`${actionId}-table-header`} className={cx("table-header")}>
              <th>{labels.price}</th>
              <th>{labels.size}</th>
              <th>{labels.total}</th>
            </tr>
          </thead>
          {orders.map((order, i) => (
            <tr id={`${actionId}-table-data`} className={cx("table-data")}>
              <td>{order.price}</td>
              <td>{order.size}</td>
              <td>
                <div
                  id={`${actionId}-${i}-bar`}
                  className={cx("bar")}
                  style={{
                    width: `${getWidthPercentage(order.size, maxSize)}%`,
                  }}
                />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
