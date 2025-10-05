// import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slices/counterSlice'
// import authReducer from './slices/Login/authSlice';


// export const createStore = () => { 
//    return configureStore({
//       reducer: {
//         counter:counterReducer,
//           auth: authReducer,
//       },
//     })

// }


'use client';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // uses localStorage
import counterReducer from './slices/counterSlice';
import authReducer from './slices/Login/authSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: authReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'], // persist only auth
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () => {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false, // required by redux-persist
      }),
  });

  const persistor = persistStore(store);

  return { store, persistor };
};
