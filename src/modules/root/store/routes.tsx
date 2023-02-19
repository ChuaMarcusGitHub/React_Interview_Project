import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { routesListSelector } from "modules/root/history/routeReducer";
import { setRoute } from "modules/root/history/routeActions";

// Component Imports
import App from "App";
import Sandbox from "modules//feature/Sandbox/component/Sandbox";
import MarketDataDashboard from "modules/feature/MarketList/components/MarketDataDashboard";


/* Routes String */
export enum RoutesList {
  ROOT = "/",
  MARKET_DATA = "/market-data",
  SANDBOX = "/sandbox",
  DEFAULT_DASHBOARD = "*",
}

const RouterMap = [
  { path: RoutesList.ROOT, component: <App /> },
  { path: RoutesList.MARKET_DATA, component: <MarketDataDashboard />},
  { path: RoutesList.SANDBOX, component: <Sandbox /> },
  {
    path: RoutesList.DEFAULT_DASHBOARD,
    component: <Navigate to={RoutesList.ROOT} />,
  },
];

const Routing = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const routeList = useSelector(routesListSelector);

  const knownLocation = Object.keys(RoutesList)
    .map((key) => RoutesList[key as keyof typeof RoutesList])
    .toString();
  useEffect(() => {
    const path = location.pathname;
    const finalPath = knownLocation.includes(path)
      ? path
      : RoutesList.SANDBOX;

    if (
      routeList[routeList.length - 1] &&
      routeList[routeList.length - 1] === finalPath
    )
      return;
    else dispatch(setRoute(finalPath));
  }, [dispatch, knownLocation, location, routeList]);

  
  return (
    <Routes>
      {RouterMap.map((route) => {
        return (
          <Route
            key={`route-${route.path}`}
            path={route.path}
            element={route.component}
          />
        );
      })}
    </Routes>
  );
};

export default Routing;
