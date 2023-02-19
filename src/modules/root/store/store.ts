import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "modules/root/rootReducer";
import logger from "redux-logger";
import rootSaga from "modules/root/rootSaga";

//creating the middleware
const sagaMiddleware = createSagaMiddleware();

//Mounting the store
const store = configureStore({ 
    reducer: rootReducer,
    middleware: [logger, sagaMiddleware], 
});

sagaMiddleware.run(rootSaga);


export default store;
