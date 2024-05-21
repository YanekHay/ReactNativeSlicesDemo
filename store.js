// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice'; // Import your slice
import persistedCounterReducer from './persistedCounterSlice'; // Import your slice
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'persistedCounter',
  storage: AsyncStorage,
};


const persistedCountReducer = persistReducer(persistConfig, persistedCounterReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slice reducer here
    persistedCounter: persistedCountReducer, // Add your slice reducer here
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false,
  }),
});
export const persister = persistStore(store);

