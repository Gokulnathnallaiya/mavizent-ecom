import { combineReducers } from 'redux';
import {persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productReducer from "./products/product.reducer";


const persistConfig= {
  key:'root',
  storage,
  whitlelist:[]
}
const rootreducer= combineReducers({
  products:productReducer,
});

export default persistReducer(persistConfig,rootreducer)

