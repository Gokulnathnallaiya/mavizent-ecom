import { appActionTypes } from './app.types';

const INITIAL_STATE = {
  Loading: false
};

const appReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case appActionTypes.SET_LOADING:
      return {
        ...state,
        Loading: action.payload
      };
    default:
      return state;
  }
};

export default appReducer;
