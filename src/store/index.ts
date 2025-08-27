import { configureStore } from '@reduxjs/toolkit';
import accountPersistedReducer from './modules/account';
import logger from 'redux-logger'
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: {
    // 注册切片 reducer，对应状态树中的 key
    account: accountPersistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: {
        // 忽略 redux-persist 的 action
        ignoredActions: [
          'persist/PERSIST',    // 触发错误的 action
          'persist/REHYDRATE',  // 状态恢复的 action
          'persist/REGISTER',   // 注册持久化的 action
        ],
        // 可选：如果还有其他非序列化的状态路径，也可以忽略
        // ignoredPaths: ['some.nonSerializable.path'],
      },
    }).concat(logger),
});

// 创建持久化存储对象
export const persistor = persistStore(store);