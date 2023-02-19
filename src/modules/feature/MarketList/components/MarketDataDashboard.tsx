import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { clearMarketData, initMarketData, updateMarketData } from "../actions/MarketActions";

// these values usually should come from config file/CDN 
const REFRESH_INTERVAL = 5000;// 5 sec

const MarketDataDashboard: React.FC = () => {
    const dispatch = useDispatch();
    const [intervalID, setIntervalID] = useState<NodeJS.Timer>();


    
    // Load Effect
    useEffect(()=>{
        dispatch(initMarketData());
        let _intervalId: NodeJS.Timer = setInterval(() => dispatch(updateMarketData()), REFRESH_INTERVAL) ;
        setIntervalID(_intervalId);
        
        // unmount
        return () => {
            dispatch(clearMarketData());
            clearInterval(intervalID);
        }
    },[]);
   
    return (
        <div> Testing </div>
    );
}

export default MarketDataDashboard;