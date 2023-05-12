import { combineReducers, configureStore } from "@reduxjs/toolkit";

import activitiesReducer from "./reducers/activitiesSlice";
import authReducer from "./reducers/authSlice";

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  activities: activitiesReducer,
  auth: authReducer,
});

export default function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
