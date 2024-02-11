import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import chatSlice from "./slices/chatSlice";
const store = configureStore({
    reducer: {
        app: appSlice,
        chat: chatSlice
    }
});

export default store;