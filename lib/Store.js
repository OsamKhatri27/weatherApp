import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from './reducers/Reducers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore,persistReducer } from 'redux-persist';
import historyReducer from './reducers/HistoryReducer';
const persistConfig={
  key:'root',
  storage:AsyncStorage
}


const appReducers = combineReducers({
  apiReducer,
  historyReducer,
});

const persistedReducer=persistReducer(persistConfig,appReducers)

//const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export default()=>{
  let store=createStore(persistedReducer, applyMiddleware(thunk, logger))
  let persistor=persistStore(store);
  return { store,persistor }
}

//export const store = createStore(rootReducer, applyMiddleware(thunk, logger));