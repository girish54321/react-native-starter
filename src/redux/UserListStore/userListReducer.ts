import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserList } from 'models/responseType/UserListResponse'
export interface USER_LIST_STATE_TYPE {
  isLoading: boolean;
  error: string;
  users: UserList[];
}

const INITIAL_STATE: USER_LIST_STATE_TYPE = {
  isLoading: true,
  error: "",
  users: [],
}

const setUserDataReducer = (state: USER_LIST_STATE_TYPE, action: any) => {
  let data = action.payload
  return {
    ...state,
    users: data,
    isLoading: false,
    error: null,
  }
}

const setUserErrorReducer = (state: USER_LIST_STATE_TYPE, action: any) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  }
}

const setUserLoadingReducer = (state: USER_LIST_STATE_TYPE) => {
  return {
    ...state,
    isLoading: true,
    error: null
  }
}


//State slice
export const userListSlice = createSlice({
  name: "userListSlice",
  initialState: INITIAL_STATE,
  reducers: {
    setUserErrorReducer: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserErrorReducer(state, action)
    },
    setUserLoadingReducer: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserLoadingReducer(state)
    },
    setUserDataReducer: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserDataReducer(state, action)
    },
  },
});


export default userListSlice.reducer;