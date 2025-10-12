// "use client"
// import React, { useRef } from 'react'
// import { Provider } from 'react-redux'
// import { createStore } from './store'

// const StoreProvider = ({children}) => {
//     const storeRef = useRef(undefined)
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = createStore()
//   }
//   return (
//     <Provider store={storeRef.current}>
//       {children}
//     </Provider>
//   )
// }

// export default StoreProvider



'use client';

import React, { useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { createStore } from './store';
// import Loading from '@/components/Loading/Loadingk'; // or a fallback spinner

const StoreProvider = ({ children }) => {
  const storeRef = useRef(null);
  const persistorRef = useRef(null);

  if (!storeRef.current || !persistorRef.current) {
    const { store, persistor } = createStore();
    storeRef.current = store;
    persistorRef.current = persistor;
  }

  return (
    <Provider store={storeRef.current}>
      <PersistGate  persistor={persistorRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
