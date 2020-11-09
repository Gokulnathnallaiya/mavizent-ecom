
import { appActionTypes } from "./app.types"

export const setLoading = (value) => ({
  type: appActionTypes.SET_LOADING,
  payload: value
});
