import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./userSlice";
import theme from "./themeSlice";
import { configureStore } from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    storage,
    // whitelist: ["user"]
};


const rootReducer = combineReducers({
    user,
    theme,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }),
    devTools: true,
});

export default store;