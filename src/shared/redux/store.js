import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
import createSensitiveStorage from 'redux-persist-sensitive-storage';

import AuthReducer from './reducers/authReducer';
import TokenReducer from './reducers/tokenReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const sensitiveStorage = createSensitiveStorage({
  keychainService: 'sosmedKeyChain',
  sharedPreferencesName: 'sosmedSharedPrefs',
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  timeout: null,
  whitelist: ['user', 'isLoggedIn'],
};

const tokenPersistConfig = {
  key: 'accessToken',
  storage: sensitiveStorage,
  timeout: null,
  whitelist: ['accessToken'],
};

const rootReducer = combineReducers({
  AuthReducer: persistReducer(persistConfig, AuthReducer),
  TokenReducer: persistReducer(tokenPersistConfig, TokenReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
