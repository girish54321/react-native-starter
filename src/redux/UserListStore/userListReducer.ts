import { ActionTypes } from 'constants/ActionTypes'
import { UserList } from 'models/responseType/UserListResponse'

export interface userListState {
  isLoading: boolean;
  error?: string;
  users: UserList[];
}

const initialState: userListState = {
  isLoading: true,
  error: null,
  users: [],
}

export const userListReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ActionTypes.SET_USER:
      let data = action.payload
      return {
        ...state,
        users: data,
        isLoading: false,
        error: null,
      }

    case ActionTypes.SET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }

    case ActionTypes.SET_USER_LOADING:
      return {
        ...state,
        isLoading: true
      }

    default:
      return state
  }
}
