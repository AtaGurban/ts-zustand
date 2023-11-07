import {create} from 'zustand';
import { TokenResponse } from '../types/userTypes';

interface UserStoreState {
  isAuth: boolean;
  user: TokenResponse | null;
  setIsAuth: (data:boolean) => void;
  setUser: (data:TokenResponse | null) => void;
}

export const userStore = create<UserStoreState>((set) => ({
  isAuth: false,
  user: null,
  setIsAuth: (data:boolean) => set(() => ({ isAuth: data })),
  setUser: (data) => set(() => ({ user: data })),
}));
