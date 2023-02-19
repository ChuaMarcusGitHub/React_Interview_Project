import { action } from "typesafe-actions";
import { RoutesList } from "../store/routes";

export enum RouteActionTypes {
  SET_ROUTE = "routeActions/SET_ROUTE",
  INITIALIZE_FEATURE = "routerActions/INITIALIZE_FEATURE",
}

export const setRoute = (path: string) =>
  action(RouteActionTypes.SET_ROUTE, path);
export const initFeature = (feature: RoutesList) =>
  action(RouteActionTypes.INITIALIZE_FEATURE, feature);
