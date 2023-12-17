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

const setUserDataAction = (state: USER_LIST_STATE_TYPE, action: any) => {
  let data = action.payload
  return {
    ...state,
    users: data,
    isLoading: false,
    error: null,
  }
}

const setUserErrorAction = (state: USER_LIST_STATE_TYPE, action: any) => {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  }
}

const setUserLoadingAction = (state: USER_LIST_STATE_TYPE) => {
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
    setUserErrorAction: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserErrorAction(state, action)
    },
    setUserLoadingAction: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserLoadingAction(state)
    },
    setUserDataAction: (state, action: PayloadAction<USER_LIST_STATE_TYPE>) => {
      return setUserDataAction(state, action)
    },
  },
});


export default userListSlice.reducer;