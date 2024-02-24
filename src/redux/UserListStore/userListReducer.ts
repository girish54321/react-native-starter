import { UserList } from 'models/responseType/UserListResponse'
import { create } from 'zustand'
import { call } from 'Network/services';

export interface USER_LIST_STATE_TYPE {
  isLoading: boolean;
  error: string;
  users: UserList[];
  selected?: UserList;
}
interface IUseUserListStore {
  userListStore: USER_LIST_STATE_TYPE;
  setUserErrorAction: (data: string) => void;
  setUserLoadingAction: () => void;
  setUserDataAction: (data: UserList[]) => void;
  selectUserAction: (data: UserList) => void;
}


const INITIAL_STATE: USER_LIST_STATE_TYPE = {
  isLoading: true,
  error: "",
  users: [],
  selected: undefined
}


export const useUserListStore = create<IUseUserListStore>()((set) => ({
  userListStore: INITIAL_STATE,
  setUserErrorAction: (data) => set((state) => ({ ...state, error: data })),
  setUserLoadingAction: () => set((state) => ({ ...state, isLoading: false })),
  setUserDataAction: (data) => set((state) => ({ ...state, users: data })),
  selectUserAction: (data) => set((state) => ({ ...state, selected: data })),
}))



