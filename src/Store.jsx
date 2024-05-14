import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers";

const saveToSessionStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("reduxState", serializedState);
  } catch (e) {
    console.log(e);
  }
};

const loadFromSessionStorage = () => {
  try {
    const serializedState = sessionStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromSessionStorage(), // Load initial state from session storage
});

store.subscribe(() => {
  saveToSessionStorage(store.getState()); // Save state to session storage after every state change
});

export default store;
