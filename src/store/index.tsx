import { configureStore, combineReducers }  from "@reduxjs/toolkit"
import { persistStore, persistReducer }     from 'redux-persist'
import storage                              from 'redux-persist/lib/storage'

import CompetitorReducer from "./reducers/competitors"
import ProfileReducer     from "./reducers/profile"
import RatesReducer       from "./reducers/rates"
import RootReducer        from "./reducers/root"

//------------------------------
const persistConfig = {
  key: 'root',
  storage
}

const reducer = combineReducers({
  competitors: CompetitorReducer,
  profile: ProfileReducer,
  rates: RatesReducer,
  root: RootReducer,
})

//------------------------------
export const store = configureStore({
  reducer: persistReducer(persistConfig, reducer)
})

//------------------------------
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
