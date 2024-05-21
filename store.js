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

const store = configureStore({
  reducer: {
    counter: counterReducer, // Add your slice reducer here
    persistedCounter: persistedCountReducer, // Add your slice reducer here
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    // TODO :: need to remove all not serializable and immutable objects from state
    serializableCheck: false,
    immutableCheck: false,
  }),
});
const counterPersistor = persistStore(store);

export default {store, counterPersistor};
