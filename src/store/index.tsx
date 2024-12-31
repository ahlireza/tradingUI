import { configureStore, combineReducers } from "@reduxjs/toolkit"

import CompetitorReducer from "./reducers/competitors"
import ProfileReducer     from "./reducers/profile"
import RatesReducer       from "./reducers/rates"
import RootReducer        from "./reducers/root"

const reducer = combineReducers({
  competitors: CompetitorReducer,
  profile: ProfileReducer,
  rates: RatesReducer,
  root: RootReducer,
})

export const store = configureStore({
  reducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
