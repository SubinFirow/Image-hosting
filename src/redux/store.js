// import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import sagas from '../sagas';
// import userReducer from '../slices/user.slices';
import imageReducer from './slices/img-slices'
import storage from 'redux-persist/lib/storage';

export default function configureAppStore(preloadedState) {
  const rootReducer = combineReducers({
    image:imageReducer
  });
  const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: [],
    blacklist: [], //to remove reducer to persist
    debug: true, //to get useful logging
  };
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
  });

  let persistor = persistStore(store);
//   sagaMiddleware.run(sagas);
  return {store, persistor};
}