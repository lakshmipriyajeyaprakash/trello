// store.js
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../Store/reducers.js";

export const store = configureStore({ reducer: appReducer });
