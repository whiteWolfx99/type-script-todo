import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './TodoSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
  }

  const persistedReducer = persistReducer(persistConfig, TodoSlice)

export const store = configureStore({
    reducer: {
        TodoSlice: persistedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
});

export const persistor = persistStore(store);