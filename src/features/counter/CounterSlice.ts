import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
    value: number,
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment(state) {
            state.value++
        },
        decrement(state) {
            state.value--
        },
        reset(state) {
            state.value = 0
        },
        addAmount(state, action: PayloadAction<number>) {
            state.value += action.payload
        }
    }
});

export const { increment, decrement, reset, addAmount } = counterSlice.actions;

export default counterSlice.reducer;
