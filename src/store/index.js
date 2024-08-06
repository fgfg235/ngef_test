import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import storage from 'redux-persist/lib/storage';
import {
    FLUSH, PAUSE, PERSIST, PURGE, REGISTER,
    REHYDRATE, persistReducer, persistStore
} from 'redux-persist';

//서로 다른 리듀싱 함수들을 값으로 가지는 객체를 받아서 createStore에 넘길 수 있는 하나의 라듀싱 함수로 변환
export const rootReducer = combineReducers({
  user: userReducer,
})

const persistConfig = {
  key: 'root', //키 이름
  storage //localStorage에 저장
  //whitelist : [], //여러 reducer 중에 해당 reducer만 localStorage에 저장
  //blacklist : [], //그것만 제외
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(
      {
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
          }
      }
  )
})

export const persistor = persistStore(store);