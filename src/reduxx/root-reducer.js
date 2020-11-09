import { combineReducers } from 'redux';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from "./products/product.reducer";
import userReducer from "./user/user.reducer";
import appReducer from "./appUtils/app.reducer";

const persistConfig= {
  key:'root',
  storage,
  whitlelist:['app']
}
const rootreducer= combineReducers({
  products:productReducer,
  user:userReducer,
  app:appReducer,
});

export default persistReducer(persistConfig,rootreducer)

