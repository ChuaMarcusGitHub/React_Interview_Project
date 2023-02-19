import styles from "./MarketDataDashboard.module.scss";
import React from "react"
import classNames from "classnames/bind";
import Orderbook from "./util_components/Orderbook";

const cx = classNames.bind({...styles});

const MarketDataDashboard: React.FC = () => {
       
    return (
        <div id="screen" className={cx("screen")}>
            <div id="title" className={cx("market-data-title")}>Market Data</div>
            <div id="orderbook-fragment" className={cx("orderbook-fragment")}>
                <Orderbook />
            </div>
        </div>
    );
}

export default MarketDataDashboard;