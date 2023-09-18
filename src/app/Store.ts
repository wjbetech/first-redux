import { configureStore } from '@reduxjs/toolkit/react';
import counterReducer from "../features/counter/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;