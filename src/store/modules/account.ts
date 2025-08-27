import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // 默认使用 localStorage
// 如需使用 sessionStorage，导入：
// import storageSession from 'redux-persist/lib/storage/session'

const initialState = {
  value: 0,
  token: ''
};

const accountSlice = createSlice({
  name: 'account', // 切片名称，用于生成 action type
  initialState,
  reducers: {
    // 同步 reducer 函数
    increment: (state) => {
      // Redux Toolkit 内置 Immer 库，可直接"修改"状态（实际是生成新状态）
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  },
});

// 导出自动生成的 action creators
export const { increment, decrement, incrementByAmount, setToken } = accountSlice.actions;

// 配置持久化选项
const persistConfig = {
  key: 'root', // 存储的键名
  storage, // 使用的存储引擎（localStorage）
  // 可选：指定需要持久化的状态键，不指定则默认持久化所有状态
  // whitelist: ['counter'] 
  // 可选：指定不需要持久化的状态键
  // blacklist: ['otherSlice']
};

// 创建持久化的 reducer
const accountPersistedReducer = persistReducer(persistConfig, accountSlice.reducer);

// 导出切片的 reducer
export default accountPersistedReducer;