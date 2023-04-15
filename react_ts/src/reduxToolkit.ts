import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

const initialState = { count: 0, user: "song" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

let store = configureStore({
  reducer: {
    counter1: counterSlice.reducer,
  },
});

//state 타입을 export 해두는건데 나중에 쓸 데가 있음
export type RootState2 = ReturnType<typeof store.getState>;

//수정방법 만든건 export
export let { increment, decrement, incrementByAmount } = counterSlice.actions;
