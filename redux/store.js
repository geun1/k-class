import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // 앱의 루트 리듀서

const store = configureStore({
  reducer: rootReducer,
});

export default store;