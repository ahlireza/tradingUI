import { configureStore, combineReducers } from "@reduxjs/toolkit"

import ProfileReducer from "./reducers/profile"
import RootReducer from "./reducers/root"

const reducer = combineReducers({
  profile: ProfileReducer,
  root: RootReducer
})

export const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
